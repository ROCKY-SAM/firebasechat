(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{22:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),c=a.n(s),r=a(12),o=a.n(r),i=(a(22),a(11)),d=a.n(i),l=a(13),j=a(8),h=(a(24),a(4)),b=a.n(h),u=(a(25),a(29),a(32),a(15)),p=a(16);b.a.apps.length||b.a.initializeApp({apiKey:"AIzaSyA3LMCDB2e-oNm1GGEoJXlidv0HcAJjgqk",authDomain:"chat-workflow.firebaseapp.com",databaseURL:"https://chat-workflow.firebaseio.com",projectId:"chat-workflow",storageBucket:"chat-workflow.appspot.com",messagingSenderId:"40643269425",appId:"1:40643269425:web:15b157909385da98835610",measurementId:"G-6P1EQ5RYFQ"});var _=b.a.auth(),v=b.a.firestore();b.a.analytics();function m(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("button",{className:"sign-in",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;_.signInWithPopup(e)},children:"Sign in with Google"})})}function g(){var e=Object(s.useRef)(),t=v.collection("messages"),a=t.orderBy("createdAt"),c=Object(p.a)(a,{idField:"id"}),r=Object(j.a)(c,1)[0],o=Object(s.useState)(""),i=Object(j.a)(o,2),h=i[0],u=i[1],m=function(){var a=Object(l.a)(d.a.mark((function a(n){var s,c,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),s=_.currentUser,c=s.uid,r=s.photoURL,a.next=4,t.add({text:h,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:r});case 4:u(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[r&&r.map((function(e){return Object(n.jsx)(x,{message:e},e.id)})),Object(n.jsx)("span",{ref:e}),Object(n.jsx)("div",{children:Object(n.jsx)("form",{onSubmit:m,children:Object(n.jsx)("div",{class:"chat__conversation-panel",children:Object(n.jsxs)("div",{class:"chat__conversation-panel__container",children:[Object(n.jsx)("input",{class:"chat__conversation-panel__input panel-item",placeholder:"Type a message...",value:h,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("button",{class:"chat__conversation-panel__button panel-item btn-icon send-message-button",type:"submit",disabled:!h,children:Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true","data-reactid":"1036",children:[Object(n.jsx)("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),Object(n.jsx)("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]})})})})]})}function x(e){var t=e.message,a=t.text,s=t.uid,c=t.photoURL,r=s===_.currentUser.uid?"chat__conversation-board__message-container reversed":"chat__conversation-board__message-container";return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{class:"chat__conversation-board",children:Object(n.jsxs)("div",{className:"".concat(r),children:[Object(n.jsxs)("div",{class:"chat__conversation-board__message__person",children:[Object(n.jsx)("div",{class:"chat__conversation-board__message__person__avatar",children:Object(n.jsx)("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"})}),Object(n.jsx)("span",{class:"chat__conversation-board__message__person__nickname",children:a})]}),Object(n.jsx)("div",{class:"chat__conversation-board__message__context",children:Object(n.jsxs)("div",{class:"chat__conversation-board__message__bubble",children:[" ",Object(n.jsx)("span",{children:a})]})})]})})})}var O=function(){var e=Object(u.a)(_),t=Object(j.a)(e,1)[0];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header"}),Object(n.jsx)("div",{class:"--dark-theme",id:"chat",children:t?Object(n.jsx)(g,{}):Object(n.jsx)(m,{})})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.dc9068cd.chunk.js.map