"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[544],{3895:function(e,t,n){var a=n(6540);n(8007);t.A=e=>{let{location:t,title:n,children:l}=e;return a.createElement("div",{className:"global-wrapper"},a.createElement("main",null,l))}},7528:function(e,t,n){var a=n(6540),l=n(8007);const r=e=>{var t,n,r;let{description:c,lang:i,title:o,children:m}=e;const{site:s}=(0,l.useStaticQuery)("2246895633"),u=c||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?`${o} | ${d}`:o),a.createElement("meta",{name:"description",content:u}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:u}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter.username)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:u}),m)};r.defaultProps={description:""},t.A=r},1250:function(e,t,n){n.r(t);var a=n(6540),l=n(8007),r=n(3895),c=n(7528);t.default=e=>{let{data:t,location:n}=e;const i=t.allMarkdownRemark.nodes;return a.createElement(r.A,{location:n},a.createElement(c.A,{title:"전체보기"})," ",a.createElement("h3",null,"전체보기")," ",a.createElement("ol",null,i.map((e=>a.createElement("li",{key:e.fields.slug},a.createElement(l.Link,{to:`${e.fields.slug}`},a.createElement("h2",null,e.frontmatter.title),a.createElement("p",null,e.frontmatter.date)))))))}}}]);
//# sourceMappingURL=component---src-pages-all-posts-js-3fa7281cb05ddcd86d4c.js.map