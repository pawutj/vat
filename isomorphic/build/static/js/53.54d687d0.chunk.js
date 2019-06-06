(window.webpackJsonp=window.webpackJsonp||[]).push([[53,129,130,131,132],{1156:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(28);function i(){var t=Object(o.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return t},t}var c=e(26).c.div(i());n.default=function(t){return a.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1157:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(28),i=e(26),c=e(6);function l(){var t=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return l=function(){return t},t}function s(){var t=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return t},t}var u=i.c.h3(s(),Object(c.palette)("text",0)),f=i.c.p(l(),Object(c.palette)("text",3)),p=function(t){return a.a.createElement("div",null,t.title?a.a.createElement(u,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?a.a.createElement(f,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function d(){var t=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return t},t}var h=i.c.div(d(),Object(c.palette)("border",0),"");n.default=function(t){return a.a.createElement(h,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},a.a.createElement(p,{title:t.title,subtitle:t.subtitle}),t.children)}},1158:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(28),i=e(26),c=e(6),l=e(40);function s(){var t=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return t},t}var u=i.c.h1(s(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),f=Object(l.a)(u);n.default=function(t){return a.a.createElement(f,{className:"isoComponentTitle"},t.children)}},1159:function(t,n,e){"use strict";var r=e(110),a=e.n(r)()({});n.a=a},1160:function(t,n){t.exports={isFunction:function(t){return"function"===typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,n){for(var e=0,r=t.length;e<r&&!1!==n(t[e],e);e++);}}},1161:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(28),i=e(26),c=e(6),l=e(40);function s(){var t=Object(o.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return s=function(){return t},t}var u=i.c.div(s(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),f=Object(l.a)(u);n.default=function(t){return a.a.createElement(f,{className:"isoExampleWrapper",style:t.style},t.children)}},1163:function(t,n,e){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.a=r},1164:function(t,n,e){var r=e(1165);t.exports=new r},1165:function(t,n,e){var r=e(1166),a=e(1160),o=a.each,i=a.isFunction,c=a.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(t,n,e){var a=this.queries,l=e&&this.browserIsIncapable;return a[t]||(a[t]=new r(t,l)),i(n)&&(n={match:n}),c(n)||(n=[n]),o(n,function(n){i(n)&&(n={match:n}),a[t].addHandler(n)}),this},unregister:function(t,n){var e=this.queries[t];return e&&(n?e.removeHandler(n):(e.clear(),delete this.queries[t])),this}},t.exports=l},1166:function(t,n,e){var r=e(1167),a=e(1160).each;function o(t,n){this.query=t,this.isUnconditional=n,this.handlers=[],this.mql=window.matchMedia(t);var e=this;this.listener=function(t){e.mql=t.currentTarget||t,e.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(t){var n=new r(t);this.handlers.push(n),this.matches()&&n.on()},removeHandler:function(t){var n=this.handlers;a(n,function(e,r){if(e.equals(t))return e.destroy(),!n.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";a(this.handlers,function(n){n[t]()})}},t.exports=o},1167:function(t,n){function e(t){this.options=t,!t.deferSetup&&this.setup()}e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=e},123:function(t,n,e){"use strict";var r=e(125);n.a=r.a},124:function(t,n,e){"use strict";var r=e(126);n.a=r.a},125:function(t,n,e){"use strict";e.d(n,"a",function(){return x});var r=e(0),a=e(1),o=e(16),i=e.n(o),c=e(1159),l=e(31);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,n){return!n||"object"!==f(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,n){return(m=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var b=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&(e[r[a]]=t[r[a]])}return e},g=a.oneOfType([a.object,a.number]),x=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=d(this,h(n).apply(this,arguments))).renderCol=function(n){var e,a=n.getPrefixCls,o=t.props,l=o.prefixCls,p=o.span,d=o.order,h=o.offset,m=o.push,g=o.pull,x=o.className,y=o.children,v=b(o,["prefixCls","span","order","offset","push","pull","className","children"]),w=a("col",l),O={};["xs","sm","md","lg","xl","xxl"].forEach(function(t){var n,e={};"number"===typeof o[t]?e.span=o[t]:"object"===f(o[t])&&(e=o[t]||{}),delete v[t],O=u({},O,(s(n={},"".concat(w,"-").concat(t,"-").concat(e.span),void 0!==e.span),s(n,"".concat(w,"-").concat(t,"-order-").concat(e.order),e.order||0===e.order),s(n,"".concat(w,"-").concat(t,"-offset-").concat(e.offset),e.offset||0===e.offset),s(n,"".concat(w,"-").concat(t,"-push-").concat(e.push),e.push||0===e.push),s(n,"".concat(w,"-").concat(t,"-pull-").concat(e.pull),e.pull||0===e.pull),n))});var j=i()(w,(s(e={},"".concat(w,"-").concat(p),void 0!==p),s(e,"".concat(w,"-order-").concat(d),d),s(e,"".concat(w,"-offset-").concat(h),h),s(e,"".concat(w,"-push-").concat(m),m),s(e,"".concat(w,"-pull-").concat(g),g),e),x,O);return r.createElement(c.a.Consumer,null,function(t){var n=t.gutter,e=v.style;return n>0&&(e=u({paddingLeft:n/2,paddingRight:n/2},e)),r.createElement("div",u({},v,{style:e,className:j}),y)})},t}var e,a,o;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&m(t,n)}(n,r["Component"]),e=n,(a=[{key:"render",value:function(){return r.createElement(l.a,null,this.renderCol)}}])&&p(e.prototype,a),o&&p(e,o),n}();x.propTypes={span:a.number,order:a.number,offset:a.number,push:a.number,pull:a.number,className:a.string,children:a.node,xs:g,sm:g,md:g,lg:g,xl:g,xxl:g}},126:function(t,n,e){"use strict";var r,a=e(31),o=e(0),i=e(16),c=e.n(i),l=e(1),s=e(1159),u=e(116);function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(){return(p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}if("undefined"!==typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},r=e(1164)}var d=["xxl","xl","lg","md","sm","xs"],h={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},m=[],b=-1,g={},x={dispatch:function(t){return g=t,!(m.length<1)&&(m.forEach(function(t){t.func(g)}),!0)},subscribe:function(t){0===m.length&&this.register();var n=(++b).toString();return m.push({token:n,func:t}),t(g),n},unsubscribe:function(t){0===(m=m.filter(function(n){return n.token!==t})).length&&this.unregister()},unregister:function(){Object.keys(h).map(function(t){return r.unregister(h[t])})},register:function(){var t=this;Object.keys(h).map(function(n){return r.register(h[n],{match:function(){var e=p({},g,f({},n,!0));t.dispatch(e)},unmatch:function(){var e=p({},g,f({},n,!1));t.dispatch(e)},destroy:function(){}})})}};function y(t){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function w(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function O(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,n){return!n||"object"!==y(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,n){return(E=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e.d(n,"a",function(){return P});var S=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&(e[r[a]]=t[r[a]])}return e},C=Object(u.a)("top","middle","bottom"),T=Object(u.a)("start","end","center","space-around","space-between"),P=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=j(this,k(n).apply(this,arguments))).state={screens:{}},t.renderRow=function(n){var e,r=n.getPrefixCls,a=t.props,i=a.prefixCls,l=a.type,u=a.justify,f=a.align,p=a.className,d=a.style,h=a.children,m=S(a,["prefixCls","type","justify","align","className","style","children"]),b=r("row",i),g=t.getGutter(),x=c()((w(e={},b,!l),w(e,"".concat(b,"-").concat(l),l),w(e,"".concat(b,"-").concat(l,"-").concat(u),l&&u),w(e,"".concat(b,"-").concat(l,"-").concat(f),l&&f),e),p),y=g>0?v({marginLeft:g/-2,marginRight:g/-2},d):d,O=v({},m);return delete O.gutter,o.createElement(s.a.Provider,{value:{gutter:g}},o.createElement("div",v({},O,{className:x,style:y}),h))},t}var e,r,i;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&E(t,n)}(n,o["Component"]),e=n,(r=[{key:"componentDidMount",value:function(){var t=this;this.token=x.subscribe(function(n){"object"===y(t.props.gutter)&&t.setState({screens:n})})}},{key:"componentWillUnmount",value:function(){x.unsubscribe(this.token)}},{key:"getGutter",value:function(){var t=this.props.gutter;if("object"===y(t))for(var n=0;n<d.length;n++){var e=d[n];if(this.state.screens[e]&&void 0!==t[e])return t[e]}return t}},{key:"render",value:function(){return o.createElement(a.a,null,this.renderRow)}}])&&O(e.prototype,r),i&&O(e,i),n}();P.defaultProps={gutter:0},P.propTypes={type:l.oneOf(["flex"]),align:l.oneOf(C),justify:l.oneOf(T),className:l.string,children:l.node,gutter:l.oneOfType([l.object,l.number]),prefixCls:l.string}},2660:function(t,n,e){"use strict";e.r(n);var r=e(17),a=e(18),o=e(24),i=e(22),c=e(23),l=e(0),s=e.n(l),u=e(124),f=e(123),p=e(122),d=e(1158),h=e(1157),m=e(1156),b=e(1161),g=e(1163),x=e(35),y=e(411),v=e(28),w=e(26),O=e(6),j=e(9);function k(){var t=Object(v.a)(["\n  p {\n    font-size: 13px;\n    color: ",";\n    line-height: 1.5;\n  }\n"]);return k=function(){return t},t}function E(){var t=Object(v.a)(["\n  .ant-modal-header {\n    padding: 13px 16px;\n    background: ",";\n    color: ",";\n    border-bottom: 1px solid ",";\n    ",";\n  }\n\n  .ant-modal-title {\n    margin: 0;\n    font-size: 15px;\n    line-height: 21px;\n    font-weight: 500;\n    color: ",";\n  }\n\n  .ant-modal-close {\n    right: ",";\n    left: ",";\n  }\n\n  .ant-modal-body {\n    padding: 16px;\n    font-size: 13px;\n    color: ",";\n    line-height: 1.5;\n  }\n\n  .ant-modal-footer {\n    border-top: 1px solid ",";\n    padding: 10px 16px 10px 10px;\n    text-align: right;\n    ",";\n\n    .ant-btn-lg {\n      padding: 0 35px;\n      font-size: 14px;\n      height: 42px;\n    }\n\n    button + button {\n      margin: ",";\n    }\n  }\n\n  .ant-confirm {\n    .ant-modal-body {\n      padding: 30px 35px;\n    }\n  }\n\n  .ant-confirm-body {\n    .ant-confirm-title {\n      color: ",";\n      font-weight: 700;\n      font-size: 15px;\n    }\n\n    .ant-confirm-content {\n      margin-left: 42px;\n      font-size: 13px;\n      color: ",";\n      margin-top: 8px;\n    }\n  }\n"]);return E=function(){return t},t}var S=w.c.div(k(),Object(O.palette)("text",3)),C=function(t){return Object(w.c)(t)(E(),Object(O.palette)("grayscale",5),Object(O.palette)("text",0),Object(O.palette)("border",0),Object(j.a)("4px 4px 0 0"),Object(O.palette)("text",0),function(t){return"rtl"===t["data-rtl"]?"inherit":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"inherit"},Object(O.palette)("text",3),Object(O.palette)("border",0),Object(j.a)("0 0 4px 4px"),function(t){return"rtl"===t["data-rtl"]?"0 8px 0 0":"0 0 0 8px"},Object(O.palette)("text",0),Object(O.palette)("text",3))},T=e(40);e.d(n,"default",function(){return L});var P=C(y.a),N=Object(T.a)(P),B=y.a.confirm;function _(){y.a.info({title:s.a.createElement("h3",null,"This is a notification message"),content:s.a.createElement(S,null,s.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),s.a.createElement("p",null,"some messages...some messages...")),onOk:function(){},okText:"OK",cancelText:"Cancel"})}function q(){y.a.success({title:"This is a success message",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",okText:"OK",cancelText:"Cancel"})}function z(){y.a.error({title:"This is an error message",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",okText:"OK",cancelText:"Cancel"})}function M(){y.a.warning({title:"This is a warning message",content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",okText:"OK",cancelText:"Cancel"})}function F(){B({title:"Want to delete these items?",content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:function(){return new Promise(function(t,n){setTimeout(Math.random()>.5?t:n,1e3)}).catch(function(){})},onCancel:function(){},okText:"OK",cancelText:"Cancel"})}var L=function(t){function n(){var t,e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=Object(o.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(c)))).state={loading:!1,visible:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){e.setState({loading:!0}),setTimeout(function(){e.setState({loading:!1,visible:!1})},2e3)},e.handleCancel=function(){e.setState({visible:!1})},e}return Object(c.a)(n,t),Object(a.a)(n,[{key:"render",value:function(){var t=g.a.rowStyle,n=g.a.colStyle,e=g.a.gutter,r={marginRight:"5px",marginBottom:"5px"};return s.a.createElement(m.default,null,s.a.createElement(d.default,null,s.a.createElement(x.a,{id:"feedback.alert.modalBlockTitle"})),s.a.createElement(u.a,{style:t,gutter:e,justify:"start"},s.a.createElement(f.a,{md:12,sm:12,xs:24,style:n},s.a.createElement(h.default,{title:s.a.createElement(x.a,{id:"feedback.alert.modalTitle"}),subtitle:s.a.createElement(x.a,{id:"feedback.alert.modalSubTitle"})},s.a.createElement(b.default,null,s.a.createElement(p.b,{type:"primary",onClick:this.showModal},s.a.createElement(x.a,{id:"feedback.alert.simpleModalDialogue"})),s.a.createElement(N,{visible:this.state.visible,title:"Title",onOk:this.handleOk,onCancel:this.handleCancel,footer:[s.a.createElement(p.b,{key:"back",size:"large",onClick:this.handleCancel},"Return"),s.a.createElement(p.b,{key:"submit",type:"primary",size:"large",loading:this.state.loading,onClick:this.handleOk},"Submit")]},s.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),s.a.createElement("p",null,"Some contents..."))))),s.a.createElement(f.a,{md:12,sm:12,xs:24,style:n},s.a.createElement(h.default,{title:s.a.createElement(x.a,{id:"feedback.alert.modalTitle"}),subtitle:s.a.createElement(x.a,{id:"feedback.alert.modalSubTitle"})},s.a.createElement(b.default,null,s.a.createElement(p.b,{onClick:_,style:r},s.a.createElement(x.a,{id:"feedback.alert.infoTitle"})),s.a.createElement(p.b,{onClick:q,style:r},s.a.createElement(x.a,{id:"feedback.alert.successTitle"})),s.a.createElement(p.b,{onClick:z,style:r},s.a.createElement(x.a,{id:"feedback.alert.errorTitle"})),s.a.createElement(p.b,{onClick:M},s.a.createElement(x.a,{id:"feedback.alert.warningTitle"})))))),s.a.createElement(u.a,{style:t,gutter:e,justify:"start"},s.a.createElement(f.a,{md:12,sm:12,xs:24,style:n},s.a.createElement(h.default,{title:s.a.createElement(x.a,{id:"feedback.alert.modalTitle"}),subtitle:s.a.createElement(x.a,{id:"feedback.alert.modalSubTitle"})},s.a.createElement(b.default,null,s.a.createElement(p.b,{onClick:F},s.a.createElement(x.a,{id:"feedback.alert.confirmationModalDialogue"})))))))}}]),n}(l.Component)}}]);
//# sourceMappingURL=53.54d687d0.chunk.js.map