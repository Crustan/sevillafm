(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(156),c=a(4),l=a.n(c),s=a(147),u=a(148);function d(e){var t=e.prev,a=e.next;return t||a?r.a.createElement(f,null,t&&r.a.createElement(p,{to:t.path},"← ",t.title),a&&r.a.createElement(m,{to:a.path},a.title," →")):null}var p=Object(s.a)(u.a).withConfig({displayName:"pagination__PrevLink",componentId:"sc-7cdf7x-0"})(["margin-right:auto;"]),m=Object(s.a)(u.a).withConfig({displayName:"pagination__NextLink",componentId:"sc-7cdf7x-1"})(["margin-left:auto;"]),f=s.a.div.withConfig({displayName:"pagination__Container",componentId:"sc-7cdf7x-2"})(["display:flex;justify-content:space-between;margin:1rem 0;& > *{color:#e10707;}"]);d.propTypes={prev:l.a.shape({path:l.a.string,title:l.a.string}),next:l.a.shape({path:l.a.string,title:l.a.string})};var g=d,h=a(158);function y(e){var t=e.data,a=e.pageContext,n=t.markdownRemark,c=n.frontmatter,l=n.html,s=a.previous,u=a.next;return r.a.createElement(i.a,null,r.a.createElement(o.a,null),r.a.createElement(h.a,null,c.title),r.a.createElement("div",{className:"blog-post"},r.a.createElement("article",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:l}}),r.a.createElement(g,{prev:s&&s.frontmatter,next:u&&u.frontmatter})))}a.d(t,"default",function(){return y}),a.d(t,"pageQuery",function(){return v});var v="1579142440"},148:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(147),o=i.a.main.withConfig({displayName:"layout__Main",componentId:"sc-1gagsic-0"})(["padding:3rem 1rem;"]),c=i.a.section.withConfig({displayName:"layout__Wrapper",componentId:"sc-1gagsic-1"})(["margin:0 auto;max-width:960px;"]),l=i.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1gagsic-2"})(["margin:0 auto;max-width:960px;font-size:0.75rem;padding:1rem 0;"]),s=a(4),u=a.n(s),d=a(150),p=a(148),m=function(e){e.siteTitle;return r.a.createElement(p.b,{query:h,data:d},function(e){return r.a.createElement(f,null,r.a.createElement(g,{to:"/"},e.site.siteMetadata.title),r.a.createElement(g,{to:"/hall-of-fame"},"Hall of Fame"))})};m.propTypes={siteTitle:u.a.string},m.defaultProps={siteTitle:""};var f=i.a.header.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;background:#e10707;padding:0 1rem;text-transform:uppercase;& > *{font-weight:bold;min-height:3rem;line-height:3rem;}"]),g=Object(i.a)(p.a).withConfig({displayName:"header__HeaderLink",componentId:"sc-31ozxh-1"})(["color:white;text-decoration:none;&:hover{text-decoration:underline;cursor:pointer;}"]),h="4130953669",y=m,v=(a(155),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(o,null,r.a.createElement(c,null,t)),r.a.createElement(l,null,"© ",(new Date).getFullYear()," Christian Söderberg"))});v.propTypes={children:u.a.node.isRequired};t.a=v},156:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),r=a.n(n),i=a(147),o=a(157),c=a.n(o);function l(){return r.a.createElement(s,null,r.a.createElement("img",{src:c.a,alt:"banner"}))}var s=i.a.div.withConfig({displayName:"banner__Container",componentId:"sc-6twh43-0"})(["text-align:center;margin-bottom:1rem;"])},157:function(e,t,a){e.exports=a.p+"static/sevilla-508fef1d7229ecd89d21f5cb77f7e39d.png"},158:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=a(147).a.h1.withConfig({displayName:"post__PostTitle",componentId:"sc-17vnwh6-0"})(["font-size:0.8rem;text-align:center;text-transform:uppercase;color:#e10707;"])}}]);
//# sourceMappingURL=component---src-templates-post-template-js-cbc4608d8d3abd07aa99.js.map