(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{4979:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crear-cuenta",function(){return s(6099)}])},2380:function(e,a,s){"use strict";s.d(a,{Z:function(){return N}});var r=s(5893),l=()=>(0,r.jsx)("footer",{className:"bg-success main-footer",children:(0,r.jsx)("div",{className:" text-light text-center",children:(0,r.jsxs)("div",{className:"container p-3",children:[(0,r.jsx)("h4",{children:" CEAR \xa9"}),(0,r.jsx)("p",{children:"2024 Todos los derechos reservados."})]})})}),n=s(6261),c=s(1664),t=s.n(c),i=s(9184),o=s(6529),d=s(7294),m=e=>{let{menu:a=!0}=e,[s,l]=(0,d.useState)(!1);return(0,r.jsx)("nav",{className:"navbar navbar-dark bg-white",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(t(),{href:"https://www.cear.es",target:"_blank",className:"navbar-brand ",children:(0,r.jsx)("img",{className:"navbar-img",src:"images/logo-cear.jpg",alt:"CEAR"})}),(0,r.jsxs)(t(),{href:"/",className:"navbar-brand text-black",children:["ESPACIO CONECTA(R) ",(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:"Manual de espa\xf1ol oral"})]}),a&&(0,r.jsx)(o.Z,{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent",onClick:()=>l(!s),"aria-expanded":s,"aria-label":"Toggle navigation",variant:"link",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)(i.Z,{in:s,className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsx)("ul",{className:"navbar-nav mr-auto",children:(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(n.rU,{className:"nav-link",to:"jobs",spy:!0,smooth:!0,onClick:()=>l(!s),children:"Mi perfil"})})})})]})})},h=s(1163),u=s(4865),x=s.n(u),j=s(3967),p=s.n(j),N=e=>{let{children:a,footer:s=!0,dark:n=!1,menu:c=!0}=e,t=(0,h.useRouter)();return(0,d.useEffect)(()=>{let e=e=>{console.log(e),x().start()};return t.events.on("routeChangeStart",e),t.events.on("routeChangeComplete",()=>x().done()),()=>t.events.off("routeChangeStart",e)},[]),(0,r.jsxs)("div",{className:p()({"bg-dark":n}),children:[(0,r.jsx)(m,{menu:c}),(0,r.jsx)("main",{className:"container py-4",children:a}),s&&(0,r.jsx)(l,{})]})}},6099:function(e,a,s){"use strict";s.r(a);var r=s(5893),l=s(7294),n=s(1163),c=s(2380);a.default=()=>{let[e,a]=(0,l.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",birthDate:"",country:"",termsAccepted:!1}),s=(0,n.useRouter)(),t=s=>{let{name:r,value:l,type:n,checked:c}=s.target;a({...e,[r]:"checkbox"===n?c:l})};return(0,r.jsx)(c.Z,{children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"container mt-5",children:(0,r.jsxs)("div",{className:"card signup-card",children:[(0,r.jsx)("div",{className:"card-header",children:(0,r.jsx)("h3",{children:"Crear Cuenta"})}),(0,r.jsx)("div",{className:"col-md-12 card-body",children:(0,r.jsxs)("form",{onSubmit:a=>{a.preventDefault(),console.log(e),s.push("/index")},children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"firstName",children:"Nombre"}),(0,r.jsx)("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",value:e.firstName,onChange:t,required:!0})]}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"lastName",children:"Apellido"}),(0,r.jsx)("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",value:e.lastName,onChange:t,required:!0})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"email",children:"Correo Electr\xf3nico"}),(0,r.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:e.email,onChange:t,required:!0})]}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"tel",children:"Telefono"}),(0,r.jsx)("input",{type:"text",className:"form-control",id:"tel",name:"te\xf1",value:e.tel,onChange:t,required:!0})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),(0,r.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:e.password,onChange:t,required:!0})]}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"confirmPassword",children:"Confirmar Contrase\xf1a"}),(0,r.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:t,required:!0})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"birthDate",children:"Fecha de Nacimiento"}),(0,r.jsx)("input",{type:"date",className:"form-control",id:"birthDate",name:"birthDate",value:e.birthDate,onChange:t,required:!0})]}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("label",{htmlFor:"country",children:"Pa\xeds"}),(0,r.jsxs)("select",{className:"form-control",id:"country",name:"country",value:e.country,onChange:t,required:!0,children:[(0,r.jsx)("option",{value:"",children:"Selecciona tu pa\xeds"}),(0,r.jsx)("option",{value:"FR",children:"Ucrania"}),(0,r.jsx)("option",{value:"DE",children:"Marruecos"}),(0,r.jsx)("option",{value:"ES",children:"Argelia"})]})]})]}),(0,r.jsx)("div",{className:"row mt-3 mb-5",children:(0,r.jsxs)("div",{className:"col-md-12",children:[(0,r.jsx)("input",{type:"checkbox",className:"form-check-input",id:"termsAccepted",name:"termsAccepted",checked:e.termsAccepted,onChange:t,required:!0}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"termsAccepted",children:"Acepto los t\xe9rminos y condiciones"})]})}),(0,r.jsx)("div",{className:"row mt-3",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsx)("button",{type:"submit",className:"p-3 w-100 btn btn-primary mb-3",children:"Guardar"})})})]})})]})})})})}}},function(e){e.O(0,[849,888,774,179],function(){return e(e.s=4979)}),_N_E=e.O()}]);