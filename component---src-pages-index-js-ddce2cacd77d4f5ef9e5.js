(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(t,e,a){"use strict";a.r(e),a.d(e,"INDEX_QUERY",function(){return p});a(34);var r=a(170),n=a(0),i=a.n(n),o=a(147),l=a(152),d=a(153),p="1030851548";e.default=function(){return i.a.createElement(o.b,{query:p,render:function(t){return console.log(t)||i.a.createElement(l.a,null,i.a.createElement(d.a,{title:"Home",keywords:["sevilla","football manager 2006","react"]}),t.allMarkdownRemark&&t.allMarkdownRemark.edges.map(function(t){return Object.assign({},t.node.frontmatter)}).map(function(t){return i.a.createElement(o.a,{key:t.id,to:t.path},t.title)}))},data:r})}},147:function(t,e,a){"use strict";a.d(e,"b",function(){return m});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(33),d=a.n(l);a.d(e,"a",function(){return d.a});a(148);var p=n.a.createContext({}),m=function(t){return n.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(t,e,a){var r;t.exports=(r=a(151))&&r.default||r},150:function(t){t.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía"}}}}},151:function(t,e,a){"use strict";a.r(e);a(34);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(55),d=a(2),p=function(t){var e=t.location,a=d.default.getResourcesForPathnameSync(e.pathname);return a?n.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=p},152:function(t,e,a){"use strict";var r=a(0),n=a.n(r),i=a(149),o=a(4),l=a.n(o),d=a(150),p=a(147),m=function(t){var e=t.siteTitle;return n.a.createElement(p.b,{query:f,render:function(t){return n.a.createElement(s,null,n.a.createElement(u,{to:"/"},e),n.a.createElement(u,{to:"/hall-of-fame"},"Hall of Fame"))},data:d})};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var s=i.a.header.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;background:#e10707;padding:0 1rem;text-transform:uppercase;& > *{font-weight:bold;min-height:3rem;line-height:3rem;}"]),u=Object(i.a)(p.a).withConfig({displayName:"header__HeaderLink",componentId:"sc-31ozxh-1"})(["color:white;text-decoration:none;&:hover{text-decoration:underline;cursor:pointer;}"]),f="4130953669",h=m,c=(a(155),function(t){var e=t.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{siteTitle:data.site.siteMetadata.title}),n.a.createElement(g,null,n.a.createElement(k,null,e)),n.a.createElement(b,null,"© ",(new Date).getFullYear()," Christian Söderberg"))}),g=i.a.main.withConfig({displayName:"layout__Main",componentId:"ii2kc2-0"})(["padding:3rem 1rem;"]),k=i.a.section.withConfig({displayName:"layout__Wrapper",componentId:"ii2kc2-1"})(["margin:0 auto;max-width:960px;"]),b=i.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(["margin:0 auto;max-width:960px;font-size:0.75rem;"]);c.propTypes={children:l.a.node.isRequired};e.a=c},153:function(t,e,a){"use strict";var r=a(154),n=a(0),i=a.n(n),o=a(4),l=a.n(o),d=a(156),p=a.n(d);function m(t){var e=t.description,a=t.lang,n=t.meta,o=t.keywords,l=t.title,d=r.data.site,m=e||d.siteMetadata.description;return i.a.createElement(p.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=m},154:function(t){t.exports={data:{site:{siteMetadata:{title:"El orgullo de Andalucía",description:"A Football Manager story about Sevilla FC",author:"Christian Söderberg"}}}}},170:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Prolog",id:1,path:"/prolog/"}}},{node:{frontmatter:{title:"1.1 Truppen",id:32,path:"/1-1-truppen/"}}},{node:{frontmatter:{title:"1.2 Landslag",id:64,path:"/1-2-landslag/"}}},{node:{frontmatter:{title:"1.3 Taktiken",id:67,path:"/1-3-taktiken/"}}},{node:{frontmatter:{title:"1.4 Försäsong",id:75,path:"/1-4-forsasong/"}}},{node:{frontmatter:{title:"1.5 EM-kval",id:80,path:"/1-5-em-kval/"}}},{node:{frontmatter:{title:"1.6 La Liga",id:90,path:"/1-6-la-liga/"}}},{node:{frontmatter:{title:"1.7 EM-kval",id:95,path:"/1-7-em-kval/"}}},{node:{frontmatter:{title:"1.8 Champions League",id:106,path:"/1-8-champions-league/"}}},{node:{frontmatter:{title:"1.9 La Liga",id:110,path:"/1-9-la-liga/"}}},{node:{frontmatter:{title:"1.10 Landslagsuppehåll",id:114,path:"/1-10-landslagsuppehall/"}}},{node:{frontmatter:{title:"1.11 Champions League",id:122,path:"/1-11-champions-league/"}}},{node:{frontmatter:{title:"1.12 La Liga",id:125,path:"/1-12-la-liga/"}}},{node:{frontmatter:{title:"1.13 Halvårsrapport",id:131,path:"/1-13-halvarsrapport/"}}},{node:{frontmatter:{title:"1.14 Utmärkelser",id:134,path:"/1-14-utmarkelser/"}}},{node:{frontmatter:{title:"1.15 Copa del Rey",id:139,path:"/1-15-copa-del-rey/"}}},{node:{frontmatter:{title:"1.16 Silly Season",id:144,path:"/1-16-silly-season/"}}},{node:{frontmatter:{title:"1.17 La Liga",id:149,path:"/1-17-la-liga/"}}},{node:{frontmatter:{title:"1.18 Copa del Rey",id:160,path:"/1-18-copa-del-rey/"}}},{node:{frontmatter:{title:"1.19 Träningslandskamp",id:163,path:"/163/"}}},{node:{frontmatter:{title:"1.20 La Liga",id:168,path:"/1-20-la-liga/"}}},{node:{frontmatter:{title:"1.21 Champions League",id:171,path:"/1-21-champions-league/"}}},{node:{frontmatter:{title:"1.22 EM-kval",id:178,path:"/1-22-em-kval/"}}},{node:{frontmatter:{title:"1.23 Champions League",id:182,path:"/1-23-champions-league/"}}},{node:{frontmatter:{title:"1.24 La Liga",id:184,path:"/1-24-la-liga/"}}},{node:{frontmatter:{title:"1.25 La Liga",id:187,path:"/1-25-la-liga/"}}},{node:{frontmatter:{title:"1.26 EM-kval",id:190,path:"/1-26-em-kval/"}}},{node:{frontmatter:{title:"1.27 Utmärkelser",id:193,path:"/1-27-utmarkelser/"}}},{node:{frontmatter:{title:"1.28 Helårsrapport",id:204,path:"/1-28-helarsrapport/"}}},{node:{frontmatter:{title:"2.1 Försäsong",id:211,path:"/2-1-forsasong/"}}},{node:{frontmatter:{title:"2.2 Silly Season",id:219,path:"/2-2-silly-season/"}}},{node:{frontmatter:{title:"2.3 Truppen",id:227,path:"/2-3-truppen/"}}},{node:{frontmatter:{title:"2.4 EM-kval",id:232,path:"/2-4-em-kval/"}}},{node:{frontmatter:{title:"2.5 September",id:235,path:"/2-5-september/"}}},{node:{frontmatter:{title:"2.6 EM-kval",id:239,path:"/2-6-em-kval/"}}},{node:{frontmatter:{title:"2.7 Oktober",id:244,path:"/2-7-oktober/"}}},{node:{frontmatter:{title:"2.8 EM-kval",id:251,path:"/2-8-em-kval/"}}},{node:{frontmatter:{title:"2.9 November",id:253,path:"/2-9-november/"}}},{node:{frontmatter:{title:"2.10 December",id:255,path:"/2-10-december/"}}},{node:{frontmatter:{title:"2.11 Januari",id:257,path:"/2-11-januari/"}}},{node:{frontmatter:{title:"2.12 Februari",id:260,path:"/2-12-februari/"}}},{node:{frontmatter:{title:"2.13 Mars",id:267,path:"/2-13-mars/"}}},{node:{frontmatter:{title:"2.14 April",id:269,path:"/2-14-april/"}}},{node:{frontmatter:{title:"2.15 Maj",id:271,path:"/2-15-maj/"}}},{node:{frontmatter:{title:"2.16 Juni",id:274,path:"/2-16-juni/"}}},{node:{frontmatter:{title:"3.1 Juli",id:278,path:"/3-1-juli/"}}},{node:{frontmatter:{title:"3.2 Augusti",id:297,path:"/3-2-augusti/"}}},{node:{frontmatter:{title:"3.3 September",id:299,path:"/3-3-september/"}}},{node:{frontmatter:{title:"3.4 Oktober",id:301,path:"/3-4-oktober/"}}},{node:{frontmatter:{title:"3.5 November",id:303,path:"/3-5-november/"}}},{node:{frontmatter:{title:"3.6 December",id:305,path:"/3-6-december/"}}},{node:{frontmatter:{title:"3.7 Januari",id:307,path:"/3-7-januari/"}}},{node:{frontmatter:{title:"3.8 Februari",id:311,path:"/3-8-februari/"}}},{node:{frontmatter:{title:"3.9 Mars",id:313,path:"/3-9-mars/"}}},{node:{frontmatter:{title:"3.10 April",id:315,path:"/3-10-april/"}}},{node:{frontmatter:{title:"3.11 Maj",id:317,path:"/3-11-maj/"}}},{node:{frontmatter:{title:"3.12 Målvakter",id:323,path:"/3-12-malvakter/"}}},{node:{frontmatter:{title:"3.13 Backar",id:336,path:"/3-13-backar/"}}},{node:{frontmatter:{title:"3.14 Mittfältare",id:348,path:"/3-14-mittfaltare/"}}},{node:{frontmatter:{title:"3.15 Forwards",id:359,path:"/3-15-forwards/"}}},{node:{frontmatter:{title:"3.16 Juni",id:364,path:"/3-16-juni/"}}},{node:{frontmatter:{title:"4.1 Juli",id:370,path:"/4-1-juli/"}}},{node:{frontmatter:{title:"4.2 Augusti",id:388,path:"/4-2-augusti/"}}},{node:{frontmatter:{title:"4.3 September",id:390,path:"/4-3-september/"}}},{node:{frontmatter:{title:"4.4 Oktober",id:392,path:"/4-4-oktober/"}}},{node:{frontmatter:{title:"4.5 November",id:394,path:"/4-5-november/"}}},{node:{frontmatter:{title:"4.6 December",id:396,path:"/4-6-december/"}}},{node:{frontmatter:{title:"4.7 Januari",id:398,path:"/4-7-januari/"}}},{node:{frontmatter:{title:"4.8 Februari",id:400,path:"/4-8-februari/"}}},{node:{frontmatter:{title:"4.9 Mars",id:402,path:"/4-9-mars/"}}},{node:{frontmatter:{title:"4.10 April",id:404,path:"/4-10-april/"}}},{node:{frontmatter:{title:"4.11 Maj",id:406,path:"/4-11-maj/"}}},{node:{frontmatter:{title:"4.12 Fotbolls-VM",id:408,path:"/4-12-fotbolls-vm/"}}},{node:{frontmatter:{title:"5.1 Juli",id:411,path:"/5-1-juli/"}}},{node:{frontmatter:{title:"5.2 Augusti",id:413,path:"/5-2-augusti/"}}},{node:{frontmatter:{title:"5.3 September",id:415,path:"/5-3-september/"}}},{node:{frontmatter:{title:"5.4 Oktober",id:430,path:"/5-4-oktober/"}}},{node:{frontmatter:{title:"5.5 November",id:432,path:"/5-5-november/"}}},{node:{frontmatter:{title:"5.6 December",id:434,path:"/5-6-december/"}}},{node:{frontmatter:{title:"5.7 Januari",id:436,path:"/5-7-januari/"}}},{node:{frontmatter:{title:"5.8 Februari",id:438,path:"/5-8-februari/"}}},{node:{frontmatter:{title:"5.9 Mars",id:440,path:"/5-9-mars/"}}},{node:{frontmatter:{title:"5.10 April",id:442,path:"/5-10-april/"}}},{node:{frontmatter:{title:"5.11.1 Maj",id:444,path:"/5-11-1-maj/"}}},{node:{frontmatter:{title:"5.11.2 Den alternativa avslutningen",id:446,path:"/5-11-2-den-alternativa-avslutningen/"}}},{node:{frontmatter:{title:"6.1 2019/20 El Triple",id:449,path:"/6-1-el-triple/"}}},{node:{frontmatter:{title:"6.2 Truppanalys",id:452,path:"/6-2-truppanalys/"}}},{node:{frontmatter:{title:"6.3 Truppen 2020",id:466,path:"/6-3-truppen-2020/"}}},{node:{frontmatter:{title:"7.1 2020/21 &#8211; Dubbeln!",id:504,path:"/7-1-202021-dubbeln/"}}},{node:{frontmatter:{title:"8.1 Europeiska supercupen",id:508,path:"/8-1-europeiska-supercupen/"}}},{node:{frontmatter:{title:"8.2 2021/22",id:510,path:"/8-2-202122/"}}},{node:{frontmatter:{title:"8.3 Truppgenomgång",id:517,path:"/8-3-truppgenomgang/"}}},{node:{frontmatter:{title:"8.4 Dags att lämna skutan?",id:529,path:"/8-4-dags-att-lamna-skutan/"}}},{node:{frontmatter:{title:"9.0 Den alternativa avslutningen",id:536,path:"/9-0-den-alternativa-avslutningen/"}}},{node:{frontmatter:{title:"9.1 El triple, una vez más",id:538,path:"/9-1-el-triple-una-vez-mas/"}}},{node:{frontmatter:{title:"9.2 Truppanalys",id:545,path:"/9-2-truppanalys/"}}},{node:{frontmatter:{title:"10.1 2025/26 &#8211; 100-POÄNGSGRÄNSEN NÅDD",id:561,path:"/10-1-202526-100-poangsgransen-nadd/"}}},{node:{frontmatter:{title:"10.2 England &#8211; kval och VM&#8217;26",id:565,path:"/10-2-england-kval-och-vm26/"}}},{node:{frontmatter:{title:"11.1\t2026/27 &#8211; Poängrekord än en gång",id:574,path:"/11-1202627-poangrekord-an-en-gang/"}}},{node:{frontmatter:{title:"11.2 Truppanalys",id:576,path:"/11-2-truppanalys/"}}},{node:{frontmatter:{title:"12.1 2027/28 &#8211; Fjärde raka ligatiteln",id:578,path:"/12-1-202728-fjarde-raka-ligatiteln/"}}},{node:{frontmatter:{title:"13.1 2028/29 &#8211; Femte raka ligatiteln",id:582,path:"/13-1-202829-femte-raka-ligatiteln/"}}},{node:{frontmatter:{title:"14.1 2029/30 &#8211; Truppgenomgång",id:588,path:"/14-1-202930-truppgenomgang/"}}},{node:{frontmatter:{title:"14.2 2029/30 Cupfiaskon och ligaguld",id:594,path:"/14-2-202930-cupfiaskon-och-ligaguld/"}}},{node:{frontmatter:{title:"14.3 Everything comes to an end",id:592,path:"/14-3-everything-comes-to-an-end/"}}},{node:{frontmatter:{title:"14.4 Laggenomgång",id:598,path:"/14-4-laggenomgang/"}}},{node:{frontmatter:{title:"15.1 Serielunk och cupdramatik",id:612,path:"/15-1-serielunk-och-cupdramatik/"}}},{node:{frontmatter:{title:"16.1 Slutet för Cortés, Herrera och Rodrigues",id:620,path:"/slutet-for-cortes-herrera-och-rodrigues/"}}},{node:{frontmatter:{title:"16.2 Spelargenomgång",id:629,path:"/16-2-spelargenomgang/"}}},{node:{frontmatter:{title:"17.1 Generationsskifte",id:635,path:"/17-1-generationsskifte/"}}},{node:{frontmatter:{title:"18.1 Dos años más tarde",id:643,path:"/18-1-dos-anos-mas-tarde/"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ddce2cacd77d4f5ef9e5.js.map