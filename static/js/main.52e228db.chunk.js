(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n(4),o=n.n(c),u=n(2),i=(n(9),n(0)),a=function(){var t=Object(s.useState)({hours:0,minutes:0,seconds:0,miliseconds:0}),e=Object(u.a)(t,2),n=e[0],c=e[1],o=Object(s.useState)(),a=Object(u.a)(o,2),r=a[0],l=a[1],b=Object(s.useState)(!1),d=Object(u.a)(b,2),j=d[0],m=d[1],h=n.miliseconds,p=n.seconds,O=n.minutes,f=n.hours,v=function(){k(),l(setInterval(k,10)),m(!0)},x=function(t){2===t&&(clearInterval(r),m(!1))};function k(){return 24===f&&(f=0),60===O&&(f++,O=0),60===p&&(O++,p=0),100===h&&(p++,h=0),h++,c({hours:f,minutes:O,seconds:p,miliseconds:h})}return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsxs)("h1",{children:[n.hours>9?n.hours:"0"+n.hours," : ",n.minutes>9?n.minutes:"0"+n.minutes," : ",n.seconds>9?n.seconds:"0"+n.seconds]}),Object(i.jsxs)("div",{className:"app__buttons",children:[j?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{type:"button",onClick:function(t){var e;clearTimeout(e),e=setTimeout(x,299,t.detail)},className:"button",children:"Wait"}),Object(i.jsx)("button",{type:"button",onClick:function(){clearInterval(r),p=0,O=0,f=0,h=0,v()},className:"button",children:"Reset"})]}):Object(i.jsx)("button",{type:"button",onClick:v,className:"button",children:"Start"}),Object(i.jsx)("button",{type:"button",onClick:function(){clearInterval(r),c({hours:0,minutes:0,seconds:0,miliseconds:0}),m(!1)},className:"button",children:"Stop"})]})]})};o.a.render(Object(i.jsx)(a,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.52e228db.chunk.js.map