(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4811],{50743:function(e,r){!function(n,t){var s={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},i=Array.prototype.map,o=Array.isArray,c=Object.prototype.toString;function a(e){return!!(""===e||e&&e.charCodeAt&&e.substr)}function l(e){return o?o(e):"[object Array]"===c.call(e)}function u(e){return e&&"[object Object]"===c.call(e)}function d(e,r){var n;for(n in e=e||{},r=r||{})r.hasOwnProperty(n)&&null==e[n]&&(e[n]=r[n]);return e}function f(e,r,n){var t,s,o=[];if(!e)return o;if(i&&e.map===i)return e.map(r,n);for(t=0,s=e.length;t<s;t++)o[t]=r.call(n,e[t],t,e);return o}function p(e,r){return e=Math.round(Math.abs(e)),isNaN(e)?r:e}function m(e){var r=s.settings.currency.format;return"function"===typeof e&&(e=e()),a(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e&&e.pos&&e.pos.match("%v")?e:a(r)?s.settings.currency.format={pos:r,neg:r.replace("%v","-%v"),zero:r}:r}var h=s.unformat=s.parse=function(e,r){if(l(e))return f(e,(function(e){return h(e,r)}));if("number"===typeof(e=e||0))return e;r=r||s.settings.number.decimal;var n=new RegExp("[^0-9-"+r+"]",["g"]),t=parseFloat((""+e).replace(/\((.*)\)/,"-$1").replace(n,"").replace(r,"."));return isNaN(t)?0:t},x=s.toFixed=function(e,r){r=p(r,s.settings.number.precision);var n=Math.pow(10,r);return(Math.round(s.unformat(e)*n)/n).toFixed(r)},b=s.formatNumber=s.format=function(e,r,n,t){if(l(e))return f(e,(function(e){return b(e,r,n,t)}));e=h(e);var i=d(u(r)?r:{precision:r,thousand:n,decimal:t},s.settings.number),o=p(i.precision),c=e<0?"-":"",a=parseInt(x(Math.abs(e||0),o),10)+"",m=a.length>3?a.length%3:0;return c+(m?a.substr(0,m)+i.thousand:"")+a.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+i.thousand)+(o?i.decimal+x(Math.abs(e),o).split(".")[1]:"")},g=s.formatMoney=function(e,r,n,t,i,o){if(l(e))return f(e,(function(e){return g(e,r,n,t,i,o)}));e=h(e);var c=d(u(r)?r:{symbol:r,precision:n,thousand:t,decimal:i,format:o},s.settings.currency),a=m(c.format);return(e>0?a.pos:e<0?a.neg:a.zero).replace("%s",c.symbol).replace("%v",b(Math.abs(e),p(c.precision),c.thousand,c.decimal))};s.formatColumn=function(e,r,n,t,i,o){if(!e)return[];var c=d(u(r)?r:{symbol:r,precision:n,thousand:t,decimal:i,format:o},s.settings.currency),x=m(c.format),g=x.pos.indexOf("%s")<x.pos.indexOf("%v"),v=0,j=f(e,(function(e,r){if(l(e))return s.formatColumn(e,c);var n=((e=h(e))>0?x.pos:e<0?x.neg:x.zero).replace("%s",c.symbol).replace("%v",b(Math.abs(e),p(c.precision),c.thousand,c.decimal));return n.length>v&&(v=n.length),n}));return f(j,(function(e,r){return a(e)&&e.length<v?g?e.replace(c.symbol,c.symbol+new Array(v-e.length+1).join(" ")):new Array(v-e.length+1).join(" ")+e:e}))},e.exports&&(r=e.exports=s),r.accounting=s}()},2660:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-elements/progress-bars",function(){return n(9241)}])},14101:function(e,r,n){"use strict";var t=n(85893);r.Z=function(e){var r=e.title,n=e.subtitle;return(0,t.jsxs)("div",{className:"flex flex-col py-4 mb-4",children:[(0,t.jsx)("h1",{className:"text-lg text-default font-bold font-poppins",children:r}),(0,t.jsx)("h2",{className:"text-sm text-secondary",children:n})]})}},14087:function(e,r,n){"use strict";var t=n(85893);n(67294);r.Z=function(e){var r=e.title,n=e.description;return(0,t.jsxs)("div",{className:"flex flex-col mb-4 widget-title w-full",children:[(0,t.jsx)("div",{className:"title text-base font-base font-bold font-poppins",children:r}),(0,t.jsx)("div",{className:"description text-sm",children:n})]})}},40463:function(e,r,n){"use strict";var t=n(85893),s=(n(67294),n(14087));r.Z=function(e){var r=e.title,n=e.description,i=e.right,o=void 0===i?null:i,c=e.children;return o?(0,t.jsxs)("div",{className:"w-full p-4 shadow mb-4 widget",children:[(0,t.jsxs)("div",{className:"flex flex-row items-center justify-between mb-4",children:[(0,t.jsx)(s.Z,{title:r,description:n}),o]}),c]}):(0,t.jsxs)("div",{className:"w-full p-4 shadow mb-4 widget",children:[(0,t.jsx)(s.Z,{title:r,description:n}),c]})}},64665:function(e,r,n){"use strict";n.d(r,{MX:function(){return i},T3:function(){return o},uf:function(){return c}});var t=n(50743),s=n.n(t);function i(e,r){return Math.floor(Math.random()*(r-e))+e}function o(e){return"".concat(s().formatMoney(e,"",1,",",".").replace(/\.00$/g,""),"%")}function c(e){return s().formatMoney(e,"",2,",",".").replace(/\.00$/g,"")}},9241:function(e,r,n){"use strict";n.r(r);var t=n(85893),s=(n(67294),n(12596)),i=n(34120),o=n(14101),c=n(29891),a=n(64665),l=n(40463),u=["gray","red","orange","yellow","green","teal","blue","indigo","purple","pink"],d=[{width:30,color:"red"},{width:20,color:"blue"},{width:50,color:"green"}];r.default=(0,i.X)((function(){return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.Z,{title:"UI Elements",subtitle:"Progress bars"}),(0,t.jsx)(l.Z,{title:"Default progress bars",description:(0,t.jsxs)("span",{children:["Use the ",(0,t.jsx)("code",{children:"<ProgressBar />"})," component for simple progress bars"]}),children:(0,t.jsx)("div",{className:"flex flex-col",children:u.map((function(e,r){return(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(c.ko,{width:(0,a.MX)(30,70),color:e})},r)}))})}),(0,t.jsx)(l.Z,{title:"Progress bars with text",description:(0,t.jsxs)("span",{children:["Use the ",(0,t.jsx)("code",{children:"<ProgressBarWithText />"})," component for progress bars with text inside"]}),children:(0,t.jsx)("div",{className:"flex flex-col",children:u.map((function(e,r){return(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(c.Gj,{width:(0,a.MX)(30,70),color:e})},r)}))})}),(0,t.jsx)(l.Z,{title:"Combined progress bars",description:(0,t.jsxs)("span",{children:["Use the ",(0,t.jsx)("code",{children:"<ProgressBarMultiple />"})," component for multiple combined progress bars with text inside"]}),children:(0,t.jsx)("div",{className:"flex flex-col",children:(0,t.jsx)("div",{className:"w-1/2",children:(0,t.jsx)(c.KH,{items:d})})})})]})}))}},function(e){e.O(0,[5367,196,9350,7106,9774,2888,179],(function(){return r=2660,e(e.s=r);var r}));var r=e.O();_N_E=r}]);