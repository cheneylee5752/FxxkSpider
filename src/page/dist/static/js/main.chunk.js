(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,l){l(11),e.exports=l(17)},11:function(e,t,l){"use strict";"undefined"==typeof Promise&&(l(12).enable(),window.Promise=l(15)),l(16),Object.assign=l(1)},17:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(2),a=l(19),r=l(23);a.render(n.createElement(r.default,null),document.getElementById("root"),()=>console.log("Page 服务已启动"))},23:function(e,t,l){"use strict";var n=this&&this.__decorate||function(e,t,l,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,l,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(s=(r<3?a(s):r>3?a(t,l,s):a(t,l))||s);return r>3&&s&&Object.defineProperty(t,l,s),s},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const r=l(2),s=l(44),c=l(24);let u=class extends r.Component{constructor(e){super(e),this.state={gameName:"",startPage:1,endPage:void 0,ms:void 0,task:null,showResult:[],selectType:"1"}}runPoll(e){this.sto=setTimeout(()=>{e&&e(),this.runPoll(e)},1e3)}getTaskDetail(e){return()=>{c.default.get(`/api/task/${e}`).then(e=>{if(1===e.data.status){clearTimeout(this.sto);const t=e.data;this.setState({task:t,showResult:JSON.parse(t.rawResult)})}})}}handleSubmit(e){const{gameName:t,startPage:l,endPage:n,ms:a}=this.state;e.preventDefault(),c.default.post("/api/task",{gameName:t,startPage:l,endPage:n,ms:1e3*a}).then(e=>{if(0===e.data.error){const t=e.data.data._id;this.runPoll(this.getTaskDetail(t))}})}handleValueChange(e){const t={};t[e.target.name]=e.target.value,this.setState(t)}handleSelectChange(e){try{const t=e.target.value,{task:l}=this.state,n=l.rawResult;if("2"===t){const e=JSON.parse(n).sort((e,t)=>Math.floor(t.diff_price)-Math.floor(e.diff_price));this.setState({showResult:[...e],selectType:"2"})}else{const e=JSON.parse(n);this.setState({showResult:[...e],selectType:"1"})}}catch(e){alert("未取得任务单数据")}}render(){const{showResult:e,selectType:t}=this.state;return r.createElement("section",{style:{textAlign:"center"}},r.createElement("h1",null,"创建任务单"),r.createElement("form",{onSubmit:this.handleSubmit},r.createElement("label",null,"游戏名："),r.createElement("input",{type:"text",onChange:this.handleValueChange,name:"gameName"}),r.createElement("br",null),r.createElement("br",null),r.createElement("label",null,"开始页数："),r.createElement("input",{type:"number",onChange:this.handleValueChange,name:"startPage"}),r.createElement("br",null),r.createElement("br",null),r.createElement("label",null,"结束页数："),r.createElement("input",{type:"number",onChange:this.handleValueChange,name:"endPage"}),r.createElement("br",null),r.createElement("br",null),r.createElement("label",null,"延时："),r.createElement("input",{type:"text",onChange:this.handleValueChange,name:"ms"}),r.createElement("br",null),r.createElement("br",null),r.createElement("button",{type:"onSubmit"},"开始    ！"),r.createElement("br",null),r.createElement("br",null),r.createElement("p",null,"排序规则：",r.createElement("select",{onChange:this.handleSelectChange,value:t},r.createElement("option",{value:1},"默认（buff规则）"),r.createElement("option",{value:2},"价差降序"))),r.createElement("ul",null,e.map(e=>r.createElement("li",{key:e.id},"名称：",e.name,r.createElement("br",null),r.createElement("br",null),"buff出售价格：",e.sell_min_price,"元",r.createElement("br",null),r.createElement("br",null),"steam出售价格：",e.steam_price_cny,"元",r.createElement("br",null),r.createElement("br",null),"价差：",e.diff_price,r.createElement("br",null),r.createElement("br",null),r.createElement("img",{src:e.icon_url,onClick:()=>window.open(e.buff_goods_url),style:{width:"80px"}}),r.createElement("br",null),r.createElement("br",null),r.createElement("hr",null))))))}};u=n([s.autobind,a("design:paramtypes",[Object])],u),t.default=u}},[[10,2,1]]]);