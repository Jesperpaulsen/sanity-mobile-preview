(this["webpackJsonpsanity-mobile-preview-example"]=this["webpackJsonpsanity-mobile-preview-example"]||[]).push([[0],[,,function(e,a,s){e.exports=s(11)},function(e,a,s){},,,,,,,function(e,a,s){},function(e,a,s){"use strict";s.r(a);s(3);var l=s(0),t=s.n(l),n=s(1),c=s.n(n);function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var s=0,l=new Array(a);s<a;s++)l[s]=e[s];return l}function o(e,a){var s;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(s=function(e,a){if(e){if("string"===typeof e)return r(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?r(e,a):void 0}}(e))||a&&e&&"number"===typeof e.length){s&&(e=s);var l=0;return function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(s=e[Symbol.iterator]()).next.bind(s)}var i={"marvel-device":"_13C-O",screen:"_2Amsc","top-bar":"_qECU0","bottom-bar":"_F6bPa","middle-bar":"_fA7mw",iphone8:"_1sXT5",home:"_25p7s",sleep:"_2EZnX",volume:"_2FPQW",camera:"_h5ppK",sensor:"_2Ok-6",speaker:"_fUVii",gold:"_11BBn",black:"_jzkBO",landscape:"_1c67x",iphone8plus:"_2PCMV",iphone5s:"_3IA0l",iphone5c:"_Fd4kN",silver:"_smL3H",red:"_lNRoC",yellow:"_2zwSd",green:"_11nfu",blue:"_16rvF",iphone4s:"_1C99G",nexus5:"_3Ff4H",s5:"_3nyHv",lumia920:"_2gvlt",white:"_3YXIg","htc-one":"_Xbf-e",ipad:"_2OuCL",macbook:"_rglbn","iphone-x":"_36eC8",overflow:"_2l71V",shadow:"_3P-q4","shadow--tl":"_3bHFp","shadow--tr":"_2e2kx","shadow--bl":"_3rXur","shadow--br":"_nbUm4","inner-shadow":"_3Gknh",notch:"_1-RqF",note8:"_1gDBY",sensors:"_3iESW","more-sensors":"_O3CEj",inner:"_E-ixb"},m=function(e){var a=e.selectedDevice,s=e.selectedColor,n=e.landscape,c=e.children,r=Object(l.useState)(""),o=r[0],m=r[1];return Object(l.useEffect)((function(){var e=a.colors.includes(s)?s:"black",l=i["marvel-device"]+"  "+i[a.type]+" "+i[e];n&&(l+=" "+i.landscape),m(l)}),[a,s,n]),t.a.createElement("div",{className:o},function e(a,s){return a.map((function(a,t){return Object(l.createElement)("div",{className:Array.isArray(a.className)?d(a.className):i[a.className],key:"mobileStyle"+t},"screen"===a.className?s:a.children&&e(a.children,s))}))}(a.style,c))};var d=function(e){for(var a,s="",l=o(e);!(a=l()).done;){var t=a.value;s+=i[t]+" "}return s},u={"iphone-x":{type:"iphone-x",readableName:"iPhone X",colors:["black"],style:[{className:"notch",children:[{className:"camera"},{className:"speaker"}]},{className:"top-bar"},{className:"sleep"},{className:"bottom-bar"},{className:"volume"},{className:"overflow",children:[{className:["shadow","shadow--tr"]},{className:["shadow","shadow--tl"]},{className:["shadow","shadow--br"]},{className:["shadow","shadow--bl"]}]},{className:"inner-shadow"},{className:"screen"}]},note8:{type:"note8",readableName:"Note 8",colors:["black"],style:[{className:"inner"},{className:"overflow",children:[{className:"shadow"}]},{className:"speaker"},{className:"sensors"},{className:"more-sensors"},{className:"sleep"},{className:"volume"},{className:"camera"},{className:"screen"}]},iphone8:{type:"iphone8",readableName:"iPhone 8",colors:["black","silver","gold"],style:[{className:"top-bar"},{className:"sleep"},{className:"volume"},{className:"camera"},{className:"sensor"},{className:"speaker"},{className:"screen"},{className:"home"},{className:"bottom-bar"}]},iphone8plus:{type:"iphone8plus",readableName:"iPhone 8 plus",colors:["black","silver","gold"],style:[{className:"top-bar"},{className:"sleep"},{className:"volume"},{className:"camera"},{className:"sensor"},{className:"speaker"},{className:"screen"},{className:"home"},{className:"bottom-bar"}]},iphone5s:{type:"iphone5s",readableName:"iPhone 5s",colors:["black","silver","gold"],style:[{className:"top-bar"},{className:"sleep"},{className:"volume"},{className:"camera"},{className:"sensor"},{className:"speaker"},{className:"screen"},{className:"home"},{className:"bottom-bar"}]},ipad:{type:"ipad",readableName:"iPad mini",colors:["black","silver"],style:[{className:"camera"},{className:"screen"},{className:"home"},{className:"bottom-bar"}]},nexus5:{type:"nexus5",readableName:"Nexus 5",colors:["black"],style:[{className:"top-bar"},{className:"sleep"},{className:"volume"},{className:"camera"},{className:"screen"}]}},p="_3ZP5s",b="_1HaoU",N=function(e){var a=e.selectedItem,s=e.availableItems,n=e.updateSelectedItem,c=Object(l.useState)(!1),r=c[0],o=c[1];return t.a.createElement("div",{className:p,style:{width:"200px"},onFocus:function(){return o(!1)}},t.a.createElement("div",{className:b,onClick:function(){return o(!r)}},a),r?t.a.createElement("ul",null,s.map((function(e,a){return t.a.createElement("li",{onClick:function(){n(e.type),o(!r)},key:e.type+a},e.readableName)}))):null)},h="_3a1eO",v=function(e){var a=e.landscape,s=e.updateLandscape,l=e.label;return t.a.createElement("div",{className:h},t.a.createElement("button",{onClick:function(){return s(!a)}},l))},f=function(e){var a="";return e.length>0&&(a+=e.charAt(0).toUpperCase()),e.length>1&&(a+=e.slice(1)),a},y=function(e){var a=e.selectedDevice,s=e.allowedDevices,n=e.landscape,c=e.updateSelectedDevice,r=e.updateLandscape,o=e.selectedColor,i=Object(l.useState)(o),m=i[0],d=i[1],p=Object(l.useState)(a),b=p[0],h=p[1],y=Object(l.useState)(a.colors),_=y[0],w=y[1],k=(s||["iphone-x","note8","iphone8","iphone8plus","iphone5s","ipad","nexus5"]).map((function(e){var a=u[e];return{type:a.type,readableName:a.readableName}})),S=_.map((function(e){return{type:e,readableName:f(e)}}));return t.a.createElement("div",{style:{display:"flex",justifyItems:"center",alignItems:"center"}},t.a.createElement(N,{selectedItem:b.readableName,availableItems:k,updateSelectedItem:function(e){var a=u[e];h(a),w(a.colors),a.colors.includes(m)||d("black"),c(a,m)}}),_&&t.a.createElement(N,{selectedItem:f(m),availableItems:S,updateSelectedItem:function(e){d(e),c(b,e)}}),t.a.createElement(v,{landscape:n,updateLandscape:r,label:"Rotate"}))},_=function(e){var a=e.allowedDevices,s=e.preSelectedDevice,n=e.preSelectedColor,c=void 0===n?"black":n,r=e.showMenu,o=void 0===r||r,i=e.preSelectedLandscape,d=void 0!==i&&i,p=e.children,b=Object(l.useState)(),N=b[0],h=b[1],v=Object(l.useState)("black"),f=v[0],_=v[1],w=Object(l.useState)(d),k=w[0],S=w[1];Object(l.useEffect)((function(){E()}),[]);var E=function(){var e;e=s&&a&&a.length>0?g(s,a):s?u[s]:a&&a.length>0?u[a[0]]:u["iphone-x"],x(e),h(e||u["iphone-x"])},g=function(e,a){return e&&a.includes(e)?u[e]:(console.error("The preselected device was not included in the allowedDevices. Defaulting to the first allowed device"),u[a[0]])},x=function(e){c&&!e.colors.includes(c)?(console.error("Color "+c+" can't be chosen for device "+e.readableName),_("black")):c&&e.colors.includes(c)?_(c):_("black")};return N?t.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minWidth:"min-content"}},o&&t.a.createElement(y,{selectedDevice:N,selectedColor:f,allowedDevices:a,landscape:k,updateLandscape:S,updateSelectedDevice:function(e,a){h(e),_(a)}}),t.a.createElement(m,{selectedDevice:N,selectedColor:f,landscape:k},p)):t.a.createElement("div",null,"Something strange happened")},w=(s(10),function(){return t.a.createElement(_,{preSelectedDevice:"ipad",preSelectedColor:"silver",preSelectedLandscape:!0},t.a.createElement("div",{style:{display:"flex",justifyContent:"center"}}," This is a demo \ud83e\udd20"))});c.a.render(t.a.createElement(w,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.4315abf4.chunk.js.map