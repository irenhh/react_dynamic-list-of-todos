(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(3),r=n.n(l),i=(n(16),n(7)),o=n(4),c=n(5),u=n(8),m=n(6),d=n(1),b=n(9);var f=function(e){return s.a.createElement("div",{className:"todo-item"},s.a.createElement("input",{type:"checkbox",checked:e.item.completed,className:"todo-item__input"}),s.a.createElement("span",{className:"todo-item__title"},e.item.title),s.a.createElement("hr",null),s.a.createElement("p",null,e.user.username))};var p=function(e){var t=e.user,n=t.name,a=t.email,l=t.phone,r=t.website;return s.a.createElement("div",{className:"user"},s.a.createElement("p",null,"Name:",n),s.a.createElement("p",null,"Email:",a),s.a.createElement("p",null,"Phone:",l),s.a.createElement("p",{className:"user__website"},"Website:",s.a.createElement("a",{className:"user__website-link",href:r},r)))};var h=function(e){return s.a.createElement("div",{style:{display:e.style}},s.a.createElement("span",null,"Sort by"),s.a.createElement("button",{type:"submit",onClick:function(){return e.sortBy("title")},className:"sorting-button"},"title"),s.a.createElement("button",{type:"submit",onClick:function(){return e.sortBy("userName")},className:"sorting-button"},"user"),s.a.createElement("button",{type:"submit",onClick:function(){return e.sortBy("completed")},className:"sorting-button"},"incompleted first"))},y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={listOfTodos:[],isLoaded:!1,buttonDisabled:!1,text:"LOAD"},e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.sortBy=e.sortBy.bind(Object(d.a)(e)),e}return Object(b.a)(t,e),Object(c.a)(t,[{key:"sortBy",value:function(e){this.setState({listOfTodos:this.state.listOfTodos.sort(function(t,n){return String(t[e]).localeCompare(String(n[e]))})})}},{key:"handleClick",value:function(){var e=this;this.setState({buttonDisabled:!0,text:"Loading..."});var t=fetch("https://jsonplaceholder.typicode.com/todos"),n=fetch("https://jsonplaceholder.typicode.com/users");Promise.all([t,n]).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}).then(function(t){var n=t[0],a=t[1];e.setState({listOfTodos:n.map(function(e){return Object(i.a)({},e,{userName:a.find(function(t){return t.id===e.userId}).name,user:a.find(function(t){return t.id===e.userId})})})})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"todo-list"},s.a.createElement("button",{onClick:this.handleClick,type:"submit",disabled:this.state.buttonDisabled,style:this.state.listOfTodos.length>0?{display:"none"}:{display:"block"},className:"load-button"},this.state.text),s.a.createElement(h,{style:this.state.listOfTodos.length>0?"block":"none",sortBy:this.sortBy,filterStatus:this.filterStatus}),this.state.listOfTodos.map(function(e){return s.a.createElement("div",{className:"todo-list__item"},s.a.createElement(f,{key:e.id,item:e,user:e.user}),s.a.createElement(p,{user:e.user}))}))}}]),t}(s.a.Component);var E=function(){return s.a.createElement("div",null,s.a.createElement("h1",{style:{textAlign:"center",color:"#171821"}},"ToDo List"),s.a.createElement(y,null))};r.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0d1920d4.chunk.js.map