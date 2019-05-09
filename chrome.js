(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{69:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=i(o(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(2)),i(o(81));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,n){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=n;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const d=e=>{let{to:t}=e,o=c(e,["to"]);return t.includes("http")?a.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/chrome.html")+t),a.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(a),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,o;return o=t=class extends a.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};h(()=>o.e(30).then(o.bind(null,82))),h(()=>o.e(30).then(o.bind(null,83)));var v=s("h1",{},void 0,"Chrome Web Store"),f=s("p",{},void 0,"This plugin allows you to automate the publishing of chrome extensions"),m=s("p",{},void 0,"You must first pack/zip your plugin before running ",s("code",{},void 0,"auto"),"."),p=s("p",{},void 0,"These environment variables tell ",s("code",{},void 0,"auto")," what to publish."),b=s("ul",{},void 0,s("li",{},void 0,"EXTENSION_ID - your chrome extensions unique ID (REQUIRED)"),s("li",{},void 0,"EXTENSION_BUILD - Path to either a zip file, or a directory to be zip. defaults to ",s("code",{},void 0,"extension.zip"))),g=s("p",{},void 0,"Or you can set these values in the autorc:"),y=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("br",{}),"    [",s("br",{}),"      ",s("span",{className:"hljs-string"},void 0,'"chrome"'),",",s("br",{}),"      {",s("br",{}),"        ",s("span",{className:"hljs-attr"},void 0,'"id"'),": ",s("span",{className:"hljs-string"},void 0,'"1234"'),",",s("br",{}),"        ",s("span",{className:"hljs-attr"},void 0,'"build"'),": ",s("span",{className:"hljs-string"},void 0,'"path/to/zip/or/folder"'),",",s("br",{}),"        ",s("span",{className:"hljs-attr"},void 0,'"manifest"'),": ",s("span",{className:"hljs-string"},void 0,'"path/tp/manifest.json"'),s("br",{}),"      }",s("br",{}),"    ]",s("br",{}),"  ]",s("br",{}),"}",s("br",{}))),w=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ You must have a manifest.json for this plugin to work."))),j=s("ul",{},void 0,s("li",{},void 0,"CLIENT_ID"),s("li",{},void 0,"CLIENT_SECRET"),s("li",{},void 0,"REFRESH_TOKEN"));var O=e=>s("div",{className:e.className},void 0,s("section",{},void 0,v,f,s("article",{className:"message column is-success"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"Example Repo: ",s(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie/auto-chrome",className:"external-link"},void 0,"here")))),s("h2",{id:"package-configuration"},void 0,"Package Configuration ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#package-configuration","aria-hidden":"true"})),m,p,b,g,y,w,s("h2",{id:"chrome-environment-variables"},void 0,"Chrome Environment Variables ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#chrome-environment-variables","aria-hidden":"true"})),s("p",{},void 0,"To publish to the chrome web store you will need the following values. See ",s(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/DrewML/chrome-webstore-upload/blob/master/How%20to%20generate%20Google%20API%20keys.md",className:"external-link"},void 0,"here")," for a guide one how to get these values."),j));t.default=O,e.exports=t.default}}]);
//# sourceMappingURL=chrome.js.map