(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),A=a(152),i=a(158);t.default=function(){return r.a.createElement(A.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(149);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),A=(a(162),a(147)),i=A.a.main.withConfig({displayName:"layout__Main",componentId:"jupbuu-0"})(["padding:1rem 1rem;"]),o=A.a.section.withConfig({displayName:"layout__Wrapper",componentId:"jupbuu-1"})(["margin:0 auto;max-width:50em;"]),l=(A.a.footer.withConfig({displayName:"layout__Footer",componentId:"jupbuu-2"})(["margin:0 auto;padding:1rem;font-size:0.75rem;"]),a(4)),c=a.n(l),s=a(150),u=a(148),d=function(e){e.siteTitle;return r.a.createElement(u.b,{query:g,data:s},function(e){return r.a.createElement(p,null,r.a.createElement(m,{to:"/"},e.site.siteMetadata.title),r.a.createElement(m,{to:"/hall-of-fame"},"Hall of Fame"))})};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var p=A.a.header.withConfig({displayName:"header__Container",componentId:"sc-1m5x87u-0"})(["display:flex;justify-content:space-between;background:#e10707;padding:0 1rem;text-transform:uppercase;& > *{font-weight:bold;min-height:3rem;line-height:3rem;}"]),m=Object(A.a)(u.a).withConfig({displayName:"header__HeaderLink",componentId:"sc-1m5x87u-1"})(["color:white;text-decoration:none;&:hover{text-decoration:underline;cursor:pointer;}"]),g="4130953669",h=d,f=(a(163),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(i,null,r.a.createElement(o,null,t)))});f.propTypes={children:c.a.node.isRequired};t.a=f},158:function(e,t,a){"use strict";var n=a(159),r=a(0),A=a.n(r),i=a(4),o=a.n(i),l=a(164),c=a.n(l),s=a(160),u=a.n(s),d=a(161),p=a.n(d);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return A.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,link:[{rel:"icon",type:"image/png",sizes:"16x16",href:""+u.a},{rel:"icon",type:"image/png",sizes:"32x32",href:""+p.a}],meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía",description:"A Football Manager story about Sevilla FC",author:"Christian Söderberg"}}}}},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjBQYNBzmpE568AAABBElEQVQoz33QvSsEABzG8c/dOTo6wyl3MRERQv4Hg5dBEVYWJpKSzX+A0ikWhcVsMbFIx2KQwUBXwmCRhORtcLo7nGf69X2eZ/g95Cso+BPkq1ePfxR3KKWycGDGoyfThexmF5I2XGjMwqKca8KbeVEVon/1O92aQlCtcR2/A4uu1Csx4MCrLZEvHMrYLR50KzNi0ol1g9JOs+2EfdMWvDsyrFTYmkPx3Pc+nOkypl0xaJM2+203ObcrqUarlN4MnXOu+eu9ZWlNqizps29PDFQ7tiJcpMuwS/2qjKq2atGmGwEfIobshIyLeNEg4VrItjt1YmJi7t0IBpTnbBHw7F04d55PL8E8OMUhHB8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDUtMDZUMTM6MDc6NTcrMDI6MDBcXpfxAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA1LTA2VDEzOjA3OjU3KzAyOjAwLQMvTQAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="},161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjBQYNBzmpE568AAACbklEQVRIx7XVXWgVZBgH8N/ZOWfOWfMD8wPFNDeRJkZYpIUGohcKXviJ1oWIICiBQp8UIZIXrZJACb3wSiMYiAiiiOKNkaTCsIsS55oEOnUqizZnZzvHx4sdl+fozj7S57l73v///379n/flOUdCojSgrB+BJZb8n/nHO++c8UMX+NQDOR8NlV6rWQhNZg6FnrJX5HO35OAFFmkT7vpHuOPdwdKrHBeyPrRHCIeNGJzARhnhZ2PM9Kdw37rB0Ke4KNyzEnwsJxyUHig94Ssh1BsOJjhqt+kDn/8N14Vb3u6tjJaWNNu4gdArHBTCrgKbT/edW+r6tT6W6hCuqOmtjLXNZSHcNK9/gYXahD+8DCqt8otsr6XqVZY+vgpp+4SwQ8o7DukUwm0/OC10WlNKYJJ9pnpVs9CiXqsQ7jtivoT5bgtnS3Xn50KdhM88yC8554L38i5M+l7I+aQv+ixXhZvmesmvQvjLFyY+hpjhstCs9mn0R3sPh1RY64b9Zj3xoG2VFfZKPSnQ0309e37fMLOVe8HrygtQY50R2iwuplc5JmRdknHHZjDHYdcsLEIu1yEcN7KwvEFG+N1c2y2QlMCXQjjqxQJkhZ+ELhsfL07WIHTbouchf1Odaq+4JPxrfdEa3nJD+C1vNbBdCKeMBiu0CHuU+UBWaDC5yG47hbBTgiRe862RMr7RpEqlGVZLq3beSfNMNcEw3WpU53OaSguUq3FGC+X2C6HbVY0aNWrWLYRjRlimXcjJFGRX/r5+NJzV/u5tlcLssknagT5GQ2i3PmWiE+KpzkwaJedrrUVe+C/KpBIlv8/oQ/pZxkOD8fsESI13YQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNS0wNlQxMzowNzo1NyswMjowMFxel/EAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDUtMDZUMTM6MDc6NTcrMDI6MDAtAy9NAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-404-js-8cb768696997c93c2e22.js.map