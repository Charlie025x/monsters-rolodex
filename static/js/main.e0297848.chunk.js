(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(6),a=(n(13),n(2)),o=n.n(a),u=n(3),i=n(4),l=(n(15),n(0)),j=function(e){var t=e.monster,n=t.id,r=t.name,c=t.email;return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(n,"?set=set2&size=180x180")}),Object(l.jsxs)("h2",{children:[" ",r," "]}),Object(l.jsxs)("p",{children:[" ",c," "]})]})},f=(n(17),function(e){var t=e.monsters;return Object(l.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(l.jsx)(j,{monster:e},e.id)}))})}),h=(n(18),function(e){e.className;var t=e.placeholder,n=e.onChangeHandler;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),d=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(n(19),function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(i.a)(s,2),j=a[0],p=a[1],b=Object(r.useState)(j),m=Object(i.a)(b,2),O=m[0],x=m[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=j.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}));x(e)}),[j,n]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"app-title",children:"Monsters Rolodex"}),Object(l.jsx)(h,{className:"monsters-search-box",onChangeHandler:function(e){var t=e.target.value.toLocaleLowerCase();c(t)},placeholder:"search monsters"}),Object(l.jsx)(f,{monsters:O})]})}),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},m=document.getElementById("root");Object(s.createRoot)(m).render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})})),b()}],[[20,1,2]]]);
//# sourceMappingURL=main.e0297848.chunk.js.map