(window.webpackJsonp=window.webpackJsonp||[]).push([[65,129,130,131,132],{1156:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(28);function i(){var n=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return n},n}var c=t(26).c.div(i());e.default=function(n){return r.a.createElement(c,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},1157:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(28),i=t(26),c=t(6);function u(){var n=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return u=function(){return n},n}function o(){var n=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return o=function(){return n},n}var d=i.c.h3(o(),Object(c.palette)("text",0)),m=i.c.p(u(),Object(c.palette)("text",3)),s=function(n){return r.a.createElement("div",null,n.title?r.a.createElement(d,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?r.a.createElement(m,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function f(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return n},n}var p=i.c.div(f(),Object(c.palette)("border",0),"");e.default=function(n){return r.a.createElement(p,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},r.a.createElement(s,{title:n.title,subtitle:n.subtitle}),n.children)}},1158:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(28),i=t(26),c=t(6),u=t(40);function o(){var n=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return o=function(){return n},n}var d=i.c.h1(o(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),m=Object(u.a)(d);e.default=function(n){return r.a.createElement(m,{className:"isoComponentTitle"},n.children)}},1161:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(28),i=t(26),c=t(6),u=t(40);function o(){var n=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return o=function(){return n},n}var d=i.c.div(o(),function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"0":"295px"},function(n){return"rtl"===n["data-rtl"]?"295px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"8px":"0 !important"},function(n){return"rtl"===n["data-rtl"]?"0 !important":"8px"},function(n){return"rtl"===n["data-rtl"]?"0":"8px"},function(n){return"rtl"===n["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"auto":"6px"},function(n){return"rtl"===n["data-rtl"]?"6px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"0"},function(n){return n["data-rtl"],"0"},function(n){return n["data-rtl"],"0"}),m=Object(u.a)(d);e.default=function(n){return r.a.createElement(m,{className:"isoExampleWrapper",style:n.style},n.children)}},1163:function(n,e,t){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.a=a},2651:function(n,e,t){"use strict";t.r(e);var a=t(17),r=t(18),l=t(24),i=t(22),c=t(23),u=t(0),o=t.n(u),d=t(124),m=t(123),s=t(2601).a,f=t(1158),p=t(1157),h=t(1156),x=t(1161),g=t(1163),E=t(35),b=t(28),w=t(26),v=t(6),y=t(40);function j(){var n=Object(b.a)(["\n  .isoCarousalDemoContainer {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .ant-carousel {\n    .slick-slider {\n      direction: ",";\n      .slick-track {\n        left: auto;\n        right: 0;\n\n        .slick-slide {\n          text-align: center;\n          height: 160px;\n          line-height: 160px;\n          background: ",";\n          color: #fff;\n          overflow: hidden;\n          float: left !important;\n        }\n      }\n    }\n  }\n"]);return j=function(){return n},n}var O=w.c.div(j(),function(n){return"rtl"===n["data-rtl"]?"ltr":"inherit"},Object(v.palette)("secondary",4)),C=Object(y.a)(O);t.d(e,"default",function(){return B});var k=function(n){return o.a.createElement(C,null,o.a.createElement(s,n))},B=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(l.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).onChange=function(n,e,t){},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=g.a.rowStyle,e=g.a.colStyle,t=g.a.gutter;return o.a.createElement(h.default,null,o.a.createElement(f.default,null,o.a.createElement(E.a,{id:"uiElements.carousel.carousel"})),o.a.createElement(d.a,{style:n,gutter:t,justify:"start"},o.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.basicCarousel"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.basicCarouselSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(k,{afterChange:this.onChange},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4")))))),o.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.verticalCarousel"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.verticalCarouselSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(k,{afterChange:this.onChange,vertical:!0},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4"))))))),o.a.createElement(d.a,{style:n,gutter:t,justify:"start"},o.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.fadeInTransition"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.fadeInTransitionSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(k,{effect:"fade"},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4")))))),o.a.createElement(m.a,{md:12,sm:12,xs:24,style:e},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.scrollAutomatically"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.scrollAutomaticallySubTitle"})},o.a.createElement(x.default,null,o.a.createElement(k,{autoplay:!0,rtl:!0},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4"))))))))}}]),e}(u.Component)}}]);
//# sourceMappingURL=65.3b578178.chunk.js.map