(this["webpackJsonptest-store"]=this["webpackJsonptest-store"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(17),r=a.n(n),o=(a(25),a(2)),s=a(1),i=a(18),m=a.n(i);var d=function(){return console.log("LOGO"),c.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-1"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})))},u=a(7),p={customer_id:"",date:new Date,product:[]},E=c.a.createContext([p,function(){}]);var g=function(){var e=Object(l.useContext)(E),t=Object(o.a)(e,1)[0];console.log("BADGE");var a=0;return t.product.length&&t.product.map((function(e){return a+=e.qty})),c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"fa fa-shopping-basket"}),c.a.createElement("span",{className:"badge"},a))};var b=function(e){return console.log("NAV"),c.a.createElement("div",{className:"col-xl-10 col-lg-10 col-md-10"},c.a.createElement("div",{className:"menu-main d-flex align-items-center justify-content-end"},c.a.createElement("div",{className:"main-menu f-right d-none d-lg-block"},c.a.createElement("nav",null,c.a.createElement("ul",{id:"navigation"},c.a.createElement("li",null,c.a.createElement(u.b,{to:"/home"},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/products"},"Products"))))),c.a.createElement("div",{className:"header-right-btn f-right d-none d-xl-block ml-20"},c.a.createElement(u.b,{to:"/cart"}," ",c.a.createElement(g,null)," "))))},v=a(8);var f=function(){var e=this,t=Object(l.useContext)(E),a=Object(o.a)(t,2),n=a[0],r=a[1];console.log(n);var s=0,i=function(e){console.log("Update Cart PLUS",e);var t=n.product.findIndex((function(t){return t.pid===e.pid}));t>-1?(console.log("FIND ",t),n.product[t].qty+=1):n.product.push(Object(v.a)(Object(v.a)({},e),{},{qty:1})),r()},m=function(e){if(e.qty){console.log("Update Cart MINUS",e);var t=n.product.findIndex((function(t){return t.pid===e.pid}));t>-1&&(console.log("FIND ",t),1===n.product[t].qty?n.product.splice(t,1):n.product[t].qty-=1),r()}};return c.a.createElement("section",{className:"categories-area section-padding3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row",style:{border:"1px solid #000"}},c.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3",style:{border:"1px solid #000",backgroundColor:"#ccc",padding:"15px 0"}},"Image"),c.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3",style:{border:"1px solid #000",backgroundColor:"#ccc",padding:"15px 0"}},"Product"),c.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2",style:{border:"1px solid #000",backgroundColor:"#ccc",padding:"15px 0"}},"Price"),c.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2",style:{border:"1px solid #000",backgroundColor:"#ccc",padding:"15px 0"}},"Qty"),c.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2",style:{border:"1px solid #000",backgroundColor:"#ccc",padding:"15px 0"}},"Total")),n.product.map((function(t){return c.a.createElement("div",{className:"row",key:t.pid,style:{border:"1px solid #000"}},c.a.createElement("span",{style:{display:"none"}},s+=t.price*t.qty),c.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3",style:{border:"1px solid #000"}},c.a.createElement("img",{src:t.image,alt:t.title,style:{width:"80px"}})),c.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3",style:{border:"1px solid #000"}},t.title),c.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2",style:{border:"1px solid #000"}},t.price),c.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2",style:{border:"1px solid #000"}},c.a.createElement("button",{className:"boxed-btn",style:{padding:"5px"},onClick:m.bind(e,t)},1===t.qty?c.a.createElement("i",{className:"fa fa-trash"}):c.a.createElement("i",{className:"fa fa-minus"})),t.qty,c.a.createElement("button",{className:"boxed-btn",style:{padding:"5px"},onClick:i.bind(e,t)},c.a.createElement("i",{className:"fa fa-plus"}))),c.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-2",style:{border:"1px solid #000"}},t.price*t.qty))})),c.a.createElement("div",{className:"row text-right",style:{border:"1px solid #000"}},c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",style:{border:"1px solid #000",backgroundColor:"#ccc",padding:"15px 0"}},c.a.createElement("strong",null,"Total")),c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6",style:{border:"1px solid #000",backgroundColor:"#ccc",padding:"15px 0"}},c.a.createElement("strong",null,s))),n.product.length<1?"Cart is Empty":""))};var N=function(e){var t=Object(s.g)();return console.log(t.pathname),c.a.createElement("header",null,c.a.createElement("div",{className:"header-area"},c.a.createElement("div",{className:"main-header  header-sticky"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement(d,null),c.a.createElement(b,null),"/cart"!==t.pathname?c.a.createElement(f,null):"")))))};var h=function(){return console.log("HERO"),Object(l.useEffect)((function(){document.title="HOME"}),[]),c.a.createElement("div",{className:"slider-area "},c.a.createElement("div",{className:"slider-active"},c.a.createElement("div",{className:"single-slider slider-height d-flex align-items-center"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-6 col-lg-6 col-md-8"},c.a.createElement("div",{className:"hero__caption"},c.a.createElement("span",{"data-animation":"fadeInUp","data-delay":".4s"},"Get Every Single Solutions."),c.a.createElement("h1",{"data-animation":"fadeInUp","data-delay":".6s"},"I\u2019m Designer Haris F. Watson"),c.a.createElement("p",{"data-animation":"fadeInUp","data-delay":".8s"},"jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."),c.a.createElement("div",{className:"hero__btn"},c.a.createElement("a",{href:"industries.html",className:"btn hero-btn","data-animation":"fadeInLeft","data-delay":".8s"},"Learn More"),c.a.createElement("a",{href:"industries.html",className:"btn border-btn ml-15","data-animation":"fadeInRight","data-delay":"1.0s"},"Hire Me")))))))))};var y=function(e){return c.a.createElement("div",{className:"addCart"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){var t=e.cartObj,a=null,l=t.product.findIndex((function(t){return t.pid===e.pid}));l>-1?t.product[l].qty+=1:(a=Object(v.a)(Object(v.a)({},e),{},{qty:1}),t.product.push(a)),e.cartCallBack()}.bind(this,e)},"Add to Cart"))},x=a(11);var j=function(){var e=Object(l.useState)({fname:"",email:""}),t=Object(o.a)(e,2),a=t[0],n=t[1],r=function(e){var t=e.target.name,a=e.target.value;n((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(x.a)({},t,a))}))};return console.log(a),c.a.createElement("div",{className:""},c.a.createElement("form",{onSubmit:function(e){alert("A new Name "+a.fname+" submitted!"),e.preventDefault()}.bind(this)},c.a.createElement("label",null,"Name:",c.a.createElement("input",{type:"text",name:"fname",value:a.fname,onChange:r.bind(this)})),c.a.createElement("label",null,"Email:",c.a.createElement("input",{type:"email",name:"email",value:a.email,onChange:r.bind(this)})),c.a.createElement("input",{type:"submit",value:"Submit"})))};var O=function(){var e=Object(l.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(!1),s=Object(o.a)(r,2),i=s[0],m=s[1],d=Object(l.useState)([]),p=Object(o.a)(d,2),g=p[0],b=p[1];Object(l.useEffect)((function(){document.title="Products",fetch("https://fakestoreapi.com/products?limit=6").then((function(e){return e.json()})).then((function(e){m(!0),b(e)}),(function(e){m(!0),n(e)}))}),[]);var v=Object(l.useContext)(E),f=Object(o.a)(v,2),N=f[0],h=f[1];return a?c.a.createElement("div",null,"Error: ",a.message):i?c.a.createElement("section",{className:"categories-area section-padding3"},c.a.createElement("div",{className:"container"},c.a.createElement(j,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"section-tittle mb-70"},c.a.createElement("h2",null,"What Services you will Get from me!")))),c.a.createElement("div",{className:"row"},g.map((function(e){return c.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6",key:e.id},c.a.createElement("div",{className:"single-cat text-center mb-50"},c.a.createElement("div",{className:"cat-icon"},c.a.createElement("span",{className:"product-image"},c.a.createElement("img",{src:e.image,alt:e.title}))),c.a.createElement("div",{className:"cat-cap"},c.a.createElement("h5",null,c.a.createElement(u.b,{to:"/product/"+e.id},e.title)),c.a.createElement("p",null,c.a.createElement("strong",null,"Price: "),e.price),c.a.createElement("p",null,e.description),c.a.createElement(y,{pid:e.id,title:e.title,price:e.price,image:e.image,cartObj:N,cartCallBack:h}))))}))))):c.a.createElement("div",null,"Loading...")},C={};var k=function(e){var t=Object(l.useState)(null),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(l.useState)(!1),s=Object(o.a)(r,2),i=s[0],m=s[1],d=Object(l.useState)([]),u=Object(o.a)(d,2),p=u[0],E=u[1];return Object(l.useEffect)((function(){if(e){if(console.log(C," CACHE "),C[e]){var t=C[e];E(t),m(!0)}fetch(e).then((function(e){return e.json()})).then((function(t){m(!0),E(t),C[e]=t}),(function(e){m(!0),n(e)}))}}),[e]),[p,c,i]};var w=function(){var e,t,a,n=Object(s.h)().pid,r=Object(l.useContext)(E),i=Object(o.a)(r,2),m=i[0],d=i[1];document.title="Product Details";var u=k("https://fakestoreapi.com/products/"+n),p=Object(o.a)(u,3);return e=p[0],a=p[1],t=p[2],console.log("pro Det ",e),a?c.a.createElement("div",null,"Error: ",a.message):t?c.a.createElement("section",{className:"categories-area section-padding3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6",key:e.id},c.a.createElement("div",{className:"single-cat text-center mb-50"},c.a.createElement("div",{className:"cat-icon"},c.a.createElement("span",{className:"product-image"},c.a.createElement("img",{src:e.image,alt:e.title}))),c.a.createElement("div",{className:"cat-cap"},c.a.createElement("h2",null,c.a.createElement("a",{href:"services.html"},e.title)),c.a.createElement("p",null,c.a.createElement("strong",null,"Price: "),e.price),c.a.createElement("p",null,e.description)),c.a.createElement(y,{pid:e.id,title:e.title,image:e.image,price:e.price,cartObj:m,cartCallBack:d})))))):c.a.createElement("div",null,"Loading...")};var S=function(){var e=Object(l.useState)(p),t=Object(o.a)(e,2),a=t[0],n=t[1];return console.log("APP"),c.a.createElement(E.Provider,{value:[p,function(){return n({abc:a})}]},c.a.createElement("div",{className:"App"},Object(l.useMemo)((function(){return c.a.createElement(N,null)}),[]),c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/home",component:h}),c.a.createElement(s.b,{path:"/products",component:O}),c.a.createElement(s.b,{path:"/product/:pid",component:w}),c.a.createElement(s.b,{path:"/cart",component:f}),c.a.createElement(s.a,{to:"/home"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(u.a,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.49e0531f.chunk.js.map