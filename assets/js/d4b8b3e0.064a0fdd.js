"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[6779],{1317:(a,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=i(4848),c=i(8453);const n={},o="RubricaCalificacionDaoControl",l={id:"tutorial-extras/RubricaDaoControl",title:"RubricaCalificacionDaoControl",description:"La clase RubricaCalificacionDaoControl es una clase que extiende de DaoAdapter y est\xe1 dise\xf1ada para manejar las operaciones de acceso a datos (DAO) para la entidad RubricaCF. Esta clase encapsula la l\xf3gica necesaria para interactuar con los datos de RubricaCF, proporcionando m\xe9todos para guardar, eliminar y fusionar r\xfabricas de calificaci\xf3n.",source:"@site/docs/tutorial-extras/RubricaDaoControl.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/RubricaDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/RubricaDaoControl",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/RubricaDaoControl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PeriodoAcademicoDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/PeriodoDaoControl"},next:{title:"UnidadDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/UnidadDaoControl"}},d={},s=[{value:"Constructor",id:"constructor",level:3},{value:"Propiedad: _rubricaCalificacion",id:"propiedad-_rubricacalificacion",level:3},{value:"Propiedad: _lista",id:"propiedad-_lista",level:3},{value:"M\xe9todo: save",id:"m\xe9todo-save",level:3},{value:"M\xe9todo: delete",id:"m\xe9todo-delete",level:3},{value:"M\xe9todo: merge",id:"m\xe9todo-merge",level:3}];function t(a){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"rubricacalificaciondaocontrol",children:"RubricaCalificacionDaoControl"}),"\n",(0,r.jsxs)(e.p,{children:["La clase ",(0,r.jsx)(e.code,{children:"RubricaCalificacionDaoControl"})," es una clase que extiende de ",(0,r.jsx)(e.code,{children:"DaoAdapter"})," y est\xe1 dise\xf1ada para manejar las operaciones de acceso a datos (DAO) para la entidad ",(0,r.jsx)(e.code,{children:"RubricaCF"}),". Esta clase encapsula la l\xf3gica necesaria para interactuar con los datos de ",(0,r.jsx)(e.code,{children:"RubricaCF"}),", proporcionando m\xe9todos para guardar, eliminar y fusionar r\xfabricas de calificaci\xf3n."]}),"\n",(0,r.jsx)(e.h3,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def __init__(self):\r\n    super().__init__(RubricaCF)\r\n    self.__rubricaCalificacion = None\n"})}),"\n",(0,r.jsxs)(e.p,{children:["El constructor de la clase inicializa la clase base ",(0,r.jsx)(e.code,{children:"DaoAdapter"})," con la entidad ",(0,r.jsx)(e.code,{children:"RubricaCF"}),". Tambi\xe9n define un atributo privado ",(0,r.jsx)(e.code,{children:"__rubricaCalificacion"})," que se utilizar\xe1 para almacenar una instancia de ",(0,r.jsx)(e.code,{children:"RubricaCF"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"propiedad-_rubricacalificacion",children:"Propiedad: _rubricaCalificacion"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"@property\r\ndef _rubricaCalificacion(self):\r\n    if self.__rubricaCalificacion is None:\r\n        self.__rubricaCalificacion = RubricaCF()\r\n    return self.__rubricaCalificacion\r\n\r\n@_rubricaCalificacion.setter\r\ndef _rubricaCalificacion(self, value):\r\n    self.__rubricaCalificacion = value\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Esta propiedad proporciona acceso al atributo privado ",(0,r.jsx)(e.code,{children:"__rubricaCalificacion"}),". Si el atributo no ha sido inicializado, crea una nueva instancia de ",(0,r.jsx)(e.code,{children:"RubricaCF"}),". Tambi\xe9n incluye un setter para permitir la asignaci\xf3n de un valor a ",(0,r.jsx)(e.code,{children:"__rubricaCalificacion"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"propiedad-_lista",children:"Propiedad: _lista"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"@property\r\ndef _lista(self):\r\n    return self._list()\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Esta propiedad devuelve la lista de ",(0,r.jsx)(e.code,{children:"RubricaCF"})," utilizando el m\xe9todo ",(0,r.jsx)(e.code,{children:"_list"})," de la clase base ",(0,r.jsx)(e.code,{children:"DaoAdapter"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"m\xe9todo-save",children:"M\xe9todo: save"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'@property    \r\ndef save(self):\r\n    self.__rubricaCalificacion._id = self._lista._length + 1\r\n    print("Guardando RubricaCalificacion")\r\n    self._save(self.__rubricaCalificacion)\n'})}),"\n",(0,r.jsxs)(e.p,{children:["El m\xe9todo ",(0,r.jsx)(e.code,{children:"save"})," asigna un nuevo ID a la instancia de ",(0,r.jsx)(e.code,{children:"RubricaCF"})," basada en la longitud de la lista de r\xfabricas de calificaci\xf3n actuales, incrementando en uno el \xfaltimo ID existente. Luego, imprime un mensaje de confirmaci\xf3n y llama al m\xe9todo ",(0,r.jsx)(e.code,{children:"_save"})," de la clase base para guardar la instancia."]}),"\n",(0,r.jsx)(e.h3,{id:"m\xe9todo-delete",children:"M\xe9todo: delete"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def delete(self):\r\n    self._delete(self.__rubricaCalificacion)  \n"})}),"\n",(0,r.jsxs)(e.p,{children:["El m\xe9todo ",(0,r.jsx)(e.code,{children:"delete"})," elimina una ",(0,r.jsx)(e.code,{children:"RubricaCF"})," en la posici\xf3n especificada utilizando el m\xe9todo ",(0,r.jsx)(e.code,{children:"_delete"})," de la clase base."]}),"\n",(0,r.jsx)(e.h3,{id:"m\xe9todo-merge",children:"M\xe9todo: merge"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def merge(self):\r\n    self._merge(self.__rubricaCalificacion)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["El m\xe9todo ",(0,r.jsx)(e.code,{children:"merge"})," actualiza una ",(0,r.jsx)(e.code,{children:"RubricaCF"})," en la posici\xf3n especificada utilizando el m\xe9todo ",(0,r.jsx)(e.code,{children:"_merge"})," de la clase base y la instancia actual de ",(0,r.jsx)(e.code,{children:"__rubricaCalificacion"}),"."]})]})}function u(a={}){const{wrapper:e}={...(0,c.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(t,{...a})}):t(a)}},8453:(a,e,i)=>{i.d(e,{R:()=>o,x:()=>l});var r=i(6540);const c={},n=r.createContext(c);function o(a){const e=r.useContext(n);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function l(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(c):a.components||c:o(a.components),r.createElement(n.Provider,{value:e},a.children)}}}]);