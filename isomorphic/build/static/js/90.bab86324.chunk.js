(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1243:function(e,n,t){"use strict";var a=t(127),r=t(28),o=t(26),i=t(6);function l(){var e=Object(r.a)(["\n  &.ant-radio-wrapper,\n  .ant-radio-wrapper,\n  &.ant-radio-button-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-radio-inner {\n      &:after {\n        width: 6px;\n        height: 6px;\n        top: 4px;\n        left: 4px;\n        background-color: ",";\n        border-radius: 50%;\n      }\n    }\n\n    .ant-radio-checked .ant-radio-inner,\n    .ant-radio-indeterminate .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio:hover .ant-radio-inner,\n    .ant-radio-input:focus + .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio-disabled .ant-radio-inner:after {\n      background-color: #ccc;\n    }\n\n    &:hover {\n      .ant-radio-inner {\n        border-color: ",";\n      }\n    }\n\n    .ant-radio-checked {\n      .ant-radio-inner {\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  .ant-radio-button-wrapper {\n    &.ant-radio-button-wrapper-checked {\n      background-color: ",";\n      border-color: ",";\n\n      &:not(.ant-radio-button-wrapper-disabled) {\n        background-color: ",";\n        border-color: ",";\n\n        &:hover {\n          background-color: ",";\n          border-color: ",";\n        }\n      }\n    }\n  }\n"]);return l=function(){return e},e}var c=function(e){return Object(o.c)(e)(l(),Object(i.palette)("text",1),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0))};t.d(n,"b",function(){return d}),t.d(n,"a",function(){return u});var s=c(a.a),d=c(a.a.Group),u=c(a.a.Button);n.c=s},1280:function(e,n,t){"use strict";var a=t(1491),r=t(28),o=t(26),i=t(6);function l(){var e=Object(r.a)(["\n  width: 100%;\n\n  &.ant-select {\n    .ant-select-selection {\n      &.ant-select-selection--single {\n        height: 35px;\n\n        .ant-select-selection__rendered {\n          line-height: 35px;\n          margin: 0;\n\n          .ant-select-selection__placeholder,\n          .ant-select-search__field__placeholder {\n            top: 8px;\n            margin: 0 10px;\n            left: ",";\n            right: ",";\n            color: ",";\n          }\n\n          .ant-input {\n            padding: 4px 10px;\n            width: 100%;\n            height: 35px;\n            font-size: 13px;\n            text-align: ",";\n            line-height: 1.5;\n            color: ",";\n            border: 1px solid ",";\n            transition: all 0.3s;\n\n            &:focus {\n              border-color: ",";\n              outline: 0;\n              box-shadow: 0 0 0 2px ",";\n            }\n\n            &:hover {\n              border-color: ",";\n            }\n          }\n        }\n      }\n    }\n\n    .ant-select-search__field {\n      padding: 10px;\n    }\n  }\n"]);return l=function(){return e},e}var c=t(40);t.d(n,"a",function(){return p});var s,d=(s=a.a,Object(o.c)(s)(l(),function(e){return"rtl"===e["data-rtl"]?"inherit":"0"},function(e){return"rtl"===e["data-rtl"]?"9px":"inherit"},Object(i.palette)("grayscale",1),function(e){return"rtl"===e["data-rtl"]?"right":"left"},Object(i.palette)("text",1),Object(i.palette)("border",0),Object(i.palette)("primary",0),Object(i.palette)("primary",3),Object(i.palette)("primary",0))),u=Object(c.a)(d),p=a.a.Option;n.b=u},1298:function(e,n,t){"use strict";var a=t(2571),r=t(28),o=t(26),i=t(6),l=t(9);function c(){var e=Object(r.a)(["\n  .ant-input {\n    padding: 4px 10px;\n    width: 100%;\n    height: 35px;\n    cursor: text;\n    font-size: 13px;\n    line-height: 1.5;\n    color: ",";\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid ",";\n    ",";\n    ",";\n\n    &:focus {\n      border-color: ",";\n    }\n\n    &::-webkit-input-placeholder {\n      color: ",";\n    }\n\n    &:-moz-placeholder {\n      color: ",";\n    }\n\n    &::-moz-placeholder {\n      color: ",";\n    }\n    &:-ms-input-placeholder {\n      color: ",";\n    }\n  }\n"]);return c=function(){return e},e}var s=function(e){return Object(o.c)(e)(c(),Object(i.palette)("text",1),Object(i.palette)("border",0),Object(l.a)("4px"),Object(l.c)(),Object(i.palette)("primary",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0))};t.d(n,"a",function(){return u});var d=s(a.a),u=s(a.a.RangePicker);n.b=d},1308:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(28),i=t(26),l=t(6);function c(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 10000000000;\n  top: 0;\n  right: 0;\n\n  @media only screen and (min-width: 768px) and (max-width: 1220px) {\n    width: calc(100% - 80px);\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n\n  .isoContentLoader {\n    width: 50px;\n    height: 50px;\n    animation: svgSpinner 1.4s linear infinite;\n  }\n\n  .isoContentLoaderCircle {\n    animation: svgSpinnerCircle 1.4s ease-in-out infinite;\n    stroke-dasharray: 80px, 200px;\n    stroke-dashoffset: 0px;\n    stroke: ",";\n    stroke-linecap: round;\n  }\n\n  @keyframes svgSpinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes svgSpinnerCircle {\n    0% {\n      stroke-dasharray: 1px, 200px;\n      stroke-dashoffset: 0px;\n    }\n    50% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -15px;\n    }\n    100% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -120px;\n    }\n  }\n"]);return c=function(){return e},e}var s=i.c.div(c(),Object(l.palette)("primary",0));n.a=function(e){return r.a.createElement(s,null,r.a.createElement("svg",{className:"isoContentLoader",viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"isoContentLoaderCircle",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"3.6"})))}},1321:function(e,n,t){e.exports=t.p+"static/media/NoAPIKey.efba4584.svg"},1337:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.text,t=void 0===n?"":n;return r.a.createElement("div",{className:"isoHelperText",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"20px"}},r.a.createElement("h3",null,t))}},1343:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(28),i=t(26),l=t(6);function c(){var e=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 150px;\n    height: auto;\n    margin-bottom: 30px;\n  }\n\n  h3 {\n    font-size: 18px;\n    font-weight: 500;\n    color: ",";\n    margin: 0;\n  }\n"]);return c=function(){return e},e}var s=i.c.div(c(),Object(l.palette)("text",2)),d=t(1321),u=t.n(d);n.a=function(e){var n=e.width,t=void 0===n?"100%":n,a=e.height,o=void 0===a?"40vh":a;return r.a.createElement(s,{className:"isoHelperText",style:{width:t,height:o}},r.a.createElement("img",{alt:"#",src:u.a}),r.a.createElement("h3",null,"Please Enter Your API Key in the `src/settings/index.js`"))}},1427:function(e,n,t){"use strict";var a=t(1279);n.a=a.a},2618:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(17),o=t(18),i=t(24),l=t(22),c=t(23),s=t(0),d=t.n(s),u=t(33),p=t(108),m=t.n(p),f=t(109),h=t(1427),g=t(1243),b=t(1298),x=t(411),v=t(220),w=t(39),j=t(28),O=t(26),y=t(6),E=t(122),k=t(1510),C=t.n(k);function N(){var e=Object(j.a)([""]);return N=function(){return e},e}function P(){var e=Object(j.a)(["\n  font-size: 12px;\n  color: ",";\n  line-height: 1.5;\n  font-weight: 400;\n  padding: 0;\n  margin: 0 0 5px;\n"]);return P=function(){return e},e}function I(){var e=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return I=function(){return e},e}function U(){var e=Object(j.a)(["\n  && {\n    padding: 0 12px;\n    i {\n      font-size: 17px;\n      color: ",";\n    }\n\n    &:hover {\n      i {\n        color: inherit;\n      }\n    }\n  }\n"]);return U=function(){return e},e}function M(){var e=Object(j.a)(["\n  h5 {\n    font-size: 13px;\n    color: ",";\n    margin-bottom: 10px;\n  }\n\n  "," {\n    background: #ffffff;\n    flex-shrink: 0;\n    border: 0;\n\n    "," {\n      padding: 4px 10px;\n      border: 1px solid ",";\n      margin-bottom: 10px;\n\n      &:focus {\n        border-color: #4482ff;\n        box-shadow: 0 0 0 2px rgba(68, 130, 255, 0.2);\n      }\n    }\n  }\n"]);return M=function(){return e},e}function T(){var e=Object(j.a)(["\n  height: 100%;\n  padding: 30px;\n\n  @media only screen and (max-width: 767px) {\n    padding: 0;\n  }\n"]);return T=function(){return e},e}function z(){var e=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  height: calc(100% - 136px);\n  flex-direction: column;\n  overflow: hidden;\n  overflow-y: auto;\n  background: #ffffff;\n  border-top: 1px solid ",";\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return z=function(){return e},e}function R(){var e=Object(j.a)(["\n  padding: 15px 20px;\n  background: #ffffff;\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid ",";\n\n  "," {\n    padding: 0;\n    border: 0;\n\n    &:focus {\n      box-shadow: none;\n    }\n  }\n"]);return R=function(){return e},e}function L(){var e=Object(j.a)(["\n  background: #ffffff;\n  height: 65px;\n  flex-shrink: 0;\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n\n  > span {\n    font-size: 17px;\n    color: ",";\n    cursor: pointer;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding-left: 20px;\n  }\n\n  "," {\n    width: auto;\n    padding: 0;\n    border: 0;\n    margin: 0;\n    margin-right: 10px;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:focus {\n      box-shadow: none;\n    }\n\n    i {\n      font-size: 12px;\n      color: ",";\n    }\n  }\n"]);return L=function(){return e},e}function S(){var e=Object(j.a)(["\n  width: 100%;\n  margin: 0;\n  padding: 10px 20px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  text-align: left;\n  position: relative;\n  margin: 0;\n  margin-bottom: 3px;\n  align-items: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: all 0.25s ease;\n  background-color: #fff;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n\n  .userListsGravatar {\n    width: 50px;\n    margin: 0 15px 0 0;\n    flex-shrink: 0;\n    img {\n      border-radius: 50%;\n    }\n  }\n  .userListsContent {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    h4 {\n      font-size: 14px;\n      margin: 0;\n      font-weight: 500;\n    }\n\n    .chatExcerpt {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n\n      p {\n        color: ",";\n        margin: 0;\n        font-size: 12px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        width: 100%;\n        display: inline-block;\n      }\n\n      .userListsTime {\n        color: ",";\n        font-size: 10px;\n        flex-shrink: 0;\n      }\n    }\n  }\n"]);return S=function(){return e},e}function A(){var e=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return A=function(){return e},e}function B(){var e=Object(j.a)(["\n  background: #ffffff;\n  height: 65vh;\n  padding: 30px 30px 0;\n  > div {\n    margin-top: -8px;\n    width: 100%;\n    margin-left: 20px;\n  }\n"]);return B=function(){return e},e}function _(){var e=Object(j.a)(["\n  background: ",";\n  flex-shrink: 0;\n  border-top: 1px solid ",";\n  border-bottom: 0;\n\n  "," {\n    padding: 20px;\n    border: 0;\n    background-color: transparent;\n    resize: none;\n\n    &:focus {\n      box-shadow: none;\n    }\n  }\n"]);return _=function(){return e},e}function D(){var e=Object(j.a)(["\n  width: calc(100% - 60px);\n  margin-left: 30px;\n  margin-top: 30px;\n  span {\n    &:last-child {\n      span {\n        background-color: #ffffff;\n      }\n    }\n  }\n"]);return D=function(){return e},e}function V(){var e=Object(j.a)(["\n  flex-shrink: 0;\n  border: 1px solid ",";\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n\n  .UserListsWrapper {\n    .messageHelperText {\n      background: #ffffff;\n      height: 100%;\n      padding: 0 !important;\n    }\n  }\n\n  .ComposeMessageButton {\n    margin-top: auto;\n    padding: 20px;\n    flex-shrink: 0;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    text-align: center;\n    background: #ffffff;\n\n    button {\n      width: 100%;\n      margin: 0;\n    }\n  }\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    width: 280px;\n  }\n  @media only screen and (min-width: 992px) {\n    width: 350px;\n  }\n"]);return V=function(){return e},e}function Y(){var e=Object(j.a)(["\n  width: calc(100% - 350px);\n  background-color: #ffffff;\n  border: 1px solid ",";\n  border-left-width: 0;\n  display: flex;\n  flex-direction: column;\n\n  @media only screen and (max-width: 767px) {\n    border-left-width: 1px;\n  }\n\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    width: calc(100% - 280px);\n  }\n"]);return Y=function(){return e},e}function G(){var e=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n\n  @media only screen and (max-width: 767px) {\n    > div {\n      width: 100%;\n      max-width: 100%;\n    }\n  }\n"]);return G=function(){return e},e}function W(){var e=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 15px 0;\n  align-items: flex-start;\n  flex-shrink: 0;\n\n  @media only screen and (max-width: 767px) {\n    margin: 10px 0;\n  }\n\n  &.loggedUser {\n    justify-content: flex-end;\n  }\n  .messageGravatar {\n    width: 40px;\n    height: 40px;\n    flex-shrink: 0;\n    overflow: hidden;\n    margin: 0px 20px;\n\n    img {\n      border-radius: 50%;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  .messageContent {\n    display: flex;\n    flex-direction: column;\n    max-width: calc(100% - 110px);\n    flex-shrink: 0;\n\n    .messageContentText {\n      position: relative;\n      font-size: 14px;\n      vertical-align: top;\n      display: inline-block;\n      padding: 10px 15px;\n      "," word-break: break-word;\n\n      p {\n        margin: 0;\n      }\n    }\n    .messageTime {\n      font-size: 12px;\n      color: ",";\n      margin-top: 5px;\n    }\n    &.isUser {\n      align-items: flex-end;\n      .messageContentText {\n        background: ",";\n        color: #ffffff;\n        border-radius: 3px 0 3px 3px;\n\n        &:after {\n          content: '';\n          position: absolute;\n          border-style: solid;\n          display: block;\n          width: 0;\n          top: 0;\n          bottom: auto;\n          left: auto;\n          right: -9px;\n          border-width: 0px 0 10px 10px;\n          border-color: transparent ",";\n          margin-top: 0;\n        }\n      }\n      .messageTime {\n        margin-left: auto;\n      }\n    }\n    &.notUser {\n      align-items: flex-start;\n\n      .messageContentText {\n        background: ",";\n        color: ",";\n        border-radius: 0 3px 3px 3px;\n\n        &:after {\n          content: '';\n          position: absolute;\n          border-style: solid;\n          display: block;\n          width: 0;\n          top: 0;\n          bottom: auto;\n          left: -9px;\n          border-width: 0px 10px 10px 0;\n          border-color: transparent ",";\n          margin-top: 0;\n        }\n      }\n      .messageTime {\n        margin-right: auto;\n      }\n    }\n  }\n"]);return W=function(){return e},e}function H(){var e=Object(j.a)(["\n  width: 100%;\n  background: #ffffff;\n"]);return H=function(){return e},e}function K(){var e=Object(j.a)([""]);return K=function(){return e},e}function F(){var e=Object(j.a)([""]);return F=function(){return e},e}var J=Object(O.c)(f.d)(F()),Q=Object(O.c)(f.c)(K()),q=(Object(O.c)(C.a)(H()),O.c.div(W(),"",Object(y.palette)("text",3),Object(y.palette)("primary",1),Object(y.palette)("primary",1),Object(y.palette)("grayscale",4),Object(y.palette)("text",0),Object(y.palette)("grayscale",4))),X=O.c.div(G()),Z=O.c.div(Y(),Object(y.palette)("border",0)),$=O.c.div(V(),Object(y.palette)("border",0)),ee=Object(O.c)(E.b)(D()),ne=O.c.div(_(),Object(y.palette)("grayscale",5),Object(y.palette)("border",0),Q),te=(O.c.div(B()),O.c.div(A())),ae=O.c.div(S(),Object(y.palette)("grayscale",3),Object(y.palette)("text",1),Object(y.palette)("grayscale",0)),re=O.c.div(L(),Object(y.palette)("text",0),ee,Object(y.palette)("text",0)),oe=O.c.div(R(),Object(y.palette)("border",2),J),ie=O.c.div(z(),Object(y.palette)("border",0)),le=O.c.div(T()),ce=O.c.div(M(),Object(y.palette)("text",0),ne,Q,Object(y.palette)("border",0)),se=Object(O.c)(E.b)(U(),Object(y.palette)("text",1)),de=O.c.div(I()),ue=O.c.label(P(),Object(y.palette)("text",0)),pe=O.c.div(N()),me=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).handleCancel=function(){t.props.updateNewUsersProp({modalActive:!1})},t.initAddUser=function(){t.props.updateNewUsersProp({modalActive:!0,name:"New User",dob:"22/04/1992",mobileNo:"9429692135",gender:"Male",language:"English",profileImageUrl:"https://thumb7.shutterstock.com/display_pic_with_logo/818215/552201991/stock-photo-beautiful-young-grinning-professional-black-woman-in-office-with-eyeglasses-folded-arms-and-552201991.jpg"})},t.userNameExist=function(e){return-1!==t.props.users.findIndex(function(n){return n.name.toLowerCase()===e.name.toLowerCase()})},t.addUser=function(){var e=t.props,n=e.user,a=e.addNewUsersProp,r=e.addNewUser;a.name?t.userNameExist(a)?Object(v.a)("error","User name already exists"):(r(n,a),Object(v.a)("success","New user created successfuly")):Object(v.a)("error","please add new user name")},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.addNewUsersProp,t=e.modalActive,a=e.name,r=e.dob,o=e.mobileNo,i=e.gender,l=e.language,c=e.updateNewUsersProp;return d.a.createElement("div",null,d.a.createElement(h.a,{placement:"topRight",title:"Add a new user (For demo only)"},d.a.createElement(se,{onClick:this.initAddUser},d.a.createElement("i",{className:"ion-android-add"}))),d.a.createElement(x.a,{visible:t,onClose:this.handleCancel,title:"Add New User",okText:"Add User",onOk:this.addUser,onCancel:this.handleCancel},d.a.createElement(pe,null,d.a.createElement(de,null,d.a.createElement(ue,null,"Name"),d.a.createElement(f.d,{label:"Name",placeholder:"Enter Name",value:a||"",onChange:function(e){n.name=e.target.value,c(n)}})),d.a.createElement(de,null,d.a.createElement(ue,null,"Mobile"),d.a.createElement(f.d,{label:"Mobile",placeholder:"Mobile No",value:o||"",onChange:function(e){n.mobileNo=e.target.value,c(n)}})),d.a.createElement(de,null,d.a.createElement(ue,null,"Gender"),d.a.createElement(g.b,{id:"gender",name:"gender",value:i,onChange:function(e){n.gender=e.target.value,c(n)}},d.a.createElement(g.c,{value:"Male"},"Male"),d.a.createElement(g.c,{value:"Female"},"Female"),d.a.createElement(g.c,{value:"Other"},"Other"))),d.a.createElement(de,null,d.a.createElement(ue,null,"Language"),d.a.createElement(f.d,{label:"Language",placeholder:"Language",value:l||"",onChange:function(e){n.language=e.target.value,c(n)}})),d.a.createElement(de,null,d.a.createElement(ue,null,"Date"),d.a.createElement(b.b,{allowClear:!1,format:"DD/MM/YYYY",value:m()(r,"DD/MM/YYYY"),onChange:function(e,t){n.dob=t,c(n)}})))))}}]),n}(s.Component);var fe=Object(u.c)(function(e){var n=e.Chat,t=n.user,r=n.users,o=n.addNewUsersProp;return Object(a.a)({user:t,users:r,addNewUsersProp:o},o)},w.a)(me),he=t(161),ge=t(300),be=t(1337),xe=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).state={value:"",searchedChatRooms:t.props.chatRooms},t.onSearch=function(e){var n=e.target.value,a=n?[]:t.props.chatRooms;n&&t.props.chatRooms.forEach(function(e){e.otherUserInfo.name.toLowerCase().includes(n.toLowerCase())&&a.push(e)}),t.setState({value:n,searchedChatRooms:a})},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({value:"",searchedChatRooms:e.chatRooms})}},{key:"render",value:function(){var e=this.props,n=e.users,t=e.setSelectedChatroom,a=e.selectedChatRoom,r=e.toggleMobileList,o=e.toggleCompose,i=this.state,l=i.value,c=i.searchedChatRooms;return d.a.createElement($,null,d.a.createElement(oe,null,d.a.createElement(J,{value:l,onChange:this.onSearch,placeholder:"Search Contact"}),d.a.createElement(fe,null)),d.a.createElement(te,null,d.a.createElement(he.a,null,0===c.length?d.a.createElement(be.a,{text:"No Conversation",className:"messageHelperText"}):c.map(function(e,n){var o=e.otherUserInfo,i=e.lastMessage,l=e.lastMessageTime,c=o.name,s=o.profileImageUrl,u=a.id===e.id,p={background:u?"#f7f7f7":"rgba(0,0,0,0)"};return d.a.createElement(ae,{key:n,style:p,onClick:function(n){n.stopPropagation(),u||t(e),r&&r(!1)}},d.a.createElement("div",{className:"userListsGravatar"},d.a.createElement("img",{alt:"#",style:{width:45,height:45},src:s})),d.a.createElement("div",{className:"userListsContent"},d.a.createElement("h4",null,c),d.a.createElement("div",{className:"chatExcerpt"},d.a.createElement("p",null,i),d.a.createElement("span",{className:"userListsTime"},Object(ge.d)(l)))))}))),n.length>0&&d.a.createElement("div",{className:"ComposeMessageButton"},d.a.createElement(E.b,{onClick:o,type:"primary"},"Compose")))}}]),n}(s.Component);var ve=Object(u.c)(function(e){var n=e.Chat,t=n.users,a=n.chatRooms,r=n.openCompose,o=n.selectedChatRoom,i=e.App.view;return{users:t,chatRooms:a.filter(function(e){return e.lastMessageTime>0}),selectedChatRoom:"DesktopView"===i?o:{},openCompose:r}},w.a)(xe),we=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).scrollToBottom=function(){var e=document.getElementById("messageChat");e.scrollTop=e.scrollHeight},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this.props,n=e.user,t=e.userId,a=e.selectedChatRoom,r=e.messages,o=e.toggleViewProfile,i=e.toggleMobileProfile;return d.a.createElement(ie,{id:"messageChat"},r.map(function(e){var r=t===e.sender,l=r?n:a.otherUserInfo;return r?d.a.createElement(q,{className:"loggedUser",key:e.messageTime},d.a.createElement("div",{className:"messageContent isUser"},d.a.createElement("div",{className:"messageContentText"},d.a.createElement("p",null,e.text)),d.a.createElement("div",{className:"messageTime"},d.a.createElement("p",null,Object(ge.d)(e.messageTime)))),d.a.createElement("div",{className:"messageGravatar"},d.a.createElement("img",{alt:"#",src:l.profileImageUrl,onClick:function(){i(!0),o(l)}}))):d.a.createElement(q,{key:e.messageTime},d.a.createElement("div",{className:"messageGravatar"},d.a.createElement("img",{alt:"#",src:l.profileImageUrl,onClick:function(){i(!0),o(l)}})),d.a.createElement("div",{className:"messageContent notUser"},d.a.createElement("div",{className:"messageContentText"},d.a.createElement("p",null,e.text)),d.a.createElement("div",{className:"messageTime"},d.a.createElement("p",null,Object(ge.d)(e.messageTime)))))}))}}]),n}(s.Component);var je=Object(u.c)(function(e){var n=e.Chat;return{user:n.user,userId:n.userId,selectedChatRoom:n.selectedChatRoom,messages:n.messages}},w.a)(we),Oe=w.a.sendMessage,ye=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).state={value:""},t.onChange=function(e){t.setState({value:e.target.value})},t.onKeyPress=function(e){if("Enter"===e.key){e.preventDefault();var n=t.state.value;n&&n.length>0?(t.props.sendMessage(n),t.setState({value:""})):Object(v.a)("error","Please type something")}},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({value:""})}},{key:"render",value:function(){var e=this.state.value;return d.a.createElement(ne,null,d.a.createElement(Q,{autosize:this.props.autosize,value:e,onChange:this.onChange,onKeyPress:this.onKeyPress,placeholder:"Type your message"}),this.props.showButton?d.a.createElement("div",{className:"sendMessageButton"},d.a.createElement(E.b,{type:"primary",onClick:this.props.sendMessage.bind(this,this.state.value)},"Send Message")):"")}}]),n}(s.Component);var Ee=Object(u.c)(function(e){var n=e.Chat;return{selectedChatRoom:n.selectedChatRoom,openCompose:n.openCompose}},{sendMessage:Oe})(ye);function ke(){var e=Object(j.a)(["\n  display: flex;\n\n  .viewProfileTitle {\n    width: 35%;\n    font-size: 13px;\n    font-weight: 500;\n    font-weight: light;\n    color: ",";\n    margin-bottom: 30px;\n  }\n  .viewProfileValue {\n    width: 65%;\n    text-align: right;\n    font-size: 13px;\n    color: ",";\n    margin-bottom: 30px;\n  }\n"]);return ke=function(){return e},e}function Ce(){var e=Object(j.a)(["\n  background: #ffffff;\n  border: 1px solid ",";\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  width: 95%;\n  height: 100%;\n\n  .viewProfileTopBar {\n    background: ",";\n    border-bottom: 1px solid ",";\n    padding: 25px 20px 25px 30px;\n    display: flex;\n    justify-content: space-between;\n    line-height: 1;\n\n    span {\n      margin: 0;\n      margin-left: 15px;\n      cursor: pointer;\n      i {\n        font-size: 14px;\n        font-weight: normal;\n      }\n    }\n  }\n  .viewProfileContent {\n    padding: 30px 30px 0;\n  }\n  .viewProfileImage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  h1 {\n    font-size: 21px;\n    text-align: center;\n    font-weight: 300;\n    margin-bottom: 30px;\n    margin-top: 10px;\n    color: #212121;\n  }\n  img {\n    height: 120px;\n    border-radius: 6px;\n  }\n  .viewProfileQuickInfo {\n    border-top: 1px solid ",";\n    padding-top: 40px;\n  }\n  @media only screen and (min-width: 768px) {\n    width: 350px;\n  }\n"]);return Ce=function(){return e},e}var Ne=O.c.div(Ce(),Object(y.palette)("border",0),Object(y.palette)("grayscale",4),Object(y.palette)("border",0),Object(y.palette)("border",2)),Pe=O.c.div(ke(),Object(y.palette)("text",0),Object(y.palette)("text",1)),Ie=function(e){var n=e.title,t=e.value;return d.a.createElement(Pe,null,d.a.createElement("span",{className:"viewProfileTitle"},n),d.a.createElement("span",{className:"viewProfileValue"},t))},Ue=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.viewProfile,t=e.toggleViewProfile,a=e.toggleMobileProfile;if(!n)return d.a.createElement("div",null);var r=n.name,o=n.dob,i=n.mobileNo,l=n.gender,c=n.language,s=n.profileImageUrl;return d.a.createElement(Ne,null,d.a.createElement("div",{className:"viewProfileTopBar"},"Contact Info",d.a.createElement("span",{onClick:function(){a&&a(!1),t(!1)}},d.a.createElement("i",{className:"ion-android-close"}))),d.a.createElement("div",{className:"viewProfileContent"},d.a.createElement("div",{className:"viewProfileImage"},d.a.createElement("img",{alt:"#",src:s}),d.a.createElement("h1",null,r)),d.a.createElement("div",{className:"viewProfileQuickInfo"},d.a.createElement(Ie,{title:"Name",value:r}),d.a.createElement(Ie,{title:"Date of Birth",value:o}),d.a.createElement(Ie,{title:"Mobile No",value:i}),d.a.createElement(Ie,{title:"Gender",value:l}),d.a.createElement(Ie,{title:"Language",value:c}))))}}]),n}(s.Component),Me=t(1280);function Te(){var e=Object(j.a)(["\n  display: flex;\n  align-items: center;\n\n  .userImg {\n    width: 35px;\n    height: 35px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 15px;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .suggetionText {\n    font-size: 13px;\n    color: ",";\n    font-weight: 500;\n    margin: 0;\n  }\n"]);return Te=function(){return e},e}var ze=O.c.div(Te(),Object(y.palette)("text",0)),Re=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(o)))).state={value:"",result:[]},t.handleSearch=function(e){var n=[];e&&t.props.users.forEach(function(t){t.name.toLowerCase().indexOf(e.toLowerCase())>-1&&n.push(t)}),t.setState({result:n,value:e})},t.onSelect=function(e){e&&t.state.result.forEach(function(n){n.id===e&&t.setState({value:n.name})})},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.result,a=n.value;return d.a.createElement(Me.b,{value:a,onSelect:this.onSelect,onSearch:this.handleSearch,placeholder:"find your buddy",style:{marginBottom:10}},t.map(function(n){return d.a.createElement(Me.a,{key:n.id,style:{display:"flex"}},d.a.createElement(ze,{onClick:function(){e.setState({value:n.name,result:[]}),e.props.setComposedId(n.id)}},d.a.createElement("div",{className:"userImg"},d.a.createElement("img",{alt:"#",src:n.profileImageUrl})),d.a.createElement("span",{className:"suggetionText"},n.name)))}))}}]),n}(s.Component),Le=t(1308),Se=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.users,t=e.userId,a=e.chatInit;n||a(t)}},{key:"render",value:function(){var e=this.props,n=e.loading,t=e.users,a=e.toggleCompose,r=e.openCompose,o=e.setComposedId,i=e.selectedChatRoom,l=e.viewProfile,c=e.toggleViewProfile,s=e.className;return n?d.a.createElement(Le.a,null):d.a.createElement(X,{className:"ChatWindow"},d.a.createElement(ve,null),d.a.createElement(Z,{style:{height:"100%"}},d.a.createElement(x.a,{visible:r,onCancel:a,title:"Compose Message",footer:null},d.a.createElement(ce,null,d.a.createElement("h5",null,"Starting your chat with..."),d.a.createElement(Re,{users:t,setComposedId:o,className:s}),d.a.createElement(Ee,{autosize:{minRows:5,maxRows:9},showButton:!0,rows:8}))),i&&d.a.createElement(re,null,d.a.createElement("span",{onClick:function(){return c(i.otherUserInfo)}},i.otherUserInfo.name)),d.a.createElement(je,null),d.a.createElement(Ee,{autosize:{minRows:2,maxRows:6}})),!1!==l?d.a.createElement(Ue,{user:i.otherUserInfo,toggleViewProfile:c,viewProfile:l}):"")}}]),n}(s.Component);var Ae=Object(u.c)(function(e){return e.Chat},w.a)(Se),Be=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.users,t=e.userId,a=e.chatInit;n||a(t)}},{key:"render",value:function(){var e=this.props,n=e.loading,t=e.users,a=e.viewProfile,r=e.toggleCompose,o=e.openCompose,i=e.setComposedId,l=e.selectedChatRoom,c=e.toggleViewProfile,s=e.mobileActiveList,u=e.mobileActiveProfile,p=e.toggleMobileList,m=e.toggleMobileProfile,f=e.className;if(n)return d.a.createElement(Le.a,null);var h=d.a.createElement(Le.a,null);return h=s?d.a.createElement("div",null,d.a.createElement(x.a,{visible:o,onCancel:r,title:"Compose Message",footer:null},d.a.createElement(ce,null,d.a.createElement("h5",null,"Starting your chat with..."),d.a.createElement(Re,{users:t,setComposedId:i,className:f}),d.a.createElement(Ee,{autosize:{minRows:5,maxRows:9},showButton:!0,rows:8}))),d.a.createElement(ve,{toggleMobileList:p})):u?d.a.createElement(Ue,{viewProfile:a,toggleViewProfile:c,toggleMobileProfile:m}):d.a.createElement(Z,{className:"ChatBox"},l&&d.a.createElement(re,null,d.a.createElement(ee,{onClick:function(){return p(!0)}},d.a.createElement("i",{className:"ion-chevron-left"})),d.a.createElement("span",{onClick:function(){c(l.otherUserInfo),m(!0)}},l.otherUserInfo.name)),d.a.createElement(je,{toggleMobileProfile:m}),d.a.createElement(Ee,{InputProps:{disableUnderline:!0}})),d.a.createElement(X,{className:"ChatWindow"},h)}}]),n}(s.Component);var _e=Object(u.c)(function(e){return e.Chat},w.a)(Be),De=t(1343),Ve=t(55),Ye=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.view,t=e.height,a="MobileView"===n?_e:Ae;return d.a.createElement(le,{style:{height:"MobileView"===n?t-108:t-138}},Ve.a.isValid?d.a.createElement(a,{height:t,view:n}):d.a.createElement(De.a,null))}}]),n}(s.Component);n.default=Object(u.c)(function(e){return Object(a.a)({},e.App,{height:e.App.height})})(Ye)}}]);
//# sourceMappingURL=90.bab86324.chunk.js.map