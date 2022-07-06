(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{31:function(t,n,e){},32:function(t,n,e){},43:function(t,n,e){"use strict";e.r(n);var o,a,r,c,i,s,u,l,b,d,j,g,p,x,O,m,f,h,v,S,w,k,C,y,_,E=e(1),I=e.n(E),A=e(18),P=e.n(A),T=(e(31),e(5)),N=e(3),D=(e(32),e(4)),R={message:"All Systems Operational",backgroundColour:"#3da751"},F={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},L={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},M=function(t,n){return 100*t.filter((function(t){return t.labels.find((function(t){return t.name===n}))})).length/t.length},z=e(7),J=e.n(z),Y=e(0),W=D.a.div(o||(o=Object(N.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(t){return t.backgroundColour?t.backgroundColour:"#b1b1b1"})),B=D.a.h2(a||(a=Object(N.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),U=D.a.button(r||(r=Object(N.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),H=D.a.code(c||(c=Object(N.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),K=function(t){var n=t.loading,e=t.error,o=t.components,a=t.refetch,r=function(t){var n=Object(E.useState)(),e=Object(T.a)(n,2),o=e[0],a=e[1];return Object(E.useEffect)((function(){var n=!1;M(t,"operational")<70&&(a(F),n=!0),M(t,"major outage")>0&&(a(L),n=!0),n||a(R)}),[t]),[o]}(o),c=Object(T.a)(r,1)[0],i=function(t,n){var e=Object(E.useState)(J()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),o=Object(T.a)(e,2),a=o[0],r=o[1];return Object(E.useEffect)((function(){var n=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?t((function(){r(J()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(J()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(n)}}),[t]),Object(E.useEffect)((function(){r(J()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[n]),[a]}(a,n),s=Object(T.a)(i,1)[0];return Object(Y.jsxs)(Y.Fragment,{children:[e.hasError&&Object(Y.jsxs)(H,{children:[Object(Y.jsx)("div",{children:"An error occured"}),Object(Y.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(e.errors,null,3)]}),Object(Y.jsxs)(W,{backgroundColour:null===c||void 0===c?void 0:c.backgroundColour,children:[Object(Y.jsx)(B,{children:null===c||void 0===c?void 0:c.message}),Object(Y.jsx)(U,{onClick:a,children:n?"reloading":s})]})]})},G=function(t){var n=Object(E.useState)([]),e=Object(T.a)(n,2),o=e[0],a=e[1],r=Object(E.useState)(),c=Object(T.a)(r,2),i=c[0],s=c[1],u=Object(E.useState)(!0),l=Object(T.a)(u,2),b=l[0],d=l[1];return Object(E.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(t)))<new Date-24e4?V(d,s,a,t):(a(JSON.parse(localStorage.getItem("issueStatus".concat(t)))),d(!1),s())}),[t]),[b,i,o||[],function(){return V(d,s,a,t)}]},V=function(t,n,e,o){t(!0),fetch("https://api.github.com/repos/".concat("slynite/status","/issues?state=all&labels=issue status,").concat(o)).then((function(t){return t.json()})).then((function(a){n(),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),localStorage.setItem("issueStatus".concat(o),JSON.stringify(a)),e(a),t(!1)})).catch((function(a){n(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),e(JSON.parse(localStorage.getItem("issueStatus".concat(o)))),t(!1)}))},$=(D.a.h1(i||(i=Object(N.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),D.a.img(s||(s=Object(N.a)([""])))),q=D.a.div(u||(u=Object(N.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),Q=function(){return Object(Y.jsx)(q,{children:Object(Y.jsx)($,{src:"https://raw.githubusercontent.com/slynite/status/master/.issuestatus/logo.png",alt:"Slynite Status"})})},X=D.a.div(l||(l=Object(N.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),Z={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},tt=D.a.div(b||(b=Object(N.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.colour}),(function(t){return t.backgroundColour})),nt=function(t){var n=function(t){var n=Object(E.useState)(),e=Object(T.a)(n,2),o=e[0],a=e[1];return Object(E.useEffect)((function(){a(Object.values(Z).find((function(n){return t.find((function(t){return t.name===n.name.toLowerCase()}))})))}),[t]),o||a(Z.unknown),[o]}(t.labels),e=Object(T.a)(n,1)[0];return Object(Y.jsx)(tt,{colour:null===e||void 0===e?void 0:e.colour,backgroundColour:null===e||void 0===e?void 0:e.backgroundColour,children:null===e||void 0===e?void 0:e.name})},et=D.a.div(d||(d=Object(N.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),ot=function(t){var n=t.component;return Object(Y.jsxs)(et,{children:[n.title," ",Object(Y.jsx)(nt,{labels:n.labels})]})},at=function(){var t=Object(E.useState)(),n=Object(T.a)(t,2),e=n[0],o=n[1];return Object(E.useEffect)((function(){o(!0)}),[]),[e]},rt=function(t){var n=t.loading,e=t.components,o=at(),a=Object(T.a)(o,1)[0];return!n||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(t){return Object(Y.jsx)(ot,{component:t},t.id)})):Object(Y.jsx)("p",{children:"No Components found."}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X,{}),Object(Y.jsx)(X,{}),Object(Y.jsx)(X,{})]})},ct=e(24),it=D.a.div(j||(j=Object(N.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :hover {\n    background-color:\n      ",";\n  }\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(t){return t.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"}),(function(t){return t.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),st=D.a.a(g||(g=Object(N.a)(["\n  text-decoration: none;\n"]))),ut=D.a.div(p||(p=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),lt=D.a.div(x||(x=Object(N.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),bt=D.a.div(O||(O=Object(N.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),dt=D.a.div(m||(m=Object(N.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.active?"#6e6b6b":"#2f5888"}),(function(t){return t.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),jt=D.a.div(f||(f=Object(N.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),gt=function(t){var n=t.incident;return Object(Y.jsx)(st,{href:n.html_url,target:"_blank",children:Object(Y.jsxs)(it,{active:n.closed_at,children:[Object(Y.jsxs)(ut,{children:[Object(Y.jsx)(jt,{children:J()(n.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(Y.jsx)(dt,{active:n.closed_at,children:n.closed_at?"Closed":"Active"})]}),Object(Y.jsx)(lt,{children:n.title}),Object(Y.jsx)(bt,{children:Object(Y.jsx)(ct.a,{source:n.body})})]})})},pt=D.a.div(h||(h=Object(N.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),xt=D.a.div(v||(v=Object(N.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),Ot=D.a.div(S||(S=Object(N.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),mt=D.a.div(w||(w=Object(N.a)(["\n  margin: 0 8px;\n"]))),ft=function(t){var n=t.loading,e=t.incidents,o=at(),a=Object(T.a)(o,1)[0];return Object(Y.jsxs)(xt,{children:[Object(Y.jsx)(Ot,{children:"Incidents"}),!n||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(t){return Object(Y.jsx)(gt,{incident:t},t.id)})):Object(Y.jsx)(mt,{children:"No Incidents found."}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(pt,{}),Object(Y.jsx)(pt,{}),Object(Y.jsx)(pt,{})]})]})},ht=D.a.div(k||(k=Object(N.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),vt=D.a.a(C||(C=Object(N.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(t){return t.visible?"block":"none"})),St=function(){return Object(Y.jsxs)(ht,{children:[Object(Y.jsx)("div",{}),Object(Y.jsx)(vt,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MANIFEST:"https://raw.githubusercontent.com/slynite/status/master/.issuestatus/manifest.json",REACT_APP_FAVICON:"https://raw.githubusercontent.com/slynite/status/master/.issuestatus/favicon.ico",REACT_APP_TITLE:"Slynite Status",REACT_APP_DESCRIPTION:"Status page for Slynite services",REACT_APP_LOGO:"https://raw.githubusercontent.com/slynite/status/master/.issuestatus/logo.png",REACT_APP_NAME:"Slynite Status",REACT_APP_REPOSITORY:"slynite/status"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},wt=D.a.div(y||(y=Object(N.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),kt=D.a.div(_||(_=Object(N.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),Ct=function(){var t=G("component"),n=Object(T.a)(t,4),e=n[0],o=n[1],a=n[2],r=n[3],c=G("incident"),i=Object(T.a)(c,4),s=i[0],u=i[1],l=i[2],b=i[3];return Object(Y.jsxs)(wt,{children:[Object(Y.jsx)(Q,{}),Object(Y.jsxs)(kt,{children:[Object(Y.jsx)(K,{loading:e||s,error:{hasError:o||u,errors:{componentsError:o,incidentsError:u}},components:a,refetch:function(){r(),b()}}),Object(Y.jsx)(rt,{loading:e,components:a})]}),Object(Y.jsx)(ft,{loading:s,incidents:l}),Object(Y.jsx)(St,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));P.a.render(Object(Y.jsx)(I.a.StrictMode,{children:Object(Y.jsx)(Ct,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.4f42e563.chunk.js.map