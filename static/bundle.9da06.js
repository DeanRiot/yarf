!function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home"}[e]||e)+".chunk."+{2:"f7761"}[e]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(f=l[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(a===i||a===u))return t()}var _=document.getElementsByTagName("style");for(c=0;c<_.length;c++){var f;if((a=(f=_[c]).getAttribute("data-href"))===i||a===u)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";s.onerror=s.onload=function(n){if(s.onerror=s.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,delete o[e],s.parentNode.removeChild(s),r(c)}},s.href=u,document.head.appendChild(s)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-home"}[e]||e)+".chunk."+{2:"92b85"}[e]+".js"}(e);var a=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(_);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var _=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var a=l;n(n.s="mdyV")}({QfWi:function(e,t,n){"use strict";function r(e,t){if("string"==typeof e.type)return null;var n=e.__;if(n){var o=n.__k;if(o){Array.isArray(o)||(o=[o]);var i=o.indexOf(e);-1===i&&(i=o.length);for(var u=i;u--;){var l=o[u],c=l&&l.__e||r(l,!0);if(c)return c}}return t?void 0:r(n)}}n.r(t);var o=n("hosL"),i=n("Y3FI"),u=(n("ox/y"),"header__OVZyn"),l=function(){return Object(o.h)("header",{class:u},Object(o.h)("h1",null,"Естественно-языковая система"))},c={},a=function(e){function t(){var t=this;o.Component.call(this),n||(this.componentWillMount=function(){e((function(e){n=e&&e.default||e,t.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(e){if(n)return Object(o.h)(n,e);var i=r(t.__v),u=i&&i.nextSibling||(t.__P||t._parentDom).firstChild;return u&&Object(o.h)(u.localName,{dangerouslySetInnerHTML:c})}}var n;return t.preload=e,(t.prototype=new o.Component).constructor=t,t}((function(e){n.e(2).then(function(){var t=n("+1Jk");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));t.default=function(){return Object(o.h)("div",{id:"app"},Object(o.h)(l,null),Object(o.h)(i.Router,null,Object(o.h)(a,{path:"/"})))}},Y3FI:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var _=c[a].split("=");u[decodeURIComponent(_[0])]=decodeURIComponent(_.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var f=Math.max(e.length,t.length),s=0;s<f;s++)if(t[s]&&":"===t[s].charAt(0)){var p=t[s].replace(/(^:|[+*?]+$)/g,""),d=(t[s].match(/[+*?]+$/)||v)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),m=e[s]||"";if(!m&&!y&&(d.indexOf("?")<0||h)){r=!1;break}if(u[p]=decodeURIComponent(m),h||y){u[p]=e.slice(s).map(decodeURIComponent).join("/");break}}else if(t[s]!==e[s]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function u(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(c).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function c(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function a(){var e;return""+((e=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(e.search||"")}function _(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=g.length;t--;)if(g[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),m&&m[t]?m[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),f(e)}function f(e){for(var t=!1,n=0;n<g.length;n++)!0===g[n].routeTo(e)&&(t=!0);for(var r=b.length;r--;)b[r](e);return t}function s(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return _(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return s(e.currentTarget||e.target||this),d(e)}function d(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function h(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(s(t))return d(e)}}while(t=t.parentNode)}}n.r(t),n.d(t,"subscribers",(function(){return b})),n.d(t,"getCurrentUrl",(function(){return a})),n.d(t,"route",(function(){return _})),n.d(t,"Router",(function(){return x})),n.d(t,"Route",(function(){return S})),n.d(t,"Link",(function(){return O})),n.d(t,"exec",(function(){return o}));var y=n("hosL"),v={},m=null,g=[],b=[],k={},C=!1,x=function(e){function t(t){e.call(this,t),t.history&&(m=t.history),this.state={url:t.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){f(a())})),addEventListener("click",h)),C=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(y.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){g.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;m&&(this.unlisten=m.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(u).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var u={url:t,matches:i};return r(u,i),delete u.ref,delete u.key,Object(y.cloneElement)(e,u)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(y.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},t}(y.Component),O=function(e){return Object(y.createElement)("a",r({onClick:p},e))},S=function(e){return Object(y.createElement)(e.component,e)};x.subscribers=b,x.getCurrentUrl=a,x.route=_,x.Router=x,x.Route=S,x.Link=O,x.exec=o,t.default=x},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return u(e,l,r,o,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M:o};return null==o&&null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function c(e){return e.children}function a(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?_(e):null}function f(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return f(e)}}function s(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!p.__r++||N!==T.debounceRendering)&&((N=T.debounceRendering)||setTimeout)(p)}function p(){for(var e;p.__r=R.length;)e=R.sort((function(e,t){return e.__v.__b-t.__v.__b})),R=[],e.some((function(e){var t,n,o,i,u,l;e.__d&&(u=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?_(i):u,i.__h),x(n,i),i.__e!=u&&f(i)))}))}function d(e,t,n,r,o,i,l,a,f,s){var p,d,y,m,g,b,k,x=r&&r.__k||F,O=x.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=x[p])||y&&m.key==y.key&&m.type===y.type)x[p]=void 0;else for(d=0;d<O;d++){if((y=x[d])&&m.key==y.key&&m.type===y.type){x[d]=void 0;break}y=null}C(e,m,y=y||I,o,i,l,a,f,s),g=m.__e,(d=m.ref)&&y.ref!=d&&(k||(k=[]),y.ref&&k.push(y.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===y.__k?m.__d=f=h(m,f,e):f=v(e,m,y,x,g,f),"function"==typeof n.type&&(n.__d=f)):f&&y.__e==f&&f.parentNode!=e&&(f=_(y))}for(n.__e=b,p=O;p--;)null!=x[p]&&("function"==typeof n.type&&null!=x[p].__e&&x[p].__e==n.__d&&(n.__d=_(r,p+1)),w(x[p],x[p]));if(k)for(p=0;p<k.length;p++)S(k[p],k[++p],k[++p])}function h(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?h(r,t,n):v(n,r,r,o,r.__e,t));return t}function y(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){y(e,t)})):t.push(e)),t}function v(e,t,n,r,o,i){var u,l,c;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break e;e.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function g(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||m(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?k:b,i):e.removeEventListener(t,i?k:b,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function b(e){this.l[e.type+!1](T.event?T.event(e):e)}function k(e){this.l[e.type+!0](T.event?T.event(e):e)}function C(e,t,n,o,i,u,l,_,f){var s,p,h,y,v,m,g,b,k,C,x,S,w,A=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(f=n.__h,_=t.__e=n.__e,t.__h=null,u=[_]),(s=T.__b)&&s(t);try{e:if("function"==typeof A){if(b=t.props,k=(s=A.contextType)&&o[s.__c],C=s?k?k.props.value:s.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?t.__c=p=new A(b,C):(t.__c=p=new a(b,C),p.constructor=A,p.render=j),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,A.getDerivedStateFromProps(b,p.__s))),y=p.props,v=p.state,h)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==A.getDerivedStateFromProps&&b!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||t.__v===n.__v){p.props=b,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,v,m)}))}if(p.context=C,p.props=b,p.__v=t,p.__P=e,x=T.__r,S=0,"prototype"in A&&A.prototype.render)p.state=p.__s,p.__d=!1,x&&x(t),s=p.render(p.props,p.state,p.context);else do{p.__d=!1,x&&x(t),s=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++S<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(y,v)),w=null!=s&&s.type===c&&null==s.key?s.props.children:s,d(e,Array.isArray(w)?w:[w],t,n,o,i,u,l,_,f),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=O(n.__e,t,n,o,i,u,l,f);(s=T.diffed)&&s(t)}catch(e){t.__v=null,(f||null!=u)&&(t.__e=_,t.__h=!!f,u[u.indexOf(_)]=null),T.__e(e,t,n)}}function x(e,t){T.__c&&T.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){T.__e(e,t.__v)}}))}function O(e,t,n,r,i,u,l,c){var a,f,s,p=n.props,h=t.props,y=t.type,v=0;if("svg"===y&&(i=!0),null!=u)for(;v<u.length;v++)if((a=u[v])&&"setAttribute"in a==!!y&&(y?a.localName===y:3===a.nodeType)){e=a,u[v]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),u=null,c=!1}if(null===y)p===h||c&&e.data===h||(e.data=h);else{if(u=u&&L.call(e.childNodes),f=(p=n.props||I).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!c){if(null!=u)for(p={},v=0;v<e.attributes.length;v++)p[e.attributes[v].name]=e.attributes[v].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||g(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||g(e,i,t[i],n[i],r)}(e,h,p,i,c),s)t.__k=[];else if(v=t.props.children,d(e,Array.isArray(v)?v:[v],t,n,r,i&&"foreignObject"!==y,u,l,u?u[0]:n.__k&&_(n,0),c),null!=u)for(v=u.length;v--;)null!=u[v]&&o(u[v]);c||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===y&&!v||"option"===y&&v!==p.value)&&g(e,"value",v,p.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&g(e,"checked",v,p.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){T.__e(e,n)}}function w(e,t,n){var r,i;if(T.unmount&&T.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){T.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&w(r[i],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function j(e,t,n){return this.constructor(e,n)}function A(e,t,n){var r,o,u;T.__&&T.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,u=[],C(t,e=(!r&&n||t).__k=i(c,null,[e]),o||I,I,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?L.call(t.childNodes):null,u,!r&&n?n:o?o.__e:t.firstChild,r),x(u,e)}function P(e,t){A(e,t,P)}function U(e,t,n){var o,i,l,c=r({},e.props);for(l in t)"key"==l?o=t[l]:"ref"==l?i=t[l]:c[l]=t[l];return arguments.length>2&&(c.children=arguments.length>3?L.call(arguments,2):n),u(e.type,c,o||e.key,i||e.ref,null)}function E(e,t){var n={__c:t="__cC"+W++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(s)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"Component",(function(){return a})),n.d(t,"Fragment",(function(){return c})),n.d(t,"cloneElement",(function(){return U})),n.d(t,"createContext",(function(){return E})),n.d(t,"createElement",(function(){return i})),n.d(t,"createRef",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"hydrate",(function(){return P})),n.d(t,"isValidElement",(function(){return D})),n.d(t,"options",(function(){return T})),n.d(t,"render",(function(){return A})),n.d(t,"toChildArray",(function(){return y}));var L,T,M,D,R,N,W,I={},F=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=F.slice,T={__e:function(e,t,n,r){for(var o,i,u;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(t){e=t}throw e}},M=0,D=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),s(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),s(this))},a.prototype.render=c,R=[],p.__r=0,W=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(e){return e&&e.default?e.default:e},c=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(c(n.p)+"sw.js"),"function"==typeof l(n("QfWi"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=l(n("QfWi")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(decodeURI(r.innerHTML)).preRenderData||t);var _={preRenderData:t},f=t.url?c(t.url):"";(u&&f===c(location.pathname)?u:i)(o(e,{CLI_DATA:_}),document.body,a)}()}},"ox/y":function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==r(t)&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n("hosL"),l=n("Y3FI"),c=t.Match=function(e){function t(){for(var t,n,r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return t=n=o(this,e.call.apply(e,[this].concat(i))),n.update=function(e){n.nextUrl=e,n.setState({})},o(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+r(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){l.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,l.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,l.exec)(n,e.path,{})})},t}(u.Component),a=function(e){var t=e.activeClassName,n=e.path,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,u.h)(c,{path:n||r.href},(function(e){return(0,u.h)(l.Link,i({},r,{class:[r.class||r.className,e.matches&&t].filter(Boolean).join(" ")}))}))};t.Link=a,t.default=c,c.Link=a}});
//# sourceMappingURL=bundle.9da06.js.map