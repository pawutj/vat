(window.webpackJsonp=window.webpackJsonp||[]).push([[94,131],{1156:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(28);function l(){var e=Object(c.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return l=function(){return e},e}var o=a(26).c.div(l());n.default=function(e){return r.a.createElement(o,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1197:function(e,n,a){"use strict";var t=a(2614);n.a=t.a},1243:function(e,n,a){"use strict";var t=a(127),r=a(28),c=a(26),l=a(6);function o(){var e=Object(r.a)(["\n  &.ant-radio-wrapper,\n  .ant-radio-wrapper,\n  &.ant-radio-button-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-radio-inner {\n      &:after {\n        width: 6px;\n        height: 6px;\n        top: 4px;\n        left: 4px;\n        background-color: ",";\n        border-radius: 50%;\n      }\n    }\n\n    .ant-radio-checked .ant-radio-inner,\n    .ant-radio-indeterminate .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio:hover .ant-radio-inner,\n    .ant-radio-input:focus + .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio-disabled .ant-radio-inner:after {\n      background-color: #ccc;\n    }\n\n    &:hover {\n      .ant-radio-inner {\n        border-color: ",";\n      }\n    }\n\n    .ant-radio-checked {\n      .ant-radio-inner {\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  .ant-radio-button-wrapper {\n    &.ant-radio-button-wrapper-checked {\n      background-color: ",";\n      border-color: ",";\n\n      &:not(.ant-radio-button-wrapper-disabled) {\n        background-color: ",";\n        border-color: ",";\n\n        &:hover {\n          background-color: ",";\n          border-color: ",";\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}var i=function(e){return Object(c.c)(e)(o(),Object(l.palette)("text",1),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0))};a.d(n,"b",function(){return u}),a.d(n,"a",function(){return p});var d=i(t.a),u=i(t.a.Group),p=i(t.a.Button);n.c=d},1299:function(e,n,a){"use strict";var t=a(28),r=a(26),c=a(6);function l(){var e=Object(t.a)(["\n  width: 100%;\n  padding: 35px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  height: 100%;\n"]);return l=function(){return e},e}var o=r.c.div(l(),Object(c.palette)("border",0));n.a=o},2609:function(e,n,a){"use strict";a.r(n);var t=a(38),r=a(1368),c=a(53),l=a(2),o=a(0),i=a.n(o),d=a(1156),u=a(1299),p=a(1197),m=a(35),b=a(109),s=a(122),f=a(123),h=a(1243),E=p.a.Item,g={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}},j=function(e){return Array(e).fill(0).map(function(e,n){return n})};n.default=function(){var e=Object(o.useState)({id:"",name:"",subid:"",no:"",road:"",dis:"",pro:"",tel:"",cat:["","","","",""]}),n=Object(r.a)(e,2),a=n[0],p=n[1],O=function(e){p(Object(l.a)({},a,Object(t.a)({},e.target.name,e.target.value)))};return i.a.createElement(d.default,null,i.a.createElement(u.a,null,i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e40\u0e25\u0e02\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e1c\u0e39\u0e49\u0e40\u0e2a\u0e35\u0e22\u0e20\u0e32\u0e29\u0e35"})}),i.a.createElement(b.d,{placeholder:"Text1234567",name:"id",value:a.id,onChange:O})),i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"})}),i.a.createElement(b.d,{placeholder:"Alethia",name:"name",value:a.name,onChange:O})),i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e02\u0e32"})}),i.a.createElement(b.d,{placeholder:"0",name:"subid",value:a.subid,onChange:O})),i.a.createElement("h2",null,"\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32"),i.a.createElement("hr",null),i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48"})}),i.a.createElement(b.d,{placeholder:"123/456",name:"no",value:a.no,onChange:O})),i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e16\u0e19\u0e19"})}),i.a.createElement(b.d,{placeholder:"\u0e1e\u0e2b\u0e25\u0e42\u0e22\u0e18\u0e34\u0e19",name:"road",value:a.road,onChange:O})),i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e2d\u0e33\u0e40\u0e20\u0e2d"})}),i.a.createElement(b.d,{placeholder:"\u0e25\u0e32\u0e14\u0e1e\u0e23\u0e49\u0e32\u0e27",name:"dis",value:a.dis,onChange:O})),i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14"})}),i.a.createElement(b.d,{placeholder:"\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e",name:"pro",value:a.pro,onChange:O})),i.a.createElement(E,Object.assign({},g,{label:i.a.createElement(m.a,{id:"\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c"})}),i.a.createElement(b.d,{placeholder:"000-0000000",name:"tel",value:a.tel,onChange:O})),i.a.createElement("h2",null,"Product Group"),i.a.createElement("hr",null),i.a.createElement("h2",null,"\u0e23\u0e49\u0e32\u0e19\u0e15\u0e49\u0e19\u0e41\u0e1a\u0e1a"),["\u0e02\u0e2d\u0e07\u0e1d\u0e32\u0e01","\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32","\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e14\u0e31\u0e1a","\u0e2b\u0e49\u0e32\u0e07\u0e2a\u0e23\u0e23\u0e1e\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32","\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"].map(function(e){return i.a.createElement(h.a,{onClick:function(){return function(e){console.log(e);var n=a.cat;"\u0e02\u0e2d\u0e07\u0e1d\u0e32\u0e01"==e&&(n[0]="Royce",n[1]="Kit-Kat",n[2]="Pocky"),"\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32"==e&&(n[0]="\u0e40\u0e2a\u0e37\u0e49\u0e2d",n[1]="\u0e01\u0e32\u0e07\u0e40\u0e01\u0e07",n[2]="\u0e40\u0e02\u0e47\u0e21\u0e02\u0e31\u0e14"),p(Object(l.a)({},a,{cat:n}))}(e)}},e)}),i.a.createElement("h2",null,"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01"),i.a.createElement(h.a,{onClick:function(){var e=a.cat;e=e.slice(0,5),p(Object(l.a)({},a,{cat:e}))}},"5"),i.a.createElement(h.a,{onClick:function(){var e=a.cat;console.log(e),5==e.length&&(e=[].concat(Object(c.a)(e),["","","","",""])),p(Object(l.a)({},a,{cat:e}))}},"10"),i.a.createElement("h2",null,"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),i.a.createElement(b.a,{size:"large",style:{marginBottom:"15px"}},j(a.cat.length).map(function(e){return i.a.createElement(f.a,{span:4},i.a.createElement(b.d,{value:a.cat[e],onChange:function(n){return function(e,n){var r=a.cat;r[n]=e.target.value,p(Object(l.a)({},a,Object(t.a)({},a.cat,r)))}(n,e)}}))})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(s.b,{onClick:function(){console.log("A"),console.log(j(5))}},i.a.createElement(m.a,{id:"\u0e15\u0e01\u0e25\u0e07"}))))}}}]);
//# sourceMappingURL=94.1bc59304.chunk.js.map