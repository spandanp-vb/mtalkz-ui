(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4235],{49032:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return n(60493)}])},5341:function(e,t,n){"use strict";var r=n(26042),o=n(69396),s=n(99534),a=n(29815),i=n(85893),c=n(67294),l=n(79521),u=n(44172),d=c.forwardRef((function(e,t){var n=e.indeterminate,a=(0,s.Z)(e,["indeterminate"]),l=c.useRef(),u=t||l;return c.useEffect((function(){u.current.indeterminate=n}),[u,n]),(0,i.jsx)("input",(0,o.Z)((0,r.Z)({type:"checkbox",ref:u},a),{className:"form-checkbox h-4 w-4"}))}));t.Z=function(e){var t=e.columns,n=e.data,s=(0,l.useTable)({columns:t,data:n,initialState:{pageIndex:0,pageSize:10}},l.useSortBy,l.usePagination,l.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d,(0,r.Z)({},t()))})},Cell:function(e){var t=e.row;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d,(0,r.Z)({},t.getToggleRowSelectedProps()))})}}].concat((0,a.Z)(e))}))})),c=s.getTableProps,f=s.getTableBodyProps,x=s.headerGroups,h=s.prepareRow,m=s.page,p=s.canPreviousPage,g=s.canNextPage,j=s.pageOptions,v=s.pageCount,b=s.gotoPage,w=s.nextPage,N=s.previousPage,y=s.setPageSize,C=(s.selectedFlatRows,s.state),k=C.pageIndex,Z=C.pageSize;C.selectedRowIds;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("table",(0,o.Z)((0,r.Z)({},c()),{className:"table",children:[(0,i.jsx)("thead",{children:x.map((function(e){return(0,i.jsx)("tr",(0,o.Z)((0,r.Z)({},e.getHeaderGroupProps()),{children:e.headers.map((function(e){return(0,i.jsx)("th",(0,o.Z)((0,r.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{children:(0,i.jsxs)("div",{className:"flex flex-row items-center justify-start",children:[(0,i.jsx)("span",{children:e.render("Header")}),(0,i.jsx)("span",{className:"ltr:ml-auto rtl:mr-auto",children:e.isSorted?e.isSortedDesc?(0,i.jsx)("icon",{className:"icon-arrow-down text-xxs"}):(0,i.jsx)("icon",{className:"icon-arrow-up text-xxs"}):""})]})}))}))}))}))}),(0,i.jsx)("tbody",(0,o.Z)((0,r.Z)({},f()),{children:m.map((function(e,t){return h(e),(0,i.jsx)("tr",(0,o.Z)((0,r.Z)({},e.getRowProps()),{children:e.cells.map((function(e){return(0,i.jsx)("td",(0,o.Z)((0,r.Z)({},e.getCellProps()),{children:e.render("Cell")}))}))}))}))}))]})),(0,i.jsxs)("div",{className:"flex flex-row items-center justify-between my-4",children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-start children-x-2 pagination",children:[0!==k&&(0,i.jsx)(u.dq,{onClick:function(){return b(0)},color:"text-default",children:"First"}),p&&(0,i.jsx)(u.dq,{onClick:function(){return N()},color:"text-default",children:"Previous"}),g&&(0,i.jsx)(u.dq,{onClick:function(){return w()},disabled:!g,color:"text-default",children:"Next"}),k!==v-1&&(0,i.jsx)(u.dq,{onClick:function(){return b(v-1)},disabled:!g,color:"text-default",children:"Last"})]}),(0,i.jsxs)("span",{children:["Page"," ",(0,i.jsxs)("b",{children:[k+1," of ",j.length]})," "]}),(0,i.jsx)("select",{className:"form-select text-sm",value:Z,onChange:function(e){y(Number(e.target.value))},children:[10,25,50,100].map((function(e){return(0,i.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})}},44172:function(e,t,n){"use strict";n.d(t,{dq:function(){return a},tl:function(){return u},vv:function(){return d}});var r=n(85893),o=(n(67294),n(45697)),s=n.n(o),a=function(e){var t=e.color,n=e.children,o=e.active,s=void 0!==o&&o,a=e.onClick;return s?(0,r.jsx)("button",{onClick:a,className:"btn btn-default btn-".concat(t),children:n}):(0,r.jsx)("button",{onClick:a,className:"btn btn-default btn-default-color",children:n})},i=function(e){var t=e.color,n=e.page,o=e.onClick;return(0,r.jsx)("button",{onClick:o,className:"btn btn-circle btn-".concat(t),children:n})},c=function(e){var t=e.page,n=e.onClick;return(0,r.jsx)("button",{onClick:n,className:"btn btn-circle btn-default-color",children:t})},l=function(e){var t=e.color,n=e.page,o=e.active,s=void 0!==o&&o,a=e.onClick;return s?(0,r.jsx)(i,{onClick:a,page:n,color:t}):(0,r.jsx)(c,{onClick:a,page:n,color:t})},u=function(e){var t=e.color,n=e.items,o=(e.active,e.onClick);return(0,r.jsx)(r.Fragment,{children:n.map((function(e){return(0,r.jsx)(l,{onClick:o,color:t,page:e+1,active:e+1===5},e)}))})};u.propTypes={color:s().string.isRequired,items:s().array.isRequired,active:s().number.isRequired};var d=function(e){var t=e.color,n=void 0===t?"text-default":t,o=e.items,s=e.active;return(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-start children-x-2 pagination",children:[(0,r.jsx)(a,{onClick:function(){return null},color:n,children:"Previous"}),(0,r.jsx)(u,{onClick:function(){return null},color:n,items:o,active:s}),(0,r.jsx)(a,{onClick:function(){return null},color:n,children:"Next"})]})};d.propTypes={color:s().string.isRequired,items:s().array.isRequired,active:s().number.isRequired}},14101:function(e,t,n){"use strict";var r=n(85893);t.Z=function(e){var t=e.title,n=e.subtitle;return(0,r.jsxs)("div",{className:"flex flex-col py-4 mb-4",children:[(0,r.jsx)("h1",{className:"text-lg text-default font-bold font-poppins",children:t}),(0,r.jsx)("h2",{className:"text-sm text-secondary",children:n})]})}},60493:function(e,t,n){"use strict";n.r(t);var r=n(47568),o=n(828),s=n(20414),a=n(85893),i=n(34120),c=n(12596),l=n(14101),u=n(5341),d=n(67294),f=n(30882),x=n(41664),h=n.n(x);t.default=(0,i.X)((function(){var e=(0,o.Z)(d.useState([]),2),t=e[0],n=e[1],i=function(){var e=(0,r.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return e=localStorage.getItem("token"),[4,f.ax.get("/users",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){n(e.data)})).catch((function(e){console.error("get /fetchUsers error",e)}))];case 1:return t.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){i()}),[]);var x=[{Header:"Name",accessor:"name"},{Header:"Email",accessor:"email"},{Header:"Organization id",accessor:"organization_id"},{Header:"Actions",sortable:!1,cell:function(){return(0,a.jsx)(Button,{variant:"danger","data-tag":"allowRowEvents","data-action":"delete",children:(0,a.jsx)(FontAwesomeIcon,{icon:faTrash})})},Cell:function(e){return console.log("row",e.row),(0,a.jsxs)("div",{className:"flex justify-evenly",children:[" ",(0,a.jsx)(h(),{href:"/user/view/".concat(e.row.original.id),children:(0,a.jsx)("p",{children:(0,a.jsx)("i",{className:"icon-eye text-1xl font-bold mb-2"})})})," ",(0,a.jsx)("p",{style:{cursor:"pointer",lineHeight:"normal"},onClick:function(){return function(e){var t=localStorage.getItem("token");window.confirm("are you sure?")?f.ax.delete("/users/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){setTimeout((function(){i()}),1e3)})).catch((function(e){console.error("get /usres error",e.message)})):console.log("Thing was not saved to the database.")}(e.row.original.id)},children:(0,a.jsx)("i",{className:"icon-trash text-1xl font-bold mb-2"})}),(0,a.jsx)(h(),{href:"/user/update/".concat(e.row.original.id),children:(0,a.jsx)("p",{children:(0,a.jsx)("i",{className:"icon-note text-1xl font-bold mb-2"})})}),(0,a.jsx)(h(),{href:"/user/setRole/".concat(e.row.original.id),children:(0,a.jsx)("p",{children:(0,a.jsx)("i",{className:"icon-refresh text-1xl font-bold mb-2"})})})]})}}];return(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(l.Z,{title:"User Management",subtitle:""}),(0,a.jsxs)("div",{className:"flex flex-row pb-4",children:[(0,a.jsx)("div",{className:" w-5/6",children:(0,a.jsx)("input",{type:"text",name:"search",className:"w-full p-2 ...",onChange:function(e){return setSearchQuery(e.target.value)},placeholder:"Search..."})}),(0,a.jsxs)("div",{className:"w-1/6 ",children:[" ",(0,a.jsx)(h(),{href:"/user/addUser",children:(0,a.jsx)("button",{className:"ml-3 btn btn-default btn-indigo create-btn w-full",type:"button",children:"Add User"})})]})]}),(0,a.jsx)(u.Z,{columns:x,data:t,customclassName:"usertableList"})]})}))},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(13375);var o=n(91566);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[5367,196,9350,9521,7106,9774,2888,179],(function(){return t=49032,e(e.s=t);var t}));var t=e.O();_N_E=t}]);