(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{5549:function(i,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/actividad",function(){return a(893)}])},2380:function(i,e,a){"use strict";a.d(e,{Z:function(){return y}});var t=a(5893),s=()=>(0,t.jsx)("footer",{className:"bg-success main-footer",children:(0,t.jsx)("div",{className:" text-light text-center",children:(0,t.jsxs)("div",{className:"container p-3",children:[(0,t.jsx)("h4",{children:" CEAR \xa9"}),(0,t.jsx)("p",{children:"2024 Todos los derechos reservados."})]})})}),c=a(6261),n=a(1664),r=a.n(n),d=a(9184),o=a(6529),l=a(7294),g=i=>{let{menu:e=!0}=i,[a,s]=(0,l.useState)(!1);return(0,t.jsx)("nav",{className:"navbar navbar-dark bg-white",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(r(),{href:"https://www.cear.es",target:"_blank",className:"navbar-brand ",children:(0,t.jsx)("img",{className:"navbar-img",src:"images/logo-cear.jpg",alt:"CEAR"})}),(0,t.jsxs)(r(),{href:"",className:"navbar-brand text-black",children:["ESPACIO CONECTA(R) ",(0,t.jsx)("br",{}),(0,t.jsx)("small",{children:"Manual de espa\xf1ol oral"})]}),e&&(0,t.jsx)(o.Z,{id:"burger-menu",className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent",onClick:()=>s(!a),"aria-expanded":a,"aria-label":"Toggle navigation",variant:"link",children:(0,t.jsx)("span",{className:"navbar-toggler-icon"})}),(0,t.jsx)(d.Z,{in:a,className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,t.jsx)("ul",{className:"navbar-nav mr-auto",children:(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(c.rU,{className:"nav-link",to:"jobs",spy:!0,smooth:!0,onClick:()=>s(!a),children:"Mi perfil"})})})})]})})},m=a(1163),v=a(4865),p=a.n(v),u=a(3967),_=a.n(u),y=i=>{let{children:e,footer:a=!0,dark:c=!1,menu:n=!0}=i,r=(0,m.useRouter)();return(0,l.useEffect)(()=>{let i=i=>{console.log(i),p().start()};return r.events.on("routeChangeStart",i),r.events.on("routeChangeComplete",()=>p().done()),()=>r.events.off("routeChangeStart",i)},[]),(0,t.jsxs)("div",{className:_()({"bg-dark":c}),children:[(0,t.jsx)(g,{menu:n}),(0,t.jsx)("main",{className:"container py-4",children:e}),a&&(0,t.jsx)(s,{})]})}},893:function(i,e,a){"use strict";a.r(e),a.d(e,{default:function(){return w}});var t=a(5893),s=a(7294),c=a(1402),n=a(4339),r=()=>(0,t.jsx)("div",{className:"multi-dropdown w-100 mb-3",children:(0,t.jsxs)(c.Z,{id:"dropdown-basic-button ",variant:"success",title:"Selecciona una unidad",children:[(0,t.jsxs)(n.Z,{drop:"right",children:[(0,t.jsx)(n.Z.Toggle,{variant:"white",id:"dropdown-unidad1",children:"Unidad 1"}),(0,t.jsxs)(n.Z.Menu,{children:[(0,t.jsx)(n.Z.Item,{eventKey:"1-1",children:"Actividad 1"}),(0,t.jsx)(n.Z.Item,{eventKey:"1-2",children:"Actividad 2"}),(0,t.jsx)(n.Z.Item,{eventKey:"1-2",children:"Actividad 3"})]})]}),(0,t.jsxs)(n.Z,{drop:"right",children:[(0,t.jsx)(n.Z.Toggle,{variant:"white",id:"dropdown-unidad2",children:"Unidad 2"}),(0,t.jsxs)(n.Z.Menu,{children:[(0,t.jsx)(n.Z.Item,{eventKey:"2-1",children:"Actividad 4"}),(0,t.jsx)(n.Z.Item,{eventKey:"2-1",children:"Actividad 5"}),(0,t.jsx)(n.Z.Item,{eventKey:"2-1",children:"Actividad 6"})]})]}),(0,t.jsxs)(n.Z,{drop:"right",children:[(0,t.jsx)(n.Z.Toggle,{variant:"white",id:"dropdown-unidad2",children:"Unidad 3"}),(0,t.jsxs)(n.Z.Menu,{children:[(0,t.jsx)(n.Z.Item,{eventKey:"2-1",children:"Actividad 7"}),(0,t.jsx)(n.Z.Item,{eventKey:"2-1",children:"Actividad 8"}),(0,t.jsx)(n.Z.Item,{eventKey:"2-1",children:"Actividad 9"})]})]})]})}),d=a(2380),o=a(5176),l=a.n(o);let g=i=>{let{imageSrc:e,onClick:a}=i;return(0,t.jsx)("div",{className:"card ".concat(l().card_act),onClick:a,children:(0,t.jsx)("img",{src:e,alt:"Card"})})};var m=i=>{let e=i.images,[a,c]=(0,s.useState)(0),n=i=>{c(i+1),console.log("Selected ".concat(i+1))},r=()=>{c(0),console.log("Close")};return(0,t.jsxs)("div",{children:[i.correct&&a>0&&a===i.correct&&(0,t.jsxs)("div",{className:"status-choice alert alert-success d-flex justify-content-between",children:["Correcto!  Sigue as\xed",(0,t.jsx)("button",{className:"btn-transparent btn p-0",onClick:()=>r(),children:"X"})]}),i.correct&&a>0&&a!==i.correct&&(0,t.jsxs)("div",{className:"status-choice alert alert-danger d-flex justify-content-between",children:["Incorrecto! Vuelve a intentarlo",(0,t.jsx)("button",{className:"btn-transparent btn p-0",onClick:()=>r(),children:"X"})]}),(0,t.jsx)("div",{className:l().card_grid,children:e.map((i,e)=>(0,t.jsx)(g,{imageSrc:i,onClick:()=>n(e)},e))})]})};let v=i=>{let{imageSrc:e,onClick:a}=i;return(0,t.jsx)("div",{className:"card ".concat(l().card_act),onClick:a,children:(0,t.jsx)("img",{src:e,alt:"Card"})})};var p=i=>{let e=i.images,[a,c]=(0,s.useState)(0),n=i=>{c(i+1),console.log("Selected ".concat(i+1))},r=()=>{c(0),console.log("Close")};return(0,t.jsxs)("div",{children:[i.correct&&a>0&&a===i.correct&&(0,t.jsxs)("div",{className:"status-choice alert alert-success d-flex justify-content-between",children:["Correcto!  Sigue as\xed",(0,t.jsx)("button",{className:"btn-transparent btn p-0",onClick:()=>r(),children:"X"})]}),i.correct&&a>0&&a!==i.correct&&(0,t.jsxs)("div",{className:"status-choice alert alert-danger d-flex justify-content-between",children:["Incorrecto! Vuelve a intentarlo",(0,t.jsx)("button",{className:"btn-transparent btn p-0",onClick:()=>r(),children:"X"})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-3 m-auto",children:(0,t.jsx)(v,{imageSrc:i.main_image})}),(0,t.jsx)("div",{className:"col-md-9",children:e.map((i,e)=>(0,t.jsx)("div",{className:l().card_grid,children:i.map((i,e)=>(0,t.jsx)(v,{imageSrc:i,onClick:()=>n(e)},e))},e))})]})]})},u=a(8402),_=a.n(u),y=i=>{let{src:e,id:a}=i,[c,n]=(0,s.useState)(!1),r=s.createRef();return(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:a}),(0,t.jsx)("audio",{ref:r,src:e}),(0,t.jsx)("button",{className:_().audio_icon,onClick:()=>{c?r.current.pause():r.current.play(),n(!c)},children:c?(0,t.jsx)("img",{src:"images/icons/altavoz-pause.png",alt:"Pause"}):(0,t.jsx)("img",{src:"images/icons/altavoz-play.png",alt:"Play"})})]})},x=i=>{let{item:e,showId:a,act:s}=i;return e===a?(0,t.jsxs)("div",{className:"activity",children:[(0,t.jsx)("div",{children:(0,t.jsxs)("h3",{className:"text-white mb-3",children:["Actividad ",s.id,":"]})}),s.items.map((i,e)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"d-inline-flex align-items-center",children:(0,t.jsx)(y,{id:i.id,src:i.audio})}),(0,t.jsxs)("div",{className:"row",children:["card_grid"===s.type&&(0,t.jsx)(m,{...i}),"card_grid_multi"===s.type&&(0,t.jsx)(p,{...i})]})]},e))]}):null},h=a(7296),j=a.n(h),N=a(3967),b=a.n(N),f=i=>{let{counter:e}=i;return(0,t.jsxs)("div",{className:"pb-2",children:[(0,t.jsx)("div",{className:"text-left",style:{width:"fit-content"},children:(0,t.jsx)("h5",{className:b()({["".concat(j().anim1)]:!0,["".concat(j().anim2)]:!1,["".concat(j().anim3)]:!1})})}),(0,t.jsxs)("div",{className:j().progress_container,children:[(0,t.jsx)("div",{className:"progress ".concat(j().progress),children:(0,t.jsx)("div",{className:"progress-bar ".concat(j().progress_bar),role:"progressbar",style:{width:"".concat(25*e,"%")},children:(0,t.jsx)("div",{className:"".concat(j().color)})})}),(0,t.jsx)("div",{})]})]})};let C=[{id:7,type:"card_grid",items:[{id:1,audio:"audio/activity/7/1.mp3",correct:3,images:["images/activity/7/1/1.png","images/activity/7/1/2.png","images/activity/7/1/3.png"]},{id:2,audio:"audio/activity/7/2.mp3",correct:3,images:["images/activity/7/2/1.png","images/activity/7/2/2.png","images/activity/7/2/3.png"]}]},{id:10,type:"card_grid",items:[{id:1,audio:"audio/activity/10/1.mp3",correct:2,images:["images/activity/10/1/1.png","images/activity/10/1/2.png","images/activity/10/1/3.png"]},{id:2,audio:"audio/activity/10/2.mp3",correct:3,images:["images/activity/10/2/1.png","images/activity/10/2/2.png","images/activity/10/2/3.png"]},{id:3,audio:"audio/activity/10/3.mp3",correct:2,images:["images/activity/10/3/1.png","images/activity/10/3/2.png","images/activity/10/3/3.png"]}]},{id:9,type:"card_grid",items:[{id:1,audio:"audio/activity/9/1.mp3",correct:3,images:["images/activity/9/1/1.png","images/activity/9/1/2.png","images/activity/9/1/3.png"]},{id:2,audio:"audio/activity/9/2.mp3",correct:3,images:["images/activity/9/2/1.png","images/activity/9/2/2.png","images/activity/9/2/3.png"]},{id:3,audio:"audio/activity/9/3.mp3",correct:3,images:["images/activity/9/3/1.png","images/activity/9/3/2.png","images/activity/9/3/3.png"]},{id:4,audio:"audio/activity/9/4.mp3",correct:3,images:["images/activity/9/4/1.png","images/activity/9/4/2.png","images/activity/9/4/3.png"]},{id:5,audio:"audio/activity/9/5.mp3",correct:1,images:["images/activity/9/5/1.png","images/activity/9/5/2.png","images/activity/9/5/3.png"]},{id:6,audio:"audio/activity/9/6.mp3",correct:3,images:["images/activity/9/6/1.png","images/activity/9/6/2.png","images/activity/9/6/3.png"]},{id:7,audio:"audio/activity/9/7.mp3",correct:1,images:["images/activity/9/7/1.png","images/activity/9/7/2.png","images/activity/9/7/3.png"]}]},{id:19,type:"card_grid",items:[{id:1,audio:"audio/activity/19/1.mp3",images:["images/activity/19/1/1.png"]},{id:2,audio:"audio/activity/19/2.mp3",images:["images/activity/19/2/2.png"]}]},{id:12,type:"card_grid_multi",items:[{id:1,audio:"audio/activity/12/1.mp3",correct:3,main_image:"images/activity/12/1/main.png",images:[["images/activity/12/1/1_1.png","images/activity/12/1/2_1.png","images/activity/12/1/3_1.png"],["images/activity/12/1/1_2.png","images/activity/12/1/2_2.png","images/activity/12/1/3_2.png"]]},{id:2,audio:"audio/activity/12/2.mp3",correct:3,main_image:"images/activity/12/2/main.png",images:[["images/activity/12/2/1_1.png","images/activity/12/2/2_1.png","images/activity/12/2/3_1.png"],["images/activity/12/2/1_2.png","images/activity/12/2/2_2.png","images/activity/12/2/3_2.png"]]},{id:3,audio:"audio/activity/12/3.mp3",correct:3,main_image:"images/activity/12/3/main.png",images:[["images/activity/12/3/1_1.png","images/activity/12/3/2_1.png","images/activity/12/3/3_1.png"],["images/activity/12/3/1_2.png","images/activity/12/3/2_2.png","images/activity/12/3/3_2.png"]]},{id:4,audio:"audio/activity/12/4.mp3",correct:3,main_image:"images/activity/12/4/main.png",images:[["images/activity/12/4/1_1.png","images/activity/12/4/2_1.png","images/activity/12/4/3_1.png"],["images/activity/12/4/1_2.png","images/activity/12/4/2_2.png","images/activity/12/4/3_2.png"]]}]}];var w=()=>{let[i,e]=(0,s.useState)(0);return(0,t.jsx)(d.Z,{children:(0,t.jsx)("header",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)("div",{className:"card card-body main-banner",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-9",children:C.map((e,a)=>(0,t.jsx)(x,{item:a,act:e,showId:i},a))}),(0,t.jsxs)("div",{className:" col-md-3",children:[(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("img",{src:"images/cear_home.png",alt:"CEAR IDIOMAS",className:"w-50 img-fluid img-profile mb-1"})}),(0,t.jsx)(r,{}),(0,t.jsx)(f,{counter:i,type:"learning"}),(0,t.jsxs)("div",{className:"btn-group d-flex justify-content-between mt-3",children:[(0,t.jsx)("div",{children:i>0?(0,t.jsx)("button",{onClick:()=>{e(i-1)},children:"Anterior"}):null}),(0,t.jsx)("div",{children:i<C.length-1?(0,t.jsx)("button",{onClick:()=>{e(i+1)},children:"Siguiente"}):null})]})]})]})})})})})}},8402:function(i){i.exports={audio_icon:"AudioPlayer_audio_icon__rllVS"}},5176:function(i){i.exports={card_grid:"CardGrid_card_grid__DR2Vl",card_act:"CardGrid_card_act__67812",card_home:"CardGrid_card_home__aaUse"}},7296:function(i){i.exports={toggle_skill:"Progress_toggle_skill__XB8tx",toggle_skillvisited:"Progress_toggle_skillvisited__pyNM1",learning:"Progress_learning__m9F2M",learningvisited:"Progress_learningvisited__CMHVA",progress_container:"Progress_progress_container__8YNoK",progress:"Progress_progress__iACx2",empty:"Progress_empty__x6NPi",emptyvisited:"Progress_emptyvisited__0THlr",typing:"Progress_typing__y3fc5",anim1:"Progress_anim1__nJiwR",caret:"Progress_caret__oarh0",hidingAnimation:"Progress_hidingAnimation__eDgwu",anim2:"Progress_anim2__apJj0",anim3:"Progress_anim3__J6iqN",progress_bar:"Progress_progress_bar__Pc5YB",color:"Progress_color__KnNOm",progres:"Progress_progres__7W62K"}}},function(i){i.O(0,[849,402,888,774,179],function(){return i(i.s=5549)}),_N_E=i.O()}]);