(function(t){function e(e){for(var n,a,u=e[0],s=e[1],i=e[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o={app:0},c=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-05b3c108":"a0de1ace","chunk-29e1356c":"648d9b80"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"chunk-05b3c108":1,"chunk-29e1356c":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-05b3c108":"43c9c73d","chunk-29e1356c":"43c9c73d"}[t]+".css",o=s.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[t],f.parentNode.removeChild(f),r(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var d=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/test-kanban/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"292c":function(t,e,r){"use strict";var n=r("5e06"),a=r.n(n);a.a},"2a7b":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return d})),r.d(e,"c",(function(){return f}));r("d3b7");var n,a=r("ade3"),o=(r("96cf"),r("1da1")),c=r("db04"),u=r("c936"),s=r("6bb1"),i="LOGIN",l="CREATE_USER",d="SET_USERNAME_ACTION",f="SET_ERR_ACTION",p="SET_LOADING_ACTION";e["e"]=(n={},Object(a["a"])(n,i,function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,n(p,!0),n(f,{isError:!1,errMessages:null}),t.abrupt("return",c["a"].logIn(r).then((function(){return n(s["c"])})).catch((function(t){var e=t.response.data;return n(f,{status:!0,errMessages:e.non_field_errors})})).finally((function(){return n(p,!1)})));case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),Object(a["a"])(n,l,function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,n(p,!0),n(f,{isError:!1,errMessages:null}),t.abrupt("return",c["a"].createUser(r).then((function(t){return localStorage.setItem("token",t.data.token)})).catch((function(t){var e=t.response.data;return n(f,{status:!0,errMessages:e.password})})).finally((function(){return n(p,!1)})));case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()),Object(a["a"])(n,f,(function(t,e){var r=t.commit;return r(u["a"],e)})),Object(a["a"])(n,p,(function(t,e){var r=t.commit;return r(u["b"],e)})),Object(a["a"])(n,d,(function(t){var e=t.commit,r=c["a"].decodeToken(localStorage.getItem("token")),n=r.username;e(u["c"],n)})),n)},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],c=r("2877"),u={},s=Object(c["a"])(u,a,o,!1,null,null,null),i=s.exports,l=r("2f62"),d={username:null,error:{errMessages:null,status:!1},isLoading:!1},f=r("2a7b"),p=r("c936"),m={state:d,actions:f["e"],mutations:p["d"]},h=r("c7b1"),v=r("6bb1"),b={cards:null},g={state:b,mutations:h["e"],actions:v["e"]},_={autorization:m,cards:g};n["a"].use(l["a"]);var w=new l["a"].Store({modules:_}),C=(r("caad"),r("b0c0"),r("2532"),r("8c4f")),O=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"autorization-page"},[r("router-view"),r("router-link",{staticClass:"autorization-link",attrs:{to:t.to},on:{click:t.clearErr}},[r("span",{on:{click:t.clearErr}},[t._v(" "+t._s(t.where)+" ")])])],1)}),x=[],k={data:function(){return{to:"/autorization/signup",where:"Регистрация"}},watch:{$route:function(t){this.setData(t.name)}},methods:{setData:function(t){this.to="signup"===t?"/autorization":"/autorization/signup",this.where="signup"===t?"Залогиниться":"Регистрация"},clearErr:function(){this.$store.dispatch(f["c"],{status:!1,errMessages:null})}},mounted:function(){this.setData(this.$route.name)}},j=k,y=Object(c["a"])(j,O,x,!1,null,null,null),E=y.exports,A={path:"/autorization",component:E,children:[{name:"autorization",path:"",component:function(){return r.e("chunk-05b3c108").then(r.bind(null,"c3f6"))}},{name:"signup",path:"signup",component:function(){return r.e("chunk-29e1356c").then(r.bind(null,"fdec"))}}]},T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("button",{staticClass:"main-add-card",on:{click:function(e){t.isModal=!0}}},[t._v(" Добавить таск ")]),r("div",{staticClass:"main-header"},[r("h1",{staticClass:"main-header-logo"},[t._v(" logo ")]),r("div",{staticClass:"main-info-user"},[r("h3",{staticClass:"main-header-username"},[t._v(t._s(t.autorization.username))]),r("span",{staticClass:"main-header-logout",on:{click:t.logOut}},[t._v(" Выйти ")])])]),t.cards.cards?r("div",{staticClass:"main-container"},t._l(t.cards.cards,(function(t,e){return r("ColumnCards",{key:e,attrs:{cards:t,column:e}})})),1):t._e(),t.cards.cards?t._e():r("SpinnerHeart"),t.isModal?r("AddCardForm",{on:{close:function(e){t.isModal=!1}}}):t._e()],1)},R=[],S=r("5530"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column-cards"},[r("div",{class:"column-header column-header_"+t.column},[r("span",{staticClass:"column-header-name"},[t._v(t._s(t.columnNames[t.column])+" ")]),r("span",{staticClass:"column-header-count"},[t._v("количество: "+t._s(t.cards.length))])]),r("ListCards",{attrs:{cards:t.cards,column:t.column}})],1)},I=[],D=(r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column-cards-list"},[r("draggable",{staticClass:"cards-list",attrs:{group:"cards",list:t.arr,sort:!1,"data-column":t.column},on:{end:t.dragNdropHandler}},t._l(t.arr,(function(t){return r("Card",{key:t.id,attrs:{card:t}})})),1)],1)}),N=[],$=r("2909"),M=r("310e"),z=r.n(M),U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isDelete?r("SpinnerHeart"):r("div",{staticClass:"card"},[r("span",{staticClass:"card-id"},[t._v(t._s(t.card.id))]),r("span",{staticClass:"card-text"},[t._v(t._s(t.card.text))]),t.isDelete?t._e():r("button",{staticClass:"card-delete",on:{click:t.deleteCard}},[r("IconDelete")],1)])},q=[],P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"16px",height:"16px"}},[r("path",{attrs:{fill:"#f78f8f",d:"M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"}}),r("path",{attrs:{fill:"#c74343",d:"M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z"}})])},H=[],F={},B=Object(c["a"])(F,P,H,!1,null,null,null),G=B.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"spinner-container"},[r("div",{staticClass:"lds-heart"},[r("div")])])}],K=(r("292c"),{}),Q=Object(c["a"])(K,J,W,!1,null,"2e953d73",null),V=Q.exports,X={props:{card:{type:Object,required:!0}},data:function(){return{isDelete:!1}},methods:{deleteCard:function(){var t=this;this.isDelete||(this.isDelete=!0,this.$store.dispatch(v["b"],this.card).catch((function(){localStorage.removeItem("token"),t.$router.push("/autorization")})))}},components:{IconDelete:G,SpinnerHeart:V}},Y=X,Z=Object(c["a"])(Y,U,q,!1,null,null,null),tt=Z.exports,et={props:{cards:{type:Array,required:!0},column:{type:Number,required:!0}},data:function(){return{arr:Object($["a"])(this.cards)}},watch:{cards:function(t){this.arr=Object($["a"])(t)}},methods:{dragNdropHandler:function(t){var e=this,r=t.from,n=t.to,a=t.oldIndex,o=t.newIndex;if(this.arr.sort((function(t,e){return t.seq_num-e.seq_num})),n.dataset.column===r.dataset.column)return!1;var c={oldCol:r.dataset.column,newCol:n.dataset.column,newIndex:o,oldIndex:a};this.$store.dispatch(v["d"],c).catch((function(){localStorage.removeItem("token"),e.$router.push("/autorization")}))}},components:{Card:tt,draggable:z.a}},rt=et,nt=Object(c["a"])(rt,D,N,!1,null,null,null),at=nt.exports,ot={props:{cards:{type:Array,required:!0},column:{type:Number,required:!0}},data:function(){return{columnNames:["on-hold","in-progress","needs-review","approved"]}},components:{ListCards:at}},ct=ot,ut=Object(c["a"])(ct,L,I,!1,null,null,null),st=ut.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal"},[r("div",{staticClass:"background-opacity"}),r("form",{staticClass:"add-form",on:{submit:function(e){return e.preventDefault(),t.add(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"add-form-input",attrs:{type:"text",placeholder:"текст задачи"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),r("select",{directives:[{name:"model",rawName:"v-model",value:t.row,expression:"row"}],staticClass:"add-form-input",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.row=e.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:"",disabled:"",value:"-1"}},[t._v("Выберите колонку")]),r("option",{attrs:{value:"0"}},[t._v("on-hold")]),r("option",{attrs:{value:"1"}},[t._v("in-progress")]),r("option",{attrs:{value:"2"}},[t._v("needs-review")]),r("option",{attrs:{value:"3"}},[t._v("approved")])]),r("button",{staticClass:"add-form-btn",attrs:{type:"submit",disabled:t.checkForm}},[t._v("Добавить карту")]),r("button",{staticClass:"add-form-close",on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[t._v("✖")])])])},lt=[],dt=(r("498a"),{data:function(){return{row:"-1",text:""}},computed:{checkForm:function(){return!("-1"!==this.row&&this.text.trim())}},methods:{add:function(){var t=this;this.$store.dispatch(v["a"],{row:this.row,text:this.text}).catch((function(){localStorage.removeItem("token"),t.$router.push("/autorization")}))}}}),ft=dt,pt=Object(c["a"])(ft,it,lt,!1,null,null,null),mt=pt.exports,ht={data:function(){return{isModal:!1}},computed:Object(S["a"])({},Object(l["b"])(["autorization","cards"])),methods:{logOut:function(){localStorage.removeItem("token"),this.$router.push("/autorization")}},mounted:function(){var t=this;this.$store.dispatch(f["d"]),this.cards.cards||this.$store.dispatch(v["c"]).catch((function(){localStorage.removeItem("token"),t.$router.push("/autorization")}))},components:{ColumnCards:st,AddCardForm:mt,SpinnerHeart:V}},vt=ht,bt=Object(c["a"])(vt,T,R,!1,null,null,null),gt=bt.exports,_t={path:"/",name:"main",component:gt},wt=[A,_t];n["a"].use(C["a"]);var Ct=new C["a"]({routes:wt});Ct.beforeEach((function(t,e,r){var n=localStorage.getItem("token");n||"autorization"===t.name?n&&t.path.includes("autorization")?r("/"):r():"signup"===t.name?r():r("/autorization/")}));var Ot=Ct;r("71f3");n["a"].config.productionTip=!1,new n["a"]({store:w,router:Ot,render:function(t){return t(i)}}).$mount("#app")},"5e06":function(t,e,r){},"6bb1":function(t,e,r){"use strict";r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return i})),r.d(e,"d",(function(){return l}));var n,a=r("ade3"),o=r("db04"),c=r("c7b1"),u="GET_CARDS",s="CREATE_CARD",i="DELETE_CARD_ACTION",l="UPDATE_CARD_ACTION";e["e"]=(n={},Object(a["a"])(n,u,(function(t){var e=t.commit;return o["a"].getAllCards().then((function(t){return e(c["c"],t)}))})),Object(a["a"])(n,l,(function(t,e){var r=t.state,n=t.commit,a=r.cards[e.oldCol][e.oldIndex];return o["a"].updateCard(a.id,{row:e.newCol,text:a.text,seq_num:a.seq_num}).then((function(){return n(c["d"],e)}))})),Object(a["a"])(n,i,(function(t,e){var r=t.commit;return o["a"].deleteCard(e.id).then((function(){return r(c["b"],e)}))})),Object(a["a"])(n,s,(function(t,e){var r=t.commit;return o["a"].createCard(e).then((function(t){return r(c["a"],t.data)}))})),n)},"71f3":function(t,e,r){},c7b1:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return s})),r.d(e,"d",(function(){return i}));r("99af"),r("4de4"),r("d81d"),r("a434");var n,a=r("ade3"),o=r("2909"),c="SET_CARDS",u="ADD_CARD_MUTATION",s="DETELE_CARD_MUTATION",i="UPDATE_CARD_MUTATION";e["e"]=(n={},Object(a["a"])(n,c,(function(t,e){return t.cards=e})),Object(a["a"])(n,u,(function(t,e){return t.cards=t.cards.map((function(t,r){return+e.row===r?[].concat(Object(o["a"])(t),[e]):t}))})),Object(a["a"])(n,s,(function(t,e){var r=e.row,n=e.id;return t.cards=t.cards.map((function(t,e){return e===+r?t.filter((function(t){return t.id!==n})):t}))})),Object(a["a"])(n,i,(function(t,e){var r=e.oldCol,n=e.newCol,a=e.oldIndex,c=Object(o["a"])(t.cards),u=c[r].splice(a,1)[0];return u.row=n,t.cards=c.map((function(t,e){return e===+n?[].concat(Object(o["a"])(t),[u]).sort((function(t,e){return t.seq_num-e.seq_num})):t}))})),n)},c936:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return u}));var n,a=r("ade3"),o="SET_USERNAME_MUTATION",c="SET_ERR_STATUS",u="SET_LOADING_STATUS";e["d"]=(n={},Object(a["a"])(n,o,(function(t,e){return t.username=e})),Object(a["a"])(n,u,(function(t,e){return t.isLoading=e})),Object(a["a"])(n,c,(function(t,e){return t.error=e})),n)},db04:function(t,e,r){"use strict";r("d3b7"),r("3ca3"),r("ddb0"),r("96cf");var n=r("1da1"),a=r("bc3a"),o=r.n(a),c=r("04e1"),u=function(){var t=o.a.create({baseURL:"https://trello.backend.tests.nekidaem.ru/api/v1/",timeout:2e3,headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}});return t.interceptors.request.use((function(t){var e=localStorage.getItem("token");return t.headers.Authorization=e?"JWT ".concat(e):"",t})),t},s=u();e["a"]={createUser:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.post("/users/create/",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),logIn:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.post("/users/login/",e);case 2:r=t.sent,n=r.data,localStorage.setItem("token",n.token);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getCardsRow:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.post("/cards?row=".concat(e)).then((function(t){var e=t.data;return e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getAllCards:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.getCardsRow(0),this.getCardsRow(1),this.getCardsRow(2),this.getCardsRow(3)]);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteCard:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.delete("/cards/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateCard:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.patch("/cards/".concat(e,"/"),r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),createCard:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.post("/cards/",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),decodeToken:function(t){return c(t)}}}});
//# sourceMappingURL=app.0c655e6d.js.map