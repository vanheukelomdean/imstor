(this.webpackJsonpimstor=this.webpackJsonpimstor||[]).push([[0],{108:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),n=s.n(i),c=s(25),r=s.n(c),l=(s(65),s(56)),o=s(8),d=s(9),h=s(21),b=s(11),u=s(10),m=s(20),j=s(5),p=s(19),v=s(18),g=s(14),f=s.n(g),O=(s(73),s(110)),x=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={user:a.props.user,redirect:!1},a}return Object(d.a)(s,[{key:"handleSubmit",value:function(){this.props.setUser(null),this.setState({redirect:!0})}},{key:"render",value:function(){return Object(a.jsxs)(O.a,{children:[Object(a.jsx)("h1",{children:" Welcome to imstor"}),Object(a.jsx)("h3",{children:" An image repository webapp created by Dean Van Heukelom"}),Object(a.jsxs)("h5",{children:[" Take a look at the source code ",Object(a.jsx)("a",{href:"https://github.com/vanheukelomdean/imstor/",children:"here"}),"."]})]})}}]),s}(n.a.Component),k=s(22),w=s.n(k),S=s(26),y=(s(30),s(17)),F=s.n(y);var C=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={email:"",emailFeedback:{class:"",message:""},pwd:"",pwdFeedback:{class:"",message:""},redirect:!1,authFeedback:{class:"",message:""},setUser:a.props.setUser},a}return Object(d.a)(s,[{key:"inputStateChange",value:function(e){"usr"===e.target.id?this.setState({email:e.target.value,emailFeedback:{class:"",message:""}}):"pwd"===e.target.id&&this.setState({pwd:e.target.value,pwdfeedback:{class:"",message:""}})}},{key:"clearState",value:function(){this.setState({emailFeedback:{class:"",message:""},pwdFeedback:{class:"",message:""}})}},{key:"handleSubmit",value:function(){var e=this;this.clearState(),0==this.state.email.length?this.setState({emailFeedback:{class:"form-control is-invalid",message:"Please enter your email"}}):0==this.state.pwd.length?this.setState({pwdFeedback:{class:"form-control is-invalid",message:"Please enter your password"}}):Object(S.a)(w.a.mark((function t(){var s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a={email:e.state.email,password:e.state.pwd},F.a.get("http://localhost:3000/api/users/login",{params:a}).then((function(e){return e.data}));case 2:(s=t.sent)?(e.setState({redirect:!0,user:s}),e.state.setUser(e.state.user)):e.setState({authFeedback:{class:"form-control is-invalid",message:"Incorrect email or password."}});case 4:case"end":return t.stop()}var a}),t)})))()}},{key:"render",value:function(){return Object(a.jsxs)("div",{class:"container",align:"center",children:[Object(a.jsx)("br",{}),Object(a.jsx)("h1",{class:"text-center",children:"Login to access private images"}),this.state.redirect&&Object(a.jsx)(j.a,{to:{pathname:"images"}}),Object(a.jsx)("div",{id:"authfeedback",class:this.state.authFeedback.class,children:this.state.authFeedback.message}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"usr",children:"Email:"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"usr",value:this.state.email,onChange:this.inputStateChange.bind(this)}),Object(a.jsx)("div",{id:"usrfeedback",class:this.state.emailFeedback.class,children:this.state.emailFeedback.message})]}),Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"pwd",children:"Password:"}),Object(a.jsx)("input",{type:"password",class:"form-control",id:"pwd",value:this.state.pwd,onChange:this.inputStateChange.bind(this)}),Object(a.jsx)("div",{id:"pwdfeedback",class:this.state.pwdFeedback.class,children:this.state.pwdFeedback.message})]}),Object(a.jsx)("input",{type:"button",value:"Login",id:"login",class:"btn form-btn",onClick:this.handleSubmit.bind(this)}),Object(a.jsx)(m.b,{to:"/signup",children:Object(a.jsx)("input",{type:"button",value:"Sign Up",id:"signup",class:"btn form-btn",onClick:this.props.changeForm})})]})]})}}]),s}(n.a.Component),U=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={user:a.props.user,redirect:!1},a}return Object(d.a)(s,[{key:"handleSubmit",value:function(){this.props.setUser(null),this.setState({redirect:!0})}},{key:"render",value:function(){return Object(a.jsxs)(O.a,{children:[this.state.redirect&&Object(a.jsx)(j.a,{to:"/home"}),this.state.user&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:[" Logged in as ",this.state.user.name,"."]}),Object(a.jsx)("p",{children:" Navigate to images page on side bar to store/view images."}),Object(a.jsx)("input",{type:"button",value:"Logout",id:"login",class:"btn form-btn",onClick:this.handleSubmit.bind(this)})]})]})}}]),s}(n.a.Component);var N=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={name:"",nameFeedback:{class:"",message:"",valid:!1},pwd1:"",pwd1Feedback:{class:"",message:"",valid:!1},pwd2:"",pwd2Feedback:{class:"",message:"",valid:!1},email:"",emailFeedback:{class:"",message:"",valid:!1},setUser:a.props.setUser,redirect:!1},Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("ghetUSers"),F.a.get("http://localhost:3000/api/users/getUsers").then((function(e){return console.log(e.data),e.data}));case 2:a.state.users=e.sent.map((function(e){return e.email}));case 3:case"end":return e.stop()}}),e)})))(),a}return Object(d.a)(s,[{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"inputStateChange",value:function(e){if("usr"===e.target.id){var t=this.state.nameFeedback;e.target.value.length>0?(t.class="form-control is-valid",t.message="Name is OK",t.valid=!0):(t.class="form-control is-invalid",t.message="Please Enter Your Name",t.valid=!1),this.setState({name:e.target.value,nameFeedback:t})}else if("pwd"===e.target.id){t=this.state.pwd1Feedback;e.target.value.length>8?(t.class="form-control is-valid",t.message="Password is OK",t.valid=!0):(t.class="form-control is-invalid",t.message="Password must be atleast 8 characters",t.valid=!1),this.state.pwd2.length>0&&(e.target.value!==this.state.pwd2?this.setState({pwd2Feedback:{message:"Passwords do not match!",class:"form-control is-invalid",valid:!1}}):this.setState({pwd2Feedback:{message:"Passwords Match",class:"form-control is-valid",valid:!0}})),this.setState({pwd1:e.target.value,pwd1Feedback:t})}else if("confirm-pwd"===e.target.id){t=this.state.pwd2Feedback;e.target.value===this.state.pwd1?(t.class="form-control is-valid",t.message="Passwords Match",t.valid=!0):(t.class="form-control is-invalid",t.message="Passwords do not match!",t.valid=!1),this.setState({pwd2:e.target.value,pwd2Feedback:t})}else if("email"===e.target.id){t=this.state.emailFeedback;var s=this.validateEmail(e.target.value),a=!this.state.users.includes(e.target.value);t.class=s&&a?"form-control is-valid":"form-control is-invalid",t.message=s?"Email is OK":"Please enter a valid Email",t.message=a?"Email is OK":"This email is already registered",t.valid=s&&a,this.setState({email:e.target.value,emailFeedback:t})}}},{key:"handleSubmit",value:function(){if(console.log(this.state.nameFeedback.valid,this.state.pwd1Feedback.valid,this.state.pwd2Feedback.valid,this.state.emailFeedback.valid),this.state.nameFeedback.valid&&this.state.pwd1Feedback.valid&&this.state.pwd2Feedback.valid&&this.state.emailFeedback.valid){var e={email:this.state.email,password:this.state.pwd1,name:this.state.name};!function(e){F.a.post("http://localhost:3000/api/users/addUser",{},{params:{user:e}}).then((function(e){return e.data}))}(e),this.props.setUser(e),this.setState({redirect:!0,user:e})}else 0===this.state.name.length&&this.setState({nameFeedback:{class:"form-control is-invalid",message:"Enter name"}}),0===this.state.pwd1.length&&this.setState({pwd1Feedback:{class:"form-control is-invalid",message:"Enter a password"}}),0===this.state.pwd2.length&&this.setState({pwd2Feedback:{class:"form-control is-invalid",message:"Confirm password"}}),0===this.state.email.length&&this.setState({emailFeedback:{class:"form-control is-invalid",message:"Enter a valid email"}}),this.setState({overallFeedback:{class:"form-control is-invalid",message:"Please fix errors with the form"}}),setTimeout(function(){this.setState({overallFeedback:{class:"",message:""}})}.bind(this),2500)}},{key:"render",value:function(){return console.log(this.state),Object(a.jsxs)("div",{class:"container",align:"center",children:[this.state.redirect&&Object(a.jsx)(j.a,{to:{pathname:"images"}}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{class:"text-center",children:"Sign Up"}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{class:"form-group required",children:[Object(a.jsx)("label",{for:"usr",class:"control-label",children:"Name:"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"usr",value:this.state.name,onChange:this.inputStateChange.bind(this)}),Object(a.jsx)("div",{id:"usrfeedback",class:this.state.nameFeedback.class,children:this.state.nameFeedback.message})]}),Object(a.jsxs)("div",{class:"form-group required",children:[Object(a.jsx)("label",{for:"email",class:"control-label",children:"Email:"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"email",value:this.state.email,onChange:this.inputStateChange.bind(this)}),Object(a.jsx)("div",{id:"emailfeedback",class:this.state.emailFeedback.class,children:this.state.emailFeedback.message})]}),Object(a.jsxs)("div",{class:"form-group required",children:[Object(a.jsx)("label",{for:"pwd",class:"control-label",children:"Password:"}),Object(a.jsx)("input",{type:"password",class:"form-control",id:"pwd",value:this.state.pwd1,onChange:this.inputStateChange.bind(this)}),Object(a.jsx)("div",{id:"usrfeedback",class:this.state.pwd1Feedback.class,children:this.state.pwd1Feedback.message})]}),Object(a.jsxs)("div",{class:"form-group required",children:[Object(a.jsx)("label",{for:"confirm-pwd",class:"control-label",children:"Confirm Password:"}),Object(a.jsx)("input",{type:"password",class:"form-control",id:"confirm-pwd",value:this.state.pwd2,onChange:this.inputStateChange.bind(this)}),Object(a.jsx)("div",{id:"pwdfeedback",class:this.state.pwd2Feedback.class,children:this.state.pwd2Feedback.message})]}),Object(a.jsx)("input",{type:"button",value:"Sign up",id:"signup",class:"btn form-btn",onClick:this.handleSubmit.bind(this)})]})]})}}]),s}(n.a.Component),P=s(50),I=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={user:null},a.getInitialState(),a.setUser=a.setUser.bind(Object(h.a)(a)),a}return Object(d.a)(s,[{key:"setUser",value:function(e){this.setSelectedOption(this.state),this.setState({user:e})}},{key:"getInitialState",value:function(){return console.log("get initial"),{selectedOption:localStorage.getItem("SelectedOption")||1}}},{key:"setSelectedOption",value:function(e){localStorage.setItem("SelectedOption",e),console.log(e),this.setState({selectedOption:e})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(m.a,{children:Object(a.jsx)(j.b,{render:function(t){var s=t.location,i=t.history;return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsxs)(f.a,{style:{position:"fixed"},onSelect:function(e){var t="/"+e;s.pathname!==t&&i.push(t)},children:[Object(a.jsx)(f.a.Toggle,{}),Object(a.jsxs)(f.a.Nav,{children:[Object(a.jsxs)(g.NavItem,{eventKey:"home",children:[Object(a.jsx)(g.NavIcon,{children:Object(a.jsx)(p.a,{icon:v.c,style:{fontSize:"1.75em"}})}),Object(a.jsx)(g.NavText,{children:"Home"})]}),Object(a.jsxs)(g.NavItem,{eventKey:"login",children:[Object(a.jsx)(g.NavIcon,{children:Object(a.jsx)(p.a,{icon:v.g,style:{fontSize:"1.75em"}})}),Object(a.jsx)(g.NavText,{children:"User"})]}),Object(a.jsxs)(g.NavItem,{eventKey:"images",children:[Object(a.jsx)(g.NavIcon,{children:Object(a.jsx)(p.a,{icon:v.d,style:{fontSize:"1.75em"}})}),Object(a.jsx)(g.NavText,{children:"Images"})]})]})]}),Object(a.jsxs)("main",{children:[Object(a.jsx)(j.b,{path:"/home",render:function(e){return Object(a.jsx)(x,{})}}),Object(a.jsx)(j.b,{path:"/images",render:function(t){return Object(a.jsx)(P.a,Object(l.a)({user:e.state.user},t))}}),Object(a.jsx)(j.b,{path:"/login",render:function(t){return e.state.user?Object(a.jsx)(U,{user:e.state.user,setUser:e.setUser}):Object(a.jsx)(C,{setUser:e.setUser})}}),Object(a.jsx)(j.b,{path:"/signup",render:function(t){return Object(a.jsx)(N,{setUser:e.setUser})}})]})]})}})})}}]),s}(n.a.Component);r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))},30:function(e,t,s){},50:function(e,t,s){"use strict";(function(e){var a=s(0),i=s(55),n=s(8),c=s(9),r=s(21),l=s(11),o=s(10),d=s(1),h=s.n(d),b=s(110),u=s(58),m=s(57),j=s(59),p=s(17),v=s.n(p),g=s(51),f=s.n(g),O=s(52),x=s(19),k=s(18);var w=function(t){Object(l.a)(d,t);var s=Object(o.a)(d);function d(e){var t,a,i;return Object(n.a)(this,d),(a=s.call(this,e)).state={imgs:[],user:null!==(t=a.props.user)&&void 0!==t?t:{},rerender:!1},a.rerenderParentCallback=a.rerenderParentCallback.bind(Object(r.a)(a)),(i=a.state.user.email,v.a.get("http://localhost:3000/api/images/viewPublic",{params:{email:i}}).then((function(e){return e.data}))).then((function(e){for(var t=[],s=0;s<e.records.length;s++)t.push({record:e.records[s],file:e.files[s].Body.data});a.setState({imgs:t}),console.log(a.state)})),a}return Object(c.a)(d,[{key:"rerenderParentCallback",value:function(){this.forceUpdate()}},{key:"onRemove",value:function(e){var t,s=Object(i.a)(this.state.imgs);console.log("onremove "+e+" "+s[e].record.path),t=s[e].record.path,console.log({file:t}),v.a.post("http://localhost:3000/api/images/remove",{},{params:{file:t}}).then((function(e){return console.log(e.data),e.data})),s.splice(e,1),this.setState({imgs:s})}},{key:"render",value:function(){var t=this;return Object(a.jsx)(b.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(O.a,{user:this.state.user,rerenderParentCallback:this.rerenderParentCallback}),this.state.imgs.map((function(s,i){return Object(a.jsx)(m.a,{className:"col-md-4",children:Object(a.jsxs)(j.a,{children:[s.record.email&&s.record.email==t.state.user.email&&Object(a.jsx)("button",{type:"submit",title:"Remove Image",className:"btn-delete",onClick:t.onRemove.bind(t,i),children:Object(a.jsx)(x.a,{icon:k.f,className:"delete",style:{fontSize:"1.5em"}})}),Object(a.jsx)(x.a,{icon:s.record.private?k.b:k.a,className:"privacy",style:{fontSize:"1.5em"}}),Object(a.jsx)("img",{src:"data:image/jpeg;base64,".concat((n=s.file,e.from(n).toString("base64")))}),Object(a.jsxs)(j.a.Body,{children:[Object(a.jsx)("p",{class:"title",children:s.record.title}),Object(a.jsx)("p",{class:"desc",children:s.record.description}),Object(a.jsx)("p",{class:"date",children:f()(new Date(s.record.date)).format("LLLL")})]})]})});var n}))]})})}}]),d}(h.a.Component);t.a=w}).call(this,s(94).Buffer)},52:function(e,t,s){"use strict";var a=s(0),i=s(8),n=s(9),c=s(11),r=s(10),l=s(1),o=s.n(l),d=(s(25),s(57)),h=s(58),b=s(53),u=s.n(b),m=s(54),j=s.n(m),p=s(17),v=s.n(p),g=s(19),f=s(18),O={content:{top:"50%",left:"50%",height:"40%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)","z-index":"1"}},x=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(e){var a,n;return Object(i.a)(this,s),(n=t.call(this,e)).onSubmit=function(){for(var e=new FormData,t=[],s=0;s<n.state.files.length;s++)e.append("file",n.state.files[s]),t.push({title:n.state.title+(s>0?"_"+s:""),path:n.state.files[s].name,description:n.state.desc,private:n.state.private,email:n.state.user.email}),console.log(n.state.files[s]);n.closeModal(),v.a.post("http://localhost:3000/api/images/upload",e,{params:t}),n.props.rerenderParentCallback()},n.state={isOpen:!1,private:!1,user:null!==(a=n.props.user)&&void 0!==a?a:{}},console.log(n.state),n}return Object(n.a)(s,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({isOpen:!1})}},{key:"inputStateChange",value:function(e){"title"===e.target.id?this.setState({title:e.target.value}):"desc"===e.target.id&&this.setState({desc:e.target.value})}},{key:"fileChange",value:function(e){this.setState({files:e.target.files})}},{key:"switchChange",value:function(e){this.setState({private:e})}},{key:"render",value:function(){return Object(a.jsxs)(d.a,{className:"col-md-4",children:[Object(a.jsx)("button",{id:"btn-add",type:"submit",title:"Add Images",onClick:this.openModal.bind(this),children:Object(a.jsx)(g.a,{icon:f.e,style:{fontSize:"10em"}})}),Object(a.jsx)(u.a,{isOpen:this.state.isOpen,onAfterOpen:this.afterOpenModal.bind(this),onRequestClose:this.closeModal.bind(this),style:O,contentLabel:"Example Modal",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("h4",{id:"modal-header",children:" Add Images"}),Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"title",children:"Title"}),Object(a.jsx)("input",{type:"text",class:"",id:"title",value:this.state.title,onChange:this.inputStateChange.bind(this)})]}),Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"desc",children:"Description"}),Object(a.jsx)("textarea",{type:"text",class:"",id:"desc",value:this.state.desc,onChange:this.inputStateChange.bind(this)})]}),Object(a.jsxs)("div",{class:"form-group",children:[Object(a.jsx)("label",{for:"access",children:"Private"}),Object(a.jsx)(j.a,{id:"privacy",checked:this.state.private,onChange:this.switchChange.bind(this)})]}),Object(a.jsx)("input",{type:"file",className:"",multiple:!0,onChange:this.fileChange.bind(this)}),Object(a.jsxs)(h.a,{children:[Object(a.jsx)("button",{type:"button",className:"btn btn-success btn-block btn-file",id:"file-submit",onClick:this.onSubmit.bind(this),children:"Upload"}),Object(a.jsx)("button",{type:"button",className:"btn btn-danger btn-block btn-file",id:"file-cancel",onClick:this.closeModal.bind(this),children:"Close"})]})]})})]})}}]),s}(o.a.Component);t.a=x},65:function(e,t,s){}},[[108,1,2]]]);
//# sourceMappingURL=main.0d8d417a.chunk.js.map