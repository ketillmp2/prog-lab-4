(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{15:function(e,t,n){},2:function(e,t,n){"use strict";(function(e){var a=n(37),r=n.n(a),o=n(38),i=n.n(o),c=r()(i.a,e.Promise),l=function(e){return e.body},s=null,u=function(e){s&&e.set("Authorization","Basic ".concat(s))},p=function(e){return c.get("".concat("http://localhost:22206").concat(e)).use(u).then(l).catch((function(e){return console.log(e)}))},m=function(e,t){return c.post("".concat("http://localhost:22206").concat(e),t).use(u).then(l)},h={all:function(){return p("/points")},recalculated:function(e){return p("/points/recalculate?r=".concat(e))},new:function(e,t,n){return m("/points",{x:e,y:t,r:n})}},d={login:function(e,t){return m("/login",{username:e,password:t})},logout:function(){return m("/logout")}};t.a={Points:h,Auth:d,setToken:function(e){s=e}}}).call(this,n(20))},43:function(e,t,n){e.exports=n(79)},48:function(e,t,n){},49:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),i=n.n(o),c=(n(48),n(4)),l=n(5),s=n(7),u=n(6),p=n(8),m=n(1),h=(n(49),"LOGIN"),d=n(2),v=n(9),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changePassword=function(e){return n.props.onChangePassword(e.target.value)},n.changeUsername=function(e){return n.props.onChangeUsername(e.target.value)},n.submitForm=function(e,t){return function(a){a.preventDefault(),n.props.onSubmit(e,t)}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{className:"dom"},"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438",r.a.createElement("span",{className:"sgovnom"},"\u0442\u0435\u0442itmo")),r.a.createElement("div",{id:"id01",className:"modal"},r.a.createElement("span",{onClick:b,className:"close",title:"Close Modal"},"\xd7"),r.a.createElement("div",{className:"modal-content animate"},r.a.createElement("form",{onSubmit:this.submitForm(this.props.username,this.props.password)},r.a.createElement("div",{className:"container2"},r.a.createElement("label",{htmlFor:"uname"},r.a.createElement("b",null,"Username")),r.a.createElement("input",{maxLength:"50",type:"text",value:this.props.username,placeholder:"Enter Username",name:"uname",id:"uname",required:!0,onChange:this.changeUsername}),r.a.createElement("label",{htmlFor:"psw"},r.a.createElement("b",null,"Password")),r.a.createElement("input",{maxLength:"50",type:"password",value:this.props.password,placeholder:"Enter Password",name:"psw",id:"psw",required:!0,onChange:this.changePassword}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onClick:g}),"Show password"),r.a.createElement("button",{type:"submit"},"Login"))),r.a.createElement("div",{className:"container",style:{backgroundColor:"#f1f1f1"}},r.a.createElement("button",{type:"button",onClick:b,className:"cancelbtn"},"Cancel")))),r.a.createElement("button",{id:"login",className:"ui-button",onClick:E},"\u252c\u2534\u252c\u2534\u2524(\uff65_\u251c\u252c\u2534\u252c\u2534"))}}]),t}(r.a.Component);function b(){document.getElementById("id01").style.display="none"}function E(){document.getElementById("id01").style.display="block"}function g(){var e=document.getElementById("psw");"password"===e.type?e.type="text":e.type="password"}window.onclick=function(e){var t=document.getElementById("id01");e.target===t&&(t.style.display="none")};var y=Object(v.connect)((function(e){return Object(m.a)({},e.auth,{currentUser:e.common.currentUser})}),(function(e){return{onChangeUsername:function(t){return e({type:"UPDATE_FIELD_AUTH",key:"username",value:t})},onChangePassword:function(t){return e({type:"UPDATE_FIELD_AUTH",key:"password",value:t})},onSubmit:function(t,n){e({type:h,payload:d.a.Auth.login(t,n),username:t})}}}))(f),O=n(22),T=n(27),P=n.n(T);var w=n(18),k={appName:"lab4",token:null},j=Object(O.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)({},e,{inProgress:!1,errors:t.error?t.payload.message:null});case"ASYNC_START":return t.subtype===h?Object(m.a)({},e,{inProgress:!0}):e;case"UPDATE_FIELD_AUTH":return Object(m.a)({},e,Object(w.a)({},t.key,t.value));default:return e}},common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_LOAD":return Object(m.a)({},e,{token:t.token||null,appLoaded:!0,currentUser:t.username||null});case"REDIRECT":return Object(m.a)({},e,{redirectTo:null});case"LOGOUT":return Object(m.a)({},e,{redirectTo:"/",token:null,currentUser:null});case h:return Object(m.a)({},e,{redirectTo:t.error?"/":"/main",currentUser:t.error?null:t.username});default:return e}},points:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{xc:0,rc:1,yc:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FIELD_POINT":return Object(m.a)({},e,Object(w.a)({},t.key,t.value));case"POINT_ADDED":return Object(m.a)({},e,{point:t.payload});case"POINTS_LOADED":return Object(m.a)({},e,{points:t.payload});case"POINTS_RECALCULATED":return Object(m.a)({},e,{points_r:t.payload,current_r:t.r});case"LOGOUT":return Object(m.a)({},e,{points:void 0});default:return e}},colors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{colorV:"#FC88DA",oppositeColor:"#037725"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COLORS":return Object(m.a)({},e,{colorV:t.colorV,oppositeColor:t.oppositeColor});default:return e}}}),C=Object(O.applyMiddleware)((function(e){return function(t){return function(n){if((a=n.payload)&&"function"===typeof a.then)return e.dispatch({type:"ASYNC_START",subtype:n.type}),void n.payload.then((function(t){n.payload=t,e.dispatch(n)}),(function(t){n.error=!0;try{n.payload=JSON.parse(t.message)}catch(a){n.payload=t}e.dispatch(n)}));var a;t(n)}}}),(function(e){return function(e){return function(t){switch(t.type){case h:t.error||(window.localStorage.setItem("token",P.a.get("JSESSIONID")),window.localStorage.setItem("username",t.username),d.a.setToken(P.a.get("JSESSIONID")));break;case"LOGOUT":window.localStorage.removeItem("token"),window.localStorage.removeItem("username"),d.a.setToken(null)}e(t)}}}),(function(e){return function(t){return function(n){switch(n.type){case"POINTS_LOADED":n.error&&(window.localStorage.removeItem("token"),window.localStorage.removeItem("username"),d.a.setToken(null));break;case"POINT_ADDED":n.error||(e.dispatch({type:"POINTS_LOADED",payload:d.a.Points.all()}),e.dispatch({type:"POINTS_RECALCULATED",payload:d.a.Points.recalculated(n.r),r:n.r}))}t(n)}}})),I=Object(O.createStore)(j,C),N=(n(74),n(19)),S=n(13),A=n(42),D=n.n(A),_=(n(15),function(e){return e.currentUser?null:r.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/log",className:"nav-link"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0430\u0431\u043a\u0443")))}),U=function(e){return e.currentUser?r.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},r.a.createElement("li",{className:"nav-item"},"\u0414\u0430\u0432\u043d\u043e \u043d\u0435 \u0432\u0438\u0434\u0435\u043b\u0438\u0441\u044c, ",e.currentUser,"!"),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/main",className:"nav-link"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),r.a.createElement(N.b,{to:"/",onClick:e.logout,className:"nav-link"},"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043b\u0430\u0431\u043a\u0438"))):null},x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light "},r.a.createElement("div",{className:"col-sm-5"},r.a.createElement(U,{currentUser:this.props.currentUser,logout:this.props.onClickLogout}),r.a.createElement(_,{currentUser:this.props.currentUser})))}}]),t}(r.a.Component),L=Object(v.connect)((function(){return{}}),(function(e){return{onClickLogout:function(){e({type:"LOGOUT",payload:d.a.Auth.logout()})}}}))(x),R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=window.localStorage.getItem("token"),t=window.localStorage.getItem("username");e&&d.a.setToken(e),this.props.onLoad(t,e)}},{key:"componentWillReceiveProps",value:function(e){this.props.currentUser&&Q.push("/"),console.log(this.props),this.props.redirectTo&&Q.push(this.props.redirectTo)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L,{currentUser:this.props.currentUser}))}}]),t}(r.a.Component),F=Object(v.connect)((function(e){return{appName:e.common.appName,currentUser:e.common.currentUser,points:e.points.points,redirectTo:e.common.redirect}}),(function(e){return{onLoad:function(t,n){return e({type:"APP_LOAD",username:t,token:n})},onRedirect:function(){return e({type:"REDIRECT"})}}}))(R),B=function(e){var t=e.firstName;return r.a.createElement("div",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 Y: ",t)},M=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return"OK"===this.props.isError?r.a.createElement("div",null,r.a.createElement("button",{ref:this.props.refer,type:"submit"},"\u0412\u043b\u0443\u043f\u0438\u0442\u044c!")):r.a.createElement("div",{style:{backgroundColor:"red"}},this.props.isError)}}]),t}(r.a.Component),Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeX=function(e){n.props.onChangeX(e.target.value)},n.changeR=function(e){return n.props.onChangeR(e.target.value)},n.changeY=function(e){var t=e.target.value.replace(",",".");0===t.length||isNaN(t)||+t>3||+t<-5?(n.props.onErrorQ("Y \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0442 -5 \u0434\u043e 3"),n.setState({error:"Y \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0442 -5 \u0434\u043e 3"})):(n.props.onErrorQ(null),n.setState({error:"OK"})),n.props.onChangeY(e.target.value)},n.submitForm=function(e,t,a){return function(r){r.preventDefault(),n.props.onSubmit(e,t,a)}},n.submitRef=r.a.createRef(),n.state={error:"OK"},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.xc,t=this.props.yc,n=this.props.rc;return r.a.createElement("div",{className:"top_float"},r.a.createElement("form",{className:"form_div",onSubmit:this.submitForm(e,t,n)},r.a.createElement("div",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 X:",r.a.createElement("select",{id:"xValue",onChange:this.changeX},r.a.createElement("option",{value:"-2"},"-2"),r.a.createElement("option",{value:"-1.5"},"-1.5"),r.a.createElement("option",{value:"-1"},"-1"),r.a.createElement("option",{value:"-0.5"},"-0.5"),r.a.createElement("option",{selected:!0,value:"0"},"0"),r.a.createElement("option",{value:"0.5"},"0.5"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"1.5"},"1.5"),r.a.createElement("option",{value:"2"},"2"))),r.a.createElement("div",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 Y:",r.a.createElement("br",null),r.a.createElement("input",{maxLength:"6",type:"text",name:"yValue",value:t,onChange:this.changeY}),r.a.createElement(B,{firstName:t})),r.a.createElement("div",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 R:",r.a.createElement("select",{id:"rValue",value:n,onChange:this.changeR},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement(M,{refer:this.submitRef,isError:this.state.error})))}}]),t}(r.a.Component),V=Object(v.connect)((function(e){return Object(m.a)({},e.points,{errors:e.common.errors})}),(function(e){return{onChangeX:function(t){return e({type:"UPDATE_FIELD_POINT",key:"xc",value:t})},onChangeY:function(t){return e({type:"UPDATE_FIELD_POINT",key:"yc",value:t})},onChangeR:function(t){return e({type:"UPDATE_FIELD_POINT",key:"rc",value:t})},onSubmit:function(t,n,a){e({type:"POINT_ADDED",payload:d.a.Points.new(t,n,a),r:a})},onErrorQ:function(t){e({type:"VALIDATION_ERROR",error:t})}}}))(Y),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.point.x),r.a.createElement("td",null,this.props.point.y),r.a.createElement("td",null,this.props.point.r),r.a.createElement("td",null,this.props.point.hit?"\u0425\u0438\u0442":"\u041c\u0438\u0441\u0441"))}}]),t}(r.a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props.currentUser){var t="pointList container d-flex justify-content-center col-sm-4";return this.props.points?0===this.props.points.length?r.a.createElement("div",{className:t},"\u0422\u0443\u0442 \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u043e :c"):r.a.createElement("div",{className:t},r.a.createElement("table",{className:"resultTable table table-striped table-bordered table-sm",cellSpacing:"0",width:"80%"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"X"),r.a.createElement("th",null,"Y"),r.a.createElement("th",null,"R"),r.a.createElement("th",null,"\u0425\u0438\u0442"))),r.a.createElement("tbody",null,this.props.points.map((function(t){return r.a.createElement(G,{point:t,key:t.id,r:e.props.r})}))))):r.a.createElement("div",{className:t},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0442\u043e\u0447\u0435\u043a...")}return null}}]),t}(r.a.Component),H=n(14),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={colorValue:"#FC88DA",oppositeColor:"#00FF00",missColor:"#FF0000"},n.setColor=n.setColor.bind(Object(H.a)(n)),n.mousePosition=n.mousePosition.bind(Object(H.a)(n)),n.drawPoint=n.drawPoint.bind(Object(H.a)(n)),n.invertColor=n.invertColor.bind(Object(H.a)(n)),n.drawGraph=n.drawGraph.bind(Object(H.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.recalculatedPoints(1)}},{key:"componentDidMount",value:function(){this.drawGraph(1)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.rc&&(this.drawGraph(e.rc),e.current_r&&e.current_r===e.rc||this.props.recalculatedPoints(e.rc)),e.points&&e.points.map((function(e){return t.drawPoint(e.r,e.x,e.y,e.hit)}))}},{key:"setColor",value:function(){var e,t,n=Math.floor(16777215*Math.random());e="#"+(n=n.toString(16)),t=this.invertColor(e,!1),this.setState({colorValue:e,oppositeColor:t})}},{key:"padZero",value:function(e,t){return t=t||2,(new Array(t).join("0")+e).slice(-t)}},{key:"invertColor",value:function(e,t){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");var n=parseInt(e.slice(0,2),16),a=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return t?.299*n+.587*a+.114*r>186?"#000000":"#FFFFFF":(n=(255-n).toString(16),a=(255-a).toString(16),r=(255-r).toString(16),"#"+this.padZero(n)+this.padZero(a)+this.padZero(r))}},{key:"drawGraph",value:function(e){var t=document.getElementById("canvas"),n=document.getElementById("pointRadius");if(window.matchMedia("(max-width: 500px)").matches){document.getElementById("");t.setAttribute("width","300"),t.setAttribute("height","300"),n.value="3"}else window.matchMedia("(min-width: 705px) and (max-width: 1106px)").matches?(t.setAttribute("width","300"),t.setAttribute("height","300"),n.value="3"):(window.matchMedia("(min-width: 500px) and (max-width: 705px)").matches,t.setAttribute("width","300"),t.setAttribute("height","300"),n.value="3");var a=this.state.colorValue,r=t.getAttribute("width"),o=t.getAttribute("height");console.log("width: "+r+", height: "+o);var i=t.getContext("2d");i.font="13px Ravi Prakash",i.strokeStyle="black",i.fillStyle="black",i.clearRect(0,0,r,o),i.fillStyle=a,i.fillRect(r/6,3*o/6,r/3,o/3),i.beginPath(),i.moveTo(r/2,o/2),i.lineTo(r/2+r/6,o/2),i.lineTo(r/2,o-o/6),i.lineTo(r/2,o/2),i.fill(),i.closePath(),i.beginPath(),i.moveTo(r/6,o/2),i.lineTo(r/2,o/2),i.lineTo(r/2,o/6),i.arc(r/2,o/2,r/6*2,Math.PI,-Math.PI/2,!1),i.fill(),i.closePath(),i.fillStyle="#000000",i.beginPath(),i.moveTo(r/2,0),i.lineTo(r/2,o),i.moveTo(r/2,0),i.lineTo(r/2+7,7),i.moveTo(r/2,0),i.lineTo(r/2-7,7),i.moveTo(0,o/2),i.lineTo(r,o/2),i.moveTo(r,o/2),i.lineTo(r-7,o/2-7),i.moveTo(r,o/2),i.lineTo(r-7,o/2+7),i.font="16px Ravi Prakash",i.fillText("X",r-10,o/2-13),i.fillText("Y",r/2+15,10),i.font="13px Ravi Prakash",i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r/2-4,o-o/6),i.lineTo(r/2+4,o-o/6),i.fillText("-"+e.toString(),r/2+7,o-o/6+5),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r/2-4,o-o/6*2),i.lineTo(r/2+4,o-o/6*2),i.fillText("-"+(e/2).toString(),r/2+7,o-o/6*2+5),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r/2-4,o-o/6*4),i.lineTo(r/2+4,o-o/6*4),i.fillText((e/2).toString(),r/2+7,o-o/6*4+5),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r/2-4,o-o/6*5),i.lineTo(r/2+4,o-o/6*5),i.fillText(e.toString(),r/2+7,o-o/6*5+5),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r-r/6,o/2-4),i.lineTo(r-r/6,o/2+4),i.fillText(e.toString(),r-r/6-4,o/2+14),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r-r/6*2,o/2-4),i.lineTo(r-r/6*2,o/2+4),i.fillText((e/2).toString(),r-r/6*2-3,o/2+14),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r-r/6*4,o/2-4),i.lineTo(r-r/6*4,o/2+4),i.fillText("-"+(e/2).toString(),r-r/6*4-7,o/2+14),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(r-r/6*5,o/2-4),i.lineTo(r-r/6*5,o/2+4),i.fillText("-"+e.toString(),r-r/6*5-6,o/2+14),i.closePath(),i.stroke()}},{key:"mousePosition",value:function(e){this.setColor();var t=document.getElementById("graphRadius").value,n=document.getElementById("canvas"),a=n.getAttribute("width"),r=n.getAttribute("height"),o=function(e,t){var n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}(n,e),i=((o.x-a/2)/100*t).toFixed(5),c=((r/2-o.y)/100*t).toFixed(5);this.props.onCanvasClick(i,c,this.props.rc||1)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("canvas",{ref:function(t){return e.graphic=t},id:"canvas",onClick:this.mousePosition}),r.a.createElement("input",{type:"hidden",id:"graphRadius",value:this.props.rc}),r.a.createElement("input",{type:"hidden",id:"graphColor",value:this.state.colorValue}),r.a.createElement("input",{type:"hidden",id:"pointRadius",value:"3"}))}},{key:"drawPoint",value:function(e,t,n,a){var r=document.getElementById("canvas"),o=r.getAttribute("width"),i=r.getAttribute("height"),c=document.getElementById("pointRadius").value,l=r.getContext("2d"),s=o/2+t*(o/3)/e,u=i/2-n*(i/3)/e;l.fillStyle=a?this.state.oppositeColor:this.state.colorValue,l.beginPath(),l.arc(s,u,c,0,2*Math.PI),l.fill(),l.closePath()}}]),t}(r.a.Component);var W=Object(v.connect)((function(e){return{points:e.points.points_r,rc:e.points.rc,current_r:e.points.current_r}}),(function(e){return{recalculatedPoints:function(t){e({type:"POINTS_RECALCULATED",payload:d.a.Points.recalculated(t),r:t})},onCanvasClick:function(t,n,a){e({type:"POINT_ADDED",payload:d.a.Points.new(t,n,a),r:a})}}}))(J),Z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){this.props.currentUser&&Q.push("/main")}},{key:"render",value:function(){return void 0===this.props.points&&this.props.onLoad(d.a.Points.all()),this.props.currentUser?this.props.points?r.a.createElement("div",{className:"container4"},r.a.createElement("div",{id:"content"},r.a.createElement(V,null),r.a.createElement("div",{id:"main_photo_div"},r.a.createElement(W,null)),r.a.createElement(X,{points:this.props.points,currentUser:this.props.currentUser,r:this.props.current_r}))):r.a.createElement("div",{className:"container4"},r.a.createElement("div",{id:"content"},r.a.createElement(V,null),r.a.createElement("div",{id:"main_photo_div"},r.a.createElement(W,null)))):null}}]),t}(r.a.Component),K=Object(v.connect)((function(e){return{points:e.points.points,currentUser:e.common.currentUser,current_r:e.points.current_r}}),(function(e){return{onLoad:function(t){return e({type:"POINTS_LOADED",payload:t})}}}))(Z);n.d(t,"history",(function(){return Q}));var Q=D()();i.a.render(r.a.createElement(v.Provider,{store:I},r.a.createElement(N.a,{history:Q},r.a.createElement(S.a,{path:"/",component:F}),r.a.createElement(S.a,{path:"/log",component:y}),r.a.createElement(S.a,{path:"/main",component:K}))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ffef1b8c.chunk.js.map