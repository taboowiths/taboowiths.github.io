"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[751],{3895:function(e,t,n){var a=n(6540);n(8007);t.A=e=>{let{location:t,title:n,children:l}=e;return a.createElement("div",{className:"global-wrapper"},a.createElement("main",null,l))}},6093:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(6540),l=n(8007),r=n(3895),i=n(7528);const c=e=>{let{data:{markdownRemark:t}}=e;return a.createElement(i.A,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=e=>{var t;let{data:{previous:n,next:i,site:c,markdownRemark:o},location:m}=e;const s=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(r.A,{location:m,title:s},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},o.frontmatter.title),a.createElement("p",null,o.frontmatter.date)),a.createElement("hr",null),a.createElement("section",{dangerouslySetInnerHTML:{__html:o.html},itemProp:"articleBody"}),a.createElement("hr",null)),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,n&&a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.createElement("li",null,i&&a.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →")))))}},7528:function(e,t,n){var a=n(6540),l=n(8007);const r=e=>{var t,n,r;let{description:i,lang:c,title:o,children:m}=e;const{site:s}=(0,l.useStaticQuery)("2246895633"),d=i||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?`${o} | ${u}`:o),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:d}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter.username)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:d}),m)};r.defaultProps={description:""},t.A=r}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b25419bcfc37785b1029.js.map