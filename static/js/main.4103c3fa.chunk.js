(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),l=a.n(s),r=(a(14),a(3)),c=a(4),i=a(7),d=a(5),u=a(8),m=(a(16),a(6)),h=a.n(m),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todoList:[],tasks:""},a.addtodo=function(){var e=a.state.todoList.slice();e.push(a.state.tasks),a.setState({todoList:e,tasks:""})},a.deletetodo=function(e){var t=a.state.todoList.slice();t.splice(e,1),a.setState({todoList:t,tasks:""})},a.cleartodo=function(e){var t=a.state.todoList.slice();t.splice(e,999),a.setState({todoList:t,tasks:""})},a.handleChange=function(e){a.setState({tasks:e.target.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getInitialState",value:function(){return{tasks:""}}},{key:"handleChange",value:function(e){this.setState({tasks:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.todoList.map(function(t,a){return o.a.createElement("li",{key:a},o.a.createElement("p",null,t),o.a.createElement("button",{className:"btn-delete",onClick:function(){e.deletetodo(a)}}))});return o.a.createElement("div",{className:"app"},o.a.createElement("h1",null,"ToDo List App"),o.a.createElement("div",{className:"todo-wrapper"},o.a.createElement("div",{className:"form"},o.a.createElement("input",{type:"text",placeholder:"Enter your task...",value:this.state.tasks,onChange:this.handleChange,className:"input-todo"}),o.a.createElement("button",{className:"btn btn-add",onClick:this.addtodo,disabled:!this.state.tasks}," +")),0===this.state.todoList.length?o.a.createElement("div",{className:"status-free"},o.a.createElement("img",{src:h.a,alt:"fireworks"}),o.a.createElement("h4",null,"Chill time! You have no todos.")):o.a.createElement("div",{className:"wrap-todo-content"},o.a.createElement("ul",null,t),o.a.createElement("div",{className:"clear-todo"},o.a.createElement("div",{className:"btn btn-clear",onClick:function(){e.cleartodo()}},"Clear All")))),o.a.createElement("div",{className:"author"},o.a.createElement("a",{href:"https://github.com/danatlas",target:"_blank",rel:"noopener noreferrer",className:"btn-auth","aria-label":"Follow @nourabusoud on GitHub"},o.a.createElement("svg",{version:"1.1",width:"14",height:"14",viewBox:"0 0 16 16",className:"octicon octicon-mark-github","aria-hidden":"true"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})),o.a.createElement("span",{googl:"true"}," Follow @danatlas")),o.a.createElement("br",null),o.a.createElement("span",{className:"git-auth"},"View on ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/DanAtlas/todo-react"},"Github"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){e.exports=a.p+"static/media/fireworks.38f2ee9f.svg"},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.4103c3fa.chunk.js.map