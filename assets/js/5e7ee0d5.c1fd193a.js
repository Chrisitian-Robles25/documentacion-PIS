"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[2495],{6375:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var d=a(4848),i=a(8453);const r={},c="PeriodoAcademicoDaoControl",n={id:"tutorial-extras/PeriodoDaoControl",title:"PeriodoAcademicoDaoControl",description:"La clase PeriodoAcademicoDaoControl es una clase que extiende de DaoAdapter y est\xe1 dise\xf1ada para manejar las operaciones de acceso a datos (DAO) para la entidad PeriodoAcademico. Esta clase encapsula la l\xf3gica necesaria para interactuar con los datos de PeriodoAcademico, proporcionando m\xe9todos para guardar, eliminar y fusionar per\xedodos acad\xe9micos.",source:"@site/docs/tutorial-extras/PeriodoDaoControl.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/PeriodoDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/PeriodoDaoControl",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/PeriodoDaoControl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MateriaDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/MateriaDaoControl"},next:{title:"RubricaCalificacionDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/RubricaDaoControl"}},s={},l=[{value:"Constructor",id:"constructor",level:3},{value:"Propiedad: _periodoAcademico",id:"propiedad-_periodoacademico",level:3},{value:"Propiedad: _lista",id:"propiedad-_lista",level:3},{value:"M\xe9todo: save",id:"m\xe9todo-save",level:3},{value:"M\xe9todo: delete",id:"m\xe9todo-delete",level:3},{value:"M\xe9todo: merge",id:"m\xe9todo-merge",level:3}];function t(e){const o={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.h1,{id:"periodoacademicodaocontrol",children:"PeriodoAcademicoDaoControl"}),"\n",(0,d.jsxs)(o.p,{children:["La clase ",(0,d.jsx)(o.code,{children:"PeriodoAcademicoDaoControl"})," es una clase que extiende de ",(0,d.jsx)(o.code,{children:"DaoAdapter"})," y est\xe1 dise\xf1ada para manejar las operaciones de acceso a datos (DAO) para la entidad ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"}),". Esta clase encapsula la l\xf3gica necesaria para interactuar con los datos de ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"}),", proporcionando m\xe9todos para guardar, eliminar y fusionar per\xedodos acad\xe9micos."]}),"\n",(0,d.jsx)(o.h3,{id:"constructor",children:"Constructor"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-python",children:"def __init__(self):\r\n    super().__init__(PeriodoAcademico)\r\n    self.__periodoAcademico = None\n"})}),"\n",(0,d.jsxs)(o.p,{children:["El constructor de la clase inicializa la clase base ",(0,d.jsx)(o.code,{children:"DaoAdapter"})," con la entidad ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"}),". Tambi\xe9n define un atributo privado ",(0,d.jsx)(o.code,{children:"__periodoAcademico"})," que se utilizar\xe1 para almacenar una instancia de ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"}),"."]}),"\n",(0,d.jsx)(o.h3,{id:"propiedad-_periodoacademico",children:"Propiedad: _periodoAcademico"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-python",children:"@property\r\ndef _periodoAcademico(self):\r\n    if self.__periodoAcademico is None:\r\n        self.__periodoAcademico = PeriodoAcademico()\r\n    return self.__periodoAcademico\r\n\r\n@_periodoAcademico.setter\r\ndef _periodoAcademico(self, value):\r\n    self.__periodoAcademico = value\n"})}),"\n",(0,d.jsxs)(o.p,{children:["Esta propiedad proporciona acceso al atributo privado ",(0,d.jsx)(o.code,{children:"__periodoAcademico"}),". Si el atributo no ha sido inicializado, crea una nueva instancia de ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"}),". Tambi\xe9n incluye un setter para permitir la asignaci\xf3n de un valor a ",(0,d.jsx)(o.code,{children:"__periodoAcademico"}),"."]}),"\n",(0,d.jsx)(o.h3,{id:"propiedad-_lista",children:"Propiedad: _lista"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-python",children:"@property\r\ndef _lista(self):\r\n    return self._list()\n"})}),"\n",(0,d.jsxs)(o.p,{children:["Esta propiedad devuelve la lista de ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"})," utilizando el m\xe9todo ",(0,d.jsx)(o.code,{children:"_list"})," de la clase base ",(0,d.jsx)(o.code,{children:"DaoAdapter"}),"."]}),"\n",(0,d.jsx)(o.h3,{id:"m\xe9todo-save",children:"M\xe9todo: save"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-python",children:'@property    \r\ndef save(self):\r\n    self.__periodoAcademico._id = self._lista._length + 1\r\n    print("Guardando PeriodoAcademico")\r\n    self._save(self.__periodoAcademico)\n'})}),"\n",(0,d.jsxs)(o.p,{children:["El m\xe9todo ",(0,d.jsx)(o.code,{children:"save"})," asigna un nuevo ID a la instancia de ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"})," basada en la longitud de la lista de per\xedodos acad\xe9micos actuales, incrementando en uno el \xfaltimo ID existente. Luego, imprime un mensaje de confirmaci\xf3n y llama al m\xe9todo ",(0,d.jsx)(o.code,{children:"_save"})," de la clase base para guardar la instancia."]}),"\n",(0,d.jsx)(o.h3,{id:"m\xe9todo-delete",children:"M\xe9todo: delete"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-python",children:"ef delete(self):\r\n    self._delete(self.__periodoAcademico)   \n"})}),"\n",(0,d.jsxs)(o.p,{children:["El m\xe9todo ",(0,d.jsx)(o.code,{children:"delete"})," elimina un ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"})," en la posici\xf3n especificada utilizando el m\xe9todo ",(0,d.jsx)(o.code,{children:"_delete"})," de la clase base."]}),"\n",(0,d.jsx)(o.h3,{id:"m\xe9todo-merge",children:"M\xe9todo: merge"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-python",children:"def merge(self):\r\n    self._merge(self.__periodoAcademico)\n"})}),"\n",(0,d.jsxs)(o.p,{children:["El m\xe9todo ",(0,d.jsx)(o.code,{children:"merge"})," actualiza un ",(0,d.jsx)(o.code,{children:"PeriodoAcademico"})," en la posici\xf3n especificada utilizando el m\xe9todo ",(0,d.jsx)(o.code,{children:"_merge"})," de la clase base y la instancia actual de ",(0,d.jsx)(o.code,{children:"__periodoAcademico"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},8453:(e,o,a)=>{a.d(o,{R:()=>c,x:()=>n});var d=a(6540);const i={},r=d.createContext(i);function c(e){const o=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(r.Provider,{value:o},e.children)}}}]);