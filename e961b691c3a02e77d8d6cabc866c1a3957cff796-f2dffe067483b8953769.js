"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[906],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},3723:function(e,t,r){r.d(t,{G:function(){return q},L:function(){return f},M:function(){return C},P:function(){return E},S:function(){return P},_:function(){return o},a:function(){return s},b:function(){return c},c:function(){return u},g:function(){return d},h:function(){return l}});var a=r(7294),n=(r(72),r(5697)),i=r.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var u=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,r,a,n){return void 0===n&&(n={}),s({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,i,o,l){var u={};i&&(u.backgroundColor=i,"fixed"===r?(u.width=a,u.height=n,u.backgroundColor=i,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),o&&(u.objectFit=o),l&&(u.objectPosition=l);var c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c}var p,g=["children"],m=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=o(e,g);return a.createElement(a.Fragment,null,a.createElement(m,s({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,u=e.shouldLoad,c=o(e,h);return a.createElement("img",s({},c,{decoding:"async",loading:n,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:l}))},w=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,u=o(e,y),c=u.sizes||(null==t?void 0:t.sizes),d=a.createElement(v,s({},u,t,{sizes:c,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:c})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],E=function(e){var t=e.fallback,r=o(e,b);return t?a.createElement(w,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(p=w.propTypes)?void 0:p.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var C=function(e){return a.createElement(a.Fragment,null,a.createElement(w,s({},e)),a.createElement("noscript",null,a.createElement(w,s({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;var L,k,S=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),s=3;s<a;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:i().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],O=new Set,_=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,u=e.style,c=e.backgroundColor,d=e.className,p=e.class,g=e.onStartLoad,m=e.onLoad,f=e.onError,h=o(e,T),y=i.width,v=i.height,w=i.layout,b=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(y,v,w),E=b.style,C=b.className,S=o(b,x),I=(0,a.useRef)(),_=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var q=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,y,v);return(0,a.useEffect)((function(){L||(L=Promise.all([r.e(774),r.e(351),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=I.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(_)):k&&O.has(_)?void 0:(L.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;I.current&&(I.current.innerHTML=a(s({isLoading:!0,isLoaded:O.has(_),image:i},h)),O.has(_)||(e=requestAnimationFrame((function(){I.current&&(t=n(I.current,_,O,u,g,m,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){O.has(_)&&k&&(I.current.innerHTML=k(s({isLoading:O.has(_),isLoaded:O.has(_),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,a.createElement)(n,s({},S,{style:s({},E,u,{backgroundColor:c}),className:C+(d?" "+d:""),ref:I,dangerouslySetInnerHTML:{__html:q},suppressHydrationWarning:!0}))},q=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));q.propTypes=I,q.displayName="GatsbyImage";var A,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:S,width:R,height:R,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(A=q,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=o(e,N);return n&&console.warn(n),r?a.createElement(A,s({image:r},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=j}}]);
//# sourceMappingURL=e961b691c3a02e77d8d6cabc866c1a3957cff796-f2dffe067483b8953769.js.map