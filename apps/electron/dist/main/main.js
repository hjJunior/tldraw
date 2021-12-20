var te=Object.create;var y=Object.defineProperty,oe=Object.defineProperties,se=Object.getOwnPropertyDescriptor,ne=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,ae=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var W=(e,r,t)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&W(e,t,r[t]);if(E)for(var t of E(r))le.call(r,t)&&W(e,t,r[t]);return e},A=(e,r)=>oe(e,ne(r)),ce=e=>y(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var pe=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of ie(r))!P.call(e,s)&&s!=="default"&&y(e,s,{get:()=>r[s],enumerable:!(t=se(r,s))||t.enumerable});return e},p=e=>pe(ce(y(e!=null?te(ae(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var T=c((ke,g)=>{"use strict";g.exports=(e={})=>{let r;if(e.repoUrl)r=e.repoUrl;else if(e.user&&e.repo)r=`https://github.com/${e.user}/${e.repo}`;else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");let t=new URL(`${r}/issues/new`),s=["body","title","labels","template","milestone","assignee","projects"];for(let i of s){let a=e[i];if(a!==void 0){if(i==="labels"||i==="projects"){if(!Array.isArray(a))throw new TypeError(`The \`${i}\` option should be an array`);a=a.join(",")}t.searchParams.set(i,a)}}return t.toString()};g.exports.default=g.exports});var k=c((Se,B)=>{"use strict";var ue="electron"in process.versions;B.exports=ue&&require.main&&require.main.filename&&require.main.filename.includes("app.asar")});var $=c(d=>{"use strict";d.isElectron="electron"in process.versions;d.electronVersion=process.versions.electron||"0.0.0";d.isUsingAsar=k();d.fixPathForAsarUnpack=e=>d.isUsingAsar?e.replace("app.asar","app.asar.unpacked"):e});var b=c((qe,I)=>{"use strict";var de=require("electron");I.exports=new Proxy(de,{get:(e,r)=>e[r]||(e.remote?e.remote[r]:void 0)})});var O=c((Me,N)=>{"use strict";var S=require("electron");if(typeof S=="string")throw new TypeError("Not running in an Electron environment!");var me=S.app||S.remote.app,we="ELECTRON_IS_DEV"in process.env,he=parseInt(process.env.ELECTRON_IS_DEV,10)===1;N.exports=we?he:!me.isPackaged});var v=c((Ee,F)=>{"use strict";var fe=O(),ye=k();F.exports={macos:process.platform==="darwin",linux:process.platform==="linux",windows:process.platform==="win32",main:process.type==="browser",renderer:process.type==="renderer",usingAsar:ye,development:fe,macAppStore:process.mas===!0,windowsStore:process.windowsStore===!0}});var L=c((Pe,D)=>{"use strict";var l=b(),U=v();D.exports=()=>{if(U.development||!U.macos||l.app.isInApplicationsFolder())return;let e="name"in l.app?l.app.name:l.app.getName();if(l.dialog.showMessageBoxSync({type:"error",message:"Move to Applications folder?",detail:`${e} must live in the Applications folder to be able to run correctly.`,buttons:["Move to Applications folder",`Quit ${e}`],defaultId:0,cancelId:1})===1){l.app.quit();return}l.app.moveToApplicationsFolder({conflictHandler:t=>(t==="existsAndRunning"&&(l.dialog.showMessageBoxSync({type:"error",message:`Another version of ${l.app.getName()} is currently running. Quit it, then launch this version of the app again.`,buttons:["OK"]}),l.app.quit()),!0)})}});var Z=c((We,R)=>{"use strict";var z=b(),V=v();R.exports=async(e,r)=>{V.macos?await z.shell.openExternal(`x-apple.systempreferences:com.apple.preference.${e}${r?`?${r}`:""}`):V.windows&&await z.shell.openExternal(`ms-settings:${e}`)}});var C=c(o=>{"use strict";var ge=require("os"),be=require("path"),j=require("electron"),ve=T(),H=$(),n=b();o.api=n;var m=v();o.is=m;o.electronVersion=H.electronVersion;o.chromeVersion=process.versions.chrome.replace(/\.\d+$/,"");o.platform=e=>{let{platform:r}=process;r==="darwin"?r="macos":r==="win32"&&(r="windows");let t=r in e?e[r]:e.default;return typeof t=="function"?t():t};var w=()=>m.main?j.BrowserWindow.getFocusedWindow():j.remote.getCurrentWindow();o.activeWindow=w;o.runJS=(e,r=w())=>r.webContents.executeJavaScript(e);o.fixPathForAsarUnpack=H.fixPathForAsarUnpack;o.enforceMacOSAppLocation=L();o.menuBarHeight=()=>m.macos?n.screen.getPrimaryDisplay().workArea.y:0;o.getWindowBoundsCentered=e=>{e=u({window:w()},e);let r=n.screen.getDisplayNearestPoint(n.screen.getCursorScreenPoint()),[t,s]=e.window.getSize(),i=e.size||{width:t,height:s},a=e.useFullBounds?r.bounds:r.workArea,ee=Math.floor(a.x+(a.width/2-i.width/2)),re=Math.floor((a.height+a.y)/2-i.height/2);return{x:ee,y:re,width:i.width,height:i.height}};o.centerWindow=e=>{e=u({window:w(),animated:!1},e);let r=o.getWindowBoundsCentered(e);e.window.setBounds(r,e.animated)};o.disableZoom=(e=w())=>{let{webContents:r}=e,t=()=>{r.setZoomFactor(1),r.setLayoutZoomLevelLimits(0,0)};r.on("did-finish-load",t),t()};o.appLaunchTimestamp=Date.now();if(m.main){let e=()=>{let r=require("fs"),t=be.join(n.app.getPath("userData"),".electron-util--has-app-launched");if(r.existsSync(t))return!1;try{r.writeFileSync(t,"")}catch(s){if(s.code==="ENOENT")return r.mkdirSync(n.app.getPath("userData")),e()}return!0};o.isFirstAppLaunch=e}o.darkMode={get isEnabled(){return m.macos?n.nativeTheme.shouldUseDarkColors:!1},onChange(e){if(!m.macos)return()=>{};let r=()=>{e()};return n.nativeTheme.on("updated",r),()=>{n.nativeTheme.off(r)}}};o.setContentSecurityPolicy=async(e,r)=>{if(await n.app.whenReady(),!e.split(`
`).filter(t=>t.trim()).every(t=>t.endsWith(";")))throw new Error("Each line must end in a semicolon");e=e.replace(/[\t\n]/g,"").trim(),r=u({session:n.session.defaultSession},r),r.session.webRequest.onHeadersReceived((t,s)=>{s({responseHeaders:A(u({},t.responseHeaders),{"Content-Security-Policy":[e]})})})};o.openNewGitHubIssue=e=>{let r=ve(e);n.shell.openExternal(r)};o.openUrlMenuItem=(e={})=>{if(!e.url)throw new Error("The `url` option is required");let{url:r}=e;delete e.url;let t=(...s)=>{e.click&&e.click(...s),n.shell.openExternal(r)};return A(u({},e),{click:t})};o.showAboutWindow=(e={})=>{let r=n.app.getName(),t=n.app.getVersion(),s={applicationName:r,applicationVersion:t};e.icon&&(s.iconPath=e.icon),e.copyright&&(s.copyright=e.copyright),e.text&&(s.copyright=(e.copyright||"")+`

`+e.text),e.website&&(s.website=e.website),n.app.setAboutPanelOptions(s),n.app.showAboutPanel()};o.aboutMenuItem=(e={})=>(e=u({title:"About"},e),{label:`${e.title} ${n.app.getName()}`,click(){o.showAboutWindow(e)}});o.debugInfo=()=>`
${n.app.getName()} ${n.app.getVersion()}
Electron ${o.electronVersion}
${process.platform} ${ge.release()}
Locale: ${n.app.getLocale()}
`.trim();o.appMenu=(e=[])=>({label:n.app.getName(),submenu:[{role:"about"},{type:"separator"},...e,{type:"separator"},{role:"services"},{type:"separator"},{role:"hide"},{role:"hideothers"},{role:"unhide"},{type:"separator"},{role:"quit"}].filter(Boolean)});o.openSystemPreferences=Z()});var x=p(require("electron")),X=p(C());var h=p(require("electron"));async function _(e){let r=process.platform==="darwin",t=[];r&&t.push({label:"Hello world!",submenu:[{role:"about"},{type:"separator"},{role:"services"},{type:"separator"},{role:"hide"},{role:"hideOthers"},{role:"unhide"},{type:"separator"},{role:"quit"}]}),t.push({label:"File",submenu:[{label:"New Project",click:()=>e({type:"undo"})},{type:"separator"},{label:"Open...",click:()=>e({type:"redo"})},{type:"separator"},{label:"Save",click:()=>e({type:"redo"})},{label:"Save As...",click:()=>e({type:"redo"})},{type:"separator"},{role:"quit"}]}),t.push({label:"Edit",submenu:[{label:"Undo",click:()=>e({type:"undo"}),accelerator:"CmdOrCtrl+Z"},{label:"Redo",click:()=>e({type:"redo"}),accelerator:"CmdOrCtrl+Shift+Z"},{type:"separator"},{label:"Cut",click:()=>e({type:"cut"}),accelerator:"CmdOrCtrl+X"},{label:"Copy",click:()=>e({type:"copy"}),accelerator:"CmdOrCtrl+C"},{label:"Paste",click:()=>e({type:"paste"}),accelerator:"CmdOrCtrl+V"},{label:"Delete",click:()=>e({type:"delete"}),accelerator:"Delete"},{label:"Select All",click:()=>e({type:"selectAll"}),accelerator:"CmdOrCtrl+A"},{label:"Select None",click:()=>e({type:"selectNone"})}]}),t.push({label:"View",submenu:[{role:"reload"},{role:"forceReload"},{role:"toggleDevTools"},{type:"separator"},{label:"Actual Size",click:()=>e({type:"resetZoom"})},{label:"Zoom In",click:()=>e({type:"zoomIn"})},{label:"Zoom Out",click:()=>e({type:"zoomOut"})},{label:"Zoom to Fit",click:()=>e({type:"zoomToFit"})},{label:"Zoom to Selection",click:()=>e({type:"zoomToSelection"})},{type:"separator"},{role:"togglefullscreen"}]}),r?t.push({label:"Window",submenu:[{role:"minimize"},{role:"zoom"},{type:"separator"},{role:"front"},{type:"separator"},{role:"window"}]}):t.push({label:"Window",submenu:[{role:"minimize"},{role:"zoom"},{role:"close"}]}),t.push({role:"help",submenu:[{label:"Learn More",click:async()=>{await h.shell.openExternal("https://electronjs.org")}}]});let s=h.Menu.buildFromTemplate(t);h.Menu.setApplicationMenu(s)}var q=p(require("path")),Ne=p(require("url")),G=p(require("electron")),J=p(C());async function Q(){let e=null;e=new G.BrowserWindow({width:720,height:450,minHeight:480,minWidth:600,titleBarStyle:"hidden",title:"Tldraw",webPreferences:{nodeIntegration:!0,devTools:!0,preload:q.default.join(__dirname,"preload.js")},frame:!1,show:!1}),e.setWindowButtonVisibility(!1);let r=J.is.development;return r?e.loadURL("http://localhost:9080"):e.loadURL(q.default.join(__dirname,"index.html")),e.setPosition(0,0,!1),e.setSize(700,1200),e.on("closed",()=>{e=null}),e.webContents.on("devtools-opened",()=>{e.focus()}),e.on("ready-to-show",()=>{e.show(),r?e.webContents.openDevTools({mode:"bottom"}):e.focus()}),e}var f=p(require("electron")),xe={send:(e,r)=>{f.ipcRenderer.send(e,r)},on:(e,r)=>{f.ipcRenderer.on(e,(t,s)=>r(s))}},K;(K=f.contextBridge)==null||K.exposeInMainWorld("TldrawBridgeApi",xe);var M=null;async function Y(){M=await Q();async function e(r){M.webContents.send("projectMsg",r)}await _(e)}x.app.on("ready",Y).on("window-all-closed",()=>{X.is.macos||x.app.quit()}).on("activate",()=>{M===null&&x.app.isReady()&&Y()});
//# sourceMappingURL=main.js.map
