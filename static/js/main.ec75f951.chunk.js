(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a(45)},33:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},34:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},41:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},43:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),r=a(20),n=a.n(r),s=a(11),o=a(6),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(s.a,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),p=a(16),b=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),n=r[0],s=r[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",E)),b())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",E))},h=Object(p.throttle)((function(){f(),b()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),b()}),[n]),l.a.createElement(l.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var f=b,h=(a(46),a(1)),E=a.n(h),g=a(8),N=function(e){var t=e.className,a=e.src,r=e.width,n=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){f(b.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:r,height:n,alt:s,onLoad:function(){p(!0)}}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=N,w=function(e){var t=e.className,i=Object(c.a)(e,["className"]),r=E()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:r}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(g.a,{to:"/"},l.a.createElement(O,{src:a(33),alt:"Open",width:32,height:32}))))},x=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],b=v[1],f=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&N(),document.addEventListener("keydown",x),document.addEventListener("click",D),function(){document.removeEventListener("keydown",x),document.addEventListener("click",D),O()}}));var N=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",b(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),b(!1)},x=function(e){p&&27===e.keyCode&&O()},D=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==h.current&&O()},j=E()("site-header",s&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},m,{className:j}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement(w,null),!r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:p?O:N},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:f,className:E()("header-nav",p&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(g.a,{to:"#0",onClick:O},"Projects"))),!n&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(g.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:O},"Contact")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var D=x,j=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(g.a,{to:"#0"},"Contact")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"#0"},"Projects")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"#0"},"Support"))))},y=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"}))},k=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),n=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},r,{className:n}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(w,null),l.a.createElement(y,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(j,null),l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var C=k,L=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(C,null))},F=a(5),q={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},P={types:Object(F.a)({},q.types),defaults:Object(F.a)({},q.defaults)},H={types:Object(F.a)({},q.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(F.a)({},q.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},B={types:Object(F.a)({},q.types,{pushLeft:v.a.bool}),defaults:Object(F.a)({},q.defaults,{pushLeft:!1})},A=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:i}))},R=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,n=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",i&&"button-".concat(i),r&&"button-".concat(r),n&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};R.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var S=R,M=function(e){var t=e.className,a=e.children,r=e.handleClose,n=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},b=E()("modal",n&&"is-active",o&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement("div",Object.assign({},d,{className:b,onClick:r}),l.a.createElement("div",{className:"modal-inner",onClick:p},o?l.a.createElement("div",{className:"responsive-video"},"iframe"===m?l.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:o})):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),l.a.createElement("div",{className:"modal-content"},a)))))};M.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var z=M,T=Object(F.a)({},P.defaults),W=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),f=b[0],h=b[1],g=E()("hero section center-content",r&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=E()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},v,{className:g}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:N},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Ryan ",l.a.createElement("span",{className:"text-color-primary"},"Premi")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Developer | Consultant | Entrepreneur"),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(A,null,l.a.createElement(S,{tag:"a",color:"primary",wideMobile:!0,href:"https://www.linkedin.com/in/ryan-premi/"},"LinkedIn"),l.a.createElement(S,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/rpremi12/"},"Github"))))),l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},l.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),h(!0)}},l.a.createElement(O,{className:"has-shadow",src:a(34),alt:"Hero",width:896,height:504}))),l.a.createElement(z,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),h(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};W.defaultProps=T;var I=W,G=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,n=Object(c.a)(e,["className","data","children","tag"]),s=E()("section-header",t),o=r;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},n,{className:s}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(o,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};G.defaultProps={children:null,tag:"h2"};var U=G,J=Object(F.a)({},B.defaults),V=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=E()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),b=E()("tiles-wrap center-content",d&&"push-left");return l.a.createElement("section",Object.assign({},u,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:p},l.a.createElement(U,{data:{title:"Projects",paragraph:""},className:"center-content"}),l.a.createElement("div",{className:b},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(35),alt:"Features tile icon 01",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(37),alt:"Features tile icon 03",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(38),alt:"Features tile icon 04",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(39),alt:"Features tile icon 05",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(40),alt:"Features tile icon 06",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};V.defaultProps=J;var Y=V,$=Object(F.a)({},H.defaults),K=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=E()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=E()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},b,{className:f}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:h},l.a.createElement(U,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:g},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(41),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(42),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(43),alt:"Features split 03",width:528,height:396})))))))};K.defaultProps=$;var Q=K,X=Object(F.a)({},B.defaults),Z=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),p=E()("tiles-wrap",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(U,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};Z.defaultProps=X;var _=Z,ee=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,n=Object(c.a)(e,["className","children","labelHidden","id"]),s=E()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},n,{className:s,htmlFor:r}),a)};ee.defaultProps={children:null,labelHidden:!1,id:null};var te=ee,ae=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,["children","className","status"]),n=E()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},r,{className:n}),t)};ae.defaultProps={children:null,status:!1};var ie=ae,le=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,n=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,f=e.rows,h=e.hint,g=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=E()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),w="textarea"===n?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(te,{labelHidden:r,id:g.id},i),l.a.createElement("div",{className:N},l.a.createElement(w,Object.assign({},g,{type:"textarea"!==n?n:null,className:O,name:s,disabled:m,value:d,placeholder:b,rows:"textarea"===n?f:null})),a),h&&l.a.createElement(ie,{status:o},h))};le.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var re=le,ne=Object(F.a)({},P.defaults,{split:!1}),se=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"Want to contact me?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(re,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your email",required:!0},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};se.defaultProps=ne;var oe=se,ce=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{className:"illustration-section-01"}),l.a.createElement(Y,null),l.a.createElement(Q,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement(_,{topDivider:!0}),l.a.createElement(oe,{split:!0}))},me=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){t.pathname;document.body.classList.add("is-loaded"),e.current.init()}),[t]),l.a.createElement(f,{ref:e,children:function(){return l.a.createElement(s.c,null,l.a.createElement(m,{exact:!0,path:"/ryanpremi",component:ce,layout:L}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var de=Object(o.a)();n.a.render(l.a.createElement(s.b,{history:de},l.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ec75f951.chunk.js.map