(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(147),o=a(152),c=a(153);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(148);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(149),o=a(4),c=a.n(o),l=a(150),s=a(147),d=function(e){var t=e.siteTitle;return r.a.createElement(s.b,{query:m,render:function(e){return r.a.createElement(u,null,r.a.createElement(p,{to:"/"},t),r.a.createElement(p,{to:"/hall-of-fame"},"Hall of Fame"))},data:l})};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var u=i.a.header.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;background:#e10707;padding:0 1rem;text-transform:uppercase;& > *{font-weight:bold;min-height:3rem;line-height:3rem;}"]),p=Object(i.a)(s.a).withConfig({displayName:"header__HeaderLink",componentId:"sc-31ozxh-1"})(["color:white;text-decoration:none;&:hover{text-decoration:underline;cursor:pointer;}"]),m="4130953669",f=d,g=(a(155),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{siteTitle:data.site.siteMetadata.title}),r.a.createElement(h,null,r.a.createElement(y,null,t)),r.a.createElement(w,null,"© ",(new Date).getFullYear()," Christian Söderberg"))}),h=i.a.main.withConfig({displayName:"layout__Main",componentId:"ii2kc2-0"})(["padding:3rem 1rem;"]),y=i.a.section.withConfig({displayName:"layout__Wrapper",componentId:"ii2kc2-1"})(["margin:0 auto;max-width:960px;"]),w=i.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(["margin:0 auto;max-width:960px;font-size:0.75rem;"]);g.propTypes={children:c.a.node.isRequired};t.a=g},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(156),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},154:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía",description:"A Football Manager story about Sevilla FC",author:"Christian Söderberg"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-172b5bd79d39b3471fd4.js.map