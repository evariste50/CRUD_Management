(function(){"use strict";var e={3809:function(e,t,a){var i=a(144),s=a(998),l=a(6232),n=a(5550),o=a(9223),r=a(4324),d=a(5808),c=a(4525),m=a(2017),u=a(7941),f=a(4611),p=a(3059),g=a(7233),h=a(7953),v=function(){var e=this,t=e._self._c;return t(s.Z,{attrs:{id:"inspire"}},[t(g.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(c.Z,[t(m.km,[t(m.V9,[e._v(" CRUD STUDENT ")]),t(m.oZ,[e._v(" Study App Management CRUD ")])],1)],1),t(o.Z),t(d.Z,{attrs:{dense:""}},[t(u.Z,{attrs:{color:"primary"}},e._l(e.items,(function(a,i){return t(c.Z,{key:i,attrs:{to:a.link,link:""}},[t(f.Z,[t(r.Z,{domProps:{textContent:e._s(a.icon)}})],1),t(m.km,[t(m.V9,{domProps:{textContent:e._s(a.title)}})],1)],1)})),1)],1)],1),t(l.Z,{attrs:{app:""}},[t(n.Z,{on:{click:function(t){e.drawer=!e.drawer}}}),t(h.qW,[e._v("Application")])],1),t(p.Z,[t("RouterView")],1)],1)},b=[],Z=a(8345),I={data(){return{drawer:null,items:[{title:"CRUD Management",icon:"mdi-home",link:"/"},{title:"Portfolio",icon:"mdi-note-plus",link:"/add-post"},{title:"Salesforce Toons",icon:"mdi-help-box",link:"/about"}]}},components:{RouterView:Z.MA}},x=I,k=a(1001),_=(0,k.Z)(x,v,b,!1,null,null,null),y=_.exports,w=a(7359),C=a(6190),N=a(9582),S=a(4886),A=a(266),O=a(2118),P=a(2827),$=a(4061),D=a(1625),j=a(1713),F=a(3687),M=a(7808),E=a(6313),T=function(){var e=this,t=e._self._c;return e.editedItem?t(P.Z,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"Nom","show-select":""},scopedSlots:e._u([{key:"top",fn:function(){return[t(E.Z,{attrs:{flat:""}},[t(h.qW,[e._v("My CRUD")]),t(o.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t(F.Z),e.messageDelete?t(w.Z,{staticClass:"mt-10 ml-10",attrs:{border:"right","close-text":"Close Alert",color:"red accent-4",dark:"",dismissible:""}},[e._v(" "+e._s(e.messageDelete)+" ")]):e._e(),e._v(" "),t("br"),e.messageUpdate?t(w.Z,{staticClass:"mt-10 center",attrs:{border:"left","close-text":"Close Alert",color:"yellow accent-4",dark:"",dismissible:""}},[e._v(" "+e._s(e.messageUpdate)+" ")]):e._e(),e.childMsg?t(w.Z,{staticClass:"mt-10 center",attrs:{border:"left","close-text":"Close Alert",color:"green accent-4",dark:"",dismissible:""}},[e._v(" "+e._s(e.childMsg)+" ")]):e._e(),t(F.Z),t("AddStudent",{attrs:{message:e.addItem},on:{alert:t=>e.childMsg=t}}),t($.Z,{attrs:{width:"700px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(N.Z,[t(S.EB,[t("span",{staticClass:"text-h5"},[e._v(" Edit Item")])]),t(S.ZB,[t(O.Z,[t(j.Z,[t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Nom"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Prenom"},model:{value:e.editedItem.firstName,callback:function(t){e.$set(e.editedItem,"firstName",t)},expression:"editedItem.firstName"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Age"},model:{value:e.editedItem.age,callback:function(t){e.$set(e.editedItem,"age",t)},expression:"editedItem.age"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Orphelin"},model:{value:e.editedItem.sexe,callback:function(t){e.$set(e.editedItem,"sexe",t)},expression:"editedItem.sexe"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Filiere"},model:{value:e.editedItem.orphan,callback:function(t){e.$set(e.editedItem,"orphan",t)},expression:"editedItem.orphan"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Niveau"},model:{value:e.editedItem.filiere,callback:function(t){e.$set(e.editedItem,"filiere",t)},expression:"editedItem.filiere"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"sexe"},model:{value:e.editedItem.niveau,callback:function(t){e.$set(e.editedItem,"niveau",t)},expression:"editedItem.niveau"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"matricule"},model:{value:e.editedItem.matricule,callback:function(t){e.$set(e.editedItem,"matricule",t)},expression:"editedItem.matricule"}})],1),t(A.Z,[t(D.Z,{attrs:{"show-size":"",counter:"",multiple:"",label:"Select Image",filled:"","prepend-icon":"mdi-camera"},on:{change:e.selectFile}})],1)],1)],1)],1),t(S.h7,[t(F.Z),t(C.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(C.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),t($.Z,{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(N.Z,[t(S.EB,{staticClass:"text-h5"},[e._v("Are you sure you want to delete this Information About this Student?")]),t(S.h7,[t(F.Z),t(C.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(C.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(F.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:a}){return[t(r.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),t(r.Z,{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}}],null,!1,567947837)}):e._e()},U=[],B=a(8945);const R="/api/student";class V{static async getAllStudent(){const e=await B.Z.get(R);return console.log("@@@@",e),e}static async createStudent(e){const t=await B.Z.post(R,e);return console.log("@@@@",t),t.data}static async UpdateStudent(e,t){const a=await B.Z.patch(`${R}/${e}`,t);return console.log("@@@@",a),a.data}static async DeleteStudent(e){const t=await B.Z["delete"](`${R}/${e}`);return console.log("@@@@",t),t.data}}var q=function(){var e=this,t=e._self._c;return t($.Z,{attrs:{width:"700px"},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:i}){return[t(C.Z,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),a),[e._v(" New Item ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(N.Z,[t(S.EB,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.message))])]),t(S.ZB,[t(O.Z,[t(j.Z,[t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Nom"},model:{value:e.editedItem.Nom,callback:function(t){e.$set(e.editedItem,"Nom",t)},expression:"editedItem.Nom"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Prenom"},model:{value:e.editedItem.Prenom,callback:function(t){e.$set(e.editedItem,"Prenom",t)},expression:"editedItem.Prenom"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Age"},model:{value:e.editedItem.Age,callback:function(t){e.$set(e.editedItem,"Age",t)},expression:"editedItem.Age"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t("span",[e._v("Orphan :")]),t("div",{staticClass:"checkbox-wrapper-7"},[t("input",{staticClass:"tgl tgl-ios",attrs:{id:"cb2-7",type:"checkbox"},on:{click:e.takeValue}}),t("label",{staticClass:"tgl-btn",attrs:{for:"cb2-7"}})])]),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Filiere"},model:{value:e.editedItem.Filiere,callback:function(t){e.$set(e.editedItem,"Filiere",t)},expression:"editedItem.Filiere"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"Niveau"},model:{value:e.editedItem.Niveau,callback:function(t){e.$set(e.editedItem,"Niveau",t)},expression:"editedItem.Niveau"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"sexe"},model:{value:e.editedItem.sexe,callback:function(t){e.$set(e.editedItem,"sexe",t)},expression:"editedItem.sexe"}})],1),t(A.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[t(M.Z,{attrs:{label:"matricule"},model:{value:e.editedItem.matricule,callback:function(t){e.$set(e.editedItem,"matricule",t)},expression:"editedItem.matricule"}})],1),t(A.Z,[t(D.Z,{attrs:{"show-size":"",counter:"",multiple:"",label:"Select Image",filled:"","prepend-icon":"mdi-camera"},on:{change:e.selectFile}})],1)],1)],1)],1),t(S.h7,[t(F.Z),t(C.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),t(C.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)},z=[],L=(a(993),{props:{message:{type:String,required:!0}},data(){return{dialog:!1,editedItem:{Nom:"",Prenom:"",Age:0,Filiere:"",Niveau:0,sexe:"",matricule:""},image:"",Orphelin:!1,alertMessage:""}},methods:{takeValue(){const e=document.querySelector("#cb2-7");console.log(e.checked),this.Orphelin=e.checked},selectFile(e){this.image=e[0].name,console.log("@@@ this.image",this.image)},async save(){var e={name:this.editedItem.Nom,firstName:this.editedItem.Prenom,age:this.editedItem.Age,sexe:this.editedItem.sexe,orphan:this.Orphelin,filiere:this.editedItem.Filiere,niveau:this.editedItem.Niveau,matricule:this.editedItem.matricule,image:this.image},t=await V.createStudent(e);console.log("@@@@res",t),this.alertMessage=t.message,this.$emit("alert",this.alertMessage),console.log("Students create Succesfully"),this.close()},close(){this.dialog=!1,this.editedItem={}}},emits:["alert"]}),W=L,K=(0,k.Z)(W,q,z,!1,null,null,null),G=K.exports,H={components:{AddStudent:G},data:()=>({childMsg:null,addItem:"New Item",EditItem:"Edit Item",dialog:!1,dialogDelete:!1,messageDelete:null,messageUpdate:null,headers:[{text:"Nom",align:"start",sortable:!1,value:"name"},{text:"Prenom",value:"firstName"},{text:"Age",value:"age"},{text:"sexe",value:"sexe"},{text:"Orphelin",value:"orphan"},{text:"Filiere",value:"filiere"},{text:"Niveau",value:"niveau"},{text:"matricule",value:"matricule"},{text:"image",value:"image"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",firstName:"",age:0,sexe:"",orphan:"",filiere:"",niveau:0,matricule:"",image:""},image:""}),watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},async created(){const e=await V.getAllStudent();console.log("@@@@ val ",e),this.desserts=e.data,console.log("this.desserts",this.desserts)},methods:{selectFile(e){this.image=e[0].name,console.log("@@@ this.image",this.image)},editItem(e){this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},async deleteItemConfirm(){var e=this.editedItem,t=await V.DeleteStudent(e._id);console.log("@@@@delete response",t.message),this.messageDelete=t.message,this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},{})}))},async save(){var e=this.editedItem;console.log("@@@@",this.editedItem),console.log("@@@@temp ",e._id);var t=await V.UpdateStudent(e._id,this.editedItem);console.log("@@@res update ",t.message),this.messageUpdate=t.message,this.dialog=!1}}},J=H,Q=(0,k.Z)(J,T,U,!1,null,null,null),X=Q.exports;i.ZP.use(Z.ZP);const Y=[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,1272))}],ee=new Z.ZP({mode:"history",base:"/",routes:Y});var te=ee,ae=a(1705);i.ZP.use(ae.Z);var ie=new ae.Z({});i.ZP.config.productionTip=!1,new i.ZP({router:te,vuetify:ie,render:e=>e(y)}).$mount("#app")}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,l){if(!i){var n=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],l=e[c][2];for(var o=!0,r=0;r<i.length;r++)(!1&l||n>=l)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(o=!1,l<n&&(n=l));if(o){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,s,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,i){return a.f[i](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.a5d4ebab.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";a.l=function(i,s,l,n){if(e[i])e[i].push(s);else{var o,r;if(void 0!==l)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==t+l){o=m;break}}o||(r=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+l),o.src=i),e[i]=[s];var u=function(t,a){o.onerror=o.onload=null,clearTimeout(f);var s=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),r&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,i){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var l=new Promise((function(a,i){s=e[t]=[a,i]}));i.push(s[2]=l);var n=a.p+a.u(t),o=new Error,r=function(i){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var l=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",o.name="ChunkLoadError",o.type=l,o.request=n,s[1](o)}};a.l(n,r,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,l,n=i[0],o=i[1],r=i[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(r)var c=r(a)}for(t&&t(i);d<n.length;d++)l=n[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},i=self["webpackChunkclient"]=self["webpackChunkclient"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3809)}));i=a.O(i)})();
//# sourceMappingURL=app.d8b9fec6.js.map