(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),o=(n(12),n(3)),u=(n(13),n(5)),l=c.a.createContext({}),i=(n(14),n(2)),j=n(0);var b=function(e){return Object(j.jsxs)("button",Object(i.a)(Object(i.a)({},e),{},{className:"with-text",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clip-rule":"evenodd"})}),"Back"]}))};var O=function(){var e=Object(r.useContext)(l);return Object(j.jsxs)("div",{style:{textAlign:"left"},children:[Object(j.jsxs)("label",{children:["work: ",e.workMinutes,":00"]}),Object(j.jsx)(u.a,{className:"slider",thumbClassName:"thumb",trackClassName:"track",value:e.workMinutes,onChange:function(t){return e.setWorkMinutes(t)},min:1,max:120}),Object(j.jsxs)("label",{children:["break: ",e.breakMinutes,":00"]}),Object(j.jsx)(u.a,{className:"slider green",thumbClassName:"thumb",trackClassName:"track",value:e.breakMinutes,onChange:function(t){return e.setBreakMinutes(t)},min:1,max:120}),Object(j.jsxs)("label",{style:{marginTop:"20px"},children:["Do you want to manually start pomodoros and breaks?",Object(j.jsx)("input",{type:"checkbox",checked:e.manual,onChange:function(){return e.setManual(!0)}})]}),Object(j.jsx)("div",{style:{textAlign:"center",marginTop:"20px"},children:Object(j.jsx)(b,{onClick:function(){return e.setShowSettings(!1)}})})]})},d=n(6);n(19);var x=function(e){return Object(j.jsx)("button",Object(i.a)(Object(i.a)({},e),{},{children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})})}))};var h=function(e){return Object(j.jsx)("button",Object(i.a)(Object(i.a)({},e),{},{children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"})})}))};var v=function(e){return Object(j.jsxs)("button",Object(i.a)(Object(i.a)({},e),{},{className:"with-text",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})}),"Settings"]}))};var w=function(){var e=Object(r.useContext)(l),t=Object(r.useState)(!0),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)("work"),u=Object(o.a)(s,2),i=u[0],b=u[1],O=Object(r.useState)(0),w=Object(o.a)(O,2),f=w[0],k=w[1],m=Object(r.useRef)(f),g=Object(r.useRef)(c),p=Object(r.useRef)(i),M=Object(r.useRef)(e.manual);Object(r.useEffect)((function(){m.current=60*e.workMinutes,k(m.current);var t=setInterval((function(){if(!g.current)return 0===m.current?(M.current&&(a(!0),g.current=!0),function(){var t="work"===p.current?"break":"work",n=60*("work"===t?e.workMinutes:e.breakMinutes);b(t),p.current=t,k(n),m.current=n}()):(m.current--,void k(m.current));console.log(1)}),100);return function(){return clearInterval(t)}}),[e]);var C="work"===i?60*e.workMinutes:60*e.breakMinutes,S=Math.round(f/C*100),z=Math.floor(f/60),y=f%60;return y<10&&(y="0"+y),Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{value:S,text:z+":"+y,styles:Object(d.b)({textColor:"#fff",pathColor:"work"===i?"#f54e4e":"#4aec8c",trailColor:"rgba(255,255,255,.2)"})}),Object(j.jsx)("div",{children:c?Object(j.jsx)(h,{onClick:function(){a(!1),g.current=!1}}):Object(j.jsx)(x,{onClick:function(){a(!0),g.current=!0}})}),Object(j.jsx)("div",{children:Object(j.jsx)(v,{onClick:function(){return e.setShowSettings(!0)}})})]})};var f=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(45),s=Object(o.a)(a,2),u=s[0],i=s[1],b=Object(r.useState)(15),d=Object(o.a)(b,2),x=d[0],h=d[1],v=Object(r.useState)(!1),f=Object(o.a)(v,2),k=f[0],m=f[1];return Object(j.jsx)("main",{children:Object(j.jsx)(l.Provider,{value:{showSettings:n,setShowSettings:c,workMinutes:u,breakMinutes:x,setWorkMinutes:i,setBreakMinutes:h,manual:k,setManual:m},children:n?Object(j.jsx)(O,{}):Object(j.jsx)(w,{})})})};s.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0007ee05.chunk.js.map