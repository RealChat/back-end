(this.webpackJsonpstarter=this.webpackJsonpstarter||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){e.exports=n(49)},39:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(26),o=n.n(c),l=(n(39),n(5)),s=n(13),i=n(10),u=n(12),m=n(3),d=(n(24),{"Content-Type":"application/json"}),p={get:function(e){return fetch("http://localhost:9008"+e).then((function(e){return e.json()}))},post:function(e,t){return fetch("http://localhost:9008"+e,{method:"POST",body:JSON.stringify(t),headers:d}).then((function(e){return e.json()}))}},f=p,g=n(2),b=n(9);function E(){var e=Object(a.useContext)(A),t=e.setUser,n=e.user,c=Object(a.useState)(""),o=Object(l.a)(c,2),s=o[0],i=o[1],u=Object(a.useState)(""),m=Object(l.a)(u,2),d=m[0],p=m[1],E=Object(a.useState)(""),v=Object(l.a)(E,2),h=v[0],j=v[1],O=Object(g.g)();return n?r.a.createElement(g.a,{to:"/"}):r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.post("/auth/login",{email:s,password:d}).then((function(e){e.error?j(e.error):(t(e.user),O.push("/"),localStorage.setItem("user",JSON.stringify(e.user)))}))}},r.a.createElement("h1",null,"Login"),r.a.createElement("p",{style:{color:"red"}},h),r.a.createElement("input",{onChange:function(e){return i(e.target.value)},type:"email",placeholder:"Email"}),r.a.createElement("input",{onChange:function(e){return p(e.target.value)},type:"password",placeholder:"Password"}),r.a.createElement("input",{type:"submit",value:"login"}),r.a.createElement("p",null,"If not registered then ",r.a.createElement(b.b,{to:"/signup"},"Signup"))))}E.contextType=A;var v=E;var h=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),i=s[0],u=s[1],m=Object(a.useState)(""),d=Object(l.a)(m,2),p=d[0],E=d[1],v=Object(a.useState)(""),h=Object(l.a)(v,2),j=h[0],O=h[1],C=Object(a.useState)(""),y=Object(l.a)(C,2),S=y[0],w=y[1],x=Object(a.useState)(""),_=Object(l.a)(x,2),N=_[0],k=_[1],I=Object(g.g)();return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f.post("/auth/signup",{name:n,email:i,password:p,username:j}).then((function(e){e.error?w(e.error):(k("you are registered successfully"),setTimeout((function(){I.push("/login")}),2e3))}))}},r.a.createElement("h1",null,"Signup"),r.a.createElement("p",{style:{color:"red"}},S),r.a.createElement("p",{style:{color:"green"}},N),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"name",placeholder:"name"}),r.a.createElement("input",{onChange:function(e){return O(e.target.value)},type:"text",placeholder:"username"}),r.a.createElement("input",{onChange:function(e){return u(e.target.value)},type:"email",name:"email",placeholder:"email"}),r.a.createElement("input",{onChange:function(e){return E(e.target.value)},type:"password",name:"pwd",placeholder:"password"}),r.a.createElement("input",{type:"submit",value:"signup"}),r.a.createElement("p",null,"If already registered then ",r.a.createElement(b.b,{to:"/login"},"Login"))))},j=n(29);var O=function(){var e=Object(a.useContext)(D).user,t=Object(g.g)();return e?r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{onClick:function(){t.push("/")},style:{cursor:"pointer",margin:10,display:"flex",alignItems:"center",alignSelf:"flex-start",padding:10,background:"steelblue",color:"white",borderRadius:5}},r.a.createElement(j.a,{size:32})," Go to Home")),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{flex:"4"},r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"email: ",e.email),r.a.createElement("p",null,"username: ",e.username)))):r.a.createElement(g.a,{to:"/"})},C=(n(45),n(30)),y=n(31),S=(new(function(){function e(){var t=this;Object(C.a)(this,e),this.socket=window.io("/"),this.socket.on("connect",(function(e){t.onConnect(),t.onMessage()}))}return Object(y.a)(e,[{key:"onConnect",value:function(){}},{key:"onMessage",value:function(){this.socket.on("sentMessage",(function(e){console.log("RECEIVED",e)}))}},{key:"sendMessage",value:function(e){this.socket.emit("message",{text:e})}}]),e}())).socket,w={NEW_MESSAGE:new Audio("https://www.mobilesringtones.com/static/p/ringtones/2017/10/02/15726/15726.mp3?title=15726_download_iphone_sms_original_ringtone_iphone_sms_ringtones.mp3"),USER_JOINED:new Audio("https://www.mobilesringtones.com/static/p/ringtones/2017/11/26/15953/15953.mp3?title=15953_download_mesg_ting_ringtone_apple_sms_ringtones.mp3"),MESSAGE_SENT:new Audio("https://fsb.zobj.net/download/bHTSKVD0pv8_4rq--Z8g7fhojB2O5VH143lYmr205vVtLj8tnIh7yL9elamAe88Zs2z7EgWnCdeLaGein239bmckpam5mKQK8LIsw1BoMNNmTIUW47Y0lCgzGwN0/?a=web&c=72&f=pop_up_sms_tone.mp3&special=1603348222-f3GLlOXpN82goF5WwVpLp8aUmOZjkPgVdmnDje6rCso%3D")},x=n(32);var _=function(){var e=Object(a.useContext)(D).user,t=Object(a.useContext)(D),n=t.contacts,c=t.messages,o=t.currentContact,l=t.setMessages,s=(null===n||void 0===n?void 0:n.find((function(e){return e.uid===o})))||{},d=c[o]||[],p=document.getElementById("textarea"),f=r.a.useRef(),g=function(){f.current.scrollTo({top:f.current.scrollHeight,behavior:"smooth"})};return Object(a.useEffect)((function(){l((function(e){return e[o]||(e[o]=[]),Object(m.a)(Object(m.a)({},e),{},Object(i.a)({},o,Object(u.a)(e[o]).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{unread:void 0})}))))}))}),[o]),Object(a.useEffect)((function(){var e;(null===(e=d[d.length-1])||void 0===e?void 0:e.user)&&g()}),[c]),r.a.createElement("div",{className:"chatbox"},r.a.createElement("header",null,r.a.createElement("h1",{style:{marginLeft:10}},s.username)),r.a.createElement("div",{className:"sections",ref:f},d.map((function(t){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},t.sender&&t.sender!==e.username&&r.a.createElement("span",{style:{margin:"0 0 -10px 10px",color:"grey",fontSize:"90%"}},t.sender),r.a.createElement("div",{className:"".concat(t.user||t.sender===e.username?"message_sender":"message_receiver"," message"),dangerouslySetInnerHTML:{__html:t.text}}))}))),r.a.createElement("footer",null,r.a.createElement("div",{className:"scroll-top",onClick:g},r.a.createElement(x.a,{size:34,color:"white"})),r.a.createElement("div",{id:"text-container"},r.a.createElement("p",{id:"textarea",placeholder:"Type a message..",contentEditable:!0}),r.a.createElement("button",{onClick:function(){var e=p.innerText;e=e.replace(/\n/g,"<br>").trim(),console.log(e),""!==e.trim()&&(S.emit("message",{text:e,to:o}),w.MESSAGE_SENT.play(),p.innerText="",l((function(t){return t[o]||(t[o]=[]),Object(m.a)(Object(m.a)({},t),{},Object(i.a)({},o,[].concat(Object(u.a)(t[o]),[{text:e,user:!0}])))})))}},"send"))))};n(46);var N=function(){var e=Object(a.useContext)(D),t=e.contacts,n=e.setCurrentContact,c=e.currentContact,o=e.messages,s=Object(a.useState)(t),i=Object(l.a)(s,2),u=i[0],m=i[1];return Object(a.useEffect)((function(){m(t)}),[t]),r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"search",placeholder:"Search contact",onChange:function(e){var n=e.target.value.toLowerCase();m(t.filter((function(e){return e.username.toLowerCase().startsWith(n)})))}})),r.a.createElement("div",{className:"friends"},!t&&r.a.createElement("div",null,"Loading contacts..."),0==(null===u||void 0===u?void 0:u.length)&&r.a.createElement("div",null,"No contacts to show."),null===u||void 0===u?void 0:u.map((function(e){var t=(o[e.uid]||[]).filter((function(e){return e.unread})).length;return r.a.createElement("div",{className:"".concat(e.uid===c?"active_contact":""," contact"),onClick:function(t){return n(e.uid)}},r.a.createElement("div",{className:"contact_name"},e.username,e.online&&r.a.createElement("div",{className:"online"})),t>0&&e.uid!==c&&r.a.createElement("div",{className:"badge"},t))}))))},k=(n(47),n(21)),I=n(33);n(48);var L=function(e){var t=e.icon;return r.a.createElement("div",Object.assign({className:"navigation__tab"},e),r.a.createElement(t,{style:{color:"white",fontSize:e.size}}),r.a.createElement("div",{style:{color:"white",paddingTop:"10px"}},e.label))};var M=function(){Object(g.g)();var e=Object(a.useContext)(A).setUser;return r.a.createElement("div",{className:"Nav"},r.a.createElement(b.b,{to:"/"},r.a.createElement(L,{label:"Home",icon:k.a,size:32})),r.a.createElement(b.b,{to:"/profile"},r.a.createElement(L,{label:"Profile",icon:k.b,size:32})),r.a.createElement(L,{onClick:function(){localStorage.removeItem("user"),e(null),S.disconnect(),window.location.href="/login"},label:"Logout",icon:I.a,size:32}))};var T=function(){var e=Object(a.useContext)(A),t=e.user;return e.setContacts,e.setCurrentContact,t?r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(N,null),r.a.createElement(M,null)):r.a.createElement(g.a,{to:"/login"})};var z=function(){var e=Object(a.useContext)(A),t=e.setUser,n=e.user,c=e.setContacts,o=e.setMessages,l=(e.currentContact,e.contacts),s=e.setCurrentContact;return Object(a.useEffect)((function(){var e=localStorage.getItem("user");e&&(console.log(e),e=JSON.parse(e),t(e)),S.on("allUsers",(function(e){if(0!=e.length){var t=e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{uid:e._id})}));c([].concat(Object(u.a)(t),[{uid:"groupChat",username:"Mega Chat"}])),s(t[0].uid)}else c([])})),S.on("newUser",(function(e){c((function(t){return null===t||void 0===t?void 0:t.map((function(t){return t.uid===e?Object(m.a)(Object(m.a)({},t),{},{online:!0}):t}))}))})),S.on("userLeft",(function(e){c((function(t){return null===t||void 0===t?void 0:t.map((function(t){return t.uid===e?Object(m.a)(Object(m.a)({},t),{},{online:!1}):t}))}))})),S.on("groupChats",(function(e){o((function(t){return t.groupChat||(t.groupChat=[]),Object(m.a)(Object(m.a)({},t),{},{groupChat:e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{sender:e.from})}))})}))})),S.on("receiveMessage",(function(e){w.NEW_MESSAGE.play();var t=e.from;console.log(e),e.sender&&(t="groupChat",console.log(l)),o((function(n){return n[t]||(n[t]=[]),Object(m.a)(Object(m.a)({},n),{},Object(i.a)({},t,[].concat(Object(u.a)(n[t]),[{text:e.text,unread:!0,sender:"groupChat"===t?e.sender:void 0}])))}))}))}),[]),Object(a.useEffect)((function(){n&&S.emit("join",n)}),[n]),r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(g.b,{path:"/login"},r.a.createElement(v,null)),r.a.createElement(g.b,{path:"/profile"},r.a.createElement(O,null)),r.a.createElement(g.b,{path:"/signup"},r.a.createElement(h,null)))))},D=Object(a.createContext)();function U(e){var t=e.children,n=r.a.useState(null),a=Object(l.a)(n,2),c=a[0],o=a[1],i=Object(s.b)(null,"contacts"),u=Object(l.a)(i,2),m=u[0],d=u[1],p=Object(s.b)({},"messages"),f=Object(l.a)(p,2),g=f[0],b=f[1],E=Object(s.b)(null,"currentContact"),v=Object(l.a)(E,2),h=v[0],j=v[1];return r.a.createElement(D.Provider,{value:{user:c,setUser:o,messages:g,setMessages:b,contacts:m,setContacts:d,currentContact:h,setCurrentContact:j}},t)}var A=D;o.a.render(r.a.createElement(s.a,{name:"Chat"},r.a.createElement(U,null,r.a.createElement(z,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c3cc9107.chunk.js.map