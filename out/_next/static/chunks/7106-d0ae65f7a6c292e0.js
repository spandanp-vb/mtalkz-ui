"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7106],{81817:function(e,s,t){t.d(s,{C:function(){return i},V:function(){return r}});var a=t(85893),n=t(45697),l=t.n(n),i=function(e){var s=e.rounded,t=void 0!==s&&s,n=e.outlined,l=void 0!==n&&n,i=e.alt,r=void 0!==i&&i,c=e.size,o=void 0===c?"default":c,d=e.color,f=void 0===d?"indigo":d,u=e.children,x=[];return t&&x.push("rounded-lg"),x=x.join(" "),r?(0,a.jsx)("span",{className:"badge badge-".concat(o," badge-alt-").concat(f," ").concat(x),children:u}):l?(0,a.jsx)("span",{className:"badge badge-".concat(o," badge-outlined badge-outlined-").concat(f," ").concat(x),children:u}):(0,a.jsx)("span",{className:"badge badge-".concat(o," badge-").concat(f," ").concat(x),children:u})};i.propTypes={size:l().oneOf(["sm","default","lg"]),rounded:l().bool,outlined:l().bool,alt:l().bool,children:l().any,color:l().string};var r=function(e){var s=e.size,t=void 0===s?"default":s,n=e.outlined,l=void 0!==n&&n,i=e.alt,r=void 0!==i&&i,c=e.color,o=void 0===c?"indigo":c,d=e.children;return r?(0,a.jsx)("span",{className:"badge badge-circle badge-".concat(t," badge-alt-").concat(o),children:d}):l?(0,a.jsx)("span",{className:"badge badge-circle badge-".concat(t," badge-outlined badge-outlined-").concat(o),children:d}):(0,a.jsx)("span",{className:"badge badge-circle badge-".concat(t," badge-").concat(o),children:d})};r.propTypes={size:l().oneOf(["sm","default","lg"]),children:l().any,color:l().string}},29891:function(e,s,t){t.d(s,{Gj:function(){return r},KH:function(){return c},ko:function(){return i}});var a=t(85893),n=t(45697),l=t.n(n),i=function(e){var s=e.width,t=e.color;return(0,a.jsx)("div",{className:"progress-bar progress-bar-".concat(t),children:(0,a.jsx)("div",{style:{width:"".concat(s,"%")}})})};i.propTypes={width:l().number.isRequired,color:l().string};var r=function(e){var s=e.width,t=e.color;return(0,a.jsx)("div",{className:"progress-bar progress-bar-with-text progress-bar-".concat(t),children:(0,a.jsxs)("div",{style:{width:"".concat(s,"%")},children:[s,"%"]})})};i.propTypes={width:l().number.isRequired,color:l().string};var c=function(e){var s=e.items;return(0,a.jsx)("div",{className:"flex flex-row",children:s.map((function(e,s){return(0,a.jsx)("div",{style:{width:"".concat(e.width,"%")},children:(0,a.jsxs)("div",{children:[e.width,"%"]})})}))})};c.propTypes={items:l().arrayOf(l().shape({width:l().number.isRequired,color:l().string})).isRequired}},79300:function(e,s,t){function a(e){return["bg-gray-800","bg-gray-900","bg-indigo-700","bg-indigo-800"].includes(e)}function n(e,s){var t=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return s?"rgba(".concat(t,", ").concat(a,", ").concat(n,", ").concat(s,")"):"rgb(".concat(t,", ").concat(a,", ").concat(n,")")}function l(e){var s={transparent:"transparent",black:"#000",white:"#fff",gray:{100:"#f7fafc",200:"#edf2f7",300:"#e2e8f0",400:"#cbd5e0",500:"#a0aec0",600:"#718096",700:"#4a5568",800:"#2d3748",900:"#1a202c"},red:{100:"#fff5f5",200:"#fed7d7",300:"#feb2b2",400:"#fc8181",500:"#f56565",600:"#e53e3e",700:"#c53030",800:"#9b2c2c",900:"#742a2a"},orange:{100:"#fffaf0",200:"#feebc8",300:"#fbd38d",400:"#f6ad55",500:"#ed8936",600:"#dd6b20",700:"#c05621",800:"#9c4221",900:"#7b341e"},yellow:{100:"#fffff0",200:"#fefcbf",300:"#faf089",400:"#f6e05e",500:"#ecc94b",600:"#d69e2e",700:"#b7791f",800:"#975a16",900:"#744210"},green:{100:"#f0fff4",200:"#c6f6d5",300:"#9ae6b4",400:"#68d391",500:"#48bb78",600:"#38a169",700:"#2f855a",800:"#276749",900:"#22543d"},teal:{100:"#e6fffa",200:"#b2f5ea",300:"#81e6d9",400:"#4fd1c5",500:"#38b2ac",600:"#319795",700:"#2c7a7b",800:"#285e61",900:"#234e52"},blue:{100:"#ebf8ff",200:"#bee3f8",300:"#90cdf4",400:"#63b3ed",500:"#4299e1",600:"#3182ce",700:"#2b6cb0",800:"#2c5282",900:"#2a4365"},indigo:{100:"#ebf4ff",200:"#c3dafe",300:"#a3bffa",400:"#7f9cf5",500:"#667eea",600:"#5a67d8",700:"#4c51bf",800:"#434190",900:"#3c366b"},purple:{100:"#faf5ff",200:"#e9d8fd",300:"#d6bcfa",400:"#b794f4",500:"#9f7aea",600:"#805ad5",700:"#6b46c1",800:"#553c9a",900:"#44337a"},pink:{100:"#fff5f7",200:"#fed7e2",300:"#fbb6ce",400:"#f687b3",500:"#ed64a6",600:"#d53f8c",700:"#b83280",800:"#97266d",900:"#702459"}},t=e.replace("bg-","").replace("text-","").split("-");try{e=1===t.length?s[t[0]]:s[t[0]][t[1]]}catch(a){console.log(a)}return e}t.d(s,{Lq:function(){return l},jX:function(){return a},xr:function(){return n}})},12596:function(e,s,t){t.d(s,{Z:function(){return we}});var a=t(26042),n=t(69396),l=t(85893),i=t(67294),r=t(9008),c=t.n(r),o=t(2185),d=t(41664),f=t.n(d),u=t(84009),x=t(78268),m=function(){var e=(0,o.v9)((function(e){return{name:e.name,collapsed:e.collapsed,leftSidebar:e.leftSidebar}}),o.wU),s=e.name,t=e.leftSidebar,n=e.collapsed;if(!(0,a.Z)({},t).showLogo)return null;var i=(0,o.I0)();return(0,l.jsxs)("div",{className:"logo h-16 flex flex-row items-center uppercase font-bold text-lg tracking-wider justify-between px-4",children:[(0,l.jsx)(f(),{href:"/",children:(0,l.jsxs)("a",{className:"flex flex-row items-center justify-start children-x-1",children:[(0,l.jsx)(u.Z,{size:26}),(0,l.jsx)("span",{children:s})]})}),(0,l.jsx)("button",{onClick:function(){return i({type:"SET_CONFIG",config:{key:"collapsed",value:!n}})},className:"btn btn-circle",children:(0,l.jsx)(x.Z,{size:24})})]})},h=t(81817),j=function(e){var s=e.children,t=(0,o.v9)((function(e){return{leftSidebar:e.leftSidebar}}),o.wU).leftSidebar;return(0,a.Z)({},t).showSectionTitle?(0,l.jsx)("div",{className:"uppercase font-bold text-xs tracking-wider p-4",children:s}):null},p=t(22774),g=t(12575),b=t(73752),v=t(31181),N=function(){var e=[{url:"/",icon:(0,l.jsx)(p.Z,{size:20}),name:"Inbox",badge:!0,badgeNumber:2,badgeColor:"red"},{url:"/",icon:(0,l.jsx)(g.Z,{size:20}),iconColor:"default",name:"Messages",badge:!0,badgeNumber:3,badgeColor:"indigo"},{url:"/extras/user-profile",icon:(0,l.jsx)(b.Z,{size:20}),name:"Profile",badge:!1},{url:"/pages/logout",icon:(0,l.jsx)(v.Z,{size:20}),name:"Logout",badge:!1}],s=(0,o.v9)((function(e){return{leftSidebar:e.leftSidebar}}),o.wU).leftSidebar;return(0,a.Z)({},s).showAccountLinks?(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)(j,{children:"My account"}),(0,l.jsx)("ul",{className:"list-none px-4",children:e.map((function(e,s){return(0,l.jsx)("li",{className:"relative",children:(0,l.jsx)(f(),{href:e.url,children:(0,l.jsxs)("a",{className:"list-item children-x-2",children:[e.icon,(0,l.jsx)("span",{children:e.name}),e.badge&&(0,l.jsx)(h.V,{size:"sm",color:e.badgeColor,children:e.badgeNumber})]})})},s)}))})]}):null},w=function(){var e=(0,o.v9)((function(e){return{user:e.user}}),o.wU).user;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-full p-4 pb-0",children:(0,l.jsxs)("div",{className:"flex items-center justify-start",children:[(0,l.jsx)("div",{className:"flex-shrink-0 w-12",children:(0,l.jsx)("img",{src:"/assets/faces/".concat(e.img),alt:e.name,className:"shadow rounded-full h-12 w-12 border-2"})}),(0,l.jsxs)("div",{className:"ltr:ml-2 rtl:mr-2 py-2",children:[(0,l.jsx)("p",{className:"text-sm font-bold whitespace-no-wrap",children:e.name}),(0,l.jsx)("p",{className:"text-sm whitespace-no-wrap",children:e.email})]})]})}),(0,l.jsx)(N,{})]})},y=function(){var e=(0,o.v9)((function(e){return{user:e.user}}),o.wU).user;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-full p-4 pb-0",children:(0,l.jsxs)("div",{className:"flex items-center justify-start",children:[(0,l.jsx)("div",{className:"flex-shrink-0 w-16",children:(0,l.jsx)("img",{src:"/assets/faces/".concat(e.img),alt:e.name,className:"shadow rounded-full h-16 w-16 border-2"})}),(0,l.jsxs)("div",{className:"ltr:ml-3 rtl:mr-3 py-2",children:[(0,l.jsx)("p",{className:" text-sm font-bold whitespace-no-wrap",children:e.name}),(0,l.jsx)("p",{className:"text-sm whitespace-no-wrap mb-1",children:e.email}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-start w-full children-x-2",children:[(0,l.jsx)("i",{className:"text-lg icon-social-twitter"}),(0,l.jsx)("i",{className:"text-lg icon-social-facebook"}),(0,l.jsx)("i",{className:"text-lg icon-social-instagram"})]})]})]})}),(0,l.jsx)(N,{})]})},S=t(60357),Z=t.n(S),k=function(){var e=(0,o.v9)((function(e){return{user:e.user}}),o.wU).user;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 w-full p-4 pb-0",children:(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-col w-full items-center justify-center text-center",children:[(0,l.jsx)("img",{src:"/assets/faces/".concat(e.img),alt:e.name,className:"jsx-ffd27a08f2346315 shadow rounded-full h-20 w-20 border-2 mb-2"}),(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 py-2",children:[(0,l.jsx)("p",{className:"jsx-ffd27a08f2346315 text-sm font-bold whitespace-no-wrap",children:e.name}),(0,l.jsx)("p",{className:"jsx-ffd27a08f2346315 text-sm whitespace-no-wrap",children:e.company}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 text-sm whitespace-no-wrap",children:(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-row items-center justify-center children-x-2",children:[(0,l.jsx)("i",{className:"jsx-ffd27a08f2346315 icon-globe"}),(0,l.jsx)("span",{className:"jsx-ffd27a08f2346315",children:e.location})]})})]}),(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-row items-center justify-center",children:[(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 flex flex-col",children:(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("i",{className:"jsx-ffd27a08f2346315 text-xl text-twitter icon-social-twitter m-2"}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 text-sm",children:"321"})]})}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 flex flex-col",children:(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("i",{className:"jsx-ffd27a08f2346315 text-xl text-facebook icon-social-facebook m-2"}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 text-sm",children:"888"})]})}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 flex flex-col",children:(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("i",{className:"jsx-ffd27a08f2346315 text-xl text-google-plus icon-social-google m-2"}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 text-sm",children:"654"})]})})]})]})}),(0,l.jsx)(N,{}),(0,l.jsx)(Z(),{id:"ffd27a08f2346315",children:".text-facebook.jsx-ffd27a08f2346315{color:#365397}.text-twitter.jsx-ffd27a08f2346315{color:#00a9f1}.text-google-plus.jsx-ffd27a08f2346315{color:#e0452c}"})]})},z=function(){var e=(0,o.v9)((function(e){return{user:e.user}}),o.wU).user;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-full p-4 pb-0",children:(0,l.jsxs)("div",{className:"flex flex-col w-full items-center justify-center text-center",children:[(0,l.jsx)("img",{src:"/assets/faces/".concat(e.img),alt:e.name,className:"shadow rounded-full h-20 w-20 border-2 mb-2"}),(0,l.jsxs)("div",{className:"py-2",children:[(0,l.jsx)("p",{className:" text-sm font-bold whitespace-no-wrap",children:e.name}),(0,l.jsx)("p",{className:"text-sm whitespace-no-wrap",children:e.email})]})]})}),(0,l.jsx)(N,{})]})},T=function(){var e=(0,o.v9)((function(e){return{user:e.user}}),o.wU).user;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-full p-4 pb-0",children:(0,l.jsxs)("div",{className:"flex flex-col w-full items-center justify-start",children:[(0,l.jsx)("img",{src:"/assets/faces/".concat(e.img),alt:e.name,className:"shadow rounded-full h-20 w-20 border-2 mb-2"}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center w-full",children:[(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("div",{className:" text-lg font-bold",children:"321"}),(0,l.jsx)("div",{className:"text-xs font-light",children:"Likes"})]})}),(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("div",{className:" text-lg font-bold",children:"888"}),(0,l.jsx)("div",{className:"text-xs font-light",children:"Stars"})]})}),(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("div",{className:" text-lg font-bold",children:"654"}),(0,l.jsx)("div",{className:"text-xs font-light",children:"Reviews"})]})})]})]})}),(0,l.jsx)(N,{})]})},_=function(){var e=(0,o.v9)((function(e){return{user:e.user}}),o.wU).user;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-full px-4 pt-6 pb-0",children:(0,l.jsxs)("div",{className:"flex flex-col w-full items-center justify-start",children:[(0,l.jsx)("img",{src:"/assets/faces/".concat(e.img),alt:e.name,className:"shadow rounded-full h-20 w-20 border-2 mb-2"}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center w-full",children:[(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("div",{className:" text-base font-bold",children:"321"}),(0,l.jsx)("i",{className:" text-xl icon-social-twitter m-2"})]})}),(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("div",{className:" text-base font-bold",children:"888"}),(0,l.jsx)("i",{className:" text-xl icon-social-facebook m-2"})]})}),(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex flex-col p-2 items-center justify-center uppercase",children:[(0,l.jsx)("div",{className:" text-base font-bold",children:"654"}),(0,l.jsx)("i",{className:" text-xl icon-social-instagram m-2"})]})})]})]})}),(0,l.jsx)(N,{})]})},C=t(45697),E=t.n(C),I=function(e){var s=e.rounded,t=void 0!==s&&s,i=e.outlined,r=void 0!==i&&i,c=e.flat,o=void 0!==c&&c,d=e.raised,f=void 0!==d&&d,u=e.icon,x=void 0!==u&&u,m=e.size,h=void 0===m?"default":m,j=e.color,p=void 0===j?"indigo":j,g=e.classNames,b=void 0===g?"":g,v=e.children,N=e.props,w=[];return t&&w.push("btn-rounded"),f&&w.push("btn-raised"),x&&w.push("btn-icon"),b&&w.push(b),o?(0,l.jsx)("button",(0,n.Z)((0,a.Z)({className:"btn btn-".concat(h," btn-flat btn-flat-").concat(p," ").concat(w.join(" "))},N),{children:v})):r?(0,l.jsx)("button",(0,n.Z)((0,a.Z)({className:"btn btn-".concat(h," btn-outlined btn-outlined-").concat(p," ").concat(w.join(" "))},N),{children:v})):(0,l.jsx)("button",(0,n.Z)((0,a.Z)({className:"btn btn-".concat(h," btn-").concat(p," ").concat(w.join(" "))},N),{children:v}))};I.propTypes={size:E().oneOf(["sm","default","lg"]),rounded:E().bool,outlined:E().bool,flat:E().bool,icon:E().bool,raised:E().bool,color:E().string,children:E().any,classNames:E().string};E().oneOf(["sm","default","lg"]),E().bool,E().bool,E().string,E().any,E().string;var L=function(){var e=(0,o.v9)((function(e){return{user:e.user}}),o.wU).user;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 w-full px-4 pt-6 pb-2",children:(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-col w-full items-center justify-center text-center",children:[(0,l.jsx)("img",{src:"/assets/faces/".concat(e.img),alt:e.name,className:"jsx-ffd27a08f2346315 shadow rounded-full h-20 w-20 border-2 mb-2"}),(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 py-2",children:[(0,l.jsx)("p",{className:"jsx-ffd27a08f2346315  text-sm font-bold whitespace-no-wrap",children:e.name}),(0,l.jsx)("p",{className:"jsx-ffd27a08f2346315 text-sm whitespace-no-wrap",children:e.company}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 text-sm whitespace-no-wrap",children:(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-row items-center justify-center children-x-2",children:[(0,l.jsx)("i",{className:"jsx-ffd27a08f2346315 icon-globe"}),(0,l.jsx)("span",{className:"jsx-ffd27a08f2346315",children:e.location})]})})]}),(0,l.jsxs)("div",{className:"jsx-ffd27a08f2346315 flex flex-row items-center justify-center",children:[(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 p-1",children:(0,l.jsx)(I,{flat:!0,raised:!0,rounded:!0,color:"blue",children:"Settings"})}),(0,l.jsx)("div",{className:"jsx-ffd27a08f2346315 p-1",children:(0,l.jsx)(I,{flat:!0,raised:!0,rounded:!0,children:"Account"})})]})]})}),(0,l.jsx)(N,{}),(0,l.jsx)(Z(),{id:"ffd27a08f2346315",children:".text-facebook.jsx-ffd27a08f2346315{color:#365397}.text-twitter.jsx-ffd27a08f2346315{color:#00a9f1}.text-google-plus.jsx-ffd27a08f2346315{color:#e0452c}"})]})},F=function(){var e=(0,o.v9)((function(e){return{leftSidebar:e.leftSidebar}}),o.wU).leftSidebar,s=(0,a.Z)({},e),t=s.showCard,n=s.card;return t?1===n?(0,l.jsx)(w,{}):2===n?(0,l.jsx)(y,{}):3===n?(0,l.jsx)(k,{}):4===n?(0,l.jsx)(z,{}):5===n?(0,l.jsx)(T,{}):6===n?(0,l.jsx)(_,{}):7===n?(0,l.jsx)(L,{}):null:null},R=function(e){var s=e.icon,t=e.title,a=e.badge;return(0,l.jsxs)(l.Fragment,{children:[s,(0,l.jsx)("span",{children:t}),a&&(0,l.jsx)(h.V,{size:"sm",color:a.color,children:a.text})]})},U=function(e){var s=e.items,t=(0,i.useState)(!0),n=t[0],r=t[1];return(0,l.jsx)("ul",{className:"list-none px-4",children:(0,l.jsxs)("li",{className:"relative ".concat(s.items.length>0?"right-arrow":""," ").concat(n?"":"is-open"),children:[0===s.items.length&&(0,l.jsx)(f(),{href:s.url,children:(0,l.jsx)("a",{className:"list-item children-x-2",children:(0,l.jsx)(R,(0,a.Z)({},s))})}),s.items.length>0&&(0,l.jsx)("button",{className:"list-item children-x-2",onClick:function(){return r(!n)},children:(0,l.jsx)(R,(0,a.Z)({},s))}),s.items.length>0&&(0,l.jsx)("ul",{className:"list-none accordion ".concat(n?"":"open"),children:s.items.map((function(e,s){return(0,l.jsx)("li",{children:(0,l.jsx)(f(),{href:e.url,children:(0,l.jsx)("a",{className:"list-item children-x-2 block",children:e.title})})},s)}))})]})})},O=(t(29891),function(){return(0,l.jsx)(l.Fragment,{})}),A=function(){return(0,l.jsx)(l.Fragment,{})},P=t(10245),G=t(91613),q=t(10305),D=t(19589),B=t(25127),M=t(25471),H=t(84442),V=[{title:"",items:[{url:"/chatbots",icon:(0,l.jsx)(P.Z,{size:20}),title:"Chatbot",items:[]},{url:"/user",icon:(0,l.jsx)(b.Z,{size:20}),title:"Users",items:[]},{url:"/organization",icon:(0,l.jsx)(G.Z,{size:20}),title:"Organizations",items:[]},{url:"/role",icon:(0,l.jsx)(q.Z,{size:20}),title:"Roles",items:[]},{url:"/permission",icon:(0,l.jsx)(D.Z,{size:20}),title:"Permissions",items:[]},{url:"/channel",icon:(0,l.jsx)(B.Z,{size:20}),title:"Channels",items:[]},{url:"/resource",icon:(0,l.jsx)(M.Z,{size:20}),title:"Resources",items:[]},{url:"/integration",icon:(0,l.jsx)(H.Z,{size:20}),title:"Integrations",items:[]}]}],Y=function(){var e=(0,o.v9)((function(e){return{leftSidebar:e.leftSidebar,toggleRightSidebar:e.toggleRightSidebar,collapsed:e.collapsed,layout:e.layout}}),o.wU),s=e.leftSidebar,t=e.toggleRightSidebar,n=e.collapsed,r=e.layout,c=(0,a.Z)({},s),d=c.showProjects,f=c.showTags,u=(0,o.I0)(),x=i.createRef();return(0,i.useEffect)((function(){var e=function(e){return!t&&(3===r&&(!(!n||x.current.contains(e.target))&&void u({type:"SET_CONFIG",config:{key:"collapsed",value:!n}})))};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[x]),(0,l.jsx)("div",{ref:x,className:"left-sidebar left-sidebar-1 text-sm",children:(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(m,{}),(0,l.jsx)("div",{className:"user-card",children:(0,l.jsx)(F,{})})]}),V.map((function(e,s){return(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)(j,{children:e.title}),(0,l.jsx)("div",{className:"flex flex-col",children:e.items.map((function(e,s){return(0,l.jsx)(U,{items:e},s)}))})]},s)})),d&&(0,l.jsx)(O,{}),f&&(0,l.jsx)(A,{})]})})})},X=function(e){var s=e.title,t=e.palettes,a=e.name,n=(0,o.I0)();return(0,l.jsxs)("div",{className:"mb-2",children:[(0,l.jsx)("div",{className:"uppercase text-xs font-bold font-poppins tracking-wider",children:s}),(0,l.jsx)("div",{className:"flex flex-row children-x-1",children:t.map((function(e,s){return(0,l.jsx)("button",{className:"btn btn-circle btn-raised ".concat(e.bg," ").concat(e.text),onClick:function(){n({type:"SET_PALETTE",key:a,value:e.name})}},s)}))})]})},J=function(e){e.title,e.palettes,e.name;var s=(0,o.I0)();return(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("div",{className:"uppercase text-xs font-bold font-poppins tracking-wider",children:"User card"}),(0,l.jsx)("div",{className:"flex flex-row children-x-3",children:[1,2,3,4,5,6,7].map((function(e,t){return(0,l.jsx)("button",{className:"btn-transparent h-10 px-1 rounded-full",onClick:function(){s({type:"SET_LEFT_SIDEBAR_CONFIG",key:"card",value:e})},children:e},t)}))})]})},K=[{name:"layout-1",title:"Default sidebar"},{name:"layout-2",title:"Sidebar over"},{name:"layout-3",title:"Small sidebar"},{name:"layout-4",title:"Top navigation"}],Q=[{bg:"bg-white",text:"text-white",name:"white"},{bg:"bg-gray-100",text:"text-gray-100",name:"bg-gray-100"},{bg:"bg-gray-900",text:"text-gray-900",name:"bg-gray-900"},{bg:"bg-gray-800",text:"text-gray-900",name:"bg-gray-800"},{bg:"bg-indigo-700",text:"text-white",name:"bg-indigo-700"},{bg:"bg-indigo-800",text:"text-white",name:"bg-indigo-800"}],W=[{title:"Background",key:"background"},{title:"Left sidebar",key:"leftSidebar"},{title:"Navbar",key:"navbar"},{title:"Logo",key:"logo"},{title:"Top navigation",key:"topNavigation"}],$=function(){var e=(0,o.v9)((function(e){return{leftSidebar:e.leftSidebar,toggleRightSidebar:e.toggleRightSidebar}}),o.wU),s=e.leftSidebar,t=e.toggleRightSidebar,n=(0,a.Z)({},s),i=n.showSectionTitle,r=n.showCard,c=n.showLogo,d=(n.showAccountLinks,n.card,(0,o.I0)());return(0,l.jsx)("div",{className:"right-sidebar right-sidebar-1 ".concat(t?"open":""),children:(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex flex-col"}),(0,l.jsxs)("div",{className:"flex flex-col p-4",children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("div",{className:"uppercase text-sm font-bold font-poppins tracking-wider",children:"Direction"}),(0,l.jsx)("div",{className:"flex flex-row children-x-2",children:["ltr","rtl"].map((function(e,s){return(0,l.jsx)("button",{className:"h-10 rounded-full bg-white text-default uppercase",onClick:function(){d({type:"SET_CONFIG",config:{key:"direction",value:e}})},children:e},s)}))})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("div",{className:"uppercase text-sm font-bold font-poppins tracking-wider",children:"Layout"}),(0,l.jsx)("div",{className:"flex flex-col",children:K.map((function(e,s){return(0,l.jsx)("button",{className:"flex h-8 w-full",onClick:function(){d({type:"SET_LAYOUT",layout:e.name})},children:e.title},s)}))})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("div",{className:"uppercase text-sm font-bold font-poppins tracking-wider",children:"Left sidebar"}),(0,l.jsxs)("button",{className:"flex h-8 w-full",onClick:function(){return d({type:"SET_LEFT_SIDEBAR_CONFIG",key:"showLogo",value:!c})},children:[c?"Hide ":"Show "," logo"]}),(0,l.jsxs)("button",{className:"flex h-8 w-full",onClick:function(){return d({type:"SET_LEFT_SIDEBAR_CONFIG",key:"showSectionTitle",value:!i})},children:[i?"Hide ":"Show "," section title"]}),(0,l.jsxs)("button",{className:"flex h-8 w-full",onClick:function(){return d({type:"SET_LEFT_SIDEBAR_CONFIG",key:"showCard",value:!r})},children:[r?"Hide ":"Show "," user card"]})]}),r&&(0,l.jsx)(J,{}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)("div",{className:"uppercase text-sm font-bold font-poppins tracking-wider mb-2",children:"Colors"})}),W.map((function(e,s){return(0,l.jsx)(X,{title:e.title,palettes:Q,name:e.key},e.key)}))]})]})})})},ee=t(47568),se=t(20414),te=t(90408),ae=(t(50196),t(11163)),ne=t(9591),le=t(79300),ie=t(30882),re=function(){var e=(0,i.useState)([]),s=e[0],t=e[1],r=(0,i.useState)([]),c=r[0],d=r[1],u=(0,o.v9)((function(e){return{toggleRightSidebar:e.toggleRightSidebar,collapsed:e.collapsed,user:e.user}}),o.wU),x=(u.toggleRightSidebar,u.collapsed),m=u.user,h=(0,o.I0)(),j=(0,ae.useRouter)(),p=function(){var e=(0,ee.Z)((function(){var e;return(0,se.__generator)(this,(function(s){switch(s.label){case 0:return e=localStorage.getItem("token"),[4,ie.ax.get("/auth/logout",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){localStorage.removeItem("token"),localStorage.removeItem("user"),j.push("/pages/login")})).catch((function(e){console.error("get logout error",e)}))];case 1:return s.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,ee.Z)((function(){var e;return(0,se.__generator)(this,(function(s){switch(s.label){case 0:return e=localStorage.getItem("token"),[4,ie.ax.get("/auth/organizations",{headers:{Authorization:"Bearer ".concat(e)}}).then(function(){var e=(0,ee.Z)((function(e){var s,a,n;return(0,se.__generator)(this,(function(l){return t(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s.organizations),n=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.organizations.filter((function(e){return e.id===m.organization_id})),d([{label:n[0].name,value:n[0].id}]),console.log(c,"))))))))))))))))"),[2]}))}));return function(s){return e.apply(this,arguments)}}()).catch((function(e){console.error("get /organizations error",e)}))];case 1:return s.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){console.log(c,"dewd")}),[c]),(0,i.useEffect)((function(){g()}),[]);var b=null===s||void 0===s?void 0:s.map((function(e){return{label:e.name,value:e.id}}));return(0,l.jsx)("div",{className:"navbar navbar-1",children:(0,l.jsxs)("div",{className:"navbar-inner w-full flex items-center justify-start",children:[(0,l.jsx)("button",{onClick:function(){return h({type:"SET_CONFIG",config:{key:"collapsed",value:!x}})},className:"mx-4",children:(0,l.jsx)(te.Z,{size:20})}),(0,l.jsx)("span",{className:"ltr:ml-auto rtl:mr-auto"}),(0,l.jsx)("div",{style:{width:"300px",marginRight:"20px"},children:(0,l.jsx)(ne.ZP,{options:b,placeholder:"Select organization ...",onChange:function(e){var s=localStorage.getItem("token");window.confirm("are you sure?")?ie.ax.post("/auth/organizations/switch",{organization_id:e.value},{headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){})).catch((function(e){console.error("get /organizations error",e.message)})):console.log("Thing was not saved to the database.")},theme:function(e){return(0,n.Z)((0,a.Z)({},e),{colors:(0,n.Z)((0,a.Z)({},e.colors),{primary:(0,le.Lq)("bg-blue-500"),primary25:(0,le.xr)((0,le.Lq)("bg-blue-500"),.25),primary50:(0,le.xr)((0,le.Lq)("bg-blue-500"),.5),primary75:(0,le.xr)((0,le.Lq)("bg-blue-500"),.75),danger:(0,le.Lq)("bg-red-500"),dangerLight:(0,le.xr)((0,le.Lq)("bg-red-500"),.25)})})},value:c})}),(0,l.jsx)(f(),{href:"/pages/login-1",children:(0,l.jsx)("a",{className:"btn btn-default flex lg:hidden",children:"Logout"})}),(0,l.jsx)("div",{onClick:function(){p()},children:"LOGOUT"})]})})},ce=function(e){var s=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(re,{}),(0,l.jsx)(Y,{}),(0,l.jsx)($,{}),(0,l.jsx)("div",{className:"main w-full",children:(0,l.jsx)("div",{className:"py-20 px-4 min-h-screen",children:s})})]})},oe=function(e){var s=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(re,{}),(0,l.jsx)(Y,{}),(0,l.jsx)($,{}),(0,l.jsx)("div",{className:"main w-full max-w-screen-xl'}",children:(0,l.jsx)("div",{className:"py-20 px-4 min-h-screen",children:s})})]})},de=function(){var e=(0,o.v9)((function(e){return{name:e.name,collapsed:e.collapsed,leftSidebar:e.leftSidebar}}),o.wU),s=(e.name,e.leftSidebar,e.collapsed);return(0,l.jsx)("div",{className:"h-16  bg-blue-200 text-center  items-center uppercase font-bold text-lg tracking-wider logo ".concat(s?"justify-center":"justify-between px-4"),children:!s&&(0,l.jsx)(f(),{href:"/",children:(0,l.jsx)("a",{className:"flex flex-row items-center justify-start",children:(0,l.jsx)("img",{src:"/white-logo.png",alt:"Picture of the author",width:"150px",height:"100px"})})})})},fe=function(e){var s=e.type,t=e.color,a=e.text;return"rounded"===s?(0,l.jsx)("span",{className:"bg-".concat(t,"-500 text-white rounded-full font-light flex items-center justify-center overflow-hidden text-center uppercase text-xxs h-5 w-5"),children:a}):(0,l.jsx)("span",{className:"bg-".concat(t,"-500 text-white rounded-lg font-light flex items-center justify-center uppercase text-xxs px-1 py-0"),children:a})},ue=function(e){var s=e.items;return(0,o.v9)((function(e){return{collapsed:e.collapsed}}),o.wU).collapsed?(0,l.jsx)("li",{className:"list-item list-item-collapsed",children:(0,l.jsx)(f(),{href:s.url,children:(0,l.jsx)("a",{className:"btn-transparent",children:(0,l.jsx)("div",{className:"list-item-icon",children:s.icon})})})}):(0,l.jsx)("li",{className:"list-item",children:(0,l.jsx)(f(),{href:s.url,children:(0,l.jsxs)("a",{className:"btn-transparent",children:[(0,l.jsx)("div",{className:"list-item-icon",children:s.icon}),(0,l.jsx)("span",{className:"list-item-title",children:s.title}),(0,l.jsx)("div",{className:"list-item-badge",children:s.badge&&(0,l.jsx)(fe,(0,a.Z)({},s.badge))})]})})})},xe=function(e){var s=e.items,t=(0,o.v9)((function(e){return{collapsed:e.collapsed}}),o.wU).collapsed;return(0,l.jsxs)("ul",{className:"list-none relative",children:[0===s.items.length&&(0,l.jsx)(ue,{items:s}),s.items.length>0&&(0,l.jsxs)("li",{className:"list-item ".concat(t?"list-item-collapsed":"right-arrow relative"),children:[(0,l.jsxs)("button",{className:"btn-transparent",children:[(0,l.jsx)("div",{className:"list-item-icon",children:s.icon}),!t&&(0,l.jsx)("span",{className:"list-item-title",children:s.title}),!t&&(0,l.jsx)("div",{className:"list-item-badge",children:s.badge&&(0,l.jsx)(fe,(0,a.Z)({},s.badge))})]}),(0,l.jsx)("ul",{className:"".concat(s.items.length>4?"flex-row flex-wrap w-96":"w-64 flex-col"),children:s.items.map((function(e,t){return(0,l.jsx)("li",{className:"".concat(s.items.length>4?"w-48":"w-64"),children:(0,l.jsx)(f(),{href:e.url,children:(0,l.jsx)("a",{className:"btn-transparent",children:e.title})})},t)}))})]})]})},me=function(){var e=(0,o.v9)((function(e){return{collapsed:e.collapsed}}),o.wU).collapsed;return(0,l.jsxs)("div",{className:"left-sidebar left-sidebar-2 text-sm",children:[(0,l.jsxs)("div",{className:"flex flex-col text-sm",children:[(0,l.jsx)(de,{}),!e&&(0,l.jsx)(F,{})]}),V.map((function(s,t){return(0,l.jsxs)("div",{className:"flex flex-col ".concat(e?"mb-0":"mb-4"),children:[(0,l.jsx)("div",{className:"".concat(e?"hidden":"visible"),children:(0,l.jsx)(j,{children:s.title})}),(0,l.jsx)("div",{className:"flex flex-col",children:s.items.map((function(e,s){return(0,l.jsx)(xe,{items:e},s)}))})]},t)})),(0,l.jsxs)("div",{className:"".concat(e?"hidden":"visible"),children:[(0,l.jsx)(O,{}),(0,l.jsx)(A,{})]})]})},he=function(e){var s=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(re,{}),(0,l.jsx)(me,{}),(0,l.jsx)($,{}),(0,l.jsx)("div",{className:"main w-full max-w-screen-xl'}",children:(0,l.jsx)("div",{className:"py-20 px-4 min-h-screen",children:s})})]})},je=t(29815),pe=function(e){var s=e.menu;return 0===s.items.length?(0,l.jsx)(f(),{href:s.url,children:(0,l.jsxs)("a",{className:"l1 w-full inline-flex items-center justify-between px-3 h-16 whitespace-no-wrap children-x-2",children:[(0,l.jsx)("div",{className:"font-bold text-base",children:s.icon}),(0,l.jsx)("span",{className:"ltr:mr-auto rtl:ml-auto",children:s.title})]})}):(0,l.jsxs)("button",{className:"l1 w-full inline-flex items-center justify-between px-3 h-16 whitespace-no-wrap children-x-2",children:[(0,l.jsx)("div",{className:"font-bold text-base",children:s.icon}),(0,l.jsx)("span",{className:"ltr:mr-auto rtl:ml-auto",children:s.title})]})},ge=function(){var e,s=(e=[]).concat.apply(e,(0,je.Z)(V.map((function(e){return e.items}))));return(0,l.jsx)("div",{className:"top-navigation top-navigation-1",children:s.map((function(e,s){return(0,l.jsx)("ul",{className:"list-none h-16 z-10",children:(0,l.jsxs)("li",{className:"relative",children:[(0,l.jsx)(pe,{menu:e}),e.items.length>0&&(0,l.jsx)("ul",{className:"list-none absolute flex z-10 shadow ".concat(e.items.length>8?"flex-row flex-wrap w-96":"flex-col"),style:{position:"absolute",top:"calc(100%)",left:0},children:e.items.map((function(e,s){return(0,l.jsxs)("li",{className:"relative w-48",children:[(0,l.jsx)(f(),{href:e.url,children:(0,l.jsx)("a",{className:"w-full flex items-center justify-between h-12 whitespace-no-wrap px-3",children:(0,l.jsx)("span",{children:e.title})})}),(0,l.jsx)("ul",{className:"list-none absolute flex flex-col z-10 w-48 shadow",style:{position:"absolute",top:0,left:"calc(100%)"},children:e.items.map((function(e,s){return(0,l.jsx)("li",{children:(0,l.jsx)(f(),{href:e.url,children:(0,l.jsx)("a",{className:"h-12 w-full inline-flex items-center whitespace-no-wrap",children:e.title})})},s)}))})]},s)}))})]},s)},s)}))})},be=function(e){var s=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(re,{}),(0,l.jsx)(ge,{}),(0,l.jsx)(Y,{}),(0,l.jsx)($,{}),(0,l.jsx)("div",{className:"main w-full max-w-screen-xl'}",children:(0,l.jsx)("div",{className:"py-20 px-4 min-h-screen",children:s})})]})},ve=t(94379),Ne=function(e){var s=e.name,t=e.layout,a=e.direction,n=e.collapsed,i=e.background,r=e.navbar,o=e.logo,d=e.leftSidebar,f=e.rightSidebar,u=e.topNavigation,x=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c(),{children:(0,l.jsx)("title",{children:s})}),(0,l.jsxs)("div",{"data-layout":t,"data-direction":a,"data-collapsed":n,"data-background":i,"data-navbar":r,"data-logo":o,"data-left-sidebar":d,"data-right-sidebar":f,"data-top-navigation":u,children:[(0,l.jsx)(ve.mh,{}),x]})]})},we=function(e){var s=e.children,t=(0,o.v9)((function(e){return{layout:e.layout,direction:e.direction,collapsed:e.collapsed,name:e.name,palettes:e.palettes}}),o.wU),i=t.layout,r=t.direction,c=t.collapsed,d=t.name,f=t.palettes;return"layout-1"===i?(0,l.jsx)(Ne,(0,n.Z)((0,a.Z)({name:d,direction:r,layout:i,collapsed:c},f),{children:(0,l.jsx)(ce,{children:s})})):"layout-2"===i?(0,l.jsx)(Ne,(0,n.Z)((0,a.Z)({name:d,direction:r,layout:i,collapsed:c},f),{children:(0,l.jsx)(oe,{children:s})})):"layout-3"===i?(0,l.jsx)(Ne,(0,n.Z)((0,a.Z)({name:d,direction:r,layout:i,collapsed:c},f),{children:(0,l.jsx)(he,{children:s})})):"layout-4"===i?(0,l.jsx)(Ne,(0,n.Z)((0,a.Z)({name:d,direction:r,layout:i,collapsed:c},f),{children:(0,l.jsx)(be,{children:s})})):(0,l.jsx)(Ne,(0,n.Z)((0,a.Z)({name:d,direction:r,layout:i,collapsed:c},f),{children:(0,l.jsx)(ce,{children:s})}))}},34120:function(e,s,t){t.d(s,{X:function(){return j}});var a,n=t(47568),l=t(26042),i=t(69396),r=t(99534),c=t(20414),o=t(85893),d=(t(67294),t(2185)),f=t(14924),u=t(14890),x={name:"Mtalkz",description:"Mtalkz",user:JSON.parse('[{"name":"Lucas smith ejhfvefv","email":"lucas@smith.com","location":"Cupertino, CA","company":"Apple, Inc.","description":"Vital Database Dude","img":"m1.png","color":"green","country":"Australia","organization_id":2}]')[0],url:"#",layout:"layout-3",direction:"ltr",collapsed:!1,toggleRightSidebar:!1,colors:["gray","red","orange","yellow","green","teal","blue","indigo","purple","pink"],palettes:{background:"white",logo:"white",leftSidebar:"white",rightSidebar:"white",navbar:"white",topNavigation:"white"},leftSidebar:{showButtonText:!0,showSectionTitle:!0,showLogo:!0,showCard:!0,showAccountLinks:!1,showProjects:!0,showTags:!0,card:1},test:"",codd:[],kword:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"SET_DEMO":return(0,i.Z)((0,l.Z)({},e),{layout:s.layout,collapsed:s.collapsed,direction:s.direction,leftSidebar:(0,l.Z)({},s.leftSidebar),palettes:(0,l.Z)({},s.palettes)});case"SET_PALETTE":return(0,i.Z)((0,l.Z)({},e),{palettes:(0,i.Z)((0,l.Z)({},e.palettes),(0,f.Z)({},"".concat(s.key),s.value))});case"UPDATE_USER":return console.log(s.value,"YGUyrduetfdeuwyfrtery"),(0,i.Z)((0,l.Z)({},e),{user:s.value});case"SET_LEFT_SIDEBAR_CONFIG":return(0,i.Z)((0,l.Z)({},e),{leftSidebar:(0,i.Z)((0,l.Z)({},e.leftSidebar),(0,f.Z)({},"".concat(s.key),s.value))});case"SET_LAYOUT":return"layout-3"===s.layout||"layout-4"===s.layout?(0,i.Z)((0,l.Z)({},e),{layout:s.layout,collapsed:!0}):(0,i.Z)((0,l.Z)({},e),{layout:s.layout,collapsed:!1});case"SET_CONFIG":var t=(0,l.Z)({},s.config),a=t.key,n=t.value;return(0,i.Z)((0,l.Z)({},e),(0,f.Z)({},"".concat(a),n));default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return(0,u.MT)(m,e)},j=(t(7544),function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=s.ssr,a=void 0===t||t,f=function(s){var t=s.initialReduxState,a=(0,r.Z)(s,["initialReduxState"]),n=p(t);return(0,o.jsx)(d.zt,{store:n,children:(0,o.jsx)(e,(0,l.Z)({},a))})};return(a||e.getInitialProps)&&(f.getInitialProps=function(){var s=(0,n.Z)((function(s){var t,a,n;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return t=p(),s.reduxStore=t,"function"!==typeof e.getInitialProps?[3,2]:[4,e.getInitialProps(s)];case 1:return n=r.sent(),[3,3];case 2:n={},r.label=3;case 3:return a=n,[2,(0,i.Z)((0,l.Z)({},a),{initialReduxState:t.getState()})]}}))}));return function(e){return s.apply(this,arguments)}}()),f}),p=function(e){return a||(a=h(e)),a}},30882:function(e,s,t){t.d(s,{ax:function(){return a}});var a=t(50196).ZP.create({baseURL:"https://app.mtalkz.cloud/api",withCredentials:!0,headers:{"Content-type":"application/json",Accept:"application/json"}})}}]);