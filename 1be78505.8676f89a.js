(window.webpackJsonp=window.webpackJsonp||[]).push([[49,333],{430:function(e,a,t){"use strict";t.r(a);t(13);var n=t(0),l=t.n(n),c=t(433),s=t(434),r=t(47),i=t(438),o=t(1),m=t(435),u=t.n(m),d=t(439),b=t(462),p=t(436),h=t(451),f=t(146),E=t.n(f);function k({item:e,onItemClick:a,collapsible:t}){const{items:c,href:s,label:r,type:i}=e,[m,d]=Object(n.useState)(e.collapsed),[b,f]=Object(n.useState)(null);e.collapsed!==b&&(f(e.collapsed),d(e.collapsed));const E=Object(n.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return c.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":m}),key:r},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?E:void 0},r),l.a.createElement("ul",{className:"menu__list"},c.map(e=>l.a.createElement(k,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(p.a,Object(o.a)({className:"menu__link",to:s},Object(h.a)(s)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),r))}}var g=function(e){const[a,t]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:c,logo:r={}}={}}}={}}=Object(s.a)(),i=Object(d.a)(r.src),{docsSidebars:o,path:m,sidebar:p,sidebarCollapsible:h}=e;if(Object(b.a)(a),!p)return null;const f=o[p];if(!f)throw new Error(`Cannot find the sidebar "${p}" in the sidebar config!`);return h&&f.forEach(e=>function e(a,t){const{items:n,href:l,type:c}=a;switch(c){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t}}(e,m)),l.a.createElement("div",{className:E.a.sidebar},l.a.createElement("div",{className:E.a.sidebarLogo},null!=r&&l.a.createElement("img",{src:i,alt:r.alt}),null!=c&&l.a.createElement("strong",null,c)),l.a.createElement("div",{className:u()("menu","menu--responsive",E.a.menu,{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:u()(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:E.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},f.map(e=>l.a.createElement(k,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:h})))))},_=t(450),v=t(456),w=t(453),C=t(151),N=t.n(C);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,o=a.routes.find(e=>Object(w.a)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:d}=t,b=m[o.path],{siteConfig:{themeConfig:p={}}={},isClient:h}=Object(s.a)(),{sidebarCollapsible:f=!0}=p;return 0===Object.keys(o).length?l.a.createElement(v.default,e):l.a.createElement(i.a,{version:d,key:h},l.a.createElement("div",{className:N.a.docPage},b&&l.a.createElement("div",{className:N.a.docSidebarContainer},l.a.createElement(g,{docsSidebars:u,path:o.path,sidebar:b,sidebarCollapsible:f})),l.a.createElement("main",{className:N.a.docMainContainer},l.a.createElement(c.a,{components:_.a},Object(r.a)(a.routes)))))}},456:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(438);a.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);