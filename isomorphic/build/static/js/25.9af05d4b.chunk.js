(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1217:function(e,n,t){"use strict";var a=t(128),r=t(28),o=t(26),i=t(6);function s(){var e=Object(r.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return s=function(){return e},e}var l=function(e){return Object(o.c)(e)(s(),Object(i.palette)("text",1))};t.d(n,"a",function(){return p});var c=l(a.a),p=a.a.Group;n.b=c},1492:function(e,n,t){"use strict";t.d(n,"a",function(){return x});var a=t(3),r=t.n(a),o=t(48),i=t(17),s=t(18),l=t(24),c=t(22),p=t(23),d=t(11),m=t(0),u=t.n(m),g=t(122),h=t(109),b=t(411),f=t(225),v=t(55),x=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),p=0;p<a;p++)s[p]=arguments[p];return(t=Object(l.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(s)))).state={visible:!1,email:"demo@gmail.com",password:"demodemo",confirmLoading:!1},t.showModal=function(){t.setState({visible:!0})},t.handleCancel=function(e){t.setState({visible:!1})},t.handleLogin=Object(o.a)(r.a.mark(function e(){var n,a,o,i,s,l,c,p;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,a=n.email,o=n.password,a&&o){e.next=4;break}return Object(f.c)("error","Please fill in email. and password"),e.abrupt("return");case 4:if(t.setState({confirmLoading:!0}),i=Object(d.a)(Object(d.a)(t)),!t.props.signup){e.next=12;break}return e.next=9,v.a.signup(v.a.EMAIL,{email:a,password:o});case 9:s=e.sent,e.next=15;break;case 12:return e.next=14,v.a.login(v.a.EMAIL,{email:a,password:o});case 14:s=e.sent;case 15:if(l=!(!s||!s.user)&&s.user,c=!1===l&&s&&s.message?s.message:"Sorry Some error occurs",!l){e.next=25;break}return e.next=20,l.getIdToken();case 20:p=e.sent,t.props.login(p),t.props.history.push("/dashboard"),e.next=27;break;case 25:Object(f.c)("error",c),i.setState({confirmLoading:!1});case 27:case"end":return e.stop()}},e)})),t.resetPassword=function(){var e=t.state.email;e?v.a.resetPassword(e).then(function(){return Object(f.c)("success","Password reset email sent to ".concat(e,"."))}).catch(function(e){return Object(f.c)("error","Email address not found.")}):Object(f.c)("error","Please fill in email.")},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(g.b,{type:"primary",onClick:this.showModal,className:"btnFirebase"},this.props.signup?"Sign up with Firebase":"Sign in with Firebase"),u.a.createElement(b.a,{title:this.props.signup?"Sign up with Firebase":"Sign in with Firebase",visible:this.state.visible,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel,onOk:this.handleLogin,className:"isoFirebaseLoginModal",cancelText:"Cancel",okText:"Login"},u.a.createElement("form",null,u.a.createElement("div",{className:"isoInputWrapper"},u.a.createElement("label",null,"Email"),u.a.createElement(h.d,{ref:function(n){return e.email=n},size:"large",placeholder:"Email",value:this.state.email,onChange:function(n){e.setState({email:n.target.value})}})),u.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:10}},u.a.createElement("label",null,"Password"),u.a.createElement(h.d,{type:"password",size:"large",placeholder:"Password",value:this.state.password,onChange:function(n){e.setState({password:n.target.value})}})),u.a.createElement("span",{className:"isoResetPass",onClick:this.resetPassword},"Reset Password"))))}}]),n}(m.Component)},1889:function(e,n,t){e.exports=t.p+"static/media/work.56bf9122.jpg"},2670:function(e,n,t){"use strict";t.r(n);var a=t(17),r=t(18),o=t(24),i=t(22),s=t(23),l=t(0),c=t.n(l),p=t(2589),d=t(33),m=t(109),u=t(1217),g=t(122),h=t(50),b=t(56),f=t(444),v=t(55),x=t(1492),E=t(35),w=t(28),j=t(26),y=t(6),k=t(1889),O=t.n(k),L=t(40);function C(){var e=Object(w.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ",";\n            margin-left: ",";\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ",";\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n      }\n    }\n  }\n"]);return C=function(){return e},e}var N=j.c.div(C(),O.a,function(e){return"rtl"===e["data-rtl"]?"inherit":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"inherit"},Object(y.palette)("secondary",2),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),Object(y.palette)("grayscale",0),function(e){return"rtl"===e["data-rtl"]?"inherit":"20px"},function(e){return"rtl"===e["data-rtl"]?"20px":"inherit"},Object(y.palette)("text",2),Object(y.palette)("primary",0),Object(y.palette)("color",7),Object(y.palette)("color",8),Object(y.palette)("color",9),Object(y.palette)("color",10),Object(y.palette)("color",11),Object(y.palette)("color",12),Object(y.palette)("color",5),Object(y.palette)("color",6)),S=Object(L.a)(N),I=h.a.login,W=b.a.clearMenu,P=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(s)))).state={redirectToReferrer:!1},t.handleLogin=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.props,a=n.login,r=n.clearMenu;console.log(e,"handlelogin"),e?a(e):a(),r(),t.props.history.push("/dashboard")},t}return Object(s.a)(n,e),Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.props.isLoggedIn!==e.isLoggedIn&&!0===e.isLoggedIn&&this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){var e=this.props.history;return c.a.createElement(S,{className:"isoSignUpPage"},c.a.createElement("div",{className:"isoSignUpContentWrapper"},c.a.createElement("div",{className:"isoSignUpContent"},c.a.createElement("div",{className:"isoLogoWrapper"},c.a.createElement(p.a,{to:"/dashboard"},c.a.createElement(E.a,{id:"page.signUpTitle"}))),c.a.createElement("div",{className:"isoSignUpForm"},c.a.createElement("div",{className:"isoInputWrapper isoLeftRightComponent"},c.a.createElement(m.d,{size:"large",placeholder:"First name"}),c.a.createElement(m.d,{size:"large",placeholder:"Last name"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(m.d,{size:"large",placeholder:"Username"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(m.d,{size:"large",placeholder:"Email"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(m.d,{size:"large",type:"password",placeholder:"Password"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(m.d,{size:"large",type:"password",placeholder:"Confirm Password"})),c.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:"50px"}},c.a.createElement(u.b,null,c.a.createElement(E.a,{id:"page.signUpTermsConditions"}))),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(g.b,{type:"primary"},c.a.createElement(E.a,{id:"page.signUpButton"}))),c.a.createElement("div",{className:"isoInputWrapper isoOtherLogin"},c.a.createElement(g.b,{onClick:this.handleLogin,type:"primary",className:"btnFacebook"},c.a.createElement(E.a,{id:"page.signUpFacebook"})),c.a.createElement(g.b,{onClick:this.handleLogin,type:"primary",className:"btnGooglePlus"},c.a.createElement(E.a,{id:"page.signUpGooglePlus"})),f.a.isValid&&c.a.createElement(g.b,{onClick:function(){f.a.login()},type:"primary",className:"btnAuthZero"},c.a.createElement(E.a,{id:"page.signUpAuth0"})),v.a.isValid&&c.a.createElement(x.a,{signup:!0,histor:e,login:this.props.login})),c.a.createElement("div",{className:"isoInputWrapper isoCenterComponent isoHelperWrapper"},c.a.createElement(p.a,{to:"/signin"},c.a.createElement(E.a,{id:"page.signUpAlreadyAccount"})))))))}}]),n}(l.Component);n.default=Object(d.c)(function(e){return{isLoggedIn:null!==e.Auth.idToken}},{login:I,clearMenu:W})(P)}}]);
//# sourceMappingURL=25.9af05d4b.chunk.js.map