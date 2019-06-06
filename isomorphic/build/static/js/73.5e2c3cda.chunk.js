(window.webpackJsonp=window.webpackJsonp||[]).push([[73,129,130,131,132],{1156:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(28);function o(){var t=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return t},t}var l=n(26).c.div(o());e.default=function(t){return a.a.createElement(l,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1157:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(28),o=n(26),l=n(6);function c(){var t=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return t},t}function s(){var t=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return t},t}var u=o.c.h3(s(),Object(l.palette)("text",0)),p=o.c.p(c(),Object(l.palette)("text",3)),f=function(t){return a.a.createElement("div",null,t.title?a.a.createElement(u,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?a.a.createElement(p,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function d(){var t=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return t},t}var h=o.c.div(d(),Object(l.palette)("border",0),"");e.default=function(t){return a.a.createElement(h,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},a.a.createElement(f,{title:t.title,subtitle:t.subtitle}),t.children)}},1158:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(28),o=n(26),l=n(6),c=n(40);function s(){var t=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return t},t}var u=o.c.h1(s(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(l.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),p=Object(c.a)(u);e.default=function(t){return a.a.createElement(p,{className:"isoComponentTitle"},t.children)}},1159:function(t,e,n){"use strict";var r=n(110),a=n.n(r)()({});e.a=a},1160:function(t,e){t.exports={isFunction:function(t){return"function"===typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,r=t.length;n<r&&!1!==e(t[n],n);n++);}}},1161:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(28),o=n(26),l=n(6),c=n(40);function s(){var t=Object(i.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return s=function(){return t},t}var u=o.c.div(s(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(l.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),p=Object(c.a)(u);e.default=function(t){return a.a.createElement(p,{className:"isoExampleWrapper",style:t.style},t.children)}},1163:function(t,e,n){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.a=r},1164:function(t,e,n){var r=n(1165);t.exports=new r},1165:function(t,e,n){var r=n(1166),a=n(1160),i=a.each,o=a.isFunction,l=a.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(t,e,n){var a=this.queries,c=n&&this.browserIsIncapable;return a[t]||(a[t]=new r(t,c)),o(e)&&(e={match:e}),l(e)||(e=[e]),i(e,function(e){o(e)&&(e={match:e}),a[t].addHandler(e)}),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=c},1166:function(t,e,n){var r=n(1167),a=n(1160).each;function i(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(t){var e=new r(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;a(e,function(n,r){if(n.equals(t))return n.destroy(),!e.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";a(this.handlers,function(e){e[t]()})}},t.exports=i},1167:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},1173:function(t,e,n){"use strict";var r=n(28),a=n(26),i=n(6),o=n(40);function l(){var t=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .isoChartControl {\n    display: flex;\n    align-items: center;\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: 20px;\n\n    span {\n      font-size: 13px;\n      color: ",";\n      font-weight: 400;\n      margin-right: ",";\n      margin-left: ",";\n    }\n\n    button {\n      border: 1px solid ",";\n      padding: 0 10px;\n      border-radius: 0;\n      position: relative;\n\n      span {\n        margin: 0;\n      }\n\n      &:last-child {\n        margin-left: ",";\n        margin-right: ",";\n      }\n\n      &:hover {\n        color: ",";\n        border-color: ",";\n        z-index: 1;\n\n        span {\n          color: ",";\n        }\n      }\n    }\n  }\n"]);return l=function(){return t},t}var c=a.c.div(l(),function(t){return"rtl"===t["data-rtl"]?"inherit":"auto"},function(t){return"rtl"===t["data-rtl"]?"auto":"inherit"},Object(i.palette)("text",1),function(t){return"rtl"===t["data-rtl"]?"inherit":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"inherit"},Object(i.palette)("border",0),function(t){return"rtl"===t["data-rtl"]?"inherit":"-1px"},function(t){return"rtl"===t["data-rtl"]?"-1px":"inherit"},Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0));e.a=Object(o.a)(c)},1219:function(t,e,n){"use strict";var r=n(3),a=n.n(r),i=n(48),o=n(17),l=n(18),c=n(24),s=n(22),u=n(23),p=n(0),f=n.n(p),d=n(420),h=n.n(d),m=(n(628),function(t){function e(){var t,n;Object(o.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).state={Component:void 0},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentDidMount",value:function(){var t=Object(i.a)(a.a.mark(function t(){var e,n,r,i,o,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.mounted=!0,e=this.props.componentArguement,t.t0=e,t.next="googleChart"===t.t0?5:11;break;case 5:return t.next=7,this.props.load;case 7:return r=t.sent,i=r.Chart,n=i,t.abrupt("break",16);case 11:return t.next=13,this.props.load;case 13:o=t.sent,l=o.default,n=l;case 16:this.mounted&&this.setState({Component:f.a.createElement(n,this.props.componentProps)});case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.Component||f.a.createElement("div",null);try{if(this.mounted)return f.a.createElement(h.a,{type:"text",rows:7,ready:void 0!==t},t)}catch(e){}return f.a.createElement("div",null)}}]),e}(p.Component));e.a=m},123:function(t,e,n){"use strict";var r=n(125);e.a=r.a},124:function(t,e,n){"use strict";var r=n(126);e.a=r.a},125:function(t,e,n){"use strict";n.d(e,"a",function(){return x});var r=n(0),a=n(1),i=n(16),o=n.n(i),l=n(1159),c=n(31);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&(n[r[a]]=t[r[a]])}return n},g=a.oneOfType([a.object,a.number]),x=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=d(this,h(e).apply(this,arguments))).renderCol=function(e){var n,a=e.getPrefixCls,i=t.props,c=i.prefixCls,f=i.span,d=i.order,h=i.offset,m=i.push,g=i.pull,x=i.className,b=i.children,w=y(i,["prefixCls","span","order","offset","push","pull","className","children"]),v=a("col",c),E={};["xs","sm","md","lg","xl","xxl"].forEach(function(t){var e,n={};"number"===typeof i[t]?n.span=i[t]:"object"===p(i[t])&&(n=i[t]||{}),delete w[t],E=u({},E,(s(e={},"".concat(v,"-").concat(t,"-").concat(n.span),void 0!==n.span),s(e,"".concat(v,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),s(e,"".concat(v,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),s(e,"".concat(v,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),s(e,"".concat(v,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),e))});var S=o()(v,(s(n={},"".concat(v,"-").concat(f),void 0!==f),s(n,"".concat(v,"-order-").concat(d),d),s(n,"".concat(v,"-offset-").concat(h),h),s(n,"".concat(v,"-push-").concat(m),m),s(n,"".concat(v,"-pull-").concat(g),g),n),x,E);return r.createElement(l.a.Consumer,null,function(t){var e=t.gutter,n=w.style;return e>0&&(n=u({paddingLeft:e/2,paddingRight:e/2},n)),r.createElement("div",u({},w,{style:n,className:S}),b)})},t}var n,a,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){return r.createElement(c.a,null,this.renderCol)}}])&&f(n.prototype,a),i&&f(n,i),e}();x.propTypes={span:a.number,order:a.number,offset:a.number,push:a.number,pull:a.number,className:a.string,children:a.node,xs:g,sm:g,md:g,lg:g,xl:g,xxl:g}},126:function(t,e,n){"use strict";var r,a=n(31),i=n(0),o=n(16),l=n.n(o),c=n(1),s=n(1159),u=n(116);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}if("undefined"!==typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},r=n(1164)}var d=["xxl","xl","lg","md","sm","xs"],h={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},m=[],y=-1,g={},x={dispatch:function(t){return g=t,!(m.length<1)&&(m.forEach(function(t){t.func(g)}),!0)},subscribe:function(t){0===m.length&&this.register();var e=(++y).toString();return m.push({token:e,func:t}),t(g),e},unsubscribe:function(t){0===(m=m.filter(function(e){return e.token!==t})).length&&this.unregister()},unregister:function(){Object.keys(h).map(function(t){return r.unregister(h[t])})},register:function(){var t=this;Object.keys(h).map(function(e){return r.register(h[e],{match:function(){var n=f({},g,p({},e,!0));t.dispatch(n)},unmatch:function(){var n=f({},g,p({},e,!1));t.dispatch(n)},destroy:function(){}})})}};function b(t){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",function(){return k});var C=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&(n[r[a]]=t[r[a]])}return n},j=Object(u.a)("top","middle","bottom"),T=Object(u.a)("start","end","center","space-around","space-between"),k=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=S(this,O(e).apply(this,arguments))).state={screens:{}},t.renderRow=function(e){var n,r=e.getPrefixCls,a=t.props,o=a.prefixCls,c=a.type,u=a.justify,p=a.align,f=a.className,d=a.style,h=a.children,m=C(a,["prefixCls","type","justify","align","className","style","children"]),y=r("row",o),g=t.getGutter(),x=l()((v(n={},y,!c),v(n,"".concat(y,"-").concat(c),c),v(n,"".concat(y,"-").concat(c,"-").concat(u),c&&u),v(n,"".concat(y,"-").concat(c,"-").concat(p),c&&p),n),f),b=g>0?w({marginLeft:g/-2,marginRight:g/-2},d):d,E=w({},m);return delete E.gutter,i.createElement(s.a.Provider,{value:{gutter:g}},i.createElement("div",w({},E,{className:x,style:b}),h))},t}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,i["Component"]),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;this.token=x.subscribe(function(e){"object"===b(t.props.gutter)&&t.setState({screens:e})})}},{key:"componentWillUnmount",value:function(){x.unsubscribe(this.token)}},{key:"getGutter",value:function(){var t=this.props.gutter;if("object"===b(t))for(var e=0;e<d.length;e++){var n=d[e];if(this.state.screens[n]&&void 0!==t[n])return t[n]}return t}},{key:"render",value:function(){return i.createElement(a.a,null,this.renderRow)}}])&&E(n.prototype,r),o&&E(n,o),e}();k.defaultProps={gutter:0},k.propTypes={type:c.oneOf(["flex"]),align:c.oneOf(j),justify:c.oneOf(T),className:c.string,children:c.node,gutter:c.oneOfType([c.object,c.number]),prefixCls:c.string}},1446:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"p",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"h",function(){return c}),n.d(e,"i",function(){return s}),n.d(e,"a",function(){return u}),n.d(e,"d",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return d}),n.d(e,"j",function(){return h}),n.d(e,"k",function(){return m}),n.d(e,"l",function(){return y}),n.d(e,"m",function(){return g}),n.d(e,"n",function(){return x}),n.d(e,"g",function(){return b}),n.d(e,"o",function(){return w});var r="100%",a="400px",i={title:"BarChart",key:"BarChart",chartType:"BarChart",width:r,height:a,data:[["Year","Trafic",{role:"style"}],["2010",1e4,"fill-color: #48A6F2; fill-opacity: 0.4"],["2012",21500,"fill-color: #f64744; fill-opacity: 0.4"],["2014",56598,"fill-color: #ffbf00; fill-opacity: 0.4"],["2016",85256,"fill-color: #511E78; fill-opacity: 0.4"]],options:{title:"Visitor statistics from 2010 to 2016",titleTextStyle:{color:"#788195"},bar:{groupWidth:"95%"},legend:{position:"none"},animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},tooltip:{textStyle:{color:"#788195"}}},chartEvents:[{eventName:"onmouseover"}]},o={title:"Line Chart",chartType:"LineChart",key:"LineChart",width:r,height:a,columns:[{label:"time",type:"number"},{label:"Air Passengers",type:"number"}],rows:[[1949,11],[1949.08333333333,11],[1949.16666666667,13],[1949.25,12],[1949.33333333333,12],[1949.41666666667,13],[1949.5,14],[1949.58333333333,14],[1949.66666666667,136],[1949.75,119],[1949.83333333333,104],[1949.91666666667,118],[1950,115],[1950.08333333333,126],[1950.16666666667,141],[1950.25,135],[1950.33333333333,125],[1950.41666666667,149],[1950.5,170],[1950.58333333333,170],[1950.66666666667,158],[1950.75,133],[1950.83333333333,114],[1950.91666666667,140],[1951,145],[1951.08333333333,150],[1951.16666666667,178],[1951.25,163],[1951.33333333333,172],[1951.41666666667,178],[1951.5,199],[1951.58333333333,199],[1951.66666666667,184],[1951.75,162],[1951.83333333333,146],[1951.91666666667,166],[1952,171],[1952.08333333333,180],[1952.16666666667,193],[1952.25,181],[1952.33333333333,183],[1952.41666666667,218],[1952.5,230],[1952.58333333333,242],[1952.66666666667,209],[1952.75,191],[1952.83333333333,172],[1952.91666666667,194],[1953,196],[1953.08333333333,196],[1953.16666666667,236],[1953.25,235],[1953.33333333333,229],[1953.41666666667,243],[1953.5,264],[1953.58333333333,272],[1953.66666666667,237],[1953.75,211],[1953.83333333333,180],[1953.91666666667,201],[1954,204],[1954.08333333333,188],[1954.16666666667,235],[1954.25,227],[1954.33333333333,234],[1954.41666666667,264],[1954.5,302],[1954.58333333333,293],[1954.66666666667,259],[1954.75,229],[1954.83333333333,203],[1954.91666666667,229],[1955,242],[1955.08333333334,233],[1955.16666666667,267],[1955.25,269],[1955.33333333334,270],[1955.41666666667,315],[1955.5,364],[1955.58333333334,347],[1955.66666666667,312],[1955.75,274],[1955.83333333334,237],[1955.91666666667,278],[1956,284],[1956.08333333334,277],[1956.16666666667,317],[1956.25,313],[1956.33333333334,318],[1956.41666666667,374],[1956.5,413],[1956.58333333334,405],[1956.66666666667,355],[1956.75,306],[1956.83333333334,271],[1956.91666666667,306],[1957,315],[1957.08333333334,301],[1957.16666666667,356],[1957.25,348],[1957.33333333334,355],[1957.41666666667,422],[1957.5,465],[1957.58333333334,467],[1957.66666666667,404],[1957.75,347],[1957.83333333334,305],[1957.91666666667,336],[1958,340],[1958.08333333334,318],[1958.16666666667,362],[1958.25,348],[1958.33333333334,363],[1958.41666666667,435],[1958.5,491],[1958.58333333334,505],[1958.66666666667,404],[1958.75,359],[1958.83333333334,310],[1958.91666666667,337],[1959,360],[1959.08333333334,342],[1959.16666666667,406],[1959.25,396],[1959.33333333334,420],[1959.41666666667,472],[1959.5,548],[1959.58333333334,559],[1959.66666666667,463],[1959.75,407],[1959.83333333334,362],[1959.91666666667,405],[1960,417],[1960.08333333334,391],[1960.16666666667,419],[1960.25,461],[1960.33333333334,472],[1960.41666666667,535],[1960.5,622],[1960.58333333334,606],[1960.66666666667,508],[1960.75,461],[1960.83333333334,390],[1960.91666666667,432]],options:{legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Time",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Air Passengers",titleTextStyle:{color:"#788195"}},colors:["#48A6F2"],dataOpacity:1,animation:{duration:1e3,easing:"in",startup:!0},tooltip:{textStyle:{color:"#788195"}}}},l={title:"Bubble Chart",key:"BubbleChart",chartType:"BubbleChart",width:r,height:a,data:[["ID","Life Expectancy","Fertility Rate","Region","Population"],["CAN",80.66,1.67,"North America",33739900],["DEU",79.84,1.36,"Europe",81902307],["DNK",78.6,1.84,"Europe",5523095],["EGY",72.73,2.78,"Middle East",79716203],["GBR",80.05,2,"Europe",61801570],["IRN",72.49,1.7,"Middle East",73137148],["IRQ",68.09,4.77,"Middle East",31090763],["ISR",81.55,2.96,"Middle East",7485600],["RUS",68.6,1.54,"Europe",14185e4],["USA",78.09,2.05,"North America",307007e3]],options:{title:"Correlation between life expectancy, fertility rate and population of some world countries (2010)",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Life Expectancy",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Fertility Rate",titleTextStyle:{color:"#788195"}},bubble:{opacity:.6,stroke:"#ffffff",textStyle:{fontSize:11,color:"#788195"}},tooltip:{textStyle:{color:"#788195"}},colors:["#48A6F2","#F55F82","#ffbf00"],animation:{duration:1e3,easing:"in",startup:!0}}},c={title:"Histogram",key:"Histogram",chartType:"Histogram",width:r,height:a,data:[["Dinosaur","Length"],["Acrocanthosaurus (top-spined lizard)",12.2],["Albertosaurus (Alberta lizard)",9.1],["Allosaurus (other lizard)",12.2],["Apatosaurus (deceptive lizard)",22.9],["Archaeopteryx (ancient wing)",.9],["Argentinosaurus (Argentina lizard)",36.6],["Baryonyx (heavy claws)",9.1],["Brachiosaurus (arm lizard)",30.5],["Ceratosaurus (horned lizard)",6.1],["Coelophysis (hollow form)",2.7],["Compsognathus (elegant jaw)",.9],["Deinonychus (terrible claw)",2.7],["Diplodocus (double beam)",27.1],["Dromicelomimus (emu mimic)",3.4],["Gallimimus (fowl mimic)",5.5],["Mamenchisaurus (Mamenchi lizard)",21],["Megalosaurus (big lizard)",7.9],["Microvenator (small hunter)",1.2],["Ornithomimus (bird mimic)",4.6],["Oviraptor (egg robber)",1.5],["Plateosaurus (flat lizard)",7.9],["Sauronithoides (narrow-clawed lizard)",2],["Seismosaurus (tremor lizard)",45.7],["Spinosaurus (spiny lizard)",12.2],["Supersaurus (super lizard)",30.5],["Tyrannosaurus (tyrant lizard)",15.2],["Ultrasaurus (ultra lizard)",30.5],["Velociraptor (swift robber)",1.8]],options:{title:"Lengths of dinosaurs, in meters",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},colors:["#511E78"],dataOpacity:.6,animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},tooltip:{textStyle:{color:"#788195"}}}},s={title:"Scatter Chart",key:"ScatterChart",chartType:"ScatterChart",width:r,height:a,data:[["Age","Weight"],[8,12],[4,10.5],[11,14],[4,5],[3,3.5],[6.5,7],[8,11],[12,8],[9.5,14],[6.5,12]],options:{title:"Age vs. Weight Comparison",titleTextStyle:{color:"#788195"},hAxis:{title:"Age",titleTextStyle:{color:"#788195"},minValue:0,maxValue:15,textStyle:{color:"#788195"}},vAxis:{title:"Weight",titleTextStyle:{color:"#788195"},minValue:0,maxValue:15,textStyle:{color:"#788195"}},legend:"none",colors:["#42A5F5"],dataOpacity:.8,tooltip:{textStyle:{color:"#788195"}}}},u={title:"Area Chart",key:"AreaChart",chartType:"AreaChart",width:r,height:a,data:[["Year","Sales","Expenses"],["2013",1e3,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]],options:{legend:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},colors:["#48A6F2","#511E78"],dataOpacity:.6,tooltip:{textStyle:{color:"#788195"}}}},p={title:"Candlestick Chart",key:"CandlestickChart",chartType:"CandlestickChart",width:r,height:a,data:[["DAY","val1","val2","val3","val4"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{title:"Visitors Per Day",titleTextStyle:{color:"#788195"},legend:"none",hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#48A6F2"],tooltip:{textStyle:{color:"#788195"}}}},f={title:"Combo Chart",key:"ComboChart",chartType:"ComboChart",width:r,height:a,data:[["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",165,938,522,998,450,614.6],["2005/06",135,1120,599,1268,288,682],["2006/07",157,1167,587,807,397,623],["2007/08",139,1110,615,968,215,609.4],["2008/09",136,691,629,1026,366,569.6]],options:{title:"Monthly Coffee Production by Country",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Cups",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Month",titleTextStyle:{color:"#788195"}},seriesType:"bars",series:{5:{type:"line"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#00b16a","#ff6384","#511E78","#01C0C8","#ffbf00","#48A6F2"],dataOpacity:.6,tooltip:{textStyle:{color:"#788195"}}}},d={title:"Donut Chart",key:"DonutChart",chartType:"PieChart",width:r,height:a,data:[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]],options:{title:"My Daily Activities",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},pieHole:.4,pieSliceTextStyle:{color:"#ffffff"},is3D:!0,colors:["#9678AE","#F99FB4","#C8E4FB","#01C0C8","#ffbf00"],tooltip:{textStyle:{color:"#788195"}}}},h={title:"Stepped Area Chart",key:"SteppedAreaChart",chartType:"SteppedAreaChart",width:r,height:a,data:[["Director (Year)","Rotten Tomatoes","IMDB"],["Alfred Hitchcock (1935)",8.4,7.9],["Ralph Thomas (1959)",6.9,6.5],["Don Sharp (1978)",6.5,6.4],["James Hawes (2008)",4.4,6.2]],options:{title:"The decline of The 39 Steps",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#511E78","#F55F82"],hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Accumulated Rating",titleTextStyle:{color:"#788195"}},isStacked:!0,tooltip:{textStyle:{color:"#788195"}}}},m={title:"Timeline",key:"Timeline",chartType:"Timeline",chartPackage:"timeline",width:r,height:a,columns:[{id:"Term",type:"string"},{id:"President",type:"string"},{id:"Start",type:"date"},{id:"End",type:"date"}],rows:[["1","Washington",new Date("1789-04-29T18:00:00.000Z"),new Date("1797-03-03T18:00:00.000Z")],["2","Adams",new Date("1797-03-03T18:00:00.000Z"),new Date("1801-03-03T18:00:00.000Z")],["3","Jefferson",new Date("1801-03-03T18:00:00.000Z"),new Date("1809-03-03T18:00:00.000Z")]],options:{colors:["#ffbf00","#F55F82","#48A6F2"],tooltip:{textStyle:{color:"#788195"}}}},y={title:"TreeMap",key:"TreeMap",chartType:"TreeMap",chartPackages:["treemap"],width:r,height:a,data:[["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,0,0],["America","Global",0,0],["Europe","Global",0,0],["Asia","Global",0,0],["Australia","Global",0,0],["Africa","Global",0,0],["Brazil","America",11,10],["USA","America",52,31],["Mexico","America",24,12],["Canada","America",16,-23],["France","Europe",42,-11],["Germany","Europe",31,-2],["Sweden","Europe",22,-13],["Italy","Europe",17,4],["UK","Europe",21,-5],["China","Asia",36,4],["Japan","Asia",20,-12],["India","Asia",40,63],["Laos","Asia",4,34],["Mongolia","Asia",1,-5],["Israel","Asia",12,24],["Iran","Asia",18,13],["Pakistan","Asia",11,-52],["Egypt","Africa",21,0],["S. Africa","Africa",30,43],["Sudan","Africa",12,2],["Congo","Africa",10,12],["Zaire","Africa",8,10]],options:{minColor:"#511E78",midColor:"#C8E4FB",maxColor:"#48A6F2"}},g={title:"TrendLines",key:"TrendLines",chartType:"ScatterChart",width:r,height:a,data:[["Diameter","Age"],[8,37],[4,19.5],[11,52],[4,22],[3,16.5],[6.5,32.8],[14,72]],options:{title:"Age of sugar maples vs. trunk diameter, in inches",titleTextStyle:{color:"#788195"},hAxis:{textStyle:{color:"#788195"},title:"Diameter",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Age",titleTextStyle:{color:"#788195"}},legend:"none",trendlines:{0:{type:"exponential",colors:"#48A6F2"}},tooltip:{textStyle:{color:"#788195"}}}},x={title:"Waterfall",key:"Waterfall",chartType:"CandlestickChart",width:r,height:a,data:[["DAY","val1","val2","val3","val4"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{legend:"none",bar:{groupWidth:"100%"},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},tooltip:{textStyle:{color:"#788195"}},candlestick:{fallingColor:{strokeWidth:0,fill:"#F55F82"},risingColor:{strokeWidth:0,fill:"#48A6F2"}}}},b={title:"Gantt",key:"Gantt",chartType:"Gantt",chartPackages:["gantt"],width:r,height:a,columns:[{id:"Task ID",type:"string"},{id:"Task Name",type:"string"},{id:"Start Date",type:"date"},{id:"End Date",type:"date"},{id:"Duration",type:"number"},{id:"Percent Complete",type:"number"},{id:"Dependencies",type:"string"}],rows:[["Research","Find sources",new Date("2014-12-31T18:00:00.000Z"),new Date("2015-01-04T18:00:00.000Z"),null,100,null],["Write","Write paper",null,new Date("2015-01-08T18:00:00.000Z"),2592e5,25,"Research,Outline"],["Cite","Create bibliography",null,new Date("2015-01-06T18:00:00.000Z"),864e5,20,"Research"],["Complete","Hand in paper",null,new Date("2015-01-09T18:00:00.000Z"),864e5,0,"Cite,Write"],["Outline","Outline paper",null,new Date("2015-01-05T18:00:00.000Z"),864e5,100,"Research"]],options:{tooltip:{textStyle:{color:"#788195"}},gantt:{criticalPathEnabled:!1,arrow:{angle:100,width:2,color:"#9678AE",radius:0}}}},w={title:"WordTree",key:"WordTree",chartType:"WordTree",chartPackages:["wordtree"],width:r,height:a,data:[["Phrases"],["cats are better than dogs"],["cats eat kibble"],["cats are better than hamsters"],["cats are awesome"],["cats are people too"],["cats eat mice"],["cats meowing"],["cats in the cradle"],["cats eat mice"],["cats in the cradle lyrics"],["cats eat kibble"],["cats for adoption"],["cats are family"],["cats eat mice"],["cats are better than kittens"],["cats are evil"],["cats are weird"],["cats eat mice"]],options:{tooltip:{textStyle:{color:"#788195"}},wordtree:{format:"implicit",word:"cats"}}}},1679:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return v}),n.d(e,"GoogleChart",function(){return w});var r=n(17),a=n(18),i=n(24),o=n(22),l=n(23),c=n(0),s=n.n(c),u=n(1219),p=n(124),f=n(123),d=n(1158),h=n(1157),m=n(1156),y=n(1161),g=n(1163),x=n(1446),b=n(1173),w=function(t){return s.a.createElement(b.a,null,s.a.createElement(u.a,{load:n.e(166).then(n.bind(null,1866)),componentProps:t,componentArguement:"googleChart"}))},v=function(t){function e(){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){var t=g.a.rowStyle,e=g.a.colStyle,n=g.a.gutter;return s.a.createElement(m.default,{className:"isoMapPage"},s.a.createElement(d.default,null,"Google Charts"),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.b.title},s.a.createElement(y.default,null,s.a.createElement(w,Object.assign({},x.b,{chartEvents:[{eventName:"select",callback:function(t){}}]}))))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.p.title},s.a.createElement(y.default,null,s.a.createElement(w,x.p))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.c.title},s.a.createElement(y.default,null,s.a.createElement(w,x.c)))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.h.title},s.a.createElement(y.default,null,s.a.createElement(w,x.h))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.i.title},s.a.createElement(y.default,null,s.a.createElement(w,x.i)))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.a.title},s.a.createElement(y.default,null,s.a.createElement(w,x.a))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.d.title},s.a.createElement(y.default,null,s.a.createElement(w,x.d)))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.e.title},s.a.createElement(y.default,null,s.a.createElement(w,x.e))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.f.title},s.a.createElement(y.default,null,s.a.createElement(w,x.f)))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.j.title},s.a.createElement(y.default,null,s.a.createElement(w,x.j))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.k.title},s.a.createElement(y.default,null,s.a.createElement(w,x.k)))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.l.title},s.a.createElement(y.default,null,s.a.createElement(w,x.l))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.m.title},s.a.createElement(y.default,null,s.a.createElement(w,x.m)))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.n.title},s.a.createElement(y.default,null,s.a.createElement(w,x.n))))),s.a.createElement(p.a,{style:t,gutter:n,justify:"start"},s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.g.title},s.a.createElement(y.default,null,s.a.createElement(w,x.g)))),s.a.createElement(f.a,{md:12,xs:24,style:e},s.a.createElement(h.default,{title:x.o.title},s.a.createElement(y.default,null,s.a.createElement(w,x.o))))))}}]),e}(c.Component)}}]);
//# sourceMappingURL=73.5e2c3cda.chunk.js.map