(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(t,e,n){"use strict";n("OGtf")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},"1Mdp":function(t,e,n){n("eM6i"),n("hHhE"),n("2Spj"),n("V+eJ"),n("a1Th"),n("h7Nl"),n("Btvt"),n("91GP"),n("HAE/"),Object.defineProperty(e,"__esModule",{value:!0});var i=n("q1tI");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var o=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,i,r){return function(t,e,n,i,r){var o=(t-n)/(e-n);if(0===o)return i;if(1===o)return r;for(var a="#",s=1;s<6;s+=2){var c=parseInt(i.substr(s,2),16),l=parseInt(r.substr(s,2),16),u=Math.round((1-o)*c+o*l).toString(16);1===u.length&&(u="0"+u),a+=u}return a}(t,e,n,s(i),s(r))}var l=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,r=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={s:r?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},e.prototype.k=function(t){this.y.focus(),this.setState({C:t,M:!0,m:Date.now()})},e.prototype.x=function(t){var e=this.state,n=e.C,i=e.s,r=(this.props.checked?this.i:this.o)+t-n;e.R||t===n||this.setState({R:!0});var o=Math.min(this.i,Math.max(this.o,r));o!==i&&this.setState({s:o})},e.prototype.S=function(t){var e=this.state,n=e.s,i=e.R,r=e.m,o=this.props.checked,a=(this.i+this.o)/2,s=Date.now()-r;!i||s<250?this.T(t):o?a<n?this.setState({s:this.i}):this.T(t):n<a?this.setState({s:this.o}):this.T(t),this.setState({R:!1,M:!1}),this.n=Date.now()},e.prototype.h=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.k(t.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},e.prototype.r=function(t){t.preventDefault(),this.x(t.clientX)},e.prototype.a=function(t){this.S(t),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},e.prototype.c=function(t){this.$=null,this.k(t.touches[0].clientX)},e.prototype.l=function(t){this.x(t.touches[0].clientX)},e.prototype.u=function(t){t.preventDefault(),this.S(t)},e.prototype.p=function(t){50<Date.now()-this.n&&(this.T(t),50<Date.now()-this.e&&this.setState({M:!1}))},e.prototype.b=function(){this.e=Date.now()},e.prototype.g=function(){this.setState({M:!0})},e.prototype.v=function(){this.setState({M:!1})},e.prototype.w=function(t){this.y=t},e.prototype.f=function(t){t.preventDefault(),this.y.focus(),this.T(t),this.setState({M:!1})},e.prototype.T=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.className,o=t.offColor,a=t.onColor,s=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,f=t.boxShadow,h=t.activeBoxShadow,p=t.height,b=t.width,g=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),m=this.state,y=m.s,v=m.R,O=m.M,j={position:"relative",display:"inline-block",textAlign:"left",opacity:e?.5:1,direction:"ltr",borderRadius:p/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},S={height:p,width:b,margin:Math.max(0,(this.t-p)/2),position:"relative",background:c(y,this.i,this.o,o,a),borderRadius:p/2,cursor:e?"default":"pointer",WebkitTransition:v?null:"background 0.25s",MozTransition:v?null:"background 0.25s",transition:v?null:"background 0.25s"},w={height:p,width:Math.min(1.5*p,b-(this.t+p)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"},A={height:p,width:Math.min(1.5*p,b-(this.t+p)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:c(y,this.i,this.o,s,l),display:"inline-block",cursor:e?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(p-this.t)/2),outline:0,boxShadow:O?h:f,border:0,WebkitTransition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return i.createElement("div",{className:n,style:j},i.createElement("div",{className:"react-switch-bg",style:S,onClick:e?null:this.f,onMouseDown:function(t){return t.preventDefault()}},u&&i.createElement("div",{style:w},u),d&&i.createElement("div",{style:A},d)),i.createElement("div",{className:"react-switch-handle",style:I,onClick:function(t){return t.preventDefault()},onMouseDown:e?null:this.h,onTouchStart:e?null:this.c,onTouchMove:e?null:this.l,onTouchEnd:e?null:this.u,onTouchCancel:e?null:this.v}),i.createElement("input",r({},{type:"checkbox",role:"switch",disabled:e,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},e}(i.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:o,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l},"4uqg":function(t,e){t.exports="data:image/png;base64,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"},"9eSz":function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("INYr"),n("0mN4");var i=n("TqRt");e.__esModule=!0,e.default=void 0;var r,o=i(n("PJYZ")),a=i(n("VbXa")),s=i(n("8OQS")),c=i(n("pVnL")),l=i(n("q1tI")),u=i(n("17x9")),d=function(t){var e=(0,c.default)({},t),n=e.resolutions,i=e.sizes,r=e.critical;return n&&(e.fixed=n,delete e.resolutions),i&&(e.fluid=i,delete e.sizes),r&&(e.loading="eager"),e.fluid&&(e.fluid=S([].concat(e.fluid))),e.fixed&&(e.fixed=S([].concat(e.fixed))),e},f=function(t){var e=t.media;return!!e&&(y&&!!window.matchMedia(e).matches)},h=function(t){var e=t.fluid,n=t.fixed;return p(e||n).src},p=function(t){if(y&&function(t){return!!t&&Array.isArray(t)&&t.some((function(t){return void 0!==t.media}))}(t)){var e=t.findIndex(f);if(-1!==e)return t[e]}return t[0]},b=Object.create({}),g=function(t){var e=d(t),n=h(e);return b[n]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,O=new WeakMap;function j(t){return t.map((function(t){var e=t.src,n=t.srcSet,i=t.srcSetWebp,r=t.media,o=t.sizes;return l.default.createElement(l.default.Fragment,{key:e},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:o}),l.default.createElement("source",{media:r,srcSet:n,sizes:o}))}))}function S(t){var e=[],n=[];return t.forEach((function(t){return(t.media?e:n).push(t)})),[].concat(e,n)}function w(t){return t.map((function(t){var e=t.src,n=t.media,i=t.tracedSVG;return l.default.createElement("source",{key:e,media:n,srcSet:i})}))}function A(t){return t.map((function(t){var e=t.src,n=t.media,i=t.base64;return l.default.createElement("source",{key:e,media:n,srcSet:i})}))}function I(t,e){var n=t.srcSet,i=t.srcSetWebp,r=t.media,o=t.sizes;return"<source "+(e?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(e?i:n)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var x=function(t,e){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(t){t.forEach((function(t){if(O.has(t.target)){var e=O.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(t.target),O.delete(t.target),e())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(t),O.set(t,e)),function(){n.unobserve(t),O.delete(t)}},k=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.title?'title="'+t.title+'" ':"",o=t.alt?'alt="'+t.alt+'" ':'alt="" ',a=t.width?'width="'+t.width+'" ':"",s=t.height?'height="'+t.height+'" ':"",c=t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"",l=t.loading?'loading="'+t.loading+'" ':"",u=t.draggable?'draggable="'+t.draggable+'" ':"";return"<picture>"+t.imageVariants.map((function(t){return(t.srcSetWebp?I(t,!0):"")+I(t)})).join("")+"<img "+l+a+s+n+i+e+o+r+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(t){var e=t.src,n=t.imageVariants,i=t.generateSources,r=t.spreadProps,o=l.default.createElement(C,(0,c.default)({src:e},r));return n.length>1?l.default.createElement("picture",null,i(n),o):o},C=l.default.forwardRef((function(t,e){var n=t.sizes,i=t.srcSet,r=t.src,o=t.style,a=t.onLoad,u=t.onError,d=t.loading,f=t.draggable,h=(0,s.default)(t,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,c.default)({sizes:n,srcSet:i,src:r},h,{onLoad:a,onError:u,ref:e,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));C.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var E=function(t){function e(e){var n;(n=t.call(this,e)||this).seenBefore=y&&g(e),n.isCritical="eager"===e.loading||e.critical,n.addNoScript=!(n.isCritical&&!e.fadeIn),n.useIOSupport=!m&&v&&!n.isCritical&&!n.seenBefore;var i=n.isCritical||y&&(m||!n.useIOSupport);return n.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&e.fadeIn},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)(n)),n.handleRef=n.handleRef.bind((0,o.default)(n)),n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(t){var e=this;this.useIOSupport&&t&&(this.cleanUpListeners=x(t,(function(){var t=g(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0},(function(){return e.setState({imgLoaded:t,imgCached:!!e.imageRef.current.currentSrc})}))})))},n.handleImageLoaded=function(){var t,e,n;t=this.props,e=d(t),n=h(e),b[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var t=d(this.props),e=t.title,n=t.alt,i=t.className,r=t.style,o=void 0===r?{}:r,a=t.imgStyle,s=void 0===a?{}:a,u=t.placeholderStyle,f=void 0===u?{}:u,h=t.placeholderClassName,b=t.fluid,g=t.fixed,m=t.backgroundColor,y=t.durationFadeIn,v=t.Tag,O=t.itemProp,S=t.loading,I=t.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,E=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,c.default)({opacity:x?1:0,transition:E?"opacity "+y+"ms":"none"},s),G="boolean"==typeof m?"lightgray":m,L={transitionDelay:y+"ms"},P=(0,c.default)({opacity:this.state.imgLoaded?0:1},E&&L,{},s,{},f),T={title:e,alt:this.state.isVisible?"":n,style:P,className:h,itemProp:O};if(b){var z=b,F=p(b);return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),G&&l.default.createElement(v,{title:e,style:(0,c.default)({backgroundColor:G,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},E&&L)}),F.base64&&l.default.createElement(R,{src:F.base64,spreadProps:T,imageVariants:z,generateSources:A}),F.tracedSVG&&l.default.createElement(R,{src:F.tracedSVG,spreadProps:T,imageVariants:z,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,j(z),l.default.createElement(C,{alt:n,title:e,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:S,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:n,title:e,loading:S},F,{imageVariants:z}))}}))}if(g){var W=g,D=p(g),Z=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},o);return"inherit"===o.display&&delete Z.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:Z,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},G&&l.default.createElement(v,{title:e,style:(0,c.default)({backgroundColor:G,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},E&&L)}),D.base64&&l.default.createElement(R,{src:D.base64,spreadProps:T,imageVariants:W,generateSources:A}),D.tracedSVG&&l.default.createElement(R,{src:D.tracedSVG,spreadProps:T,imageVariants:W,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,j(W),l.default.createElement(C,{alt:n,title:e,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:S,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,c.default)({alt:n,title:e,loading:S},D,{imageVariants:W}))}}))}return null},e}(l.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),G=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});E.propTypes={resolutions:M,sizes:G,fixed:u.default.oneOfType([M,u.default.arrayOf(M)]),fluid:u.default.oneOfType([G,u.default.arrayOf(G)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var L=E;e.default=L},"A2+M":function(t,e,n){var i=n("X8hv");t.exports={MDXRenderer:i}},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Kazumi Karbowski","description":"Portfolio and blog","author":"Kazumi Karbowski"}}}}')},I5cv:function(t,e,n){var i=n("XKFU"),r=n("Kuth"),o=n("2OiF"),a=n("y3w9"),s=n("0/R4"),c=n("eeVq"),l=n("8MEG"),u=(n("dyZX").Reflect||{}).construct,d=c((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),f=!c((function(){u((function(){}))}));i(i.S+i.F*(d||f),"Reflect",{construct:function(t,e){o(t),a(e);var n=arguments.length<3?t:o(arguments[2]);if(f&&!d)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return i.push.apply(i,e),new(l.apply(t,i))}var c=n.prototype,h=r(s(c)?c:Object.prototype),p=Function.apply.call(t,h,e);return s(p)?p:h}})},INYr:function(t,e,n){"use strict";var i=n("XKFU"),r=n("CkkT")(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i(i.P+i.F*a,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(o)},OGtf:function(t,e,n){var i=n("XKFU"),r=n("eeVq"),o=n("vhPU"),a=/"/g,s=function(t,e,n,i){var r=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),i(i.P+i.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},PqFP:function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var i=n("txSG"),r=n("Wbzz"),o=n("ohBo"),a=n.n(o),s=n("qKvR"),c=function(t){return Object(s.c)(a.a,t)};c.defaultProps={checkedIcon:!1,uncheckedIcon:!1,height:24,width:48,handleDiameter:24,offColor:"#000",onColor:"#000",boxShadow:"inset 0 0 0 1px #000"};var l=c,u=n("s/18"),d=n("nn6G"),f=n.n(d),h=n("4uqg"),p=n.n(h);var b=function(t){var e=t.children;return"/"===t.location.pathname?Object(s.c)(i.c.h1,{css:Object(i.f)({my:0,fontSize:4})},Object(s.c)(i.c.a,{as:r.Link,css:Object(i.f)({color:"inherit",boxShadow:"none",textDecoration:"none"}),to:"/"},e)):Object(s.c)(i.c.h3,{as:"p",css:Object(i.f)({my:0})},Object(s.c)(i.c.a,{as:r.Link,css:Object(i.f)({boxShadow:"none",textDecoration:"none",color:"primary"}),to:"/"},e))},g=[Object(i.f)({pointerEvents:"none"}),{margin:4}],m=Object(s.c)("img",{alt:"moon indicating dark mode",src:p.a,width:"16",height:"16",role:"presentation",css:g}),y=Object(s.c)("img",{alt:"sun indicating light mode",src:f.a,width:"16",height:"16",role:"presentation",css:g}),v=function(t){var e=t.children,n=t.title,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["children","title"]),o=Object(i.h)(),a=o[0],c=o[1],d="dark"===a;return Object(s.c)("header",null,Object(s.c)("div",{css:Object(i.f)({maxWidth:"container",mx:"auto",px:3,pt:4})},Object(s.c)("div",{css:Object(i.f)({display:"flex",justifyContent:"space-between",alignItems:"center",mb:4})},Object(s.c)(b,r,n),e,Object(s.c)(l,{"aria-label":"Toggle dark mode",checkedIcon:m,uncheckedIcon:y,checked:d,onChange:function(t){c(d?"light":"dark")}})),"/"===r.location.pathname&&Object(s.c)(u.a,null)))};e.a=function(t){var e=t.children,n=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["children"]);return Object(s.c)(i.c.root,null,Object(s.c)(v,n),Object(s.c)("div",null,Object(s.c)("div",{css:Object(i.f)({maxWidth:"container",mx:"auto",px:3,py:4})},e)))}},X8hv:function(t,e,n){function i(t,e,n){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return n&&r(o,n.prototype),o}).apply(null,arguments)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var l=n("q1tI"),u=n("7ljp"),d=u.useMDXComponents,f=u.mdx,h=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,r=t.children,a=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["scope","components","children"]),c=d(n),u=h(e),p=l.useMemo((function(){if(!r)return null;var t=s({React:l,mdx:f},u),e=Object.keys(t),n=e.map((function(e){return t[e]}));return i(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(n)))}),[r,e]);return l.createElement(p,s({components:c},a))}},dlzO:function(t,e,n){"use strict";var i=n("EH9Q"),r=(n("q1tI"),n("TJpk")),o=n.n(r),a=n("qKvR");function s(t){var e=t.description,n=t.lang,r=t.meta,s=t.keywords,c=t.title,l=i.data.site,u=e||l.siteMetadata.description;return Object(a.c)(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},e.a=s},nn6G:function(t,e){t.exports="data:image/png;base64,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"},ohBo:function(t,e,n){t.exports=n("1Mdp")},"s/18":function(t,e,n){"use strict";n("0mN4");var i=n("t5OH"),r=n("q1tI"),o=n("9eSz"),a=n.n(o),s=n("txSG"),c=n("Wbzz"),l=n("qKvR"),u=function(){return Object(l.c)(r.Fragment,null,"Words by ",Object(l.c)(c.Link,{to:"/blog/",activeStyle:{color:"red"}},"Kazumi Karbowski"),".",Object(l.c)("br",null))};e.a=function(){var t=i.data,e=t.site.siteMetadata.author,n=t.avatar;return Object(l.c)(s.b,{css:Object(s.f)({mb:4,alignItems:"center"})},n?Object(l.c)(a.a,{fixed:n.childImageSharp.fixed,alt:e,css:Object(s.f)({mr:2,mb:0,width:48,minWidth:48,borderRadius:99999})}):Object(l.c)("div",{css:Object(s.f)({mr:2,mb:0,width:48,minWidth:48,borderRadius:99999}),role:"presentation"}),Object(l.c)(s.c.div,null,Object(l.c)(u,null)))}},t5OH:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Kazumi Karbowski"}},"avatar":null}}')},xjC2:function(t,e,n){"use strict";n.r(e);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var i=n("txSG"),r=n("Wbzz"),o=n("s/18"),a=n("qKvR"),s=function(t){var e=t.previous,n=t.next;return Object(a.c)("footer",{css:Object(i.f)({mt:4,pt:3})},Object(a.c)(i.c.hr,null),Object(a.c)(o.a,null),(e||n)&&Object(a.c)(i.b,{as:"ul",css:Object(i.f)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0})},Object(a.c)("li",null,e&&Object(a.c)(i.c.a,{as:r.Link,to:e.slug,rel:"prev"},"← ",e.title)),Object(a.c)("li",null,n&&Object(a.c)(i.c.a,{as:r.Link,to:n.slug,rel:"next"},n.title," →"))))},c=n("PqFP"),l=n("dlzO"),u=n("A2+M"),d=function(t){var e=t.data,n=e.post,r=e.site.siteMetadata.title,o=t.location,d=t.previous,f=t.next;return Object(a.c)(c.a,{location:o,title:r},Object(a.c)(l.a,{title:n.title,description:n.excerpt}),Object(a.c)("main",null,Object(a.c)(i.c.h1,null,n.title),Object(a.c)(i.c.p,{css:Object(i.f)({fontSize:1,mt:-3,mb:3})},n.date),Object(a.c)(u.MDXRenderer,null,n.body)),Object(a.c)(s,{previous:d,next:f}))};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"query",(function(){return b}));e.default=function(t){var e=t.location,n=t.data,i=n.blogPost,r=n.previous,o=n.next;return Object(a.c)(d,{data:h({},n,{post:i}),location:e,previous:r,next:o})};var b="602541989"}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-blog-core-src-templates-post-query-js-32eb2078dbe837dcce3c.js.map