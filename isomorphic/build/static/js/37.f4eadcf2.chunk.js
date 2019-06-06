(window.webpackJsonp=window.webpackJsonp||[]).push([[37,129,130,131],{1156:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28);function l(){var e=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return l=function(){return e},e}var c=t(26).c.div(l());a.default=function(e){return r.a.createElement(c,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),l=t(26),c=t(6);function s(){var e=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function o(){var e=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return o=function(){return e},e}var d=l.c.h3(o(),Object(c.palette)("text",0)),m=l.c.p(s(),Object(c.palette)("text",3)),u=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(d,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(m,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function p(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return p=function(){return e},e}var f=l.c.div(p(),Object(c.palette)("border",0),"");a.default=function(e){return r.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},r.a.createElement(u,{title:e.title,subtitle:e.subtitle}),e.children)}},1158:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),l=t(26),c=t(6),s=t(40);function o(){var e=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return o=function(){return e},e}var d=l.c.h1(o(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),m=Object(s.a)(d);a.default=function(e){return r.a.createElement(m,{className:"isoComponentTitle"},e.children)}},1197:function(e,a,t){"use strict";var n=t(2614);a.a=n.a},1217:function(e,a,t){"use strict";var n=t(128),r=t(28),i=t(26),l=t(6);function c(){var e=Object(r.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return c=function(){return e},e}var s=function(e){return Object(i.c)(e)(c(),Object(l.palette)("text",1))};t.d(a,"a",function(){return d});var o=s(n.a),d=n.a.Group;a.b=o},2666:function(e,a,t){"use strict";t.r(a);var n=t(17),r=t(18),i=t(24),l=t(22),c=t(23),s=t(0),o=t.n(s),d=t(1197),m=t(109),u=t(1158),p=t(1157),f=t(1156),h=t(35),b=t(1307),g=t(1217),x=t(122),v=t(220),E=d.a.Item,w=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).state={confirmDirty:!1},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||Object(v.a)("success","Received values of form",JSON.stringify(a))})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.checkPassword=function(e,a,n){var r=t.props.form;a&&a!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},t.checkConfirm=function(e,a,n){var r=t.props.form;a&&t.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},t={wrapperCol:{xs:{span:24,offset:0},sm:{span:14,offset:6}}};return o.a.createElement(d.a,{onSubmit:this.handleSubmit},o.a.createElement(E,Object.assign({},a,{label:"E-mail",hasFeedback:!0}),e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(o.a.createElement(b.a,{name:"email",id:"email"}))),o.a.createElement(E,Object.assign({},a,{label:"Password",hasFeedback:!0}),e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.checkConfirm}]})(o.a.createElement(b.a,{type:"password"}))),o.a.createElement(E,Object.assign({},a,{label:"Confirm Password",hasFeedback:!0}),e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.checkPassword}]})(o.a.createElement(b.a,{type:"password",onBlur:this.handleConfirmBlur}))),o.a.createElement(E,Object.assign({},t,{style:{marginBottom:8}}),e("agreement",{valuePropName:"checked",rules:[{message:"Please input your E-mail!",required:!0}]})(o.a.createElement(g.b,null,"I have read the ",o.a.createElement("a",{href:"# "},"agreement")))),o.a.createElement(E,t,o.a.createElement(x.b,{type:"primary",htmlType:"submit"},"Register")))}}]),a}(s.Component),O=d.a.create()(w);t.d(a,"default",function(){return k});var j=d.a.Item,y={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}},k=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(f.default,null,o.a.createElement(u.default,null,o.a.createElement(h.a,{id:"forms.formsWithValidation.header"})),o.a.createElement(p.default,null,o.a.createElement(d.a,null,o.a.createElement(j,Object.assign({},y,{label:o.a.createElement(h.a,{id:"forms.formsWithValidation.failLabel"}),validateStatus:"error",help:o.a.createElement(h.a,{id:"forms.formsWithValidation.failHelp"})}),o.a.createElement(m.d,{placeholder:"unavailable choice",id:"error"})),o.a.createElement(j,Object.assign({},y,{label:o.a.createElement(h.a,{id:"forms.formsWithValidation.warningLabel"}),validateStatus:"warning"}),o.a.createElement(m.d,{placeholder:"Warning",id:"warning"})),o.a.createElement(j,Object.assign({},y,{label:o.a.createElement(h.a,{id:"forms.formsWithValidation.ValidatingLabel"}),hasFeedback:!0,validateStatus:"validating",help:o.a.createElement(h.a,{id:"forms.formsWithValidation.ValidatingHelp"})}),o.a.createElement(m.d,{placeholder:"I'm the content is being validated",id:"validating"})),o.a.createElement(j,Object.assign({},y,{label:o.a.createElement(h.a,{id:"forms.formsWithValidation.SuccessLabel"}),hasFeedback:!0,validateStatus:"success"}),o.a.createElement(m.d,{placeholder:"I'm the content",id:"success"})),o.a.createElement(j,Object.assign({},y,{label:o.a.createElement(h.a,{id:"forms.formsWithValidation.WarninghasFeedbackLabel"}),hasFeedback:!0,validateStatus:"warning"}),o.a.createElement(m.d,{placeholder:"Warning",id:"warning1"})),o.a.createElement(j,Object.assign({},y,{label:o.a.createElement(h.a,{id:"forms.formsWithValidation.FailhasFeedbackLabel"}),hasFeedback:!0,validateStatus:"error",help:o.a.createElement(h.a,{id:"forms.formsWithValidation.FailhasFeedbackHelp"})}),o.a.createElement(m.d,{placeholder:"unavailable choice",id:"error1"})))),o.a.createElement(u.default,null,"Form Submit Validation"),o.a.createElement(p.default,null,o.a.createElement(O,null)))}}]),a}(s.Component)}}]);
//# sourceMappingURL=37.f4eadcf2.chunk.js.map