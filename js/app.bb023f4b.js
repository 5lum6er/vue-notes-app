(function(t){function e(e){for(var n,i,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,l=1;l<o.length;l++){var r=o[l];0!==s[r]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-notes-app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),s=o.n(n);s.a},"080e":function(t,e,o){"use strict";var n=o("8c5f"),s=o.n(n);s.a},1065:function(t,e,o){},"1b84":function(t,e,o){"use strict";var n=o("e85d"),s=o.n(n);s.a},2994:function(t,e,o){},"31ec":function(t,e,o){},"3df6":function(t,e,o){"use strict";var n=o("533f"),s=o.n(n);s.a},"533f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("ModalConfirmDelete",{directives:[{name:"show",rawName:"v-show",value:t.modalIsShown,expression:"modalIsShown"}],attrs:{onConfirm:t.onConfirm}}),o("h1",{staticClass:"app__title"},[t._v("Notes")]),o("router-view",{attrs:{name:"add",onAdd:t.onAdd}}),o("router-view",{attrs:{onNoteDelete:t.onNoteDelete,onCancelChanges:t.onCancelChanges,selectedNote:t.selectedNote,notes:t.notes,onEdit:t.onEdit,onSave:t.onSave}})],1)},a=[],i=(o("99af"),o("4de4"),o("7db0"),o("c975"),o("2909")),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal__container"},[o("div",{staticClass:"modal"},[t._m(0),o("div",{staticClass:"modal__footer"},[o("button",{staticClass:"modal__btn btn-ok",attrs:{value:"ok"},on:{click:function(e){return t.onConfirm()}}},[t._v(" OK ")]),o("button",{staticClass:"modal__btn btn-cancel",attrs:{value:"cancel"},on:{click:function(e){return t.onConfirm()}}},[t._v(" Cancel ")])])])])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal__header"},[o("h2",[t._v("Are you shure you want to do this?")])])}],c={name:"ModalConfirmDelete",props:["onConfirm"]},d=c,u=(o("da39"),o("2877")),p=Object(u["a"])(d,l,r,!1,null,"4ce83b26",null),f=p.exports,v={name:"App",data:function(){return{notes:[],modalIsShown:!1,confirmDelete:!1,deletingItemId:null,selectedNote:{},modalAction:""}},components:{ModalConfirmDelete:f},methods:{onAdd:function(t){this.notes=[{title:t,id:Date.now(),createAt:(new Date).toLocaleString(),todos:[]}].concat(Object(i["a"])(this.notes)),localStorage.setItem("notes",JSON.stringify(this.notes))},showModal:function(){this.modalIsShown=!0},onNoteDelete:function(){this.deletingItemId=event.target.value,this.modalAction="delete",this.showModal()},onCancelChanges:function(){this.modalAction="cancel changes",this.showModal()},onConfirm:function(){var t=this.deletingItemId;"ok"===event.target.value&&"delete"===this.modalAction?(this.notes=this.notes.filter((function(e){return e.id!==+t})),localStorage.setItem("notes",JSON.stringify(this.notes)),"/vue-notes-app/"!==this.$route.path&&this.$router.push("/vue-notes-app/")):"ok"===event.target.value&&"cancel changes"===this.modalAction&&this.$router.back(),this.modalIsShown=!1},onEdit:function(t){var e=this.notes.find((function(e){return e.id===t}));this.selectedNote=e,this.$router.push("/details/"+t)},onSave:function(t){this.notes[this.notes.indexOf(this.selectedNote)]=t,localStorage.setItem("notes",JSON.stringify(this.notes)),this.$router.back()}},mounted:function(){localStorage.notes&&(this.notes=JSON.parse(localStorage.getItem("notes")||"[]"))}},m=v,h=(o("034f"),Object(u["a"])(m,s,a,!1,null,null,null)),_=h.exports,b=o("8c4f"),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note note__details details"},[o("div",{staticClass:"note__header"},[t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tempNote.title,expression:"tempNote.title"}],staticClass:"note__edit",attrs:{type:"text"},domProps:{value:t.tempNote.title},on:{input:function(e){e.target.composing||t.$set(t.tempNote,"title",e.target.value)}}}),o("button",{staticClass:"note__btn btn-save",attrs:{type:"button"},on:{click:function(e){return t.onSave(t.tempNote)}}},[t._v(" SAVE ")])]),o("div",{staticClass:"note__body"},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.tempNote.todos.length,expression:"tempNote.todos.length"}],staticClass:"note__hint"},[t._v("Double click on the one of todos to change it")]),o("Todos",{directives:[{name:"show",rawName:"v-show",value:t.tempNote.todos.length,expression:"tempNote.todos.length"}],attrs:{todos:t.tempNote.todos,onTodoAdd:t.onTodoAdd,onTodoDelete:t.onTodoDelete}}),o("NewTodo",{attrs:{onTodoAdd:t.onTodoAdd}}),o("p",[t._v("ADD TODO")])],1),o("div",{staticClass:"note__footer"},[o("p",{staticClass:"note__date"},[t._v(t._s(t.selectedNote.createAt))]),o("div",{staticClass:"note__actions"},[o("button",{staticClass:"note__btn btn-remove-changes",attrs:{type:"button"},on:{click:t.onRemoveChanges}},[t._v(" Remove changes ")]),o("button",{staticClass:"note__btn btn-cancel",attrs:{type:"button"},on:{click:t.onCancelChanges}},[t._v(" Cancel ")]),o("button",{staticClass:"note__btn btn-close",attrs:{value:t.selectedNote.id},on:{click:t.onNoteDelete}},[t._v(" 🗑 ")])])])])},C=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"note__title"},[o("span",{staticClass:"note__logo"},[t._v(" ≡ ")])])}],w=(o("ac1f"),o("5319"),o("eee7"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos"},[o("ul",{staticClass:"todo-list"},t._l(t.todos,(function(e){return o("Todo",{key:e.id,attrs:{todo:e,onTodoDelete:t.onTodoDelete}})})),1)])}),N=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("li",{staticClass:"todo__item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.completed,expression:"todo.completed"}],staticClass:"todo__status",attrs:{id:"status_"+t.todo.id,type:"checkbox"},domProps:{checked:Array.isArray(t.todo.completed)?t._i(t.todo.completed,null)>-1:t.todo.completed},on:{change:function(e){var o=t.todo.completed,n=e.target,s=!!n.checked;if(Array.isArray(o)){var a=null,i=t._i(o,a);n.checked?i<0&&t.$set(t.todo,"completed",o.concat([a])):i>-1&&t.$set(t.todo,"completed",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.todo,"completed",s)}}}),o("label",{staticClass:"todo__status-label",attrs:{for:"status_"+t.todo.id}}),o("div",{staticClass:"todo__title",on:{dblclick:t.onEdit}},[o("p",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"todo__label"},[t._v(" "+t._s(t.changedTodoTitle)+" ")]),o("input",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"},{name:"model",rawName:"v-model",value:t.changedTodoTitle,expression:"changedTodoTitle"}],staticClass:"todo__edit",attrs:{required:"",type:"text"},domProps:{value:t.changedTodoTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSave(e)},blur:t.onSave,input:function(e){e.target.composing||(t.changedTodoTitle=e.target.value)}}})]),o("div",{staticClass:"todo__action"},[o("button",{staticClass:"todo__btn btn-delete",attrs:{type:"button"},on:{click:function(e){return t.onTodoDelete(t.todo.id)}}},[t._v(" ✖ ")])])])])},T=[],k={name:"Todo",props:["todo","onTodoDelete"],data:function(){return{changedTodoTitle:this.todo.title,isEditing:!1}},methods:{onSave:function(){this.todo.title=this.changedTodoTitle,this.isEditing=!1},onEdit:function(){this.isEditing=!0}}},O=k,x=(o("8727"),Object(u["a"])(O,y,T,!1,null,"216c4e6e",null)),S=x.exports,E={name:"Todos",props:["todos","onTodoDelete"],components:{Todo:S}},D=E,A=(o("cfbe"),Object(u["a"])(D,w,N,!1,null,"dd7da1d4",null)),$=A.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoTitle,expression:"newTodoTitle"}],staticClass:"note__add-todo",attrs:{required:"",type:"text",placeholder:"Type and Enter"},domProps:{value:t.newTodoTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:function(){t.onTodoAdd(t.newTodoTitle),t.newTodoTitle=""}()},input:function(e){e.target.composing||(t.newTodoTitle=e.target.value)}}})])},I=[],P={name:"NewTodo",props:["onTodoAdd"],data:function(){return{newTodoTitle:""}}},J=P,M=(o("a664"),Object(u["a"])(J,j,I,!1,null,"6b30eeeb",null)),L=M.exports,R={name:"NoteDetails",props:["selectedNote","onNoteDelete","onSave","onCancelChanges"],data:function(){return{tempNote:JSON.parse(JSON.stringify(this.selectedNote))}},components:{Todos:$,NewTodo:L},methods:{onTodoAdd:function(t){var e=t.replace(/\s/g," ").trimLeft();e&&(this.tempNote.todos=[].concat(Object(i["a"])(this.tempNote.todos),[{title:e,completed:!1,id:Date.now()}]))},onTodoDelete:function(t){this.tempNote.todos=this.tempNote.todos.filter((function(e){return e.id!==t}))},onRemoveChanges:function(){this.tempNote=JSON.parse(JSON.stringify(this.selectedNote))}}},q=R,K=(o("8a93"),Object(u["a"])(q,g,C,!1,null,"ccc0e418",null)),V=K.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notes"},[o("ul",{staticClass:"notes-list"},t._l(t.notes,(function(e){return o("Note",{key:e.id,attrs:{note:e,onNoteDelete:t.onNoteDelete,onEdit:t.onEdit}})})),1)])},B=[],F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note"},[o("li",{staticClass:"note__item"},[o("div",{staticClass:"note__header"},[o("p",{staticClass:"note__title"},[o("span",[t._v(" ≡ ")]),t._v(" "+t._s(t.note.title)+" ")]),o("button",{staticClass:"note__btn btn-edit pencil-icon",attrs:{type:"button"},on:{click:function(e){return t.onEdit(t.note.id)}}},[t._v(" ✎ ")])]),o("div",{staticClass:"note__body"},[o("p",{directives:[{name:"show",rawName:"v-show",value:0===t.note.todos.length,expression:"note.todos.length === 0"}],staticClass:"note__empty-todos"},[t._v(" Press "),o("span",{staticClass:"pencil-icon"},[t._v("✎")]),t._v(" to add new todo ")]),o("ul",{directives:[{name:"show",rawName:"v-show",value:0!==t.note.todos.length,expression:"note.todos.length !== 0"}],staticClass:"note__short-todos"},t._l(t.note.todos.filter((function(t,e){return e<3})),(function(e){return o("li",{key:e.id},[t._v(" "+t._s(e.completed?"✔":"○")+" "+t._s(e.title)+" ")])})),0)]),o("div",{staticClass:"note__footer"},[o("p",{staticClass:"note__date"},[t._v(t._s(t.note.createAt))]),o("button",{staticClass:"note__btn btn-close",attrs:{value:t.note.id},on:{click:function(e){return t.onNoteDelete()}}},[t._v(" 🗑 ")])])])])},G=[],H={name:"Note",props:["note","onNoteDelete","onEdit"]},Q=H,U=(o("080e"),Object(u["a"])(Q,F,G,!1,null,null,null)),W=U.exports,X={name:"Notes",props:["notes","onNoteDelete","onEdit"],components:{Note:W}},Y=X,Z=(o("3df6"),Object(u["a"])(Y,z,B,!1,null,"62f948eb",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"new-note"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"new-note__field",attrs:{type:"text",placeholder:"Type and press Enter to create new note"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}})])},ot=[],nt={name:"NewNote",props:["onAdd"],data:function(){return{title:""}},methods:{handleSubmit:function(){var t=this.title.replace(/\s/g," ").trimLeft();t&&this.onAdd(this.title),this.title=""}}},st=nt,at=(o("1b84"),Object(u["a"])(st,et,ot,!1,null,"ea36605c",null)),it=at.exports,lt=[{path:"/vue-notes-app/",components:{default:tt,add:it}},{path:"/details/:id",component:V}];n["a"].use(b["a"]);var rt=new b["a"]({mode:"history",routes:lt});n["a"].config.productionTip=!1,new n["a"]({router:rt,render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,o){},8727:function(t,e,o){"use strict";var n=o("2994"),s=o.n(n);s.a},"8a93":function(t,e,o){"use strict";var n=o("bbf2"),s=o.n(n);s.a},"8c5f":function(t,e,o){},a664:function(t,e,o){"use strict";var n=o("dd3e"),s=o.n(n);s.a},bbf2:function(t,e,o){},cfbe:function(t,e,o){"use strict";var n=o("31ec"),s=o.n(n);s.a},da39:function(t,e,o){"use strict";var n=o("1065"),s=o.n(n);s.a},dd3e:function(t,e,o){},e85d:function(t,e,o){}});
//# sourceMappingURL=app.bb023f4b.js.map