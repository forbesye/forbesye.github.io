(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[7],{4341:function(e,t,r){"use strict";var n=r(7294),o=r(3723),l=r(4983),u=r(1955);t.Z=function(e){var t=e.title,r=e.date,a=e.updatedDate,s=e.coverImage,i=e.body,c=(0,o.c)(s),p="Invalid Date"!==a?a:null;return n.createElement("div",{className:"w-full max-w-[660px] md:max-w-[900px] text-left p-5 my-0 mx-auto prose prose-invert prose-xl"},n.createElement("div",{className:"mb-4"},n.createElement("h1",{className:"mb-6"}," ",t),n.createElement("div",{className:"italic"},"Created on "+r),n.createElement("div",{className:"italic"},p?"Last updated on "+a:null)),s?n.createElement(o.G,{image:c,alt:""}):null,n.createElement(l.MDXProvider,null,n.createElement(u.MDXRenderer,null,i)))}},140:function(e,t,r){"use strict";r.r(t);var n=r(1082),o=r(7294),l=r(782),u=r(4341),a=function(e){var t=e.prevSlug,r=e.nextSlug;return o.createElement("div",{className:"flex items-center justify-center w-full mt-4"},t?o.createElement(n.rU,{className:"first:mr-8 only:m-0 inline-block bg-white hover:bg-burnt hover:text-white text-slate-900 px-4 py-1 no-underline rounded",to:"/blog/"+t},"← Newer Post"):null,r?o.createElement(n.rU,{className:"inline-block bg-white hover:bg-burnt hover:text-white text-slate-900 px-4 py-1 no-underline rounded",to:"/blog/"+r},"Older Post →"):null)};t.default=function(e){var t=e.pageContext.data,r=t.node,n=r.body,s=r.frontmatter,i=s.date,c=s.title,p=s.hero_image.childImageSharp.gatsbyImageData,f=r.fields.lastUpdated,d=t.next,x=t.previous;return o.createElement(l.Z,{pageTitle:c},o.createElement(o.Fragment,null,o.createElement(u.Z,{title:c,date:i,body:n,updatedDate:f,coverImage:p}),o.createElement(a,{prevSlug:null==x?void 0:x.slug,nextSlug:null==d?void 0:d.slug})))}},1955:function(e,t,r){var n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),l=r(8416),u=r(7071),a=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(7294),p=r(4983).mdx,f=r(2174).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=u(e,a),s=f(t),d=c.useMemo((function(){if(!r)return null;var e=i({React:c,mdx:p},s),t=Object.keys(e),l=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(l)))}),[r,t]);return c.createElement(d,i({},l))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function l(t,r,u){return o()?(e.exports=l=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),l=r(6116),u=r(2281);e.exports=function(e){return n(e)||o(e)||l(e)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-dff374ea88fed60ed17e.js.map