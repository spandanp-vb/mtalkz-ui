(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7695],{54971:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/permission",function(){return t(59555)}])},5341:function(e,n,t){"use strict";var r=t(26042),s=t(69396),i=t(99534),o=t(29815),c=t(85893),a=t(67294),l=t(79521),u=t(44172),d=a.forwardRef((function(e,n){var t=e.indeterminate,o=(0,i.Z)(e,["indeterminate"]),l=a.useRef(),u=n||l;return a.useEffect((function(){u.current.indeterminate=t}),[u,t]),(0,c.jsx)("input",(0,s.Z)((0,r.Z)({type:"checkbox",ref:u},o),{className:"form-checkbox h-4 w-4"}))}));n.Z=function(e){var n=e.columns,t=e.data,i=(0,l.useTable)({columns:n,data:t,initialState:{pageIndex:0,pageSize:10}},l.useSortBy,l.usePagination,l.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var n=e.getToggleAllRowsSelectedProps;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,(0,r.Z)({},n()))})},Cell:function(e){var n=e.row;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,(0,r.Z)({},n.getToggleRowSelectedProps()))})}}].concat((0,o.Z)(e))}))})),a=i.getTableProps,f=i.getTableBodyProps,x=i.headerGroups,h=i.prepareRow,m=i.page,p=i.canPreviousPage,j=i.canNextPage,g=i.pageOptions,v=i.pageCount,b=i.gotoPage,w=i.nextPage,N=i.previousPage,y=i.setPageSize,C=(i.selectedFlatRows,i.state),k=C.pageIndex,P=C.pageSize;C.selectedRowIds;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("table",(0,s.Z)((0,r.Z)({},a()),{className:"table",children:[(0,c.jsx)("thead",{children:x.map((function(e){return(0,c.jsx)("tr",(0,s.Z)((0,r.Z)({},e.getHeaderGroupProps()),{children:e.headers.map((function(e){return(0,c.jsx)("th",(0,s.Z)((0,r.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{children:(0,c.jsxs)("div",{className:"flex flex-row items-center justify-start",children:[(0,c.jsx)("span",{children:e.render("Header")}),(0,c.jsx)("span",{className:"ltr:ml-auto rtl:mr-auto",children:e.isSorted?e.isSortedDesc?(0,c.jsx)("icon",{className:"icon-arrow-down text-xxs"}):(0,c.jsx)("icon",{className:"icon-arrow-up text-xxs"}):""})]})}))}))}))}))}),(0,c.jsx)("tbody",(0,s.Z)((0,r.Z)({},f()),{children:m.map((function(e,n){return h(e),(0,c.jsx)("tr",(0,s.Z)((0,r.Z)({},e.getRowProps()),{children:e.cells.map((function(e){return(0,c.jsx)("td",(0,s.Z)((0,r.Z)({},e.getCellProps()),{children:e.render("Cell")}))}))}))}))}))]})),(0,c.jsxs)("div",{className:"flex flex-row items-center justify-between my-4",children:[(0,c.jsxs)("div",{className:"flex flex-wrap items-center justify-start children-x-2 pagination",children:[0!==k&&(0,c.jsx)(u.dq,{onClick:function(){return b(0)},color:"text-default",children:"First"}),p&&(0,c.jsx)(u.dq,{onClick:function(){return N()},color:"text-default",children:"Previous"}),j&&(0,c.jsx)(u.dq,{onClick:function(){return w()},disabled:!j,color:"text-default",children:"Next"}),k!==v-1&&(0,c.jsx)(u.dq,{onClick:function(){return b(v-1)},disabled:!j,color:"text-default",children:"Last"})]}),(0,c.jsxs)("span",{children:["Page"," ",(0,c.jsxs)("b",{children:[k+1," of ",g.length]})," "]}),(0,c.jsx)("select",{className:"form-select text-sm",value:P,onChange:function(e){y(Number(e.target.value))},children:[10,25,50,100].map((function(e){return(0,c.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})}},44172:function(e,n,t){"use strict";t.d(n,{dq:function(){return o},tl:function(){return u},vv:function(){return d}});var r=t(85893),s=(t(67294),t(45697)),i=t.n(s),o=function(e){var n=e.color,t=e.children,s=e.active,i=void 0!==s&&s,o=e.onClick;return i?(0,r.jsx)("button",{onClick:o,className:"btn btn-default btn-".concat(n),children:t}):(0,r.jsx)("button",{onClick:o,className:"btn btn-default btn-default-color",children:t})},c=function(e){var n=e.color,t=e.page,s=e.onClick;return(0,r.jsx)("button",{onClick:s,className:"btn btn-circle btn-".concat(n),children:t})},a=function(e){var n=e.page,t=e.onClick;return(0,r.jsx)("button",{onClick:t,className:"btn btn-circle btn-default-color",children:n})},l=function(e){var n=e.color,t=e.page,s=e.active,i=void 0!==s&&s,o=e.onClick;return i?(0,r.jsx)(c,{onClick:o,page:t,color:n}):(0,r.jsx)(a,{onClick:o,page:t,color:n})},u=function(e){var n=e.color,t=e.items,s=(e.active,e.onClick);return(0,r.jsx)(r.Fragment,{children:t.map((function(e){return(0,r.jsx)(l,{onClick:s,color:n,page:e+1,active:e+1===5},e)}))})};u.propTypes={color:i().string.isRequired,items:i().array.isRequired,active:i().number.isRequired};var d=function(e){var n=e.color,t=void 0===n?"text-default":n,s=e.items,i=e.active;return(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-start children-x-2 pagination",children:[(0,r.jsx)(o,{onClick:function(){return null},color:t,children:"Previous"}),(0,r.jsx)(u,{onClick:function(){return null},color:t,items:s,active:i}),(0,r.jsx)(o,{onClick:function(){return null},color:t,children:"Next"})]})};d.propTypes={color:i().string.isRequired,items:i().array.isRequired,active:i().number.isRequired}},14101:function(e,n,t){"use strict";var r=t(85893);n.Z=function(e){var n=e.title,t=e.subtitle;return(0,r.jsxs)("div",{className:"flex flex-col py-4 mb-4",children:[(0,r.jsx)("h1",{className:"text-lg text-default font-bold font-poppins",children:n}),(0,r.jsx)("h2",{className:"text-sm text-secondary",children:t})]})}},59555:function(e,n,t){"use strict";t.r(n);var r=t(47568),s=t(20414),i=t(85893),o=t(34120),c=t(12596),a=t(41664),l=t.n(a),u=t(67294),d=t(5341),f=t(30882),x=t(94379),h=t(14101);n.default=(0,o.X)((function(){var e=(0,u.useState)([]),n=e[0],t=e[1],o=(0,u.useState)(void 0),a=o[0],m=o[1],p=(0,u.useState)(""),j=(p[0],p[1]),g=function(){var e=(0,r.Z)((function(){var e;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return e=localStorage.getItem("token"),[4,f.ax.get("/permissions",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){t(e.data)})).catch((function(e){m({type:"error",err:e}),console.error("get /permissions error",e)}))];case 1:return n.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}();u.useEffect((function(){g()}),[]);var v=[{Header:"ID",accessor:"id"},{Header:"Route",accessor:"route"},{Header:"Name",accessor:"name"},{Header:"Description",accessor:"description"},{Header:"Actions",sortable:!1,cell:function(){return(0,i.jsx)(Button,{variant:"danger","data-tag":"allowRowEvents","data-action":"delete",children:(0,i.jsx)(FontAwesomeIcon,{icon:faTrash})})},Cell:function(e){return(0,i.jsxs)("div",{className:"flex justify-evenly",children:[" ",(0,i.jsx)(l(),{href:"/permission/view/".concat(e.row.original.id),children:(0,i.jsx)("p",{children:(0,i.jsx)("i",{className:"icon-eye text-1xl font-bold mb-2"})})})," ",(0,i.jsx)("p",{style:{cursor:"pointer",lineHeight:"normal"},onClick:function(){return function(e){var n=localStorage.getItem("token");window.confirm("are you sure?")?f.ax.delete("/permissions/".concat(e),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){m({type:"success"}),setTimeout((function(){g()}),1e3)})).catch((function(e){console.error("get /permissions error",e.message),m({type:"error",err:e})})):console.log("Thing was not saved to the database.")}(e.row.original.id)},children:(0,i.jsx)("i",{className:"icon-trash text-1xl font-bold mb-2"})}),(0,i.jsx)(l(),{href:"/permission/update/".concat(e.row.original.id),children:(0,i.jsx)("p",{children:(0,i.jsx)("i",{className:"icon-note text-1xl font-bold mb-2"})})})]})}}];return(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(h.Z,{title:"Permission Management",subtitle:""}),"success"===(null===a||void 0===a?void 0:a.type)&&(0,i.jsx)("div",{className:"flex flex-wrap w-full",children:(0,i.jsx)("div",{className:"p-2",children:x.fn.success("Deleted permission successfully","Success")})}),"error"===(null===a||void 0===a?void 0:a.type)&&(0,i.jsx)("div",{className:"flex flex-wrap w-full",children:(0,i.jsx)("div",{className:"p-2",children:x.fn.error(errors,"Error")})}),(0,i.jsxs)("div",{className:"flex flex-row pb-4",children:[(0,i.jsx)("div",{className:" w-5/6",children:(0,i.jsx)("input",{type:"text",name:"search",className:"w-full p-2 ...",onChange:function(e){return j(e.target.value)},placeholder:"Search..."})}),(0,i.jsxs)("div",{className:"w-1/6 ",children:[" ",(0,i.jsx)(l(),{href:"/permission/addPermission",children:(0,i.jsx)("button",{className:"ml-3 btn btn-default btn-indigo create-btn w-full",type:"button",children:"Add Permission"})})]})]}),(0,i.jsx)(d.Z,{columns:v,data:n})]})}))}},function(e){e.O(0,[5367,196,9350,9521,7106,9774,2888,179],(function(){return n=54971,e(e.s=n);var n}));var n=e.O();_N_E=n}]);