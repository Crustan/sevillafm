(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148),o=i.a.main.withConfig({displayName:"layout__Main",componentId:"sc-1gagsic-0"})(["padding:1rem 1rem;"]),c=i.a.section.withConfig({displayName:"layout__Wrapper",componentId:"sc-1gagsic-1"})(["margin:0 auto;max-width:50em;"]),l=(i.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1gagsic-2"})(["margin:0 auto;padding:1rem;font-size:0.75rem;"]),a(4)),s=a.n(l),u=a(150),d=a(147),p=function(e){e.siteTitle;return r.a.createElement(d.b,{query:f,data:u},function(e){return r.a.createElement(m,null,r.a.createElement(g,{to:"/"},e.site.siteMetadata.title),r.a.createElement(g,{to:"/hall-of-fame"},"Hall of Fame"))})};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var m=i.a.header.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;background:#e10707;padding:0 1rem;text-transform:uppercase;& > *{font-weight:bold;min-height:3rem;line-height:3rem;}"]),g=Object(i.a)(d.a).withConfig({displayName:"header__HeaderLink",componentId:"sc-31ozxh-1"})(["color:white;text-decoration:none;&:hover{text-decoration:underline;cursor:pointer;}"]),f="4130953669",h=p,y=(a(155),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(o,null,r.a.createElement(c,null,t)))});y.propTypes={children:s.a.node.isRequired};t.a=y},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(161),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},154:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía",description:"A Football Manager story about Sevilla FC",author:"Christian Söderberg"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-b8ca3efe314a10840611.js.map