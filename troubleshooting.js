(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{64:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=i(o(2)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(1)),i(o(66));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,n){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});if(1===i)t.children=n;else if(i>1){for(var u=new Array(i),l=0;l<i;l++)u[l]=arguments[l+3];t.children=u}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const h=e=>{let{to:t}=e,o=d(e,["to"]);return t.includes("http")?a.default.createElement("a",l({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/troubleshooting.html")+t),a.default.createElement("a",l({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(a),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const c=e=>{var t,o;return o=t=class extends a.default.Component{constructor(...e){super(...e),u(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},u(t,"defaultProps",{shouldLoad:!0}),o};c(()=>o.e(25).then(o.bind(null,67))),c(()=>o.e(25).then(o.bind(null,68)));var g=s("h1",{},void 0,"Troubleshooting"),f=s("p",{},void 0,"You must set a ",s("code",{},void 0,"GH_TOKEN")," for ",s("code",{},void 0,"auto")," to work. Make sure to add your ",s("code",{},void 0,"NPM_TOKEN")," while you're at it."),p=s("p",{},void 0,"To version and publish you cannot have any changes in the git repo during publish. This means that if you build some files before release that aren't git-ignored ",s("code",{},void 0,"auto")," will fail to continue. To fix this either add those ",s("code",{},void 0,"dist")," files to your ",s("code",{},void 0,".gitignore")," or commit them somehow before the release."),v=s("p",{},void 0,"This error will occur when you do not have a ",s("code",{},void 0,"NPM_TOKEN")," set."),m=s("p",{},void 0,"Make sure that npm is trying to publish to the correct registry. Force npm/lerna to use the public registry by adding the following to your package.json:"),b=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"publishConfig"'),": {",s("br",{}),"    ",s("span",{className:"hljs-attr"},void 0,'"registry"'),": ",s("span",{className:"hljs-string"},void 0,'"https://registry.npmjs.org/"'),s("br",{}),"  }",s("br",{}),"}",s("br",{}))),y=s("p",{},void 0,"This mean your environment does not trust github. To change this add this command somewhere before ",s("code",{},void 0,"auto")),w=s("p",{},void 0,"public:"),k=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"mkdir ~/.ssh/ && ",s("span",{className:"hljs-built_in"},void 0,"echo")," -e ",s("span",{className:"hljs-string"},void 0,'"Host github.com\\n\\tStrictHostKeyChecking no\\n"')," > ~/.ssh/config",s("br",{}))),j=s("p",{},void 0,"enterprise:"),P=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"mkdir ~/.ssh/ && ",s("span",{className:"hljs-built_in"},void 0,"echo")," -e ",s("span",{className:"hljs-string"},void 0,'"Host github.YOUR_COMPANY.com\\n\\tStrictHostKeyChecking no\\n"')," > ~/.ssh/config",s("br",{}))),O=s("p",{},void 0,"If you've encountered any of these errors you'll probably run into this problem. If the whole release process doesn't complete you can end up in a state when ",s("code",{},void 0,"auto"),' published the new version, but doesn\'t push that back to github. To fix this just bump the version number to the "previously published version".'),N=s("p",{},void 0,"This means that you do not have a repository set in your package.json. Add something along the line of:"),T=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),'  "repository": {',s("br",{}),'    "type": "git",',s("br",{}),'    "url": "https://github.com/intuit/auto"',s("br",{}),"  },",s("br",{}),"  // or simply",s("br",{}),'  "repository": "intuit/auto"',s("br",{}),"}",s("br",{}))),C=s("p",{},void 0,"If auto doesn't find a last release it will default to the first commit for version calculation (and a log of other things). If you have forked a repo, you fork all the merge commit messages as well. This confuses ",s("code",{},void 0,"auto")," since it will look for those pull requests in your fork and not the main one."),L=s("p",{},void 0,"To remedy this first tag your first commit in the fork with your first version. If the tags from the original repo are still in your repo you should just bump that version. This will let ",s("code",{},void 0,"auto")," ignore all the old merge commits."),_=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ You must also match this new tag version in your package.json"))),E=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,s("span",{className:"hljs-comment"},void 0,"# Set head to last release and tag it with 2.10.1"),s("br",{}),"git tag v2.10.1",s("br",{}))),S=s("p",{},void 0,"Then on GitHub go to your project, click release, then draft a new release. Select the tag you just published and ",s("code",{},void 0,"publish release"),". Now auto will be able to use the correct version and git log!");var H=e=>s("div",{className:e.className},void 0,s("section",{},void 0,g,s("h2",{id:"error%3A-can't-find-a-github-token-to-use"},void 0,"Error: Can't find a GitHub token to use ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#error%3A-can't-find-a-github-token-to-use","aria-hidden":"true"})),f,s("h2",{id:"npm-err!-git-working-directory-not-clean"},void 0,"npm ERR! Git working directory not clean ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#npm-err!-git-working-directory-not-clean","aria-hidden":"true"})),p,s("h2",{id:"npm-err!-need-auth-auth-required-for-publishing"},void 0,"npm ERR! need auth auth required for publishing ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#npm-err!-need-auth-auth-required-for-publishing","aria-hidden":"true"})),v,s("h3",{id:"still-getting-errors%3F!"},void 0,"Still getting errors?! ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#still-getting-errors%3F!","aria-hidden":"true"})),m,b,s("h2",{id:"hangs-on%3A-are-you-sure-you-want-to-continue-connecting-(yes%2Fno)%3F"},void 0,"Hangs on: Are you sure you want to continue connecting (yes/no)? ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#hangs-on%3A-are-you-sure-you-want-to-continue-connecting-(yes%2Fno)%3F","aria-hidden":"true"})),y,w,k,j,P,s("h2",{id:"you-cannot-publish-over-the-previously-published-versions"},void 0,"You cannot publish over the previously published versions ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#you-cannot-publish-over-the-previously-published-versions","aria-hidden":"true"})),O,s("h2",{id:"cannot-read-owner-and-package-name-from-github-url-in-package.json"},void 0,"Cannot read owner and package name from GitHub URL in package.json ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#cannot-read-owner-and-package-name-from-github-url-in-package.json","aria-hidden":"true"})),N,T,s("h2",{id:"how-do-i-auto-a-fork-of-another-repo%3F"},void 0,"How do I auto a fork of another repo? ",s(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#how-do-i-auto-a-fork-of-another-repo%3F","aria-hidden":"true"})),C,L,_,E,S));t.default=H,e.exports=t.default}}]);
//# sourceMappingURL=troubleshooting.js.map