(this["webpackJsonpproduct-view-horeka"]=this["webpackJsonpproduct-view-horeka"]||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),i=n.n(r),o=(n(17),n(7)),s=n(2);var l=n(1),u={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"};function d(e){var t=e.index,n=e.active,c=e.config,a=e.onMouseOver,r=e.onMouseLeave,i=e.onClick,o=e.halfStarHidden,s=e.halfStarAt,d=e.isUsingIcons,j=e.uniqueness,b=c.color,f=c.activeColor,h=c.char,O=c.isHalf,x=c.edit,v=c.halfIcon,p=c.emptyIcon,m=c.filledIcon,g="",y=!1;O&&!o&&s===t&&(g=d?"react-stars-half":"react-stars-".concat(j),y=!0);var w=Object.assign({},u,{color:n?f:b,cursor:x?"pointer":"default"});return Object(l.jsx)("span",{className:g,style:w,"data-index":t,"data-forhalf":m?t:h,onMouseOver:a,onMouseMove:a,onMouseLeave:r,onClick:i,children:d?n?m:!n&&y?v:p:h},t)}var j={overflow:"hidden",position:"relative"};function b(e,t){return"\n    .react-stars-".concat(t,":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: ").concat(e,";\n  }")}function f(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(0),o=Object(s.a)(i,2),u=o[0],f=o[1],h=Object(c.useState)([]),O=Object(s.a)(h,2),x=O[0],v=O[1],p=Object(c.useState)(!1),m=Object(s.a)(p,2),g=m[0],y=m[1],w=function(e){var t=Object(c.useState)(e.count),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(e.size),o=Object(s.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(e.char),j=Object(s.a)(d,2),b=j[0],f=j[1],h=Object(c.useState)(e.color),O=Object(s.a)(h,2),x=O[0],v=O[1],p=Object(c.useState)(e.activeColor),m=Object(s.a)(p,2),g=m[0],y=m[1],w=Object(c.useState)(e.isHalf),S=Object(s.a)(w,2),I=S[0],M=S[1],H=Object(c.useState)(e.edit),N=Object(s.a)(H,2),C=N[0],D=N[1],k=Object(c.useState)(e.emptyIcon),A=Object(s.a)(k,2),L=A[0],_=A[1],E=Object(c.useState)(e.halfIcon),T=Object(s.a)(E,2),B=T[0],R=T[1],V=Object(c.useState)(e.filledIcon),G=Object(s.a)(V,2),z=G[0],F=G[1],U=Object(c.useState)(e.a11y),q=Object(s.a)(U,2),X=q[0],P=q[1];return[{count:a,size:l,char:b,color:x,activeColor:g,isHalf:I,edit:C,emptyIcon:L,halfIcon:B,filledIcon:z,a11y:X},function(e){r(e.count),u(e.size),f(e.char),v(e.color),y(e.activeColor),M(e.isHalf),D(e.edit),_(e.emptyIcon),R(e.halfIcon),F(e.filledIcon),P(e.a11y)}]}(e),S=Object(s.a)(w,2),I=S[0],M=S[1],H=Object(c.useState)(0),N=Object(s.a)(H,2),C=N[0],D=N[1],k=Object(c.useState)(!1),A=Object(s.a)(k,2),L=A[0],_=A[1],E=Object(c.useState)(""),T=Object(s.a)(E,2),B=T[0],R=T[1];function V(e){"undefined"===typeof e&&(e=I.isHalf?Math.floor(u):Math.round(u));for(var t=[],n=0;n<I.count;n++)t.push({active:n<=e-1});return t}function G(e){if(I.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(I.isHalf){var n=z(e);_(n),n&&(t+=1),D(t)}else t+=1;!function(e){var t=x.filter((function(e){return e.active}));e!==t.length&&v(V(e))}(t)}}function z(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;return(n=Math.round(Math.abs(n)))>t.width/2}function F(){I.edit&&(U(u),v(V()))}function U(e){I.isHalf&&(_(function(e){return e%1===0}(e)),D(Math.floor(e)))}function q(e){if(I.edit){var t,n=Number(e.currentTarget.getAttribute("data-index"));if(I.isHalf){var c=z(e);_(c),c&&(n+=1),t=c?n:n+.5,D(n)}else t=n+=1;X(t)}}function X(t){t!==u&&(v(V(t)),f(t),e.onChange(t))}return Object(c.useEffect)((function(){var t,n;!function(){var t="react-stars";R(e.classNames+" ".concat(t))}(),t=e.value,n=e.count,f(t<0||t>n?0:t),v(V(e.value)),M(e),r((Math.random()+"").replace(".","")),y(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),D(Math.floor(e.value)),_(e.isHalf&&e.value%1<.5)}),[]),Object(l.jsx)("div",{className:"react-stars-wrapper-".concat(a),style:{display:"flex"},children:Object(l.jsxs)("div",{tabIndex:I.a11y&&I.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(I.a11y||I.edit){var t=e.key,n=u,c=Number(t);c?Number.isInteger(c)&&c>0&&c<=I.count&&(n=c):("ArrowUp"===t||"ArrowRight"===t)&&n<I.count?(e.preventDefault(),n+=I.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&n>.5&&(e.preventDefault(),n-=I.isHalf?.5:1),U(n),X(n)}},className:B,style:j,children:[I.isHalf&&function(){return Object(l.jsx)("style",{dangerouslySetInnerHTML:{__html:g?(e=I.activeColor,"\n          span.react-stars-half > * {\n          color: ".concat(e,";\n      }")):b(I.activeColor,a)}});var e}(),x.map((function(e,t){return Object(l.jsx)(d,{index:t,active:e.active,config:I,onMouseOver:G,onMouseLeave:F,onClick:q,halfStarHidden:L,halfStarAt:C,isUsingIcons:g,uniqueness:a},t)})),Object(l.jsx)("p",{style:{position:"absolute",left:"-200rem"},role:"status",children:u})]})})}f.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}};var h=f,O=function(e){var t=e.data,n=t.images,a=t.imgLength,r=t.dummyImg;if(a<5)for(;5!==n.length;)n.push(r);var i=Object(c.useState)(n[0]),u=Object(s.a)(i,2),d=u[0],j=u[1],b=Object(c.useState)(null),f=Object(s.a)(b,2),O=f[0],x=f[1],v=Object(c.useState)(Object(o.a)(n.map((function(e,t){return Object(l.jsx)("img",{src:e,alt:"Name",onClick:function(e){return w(e,t)},onMouseEnter:function(e){return y(e,t)},onMouseLeave:function(){return y(null)},style:{border:"None"}},t)})))),p=Object(s.a)(v,2),m=p[0],g=p[1],y=function(e,t){if(null!==e){if(t<a){var n=e.target.src;x(n)}}else x(null)},w=function e(t,c){if(g(Object(o.a)(n.map((function(t,n){return n===c&&c<a?Object(l.jsx)("img",{src:t,alt:"Name",onClick:function(t){return e(t,n)},onMouseEnter:function(e){return y(e,n)},onMouseLeave:function(){return y(null)},style:{border:"3px solid #555"}},n):Object(l.jsx)("img",{src:t,alt:"Name",onClick:function(t){return e(t,n)},onMouseEnter:function(e){return y(e,n)},onMouseLeave:function(){return y(null)},style:{border:"None"}},n)})))),c<a){var r=t.target.src;j(r)}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"display-image",children:[Object(l.jsx)("img",{src:null===O?d:O,alt:t.name}),Object(l.jsx)("div",{className:"product-rating",children:Object(l.jsx)(h,{size:1,value:t.starRating,edit:!1,isHalf:!0})})]}),Object(l.jsx)("div",{className:"image-grid-container",children:Object(l.jsx)("div",{className:"image-grid",style:{gridTemplateColumns:"18% ".repeat(n.length)},children:Object(o.a)(m)})})]})},x=function(e){var t=e.data;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"product-heading",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("p",{children:t.description})]}),Object(l.jsx)("table",{className:"product-description-table",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Brand:"}),Object(l.jsx)("td",{children:t.brand})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Barcode:"}),Object(l.jsx)("td",{children:t.barcode})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Category:"}),Object(l.jsx)("td",{children:t.category})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Ingredients:"}),Object(l.jsx)("td",{children:t.ingredients})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Dimensions:"}),Object(l.jsx)("td",{children:t.dimensions})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Nutritional Info:"}),Object(l.jsx)("td",{children:Object(l.jsx)("ul",{children:t.nutririonalInfo.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"VAT:"}),Object(l.jsx)("td",{children:t.vat})]})]})})]})},v=n(6),p=Object(v.b)((function(e){return{data:e.data}}))((function(e){var t=e.data;return Object(l.jsxs)("div",{className:"product-view-main",children:[Object(l.jsx)("div",{className:"product-image-carosel",children:Object(l.jsx)(O,{data:t})}),Object(l.jsx)("div",{className:"product-description",children:Object(l.jsx)(x,{data:t})})]})})),m=(n(23),function(){return Object(l.jsx)(p,{})});var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(m,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},w=n(12),S=n(11),I={data:{images:["https://images.unsplash.com/photo-1473360526459-100c8e8ec8d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1604845912391-c7a5385ecbcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1515982622700-920dc0b7c0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"],dummyImg:"https://banner2.cleanpng.com/20180517/uke/kisspng-http-404-computer-icons-clip-art-5afe161a542093.5617268715266012423446.jpg",imgLength:3,name:"Coca-Cola light",description:"Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls",brand:"test",barcode:"0000000000",category:"Soft Drink",ingredients:"A, B, C, D",dimensions:"100*50*50",nutririonalInfo:["a","b","c","d"],vat:"4%",starRating:4.5}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return"productView/CHANGE_PRODUCT"===t.type?Object(S.a)(Object(S.a)({},e),{},{data:t.payload}):e},H=Object(w.a)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v.a,{store:H,children:Object(l.jsx)(g,{})})}),document.getElementById("root")),y()}},[[24,1,2]]]);
//# sourceMappingURL=main.cc85d847.chunk.js.map