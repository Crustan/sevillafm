(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148),o=a(152),l=a(165),c=a.n(l),s=a(4),u=a.n(s),d=a(147);function p(e){var t=e.prev,a=e.next;return t||a?r.a.createElement(g,null,t&&r.a.createElement(m,{to:t.path},"← ",t.title),a&&r.a.createElement(f,{to:a.path},a.title," →")):null}var m=Object(i.a)(d.a).withConfig({displayName:"pagination__PrevLink",componentId:"sc-7cdf7x-0"})(["margin-right:auto;"]),f=Object(i.a)(d.a).withConfig({displayName:"pagination__NextLink",componentId:"sc-7cdf7x-1"})(["margin-left:auto;"]),g=i.a.div.withConfig({displayName:"pagination__Container",componentId:"sc-7cdf7x-2"})(["display:flex;justify-content:space-between;margin:1rem 0;& > *{color:#e10707;}"]);p.propTypes={prev:u.a.shape({path:u.a.string,title:u.a.string}),next:u.a.shape({path:u.a.string,title:u.a.string})};var h=p;function y(e){var t=e.data,a=e.pageContext,n=t.markdownRemark,i=n.frontmatter,l=n.html,s=a.previous,u=a.next;return r.a.createElement(o.a,null,r.a.createElement(x,null,r.a.createElement("img",{src:c.a,alt:"banner"})),r.a.createElement(v,null,i.title),r.a.createElement("div",{className:"blog-post"},r.a.createElement("article",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:l}}),r.a.createElement(h,{prev:s&&s.frontmatter,next:u&&u.frontmatter})))}a.d(t,"default",function(){return y}),a.d(t,"pageQuery",function(){return w});var x=i.a.div.withConfig({displayName:"postTemplate__Banner",componentId:"sc-11199xh-0"})(["text-align:center;margin-bottom:1rem;"]),v=i.a.h1.withConfig({displayName:"postTemplate__PostTitle",componentId:"sc-11199xh-1"})(["font-size:0.8rem;text-align:center;text-transform:uppercase;color:#e10707;"]),w="1579142440"},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148),o=i.a.main.withConfig({displayName:"layout__Main",componentId:"sc-1gagsic-0"})(["padding:3rem 1rem;"]),l=i.a.section.withConfig({displayName:"layout__Wrapper",componentId:"sc-1gagsic-1"})(["margin:0 auto;max-width:960px;"]),c=i.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1gagsic-2"})(["margin:0 auto;max-width:960px;font-size:0.75rem;"]),s=a(4),u=a.n(s),d=a(150),p=a(147),m=function(e){e.siteTitle;return r.a.createElement(p.b,{query:h,data:d},function(e){return r.a.createElement(f,null,r.a.createElement(g,{to:"/"},e.site.siteMetadata.title),r.a.createElement(g,{to:"/hall-of-fame"},"Hall of Fame"))})};m.propTypes={siteTitle:u.a.string},m.defaultProps={siteTitle:""};var f=i.a.header.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;background:#e10707;padding:0 1rem;text-transform:uppercase;& > *{font-weight:bold;min-height:3rem;line-height:3rem;}"]),g=Object(i.a)(p.a).withConfig({displayName:"header__HeaderLink",componentId:"sc-31ozxh-1"})(["color:white;text-decoration:none;&:hover{text-decoration:underline;cursor:pointer;}"]),h="4130953669",y=m,x=(a(155),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(o,null,r.a.createElement(l,null,t)),r.a.createElement(c,null,"© ",(new Date).getFullYear()," Christian Söderberg"))});x.propTypes={children:u.a.node.isRequired};t.a=x},165:function(e,t,a){e.exports=a.p+"static/sevilla-508fef1d7229ecd89d21f5cb77f7e39d.png"}}]);
//# sourceMappingURL=component---src-templates-post-template-js-3e6eefa53ab544051e01.js.map