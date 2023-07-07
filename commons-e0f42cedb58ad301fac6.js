/*! For license information please see commons-e0f42cedb58ad301fac6.js.LICENSE.txt */
(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[351],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},782:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ce}});var r,o,i,a,c=n(7294),u=n(1082),l=n(5900),s=n.n(l),f=function(e){var t=e.d,n=e.size,r=e.label,o=e.className;return c.createElement("span",{className:s()("inline-flex","items-center","justify-center",o),role:"figure"},c.createElement("svg",{version:"1.1",width:n,height:n,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:t,className:"fill-current"})),r&&c.createElement("span",{className:"relative inline-block ml-1 leading-none"},r))},p=function(e){var t=e.mainMenu,n=e.isMobileMenu;return c.createElement(c.Fragment,null,t.map((function(e,t){return c.createElement("li",{key:t,className:n?"m-0 whitespace-nowrap":"my-0 mx-3"},c.createElement(u.rU,{to:e.path,className:n?"no-underline block py-2.5 px-4 font-medium":"no-underline font-medium"},e.title))})))},m=function(e){var t=e.mainMenu,n=e.mainMenuItems,r=(e.menuMoreText,e.isMobileMenuVis),o=(e.isSubMenuVis,e.onToggleMobileMenu);e.onToggleSubMenu,t.length;return c.createElement(c.Fragment,null,c.createElement("div",{className:"flex md:hidden"},c.createElement(c.Fragment,null,r?c.createElement(c.Fragment,null,c.createElement("ul",{className:"absolute top-0 right-0 m-0 p-0 flex-col items-start bg-slate-900 text-left list-none rounded overflow-hidden z-50"},c.createElement(p,{mainMenu:t,isMobileMenu:!0})),c.createElement("button",{className:"fixed inset-0 z-10 bg-black opacity-20 w-screen h-screen cursor-default",onClick:o})):null,c.createElement("button",{className:"p-0 leading-[0] bg-none text-inherit border-0",onClick:o,type:"button","aria-label":"Menu"},c.createElement(f,{size:24,d:"M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z",className:"cursor-pointer"})))),c.createElement("div",{className:"hidden md:block"},c.createElement("ul",{className:"flex flex-[0 0 auto] items-center justify-center max-w-full my-0 mx-auto py-0 list-none"},c.createElement(p,{mainMenu:t,isMobileMenu:!1}))))},d=function(e){var t=e.logoText,n=e.mainMenu,r=e.menuMoreText,o=e.numMenuItems,i=(0,c.useState)(!1),a=i[0],l=i[1],s=(0,c.useState)(!1),f=s[0],p=s[1];return c.createElement(c.Fragment,null,c.createElement("header",{className:"flex justify-between items-center relative p-5 bg-slate-900"},c.createElement("div",{className:"flex items-center justify-between my-1 mx-auto w-[900px] max-w-[900px] md:px-5"},c.createElement(u.rU,{to:"/",className:"no-underline hover:text-burnt"},c.createElement("div",{className:"flex items-center font-bold font-mono text-2xl"},c.createElement(c.Fragment,null,c.createElement("span",{className:"mr-1"},">"),c.createElement("span",null,t),c.createElement("span",{className:"inline-block w-2.5 h-6 bg-burnt ml-1 rounded-[1px] animate-cursor"})))),c.createElement("span",{className:"flex relative"},c.createElement(m,{mainMenu:n,mainMenuItems:o,menuMoreText:r,isMobileMenuVis:a,isSubMenuVis:f,onToggleMobileMenu:function(){return l(!a)},onToggleSubMenu:function(){return p(!f)}})))))},y=function(){return c.createElement("footer",{className:"flex flex-col text-xl text-center mb-12 md:block text-[#cbcfd6] md:pt-6"},c.createElement("span",{className:"m-0 p-2.5 md:p-0 mx-auto"},"© 2019-",(new Date).getFullYear()," Jefferson Ye"),c.createElement("a",{className:"text-white p-2.5 md:m-0 md:p-0 border-0 md:ml-5 md:pl-5 md:border-l mx-auto",href:"https://www.linkedin.com/in/jefferson-ye/"},"LinkedIn"),c.createElement("a",{className:"text-white p-2.5 md:m-0 md:p-0 border-0 md:ml-5 md:pl-5 md:border-l mx-auto",href:"https://github.com/forbesye"},"GitHub"))},h=n(5697),b=n.n(h),g=n(4839),v=n.n(g),T=n(2993),w=n.n(T),E=n(6494),x=n.n(E),A="bodyAttributes",S="htmlAttributes",O="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},M=(Object.keys(C).map((function(e){return C[e]})),"charset"),j="cssText",k="href",N="http-equiv",P="innerHTML",I="itemprop",L="name",_="property",H="rel",R="src",F="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",V="defer",Y="encodeSpecialCharacters",q="onChangeClientState",U="titleTemplate",z=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),K=[C.NOSCRIPT,C.SCRIPT,C.STYLE],Z="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ee=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},te=function(e){var t=ae(e,C.TITLE),n=ae(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ae(e,B);return t||r||void 0},ne=function(e){return ae(e,q)||function(){}},re=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},oe=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ie=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&fe("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===H&&"canonical"===e[n].toLowerCase()||u===H&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==P&&c!==j&&c!==I||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=x()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ae=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ce=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ce(e)}),0)}),ue=function(e){return clearTimeout(e)},le="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ce:n.g.requestAnimationFrame||ce,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:n.g.cancelAnimationFrame||ue,fe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},pe=null,me=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;he(C.BODY,r),he(C.HTML,o),ye(f,p);var m={baseTag:be(C.BASE,n),linkTags:be(C.LINK,i),metaTags:be(C.META,a),noscriptTags:be(C.NOSCRIPT,c),scriptTags:be(C.SCRIPT,l),styleTags:be(C.STYLE,s)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=m[e].oldTags)})),t&&t(),u(e,d,y)},de=function(e){return Array.isArray(e)?e.join(""):e},ye=function(e,t){void 0!==e&&document.title!==e&&(document.title=de(e)),he(C.TITLE,t)},he=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Z):n.getAttribute(Z)!==a.join(",")&&n.setAttribute(Z,a.join(","))}},be=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+Z+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===P)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ge=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},Te=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,o=ve(n,r),[c.createElement(C.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ge(n),i=de(t);return o?"<"+e+" "+Z+'="true" '+o+">"+ee(i,r)+"</"+e+">":"<"+e+" "+Z+'="true">'+ee(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case S:return{toComponent:function(){return ve(t)},toString:function(){return ge(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===P||n===j){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===P||e===j)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+ee(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===K.indexOf(e);return t+"<"+e+" "+Z+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},we=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:Te(C.BASE,t,r),bodyAttributes:Te(A,n,r),htmlAttributes:Te(S,o,r),link:Te(C.LINK,i,r),meta:Te(C.META,a,r),noscript:Te(C.NOSCRIPT,c,r),script:Te(C.SCRIPT,u,r),style:Te(C.STYLE,l,r),title:Te(C.TITLE,{title:f,titleAttributes:p},r)}},Ee=v()((function(e){return{baseTag:oe([k,F],e),bodyAttributes:re(A,e),defer:ae(e,V),encode:ae(e,Y),htmlAttributes:re(S,e),linkTags:ie(C.LINK,[H,k],e),metaTags:ie(C.META,[L,M,N,_,I],e),noscriptTags:ie(C.NOSCRIPT,[P],e),onChangeClientState:ne(e),scriptTags:ie(C.SCRIPT,[R,P],e),styleTags:ie(C.STYLE,[j],e),title:te(e),titleAttributes:re(O,e)}}),(function(e){pe&&se(pe),e.defer?pe=le((function(){me(e,(function(){pe=null}))})):(me(e),pe=null)}),we)((function(){return null})),xe=(o=Ee,a=i=function(e){function t(){return $(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!w()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case C.TITLE:return J({},o,((t={})[r.type]=a,t.titleAttributes=J({},i),t));case C.BODY:return J({},o,{bodyAttributes:J({},i)});case C.HTML:return J({},o,{htmlAttributes:J({},i)})}return J({},o,((n={})[r.type]=J({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},G(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:b().object,bodyAttributes:b().object,children:b().oneOfType([b().arrayOf(b().node),b().node]),defaultTitle:b().string,defer:b().bool,encodeSpecialCharacters:b().bool,htmlAttributes:b().object,link:b().arrayOf(b().object),meta:b().arrayOf(b().object),noscript:b().arrayOf(b().object),onChangeClientState:b().func,script:b().arrayOf(b().object),style:b().arrayOf(b().object),title:b().string,titleAttributes:b().object,titleTemplate:b().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=we({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);xe.renderStatic=xe.rewind;var Ae=n(9499),Se="1216879795",Oe=function(e){var t=(0,Ae.useLocation)().pathname,n=(0,u.K2)(Se).site,r=e.title,o=e.description,i=e.image,a=e.article,l=n.siteMetadata,s=l.defaultTitle,f=l.titleTemplate,p=l.defaultDescription,m=l.siteUrl,d=l.defaultImage,y={title:r||s,description:o||p,image:""+m+(i||d),url:""+m+t};return c.createElement(xe,{title:y.title,titleTemplate:f,htmlAttributes:{lang:"en"}},c.createElement("meta",{name:"theme-color",content:"#0F172A",media:"(prefers-color-scheme: light)"}),c.createElement("meta",{name:"theme-color",content:"#0F172A",media:"(prefers-color-scheme: dark)"}),c.createElement("meta",{name:"description",content:y.description}),c.createElement("meta",{name:"image",content:y.image}),y.url&&c.createElement("meta",{property:"og:url",content:y.url}),!a?null:c.createElement("meta",{property:"og:type",content:"article"}),y.title&&c.createElement("meta",{property:"og:title",content:y.title}),y.description&&c.createElement("meta",{property:"og:description",content:y.description}),y.image&&c.createElement("meta",{property:"og:image",content:y.image}))},Ce=function(e){var t=e.pageTitle,n=e.children,r=(0,u.K2)("612215535").site.siteMetadata,o=r.logoText,i=r.mainMenu,a=r.menuMoreText,l=r.numMenuItems,s=r.title;return c.createElement("div",{className:"text-white text-lg flex flex-col justify-center text-center"},c.createElement(Oe,{title:t}),c.createElement(d,{logoText:o,mainMenu:i,menuMoreText:a,numMenuItems:l}),c.createElement("title",null,t," | ",s),c.createElement("main",{className:"flex flex-col flex-[1 0 auto] items-center justify-center my-2 md:my-8 mx-auto w-full max-w-[900px]"},n),c.createElement(y,null))}},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=commons-e0f42cedb58ad301fac6.js.map