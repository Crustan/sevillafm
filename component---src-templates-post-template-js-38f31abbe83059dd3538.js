(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);a(74),a(75);var n=a(0),r=a.n(n),i=a(147),o=a(152),c=a(156),l=a(4),s=a.n(l),u=a(148);function d(e){var t=e.prev,a=e.next;return t||a?r.a.createElement(f,null,t&&r.a.createElement(m,{to:t.path},"← ",t.title),a&&r.a.createElement(p,{to:a.path},a.title," →")):null}var m=Object(u.a)(i.a).withConfig({displayName:"pagination__PrevLink",componentId:"sc-7cdf7x-0"})(["margin-right:auto;"]),p=Object(u.a)(i.a).withConfig({displayName:"pagination__NextLink",componentId:"sc-7cdf7x-1"})(["margin-left:auto;"]),f=u.a.div.withConfig({displayName:"pagination__Container",componentId:"sc-7cdf7x-2"})(["display:flex;justify-content:space-between;margin:1rem 0;& > *{color:#e10707;}"]);d.propTypes={prev:s.a.shape({path:s.a.string,title:s.a.string}),next:s.a.shape({path:s.a.string,title:s.a.string})};var g=d;function h(e){var t=e.data,a=e.pageContext,n=t.markdownRemark,i=n.frontmatter,l=n.html,s=a.previous,u=a.next,d=("portugal"===i.team?"comp-national":i.title.includes("Champions League")?"comp-cl":"comp-laliga")+("/1-28-helarsrapport/"===i.path?" summit":"");return r.a.createElement(o.a,null,r.a.createElement(g,{prev:s&&s.frontmatter,next:u&&u.frontmatter}),r.a.createElement(c.a,{team:i.team}),r.a.createElement(PostTitle,null,i.title),r.a.createElement(Post,{className:d,dangerouslySetInnerHTML:{__html:l}}))}a.d(t,"default",function(){return h})},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía"}}}}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148),o=i.a.main.withConfig({displayName:"layout__Main",componentId:"sc-1gagsic-0"})(["padding:1rem 1rem;"]),c=i.a.section.withConfig({displayName:"layout__Wrapper",componentId:"sc-1gagsic-1"})(["margin:0 auto;max-width:50em;"]),l=(i.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1gagsic-2"})(["margin:0 auto;padding:1rem;font-size:0.75rem;"]),a(4)),s=a.n(l),u=a(151),d=a(147),m=function(e){e.siteTitle;return r.a.createElement(d.b,{query:g,data:u},function(e){return r.a.createElement(p,null,r.a.createElement(f,{to:"/"},e.site.siteMetadata.title),r.a.createElement(f,{to:"/hall-of-fame"},"Hall of Fame"))})};m.propTypes={siteTitle:s.a.string},m.defaultProps={siteTitle:""};var p=i.a.header.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;background:#e10707;padding:0 1rem;text-transform:uppercase;& > *{font-weight:bold;min-height:3rem;line-height:3rem;}"]),f=Object(i.a)(d.a).withConfig({displayName:"header__HeaderLink",componentId:"sc-31ozxh-1"})(["color:white;text-decoration:none;&:hover{text-decoration:underline;cursor:pointer;}"]),g="4130953669",h=m,v=(a(155),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(o,null,r.a.createElement(c,null,t)))});v.propTypes={children:s.a.node.isRequired};t.a=v},156:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),r=a.n(n),i=a(148),o=a(157),c=a.n(o),l=a(158),s=a.n(l),u=a(159),d=a.n(u);function m(e){var t=e.team,a=void 0===t?"sevilla":t;return r.a.createElement(p,null,"sevilla"===a&&r.a.createElement("img",{src:c.a,alt:"banner"}),"portugal"===a&&r.a.createElement("img",{src:s.a,alt:"banner"}),"england"===a&&r.a.createElement("img",{src:d.a,alt:"banner"}))}var p=i.a.div.withConfig({displayName:"banner__Container",componentId:"sc-6twh43-0"})(["text-align:center;margin-bottom:1rem;"])},157:function(e,t,a){e.exports=a.p+"static/sevilla-508fef1d7229ecd89d21f5cb77f7e39d.png"},158:function(e,t,a){e.exports=a.p+"static/portugal-2ff4bff51040288052c1bff29e912ed6.png"},159:function(e,t,a){e.exports=a.p+"static/england-5d1d07a5dfbd0e2cdc64a209c98f50d8.png"}}]);
//# sourceMappingURL=component---src-templates-post-template-js-38f31abbe83059dd3538.js.map