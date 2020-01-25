(this["webpackJsonpreact-business-card"]=this["webpackJsonpreact-business-card"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(4),c=a.n(l),r=(a(16),a(2)),s=a(1),i=a.n(s),m=a(5),u=a(6),h=a(9),d=a(7),p=a(10);a(18);function f(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Color Palette"),o.a.createElement("select",{className:"colorOptionBar",value:e.selectedColoredOption,onChange:e.handleChange,name:e.name},e.coloredOptions.map((function(e,t){return o.a.createElement("option",{value:e.value,key:t},e.label)}))))}function C(e){return o.a.createElement("button",{style:{backgroundColor:e.color,width:e.width,height:e.height},onClick:e.pickColor,className:e.className})}function y(e){return o.a.createElement("svg",{className:e.className,width:"32",height:"32",viewBox:"0 0 20 20"},o.a.createElement("path",{fill:"black",d:"M19.305,9.61c-0.235-0.235-0.615-0.235-0.85,0l-1.339,1.339c0.045-0.311,0.073-0.626,0.073-0.949\r c0-3.812-3.09-6.901-6.901-6.901c-2.213,0-4.177,1.045-5.44,2.664l0.897,0.719c1.053-1.356,2.693-2.232,4.543-2.232\r c3.176,0,5.751,2.574,5.751,5.751c0,0.342-0.037,0.675-0.095,1l-1.746-1.39c-0.234-0.235-0.614-0.235-0.849,0\r c-0.235,0.235-0.235,0.615,0,0.85l2.823,2.25c0.122,0.121,0.282,0.177,0.441,0.172c0.159,0.005,0.32-0.051,0.44-0.172l2.25-2.25\r C19.539,10.225,19.539,9.845,19.305,9.61z M10.288,15.752c-3.177,0-5.751-2.575-5.751-5.752c0-0.276,0.025-0.547,0.062-0.813\r l1.203,1.203c0.235,0.234,0.615,0.234,0.85,0c0.234-0.235,0.234-0.615,0-0.85l-2.25-2.25C4.281,7.169,4.121,7.114,3.961,7.118\r C3.802,7.114,3.642,7.169,3.52,7.291l-2.824,2.25c-0.234,0.235-0.234,0.615,0,0.85c0.235,0.234,0.615,0.234,0.85,0l1.957-1.559\r C3.435,9.212,3.386,9.6,3.386,10c0,3.812,3.09,6.901,6.902,6.901c2.083,0,3.946-0.927,5.212-2.387l-0.898-0.719\r C13.547,14.992,12.008,15.752,10.288,15.752z"}))}function E(e){return o.a.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"black",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),o.a.createElement("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),o.a.createElement("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),o.a.createElement("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),o.a.createElement("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),o.a.createElement("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),o.a.createElement("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),o.a.createElement("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"}))}function b(e){return o.a.createElement("div",{className:"colorsShuffle"},o.a.createElement("div",{className:"colors"},e.colors.map((function(t,a){return o.a.createElement(C,{color:t,key:a,width:"48px",height:"48px",pickColor:function(){return e.pickColor(t,a)},className:"colorBox"})}))),o.a.createElement("button",{className:e.bounce?"shuffleColorsButton bounce":"shuffleColorsButton",onClick:e.generatePalette,onAnimationEnd:e.onAnimationEnd},e.bounce?o.a.createElement(E,{className:"shuffleIconLoading"}):o.a.createElement(y,{className:"shuffleIcon"})))}function g(e){return o.a.createElement("div",{className:"fontComboButtons"},o.a.createElement("input",{type:"radio",value:e.fontComboName,checked:e.checked}),o.a.createElement("span",{onClick:e.changeFont},e.fontComboName),o.a.createElement("div",{className:"check",onClick:e.changeFont}))}function N(e){return o.a.createElement("button",{style:{backgroundColor:e.color,width:e.width,height:e.height},onClick:e.pickColor,className:e.className})}var v=a(8);function k(e){return o.a.createElement("svg",{className:e.className,viewBox:"0 0 20 20",width:"30",height:"30"},o.a.createElement("path",{fill:e.color,d:"M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"}))}var x=[{primaryFont:"Raleway",secondaryFont:"Lato",fontComboName:"Traditional"},{primaryFont:"Playfair Display",secondaryFont:"Source Sans Pro",fontComboName:"Condensed"},{primaryFont:"Fascinate",secondaryFont:"Nobile",fontComboName:"Witty"}],F=[{value:"backgroundColor",label:"Background color"},{value:"nameColor",label:"Name color"},{value:"specialityColor",label:"Field or Speciality Color"},{value:"companyColor",label:"Company Color"},{value:"emailColor",label:"E-mail Address Color"}],w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={colors:[],bounce:!1,fullName:"",speciality:"",companyName:"",eMail:"",fontCombo:x[0],coloredOption:F[0].value,nameColor:"",specialityColor:"",companyColor:"",emailColor:"",backgroundColor:"",flipped:!1,companyURLKeyword:"",hasError:!1,companyURL:"",backsideBackground:"",palette:[]},a.generatePalette=function(){var e,t,n,o;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a.setState({bounce:!0}),"/api/colr/json/colors/random/7",l.next=4,i.a.awrap(fetch("/api/colr/json/colors/random/7"));case 4:return e=l.sent,l.next=7,i.a.awrap(e.json());case 7:t=l.sent,n=t.matching_colors,(o=n.filter((function(e){return e.length>0})).map((function(e){return"#"+e}))).push("#000000","#FFFFFF"),a.setState({colors:o});case 12:case"end":return l.stop()}}))},a.getDominantColors=function(){var e=new v.a,t=new Image;t.crossOrigin="Anonymous",t.src="https://logo.clearbit.com/"+a.state.companyURLKeyword,t.addEventListener("load",(function(){var n=e.getPalette(t,3,1);n.push([0,0,0],[255,255,255]);var o=n.map((function(e){return"rgb(".concat(e,")")}));a.setState({palette:o})}))},a.handleChange=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.changeFont=function(e){a.setState({fontCombo:e})},a.pickColor=function(e,t){a.setState(Object(r.a)({},a.state.coloredOption,e))},a.logoPickColor=function(e,t){a.setState({backsideBackground:e})},a.flip=function(){a.setState({flipped:!a.state.flipped})},a.submitURL=function(){a.setState({hasError:!1}),a.setState({companyURL:"//logo.clearbit.com/"+a.state.companyURLKeyword}),a.getDominantColors()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.generatePalette(),document.title="Business Card ";case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"sidebar-inner"},o.a.createElement("div",{className:this.state.flipped?"sidebar hidden":"sidebar"},o.a.createElement("section",null,o.a.createElement("h2",null,"Details"),o.a.createElement("div",{className:"textFields"},o.a.createElement("input",{className:"textFieldInput",name:"fullName",placeholder:"Your Name",value:this.state.fullName,onChange:this.handleChange}),o.a.createElement("input",{className:"textFieldInput",name:"speciality",placeholder:"Field or Speciality",value:this.state.speciality,onChange:this.handleChange}),o.a.createElement("input",{className:"textFieldInput",name:"companyName",placeholder:"Name of the Company",value:this.state.companyName,onChange:this.handleChange}),o.a.createElement("input",{className:"textFieldInput",name:"eMail",placeholder:"E-mail Address",value:this.state.eMail,onChange:this.handleChange}))),o.a.createElement("section",null,o.a.createElement(f,{coloredOptions:F,selectedColorOption:this.state.coloredOption,handleChange:this.handleChange,name:"coloredOption"}),o.a.createElement(b,{colors:this.state.colors,pickColor:this.pickColor,bounce:this.state.bounce,onAnimationEnd:function(){return e.setState({bounce:!1})},generatePalette:this.generatePalette})),o.a.createElement("section",null,o.a.createElement("h2",null,"Fonts"),o.a.createElement("div",null,x.map((function(t,a){return o.a.createElement(g,{fontComboName:t.fontComboName,checked:t.fontComboName===e.state.fontCombo.fontComboName,changeFont:function(){return e.changeFont(t)},key:a})})))),o.a.createElement("h2",null,"Click on a card to flip it")),o.a.createElement("div",{className:this.state.flipped?"sidebar":"sidebar hidden"},o.a.createElement("div",null,o.a.createElement("h2",null,"Logo"),o.a.createElement("input",{className:"textFieldInput",name:"companyURLKeyword",placeholder:"Company Website",type:"text",value:this.state.companyURLKeyword,onChange:this.handleChange}),o.a.createElement("button",{className:"submitButton",onClick:this.submitURL},"Submit"),o.a.createElement("div",null,o.a.createElement("h3",null,"Example: facebook.com"),this.state.hasError?o.a.createElement("div",null,o.a.createElement("h2",null,"Sorry, we didn't find your logo"),o.a.createElement("h3",null,"But you can choose a color for your card from this selection:"),o.a.createElement(b,{colors:this.state.colors,pickColor:this.logoPickColor,bounce:this.state.bounce,onAnimationEnd:function(){return e.setState({bounce:!1})},generatePalette:this.generatePalette})):o.a.createElement("div",{className:"logoPalette"},this.state.palette.map((function(t,a){return o.a.createElement(N,{color:t,key:a,width:"48px",height:"48px",pickColor:function(){return e.logoPickColor(t)},className:"colorBox"})}))))))),o.a.createElement("div",{className:"rightContainer"},o.a.createElement("div",{className:this.state.flipped?"businessCard flipped":"businessCard",onClick:this.flip},o.a.createElement("div",{className:"businessCardInner"},o.a.createElement("div",{className:"businessCardFront",style:{backgroundColor:this.state.backgroundColor}},o.a.createElement("h1",{className:"companyChar",style:{fontFamily:x[1].primaryFont}},this.state.companyName.charAt(0).toUpperCase()),o.a.createElement("div",{className:"leftTop"},o.a.createElement("h1",{style:{fontFamily:this.state.fontCombo.primaryFont,color:this.state.nameColor}},this.state.fullName),o.a.createElement("h2",{style:{fontFamily:this.state.fontCombo.secondaryFont,color:this.state.specialityColor}},this.state.speciality.toUpperCase())),o.a.createElement("div",{className:"rightBottom"},o.a.createElement("p",{style:{fontFamily:this.state.fontCombo.secondaryFont,color:this.state.companyColor},className:"companyName"},this.state.companyName),o.a.createElement("div",{className:"eMail"},this.state.eMail?o.a.createElement(k,{className:"emailIcon",color:this.state.emailColor}):null,o.a.createElement("p",{style:{fontFamily:this.state.fontCombo.secondaryFont,color:this.state.emailColor}},this.state.eMail)))),o.a.createElement("div",{className:"businessCardBack",style:{background:this.state.backsideBackground?this.state.backsideBackground:"#ffffff"}},o.a.createElement("div",{className:"companyDiv"},this.state.companyURL&&!this.state.hasError?o.a.createElement("img",{src:this.state.companyURL,alt:"Logo of the Company",onError:function(){return e.setState({hasError:!0})},className:"companyLogo"}):null))))))}}]),t}(o.a.Component);c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f2260493.chunk.js.map