(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(3),i=n.n(s),r=(n(16),n(7)),l=n(4),c=n(5),u=n(8),d=n(6),m=n(1),h=n(9);var f=function(e){var t=e.item;return o.a.createElement("div",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:t.completed,className:"todo-item__input",id:t.id}),o.a.createElement("label",{className:"todo-item__title",htmlFor:t.id,onClick:function(){return e.onChange(t.id)}},t.title),o.a.createElement("hr",null),o.a.createElement("p",null,t.user.username))};var b=function(e){var t=e.user,n=t.name,a=t.email,s=t.phone,i=t.website;return o.a.createElement("div",{className:"user"},o.a.createElement("p",null,"Name:",n),o.a.createElement("p",null,"Email:",a),o.a.createElement("p",null,"Phone:",s),o.a.createElement("p",{className:"user__website"},"Website:",o.a.createElement("a",{className:"user__website-link",href:i},i)))};var p=function(e){var t=e.sortBy;return e.isLoaded&&o.a.createElement("div",null,o.a.createElement("span",null,"Sort by"),o.a.createElement("button",{type:"button",onClick:function(){return t("title")},className:"sorting-button"},"title"),o.a.createElement("button",{type:"button",onClick:function(){return t("name","user")},className:"sorting-button"},"user"),o.a.createElement("button",{type:"button",onClick:function(){return t("completed")},className:"sorting-button"},"incompleted first"))},E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={listOfTodos:[],buttonDisabled:!1,isLoaded:!1,text:"LOAD"},n.handleClick=n.handleClick.bind(Object(m.a)(n)),n.sortBy=n.sortBy.bind(Object(m.a)(n)),n.checkedTodo=n.checkedTodo.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"checkedTodo",value:function(e){this.setState(function(t){return{listOfTodos:t.listOfTodos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})}})}},{key:"sortBy",value:function(e,t){t?this.setState({listOfTodos:this.state.listOfTodos.sort(function(n,a){return String(n[t][e]).localeCompare(String(a[t][e]))})}):this.setState({listOfTodos:this.state.listOfTodos.sort(function(t,n){return String(t[e]).localeCompare(String(n[e]))})})}},{key:"handleClick",value:function(){var e=this;this.setState({buttonDisabled:!0,text:"Loading..."});var t=fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()}),n=fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()});Promise.all([t,n]).then(function(t){var n=t[0],a=t[1];e.setState({listOfTodos:n.map(function(e){return Object(r.a)({},e,{user:a.find(function(t){return t.id===e.userId})})}),isLoaded:!0})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-list"},!this.state.isLoaded&&o.a.createElement("button",{onClick:this.handleClick,type:"button",disabled:this.state.buttonDisabled,className:"load-button"},this.state.text),o.a.createElement(p,{isLoaded:this.state.isLoaded,sortBy:this.sortBy,filterStatus:this.filterStatus}),this.state.listOfTodos.map(function(t){return o.a.createElement("div",{className:"todo-list__item"},o.a.createElement(f,{key:t.id,item:t,checked:t.completed,onChange:e.checkedTodo}),o.a.createElement(b,{user:t.user}))}))}}]),t}(o.a.Component);var k=function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"center",color:"#171821"}},"ToDo List"),o.a.createElement(E,null))};i.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.491c7bed.chunk.js.map