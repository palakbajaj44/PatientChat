(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{39:function(e,n,s){},40:function(e,n,s){},73:function(e,n,s){"use strict";s.r(n);var t=s(1),c=s.n(t),a=s(32),i=s.n(a),r=(s(39),s(34)),o=s(8),l=(s(40),s(33)),m=Object(l.io)("https://patient-connect-chat-server.herokuapp.com/",{autoConnect:!1}),u=s(0),j=void 0,d=function(){var e=Object(t.useRef)(),n=Object(t.useState)([]),s=Object(o.a)(n,2),c=s[0],a=s[1],i=Object(t.useState)({name:"",index:-1,isSet:!1}),l=Object(o.a)(i,2),d=l[0],b=l[1],h=Object(t.useState)(""),v=Object(o.a)(h,2),f=v[0],O=v[1],g=Object(t.useState)({name:"",isSet:!1}),x=Object(o.a)(g,2),p=x[0],N=x[1],S=Object(t.useState)([]),M=Object(o.a)(S,2),C=M[0],k=M[1];Object(t.useEffect)((function(){m.on("connect_error",(function(e){console.log("err:",e),N({name:"",isSet:!1})})),m.on("users",(function(e){0==e.length||(k((function(n){var s=n.slice();return e.forEach((function(e){s.push({name:e.name,message:[],online:e.online})})),console.log(s),s})),a((function(n){var s=n.slice();return e.forEach((function(e){s.push(Object(u.jsx)("div",{onClick:E.bind(j,e.name),className:e.online?"username--active":"username",children:e.name},e.name))})),s})))})),m.on("new-user",(function(e){k((function(n){var s;return console.log("prevstate:",n),(s=n?n.slice():[]).push({name:e.name,message:[],online:e.online}),s})),a((function(n){var s=n.slice();return s.push(Object(u.jsx)("div",{onClick:E.bind(j,e.name),className:e.online?"username--active className = ":"username",children:e.name},e.name)),s}))})),m.on("offline",(function(e){a((function(n){for(var s=n.slice(),t=0;t<s.length;t++)s[t].key==e&&(s[t]=Object(u.jsx)("div",{onClick:E.bind(j,e),className:"username",children:e},e),console.log(s[t]));return s}))})),m.on("online",(function(e){a((function(n){for(var s=n.slice(),t=0;t<s.length;t++)s[t].key==e&&(s[t]=Object(u.jsx)("div",{onClick:E.bind(j,e),className:"username--active",children:e},e),console.log(s[t]));return s}))})),m.on("private-message",(function(e,n){k((function(s){for(var t,c=s.slice(),a=0;a<c.length;a++)n==c[a].name&&(t=a);var i=c[t].message;return i.push({mes:e,ismine:!1}),c[t].message=i,c}))}))}),[]),Object(t.useEffect)((function(){""!=f&&b((function(e){var n=Object(r.a)({},e);if(C){n.name=f,n.isSet=!0;for(var s=0;s<C.length;s++)if(f==C[s].name){n.index=s;break}}return n}))}),[f]),Object(t.useEffect)((function(){e.current&&e.current.scrollIntoView({smooth:!0})}),[e.current]);var y,E=function(e){console.log("[Activeusersetter]",e),O(e)};return p.isSet?(d.isSet&&C&&(y=C[d.index].message.map((function(n,s){var t=s==C[d.index].message.length-1;return Object(u.jsxs)("div",{ref:t?e:null,className:n.ismine?"Message--main":"Message--oth",children:[Object(u.jsx)("div",{className:"Message--main--content",children:n.mes}),Object(u.jsx)("div",{className:"Message--main--time",children:"12:00 pm"})]})}))),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"title",children:"Welcome To The Chat Room!!"}),Object(u.jsxs)("div",{className:"Main--box",children:[Object(u.jsxs)("div",{className:"Main--box--users",children:[Object(u.jsx)("div",{className:"Active-agents",children:"Active Doctors"}),c]}),Object(u.jsxs)("div",{className:d.isSet?"Main--box--chat":"Main--box--chat1",children:[Object(u.jsxs)("div",{className:"title",children:["Messages ",d.isSet?d.name:null]}),Object(u.jsx)("div",{className:"Main--box--chat--messagearea",children:d.isSet?y:Object(u.jsxs)("div",{className:"Message--main ",children:[Object(u.jsx)("div",{className:"Message--main--content",children:"Select an Active Doctor to begin the conversation "}),Object(u.jsx)("div",{className:"Message--main--time",children:"12:00 am"})]})}),d.isSet?Object(u.jsx)("div",{className:"c",children:Object(u.jsxs)("form",{className:"cb--bind",onSubmit:function(e){e.preventDefault();var n=e.target.mes.value;console.log(n),m.emit("private-message",n,d.name),k((function(e){var s=e.slice(),t=s[d.index].message.slice();return t.push({mes:n,ismine:!0}),s[d.index].message=t,s}))},children:[Object(u.jsx)("input",{className:"type",type:"text",id:"mes",name:"mes",placeholder:"Type Message...",required:!0}),Object(u.jsx)("button",{className:"enter",children:"Send"})]})}):null]})]})]})):Object(u.jsx)("div",{className:"Username--main",children:Object(u.jsxs)("form",{className:"container",onSubmit:function(e){console.log("[userNameDone]: Called"),e.preventDefault(),N({name:p.name,isSet:!0}),m.auth={username:p.name},m.connect()},children:[Object(u.jsx)("div",{className:"col-75",children:Object(u.jsx)("label",{htmlFor:"em",children:"Username :"})}),Object(u.jsx)("div",{className:"col-25",children:Object(u.jsx)("input",{className:"text--area",placeholder:"Enter your Email address",type:"email",id:"em",onChange:function(e){N({name:e.target.value,isSet:!1})},name:"mes",required:!0})}),Object(u.jsx)("button",{className:"sub",children:"Submit"})]})})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(n){var s=n.getCLS,t=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;s(e),t(e),c(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()}},[[73,1,2]]]);
//# sourceMappingURL=main.18ff162e.chunk.js.map