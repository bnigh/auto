(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{57:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;r(t(3));var s,o=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};s.get||s.set?Object.defineProperty(a,t,s):a[t]=e[t]}return a.default=e,a}(t(0));r(t(2)),r(t(79));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,a,t,o){s||(s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,n=arguments.length-3;if(a||0===n||(a={children:void 0}),a&&r)for(var l in r)void 0===a[l]&&(a[l]=r[l]);else a||(a=r||{});if(1===n)a.children=o;else if(n>1){for(var i=new Array(n),d=0;d<n;d++)i[d]=arguments[d+3];a.children=i}return{$$typeof:s,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const i=e=>{var a,t;return t=a=class extends o.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?o.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),t};i(()=>t.e(28).then(t.bind(null,80))),i(()=>t.e(28).then(t.bind(null,81)));var d=n("section",{},void 0,n("h1",{},void 0,n("code",{},void 0,"auto canary")),n("p",{},void 0,"Make a canary release of the project. Useful on PRs. If ran locally, ",n("code",{},void 0,"canary")," will release a canary version for your current git HEAD."),n("ol",{},void 0,n("li",{},void 0,"In PR: 1.2.3-canary.123.0"),n("li",{},void 0,"Locally: 1.2.3-canary.1810cfd")),n("pre",{},void 0,n("code",{className:"language-bash"},void 0,"> auto canary -h",n("br",{}),n("br",{}),"Options",n("br",{}),n("br",{}),"  -d, --dry-run          Report what ",n("span",{className:"hljs-built_in"},void 0,"command")," will ",n("span",{className:"hljs-keyword"},void 0,"do")," but ",n("span",{className:"hljs-keyword"},void 0,"do")," not actually ",n("span",{className:"hljs-keyword"},void 0,"do")," anything",n("br",{}),"  --pr number            PR number to use to create the canary version. Detected ",n("span",{className:"hljs-keyword"},void 0,"in")," CI env",n("br",{}),"  --build string         Build number to use to create the canary version. Detected ",n("span",{className:"hljs-keyword"},void 0,"in")," CI env",n("br",{}),"  -m, --message string   Message to comment on PR with. Defaults to ",n("span",{className:"hljs-string"},void 0,"'Published PR with canary version:",n("br",{}),"                         %v'"),". Pass ",n("span",{className:"hljs-literal"},void 0,"false")," to ",n("span",{className:"hljs-built_in"},void 0,"disable")," the comment",n("br",{}),n("br",{}),"Global Options",n("br",{}),n("br",{}),"  -h, --",n("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",n("span",{className:"hljs-built_in"},void 0,"help")," output ",n("span",{className:"hljs-keyword"},void 0,"for")," the ",n("span",{className:"hljs-built_in"},void 0,"command"),n("br",{}),"  -v, --verbose         Show some more logs",n("br",{}),"  -w, --very-verbose    Show a lot more logs",n("br",{}),"  --repo string         The repo to ",n("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",n("span",{className:"hljs-keyword"},void 0,"in")," the package definition",n("br",{}),"                        ",n("span",{className:"hljs-keyword"},void 0,"for")," the platform",n("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package definition",n("br",{}),"                        ",n("span",{className:"hljs-keyword"},void 0,"for")," the platform",n("br",{}),"  --github-api string   GitHub API to use",n("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",n("br",{}),n("br",{}),"Examples",n("br",{}),n("br",{}),"  $ auto canary",n("br",{}),"  $ auto canary --pr 123 --build 5",n("br",{}),"  $ auto canary --message ",n("span",{className:"hljs-string"},void 0,'"Install PR version: `yarn add -D my-project@%v`"'),n("br",{}),"  $ auto canary --message ",n("span",{className:"hljs-literal"},void 0,"false"),n("br",{}))));var c=e=>n("div",{className:e.className},void 0,d);a.default=c,e.exports=a.default}}]);
//# sourceMappingURL=auto-canary.js.map