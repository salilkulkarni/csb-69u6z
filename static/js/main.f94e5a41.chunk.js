(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{23:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),r=t(16),a=t.n(r),i=(t(23),t(5)),j=t(2),l=t(6),o=t.n(l),h=t(8),u=t(9),d=t(0),b=function(){var e=Object(n.useState)([]),c=Object(u.a)(e,2),t=c[0],s=c[1],r=function(){var e=Object(h.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,s(t),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("section",{className:"grid",children:t.map((function(e){var c=e.numericCode,t=e.name,n=e.capital,s=e.population,r=e.flag;return Object(d.jsx)("article",{children:Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:Object(d.jsxs)("div",{className:"biginfo",children:[Object(d.jsx)("img",{src:r,alt:t}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("h3",{className:"country-name",children:[" ",Object(d.jsx)("strong",{children:t})]}),Object(d.jsxs)("h4",{children:["Capital Country:",Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("h4",{children:["Population: ",Object(d.jsx)("span",{children:s})]}),Object(d.jsx)("div",{className:"buttons",children:Object(d.jsxs)(i.b,{to:"/countries/ ".concat(t),className:"btn",children:[" ","Learn More"]})})]})]})})})},c)}))})})},O=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("div",{className:"HH",children:Object(d.jsx)("h1",{children:"Countries APP"})})})},x=(t(31),t(18)),p=function(){var e=Object(n.useState)([]),c=Object(u.a)(e,2),t=c[0],s=c[1],r=Object(j.e)().name;return r=r.trimStart(),Object(n.useEffect)((function(){(function(){var e=Object(h.a)(o.a.mark((function e(){var c,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://restcountries.eu/rest/v2/name/".concat(r),console.log(c),e.next=4,fetch("https://restcountries.eu/rest/v2/name/".concat(r));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,s(n),console.log(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(i.b,{to:"/",className:"btn-light",children:[Object(d.jsx)(x.a,{})," Back"]}),Object(d.jsx)("section",{className:"country",children:t.map((function(e){var c=e.numericCode,t=e.flag,n=e.name,s=e.nativeName,r=e.population,a=e.languages,i=e.capital,j=e.currencies,l=e.borders;return Object(d.jsxs)("article",{className:"Second",children:[Object(d.jsx)("div",{className:"flag",children:Object(d.jsx)("img",{src:t,alt:n})}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("div",{className:"country-info",children:Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)("h5",{children:["Native Name: ",Object(d.jsx)("span",{children:s})," "]}),Object(d.jsxs)("h5",{children:["Capital: ",Object(d.jsx)("span",{children:i})," "]}),Object(d.jsxs)("h5",{children:["Population: ",Object(d.jsx)("span",{children:r})," "]}),Object(d.jsxs)("h5",{children:["Currency: ",Object(d.jsx)("span",{children:j[0].name})," "]}),Object(d.jsxs)("h5",{children:["Languages: ",Object(d.jsx)("span",{children:a[0].name})]})]})}),Object(d.jsx)("h3",{children:"Border Countries:"}),Object(d.jsx)("div",{className:"Borders",children:l.map((function(e){return Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:e})},e)}))})]})]},c)}))})]})};var m=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(b,{})}),Object(d.jsx)(j.a,{path:"/countries/:name",children:Object(d.jsx)(p,{})})]})})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f94e5a41.chunk.js.map