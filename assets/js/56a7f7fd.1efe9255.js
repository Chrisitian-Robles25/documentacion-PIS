"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[4689],{4850:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=r(4848),n=r(8453);const o={},i="MateriaDaoControl",d={id:"tutorial-extras/MateriaDaoControl",title:"MateriaDaoControl",description:"MateriaDaoControl es una clase que hereda de DaoAdapter y proporciona m\xe9todos para gestionar objetos de tipo Materia. Esta clase maneja la creaci\xf3n, almacenamiento, eliminaci\xf3n y actualizaci\xf3n de instancias de Materia en la base de datos.",source:"@site/docs/tutorial-extras/MateriaDaoControl.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/MateriaDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/MateriaDaoControl",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/MateriaDaoControl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EstudianteDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/EstudianteDaoControl"},next:{title:"PeriodoAcademicoDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/PeriodoDaoControl"}},s={},l=[{value:"Clase <code>MateriaDaoControl</code>",id:"clase-materiadaocontrol",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Propiedad <code>_materia</code>",id:"propiedad-_materia",level:3},{value:"Propiedad <code>_lista</code>",id:"propiedad-_lista",level:3},{value:"Propiedad <code>save</code>",id:"propiedad-save",level:3},{value:"M\xe9todo <code>delete</code>",id:"m\xe9todo-delete",level:3},{value:"M\xe9todo <code>merge</code>",id:"m\xe9todo-merge",level:3}];function c(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"materiadaocontrol",children:"MateriaDaoControl"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MateriaDaoControl"})," es una clase que hereda de ",(0,t.jsx)(a.code,{children:"DaoAdapter"})," y proporciona m\xe9todos para gestionar objetos de tipo ",(0,t.jsx)(a.code,{children:"Materia"}),". Esta clase maneja la creaci\xf3n, almacenamiento, eliminaci\xf3n y actualizaci\xf3n de instancias de ",(0,t.jsx)(a.code,{children:"Materia"})," en la base de datos."]}),"\n",(0,t.jsxs)(a.h2,{id:"clase-materiadaocontrol",children:["Clase ",(0,t.jsx)(a.code,{children:"MateriaDaoControl"})]}),"\n",(0,t.jsx)(a.h3,{id:"constructor",children:"Constructor"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"def __init__(self):\r\n    super().__init__(Materia)\r\n    self.__materia = None\n"})}),"\n",(0,t.jsxs)(a.p,{children:["El constructor inicializa la clase base ",(0,t.jsx)(a.code,{children:"DaoAdapter"})," con el modelo ",(0,t.jsx)(a.code,{children:"Materia"})," y establece la variable interna ",(0,t.jsx)(a.code,{children:"__materia"})," a ",(0,t.jsx)(a.code,{children:"None"}),"."]}),"\n",(0,t.jsxs)(a.h3,{id:"propiedad-_materia",children:["Propiedad ",(0,t.jsx)(a.code,{children:"_materia"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"@property\r\ndef _materia(self):\r\n    if self.__materia is None:\r\n        self.__materia = Materia()\r\n    return self.__materia\r\n\r\n@_materia.setter\r\ndef _materia(self, value):\r\n    self.__materia = value\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Esta propiedad maneja una instancia de ",(0,t.jsx)(a.code,{children:"Materia"}),". Si la instancia no existe, se crea una nueva."]}),"\n",(0,t.jsxs)(a.h3,{id:"propiedad-_lista",children:["Propiedad ",(0,t.jsx)(a.code,{children:"_lista"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"@property\r\ndef _lista(self):\r\n    return self._list()\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Esta propiedad retorna una lista de instancias de ",(0,t.jsx)(a.code,{children:"Materia"})," desde la base de datos."]}),"\n",(0,t.jsxs)(a.h3,{id:"propiedad-save",children:["Propiedad ",(0,t.jsx)(a.code,{children:"save"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'@property\r\ndef save(self):\r\n    self.__materia._id = self._lista._length + 1\r\n    print("Guardando Materia")\r\n    self._save(self.__materia)\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Esta propiedad guarda la instancia actual de ",(0,t.jsx)(a.code,{children:"Materia"})," en la base de datos, asign\xe1ndole un nuevo ID basado en la longitud de la lista de materias."]}),"\n",(0,t.jsxs)(a.h3,{id:"m\xe9todo-delete",children:["M\xe9todo ",(0,t.jsx)(a.code,{children:"delete"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"def delete(self):\r\n    self._delete(self.__materia)  \n"})}),"\n",(0,t.jsxs)(a.p,{children:["Este m\xe9todo elimina una instancia de ",(0,t.jsx)(a.code,{children:"Materia"})," de la base de datos en a la materia especificada."]}),"\n",(0,t.jsxs)(a.h3,{id:"m\xe9todo-merge",children:["M\xe9todo ",(0,t.jsx)(a.code,{children:"merge"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"def merge(self):\r\n    self._merge(self.__materia)\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Este m\xe9todo actualiza una instancia de ",(0,t.jsx)(a.code,{children:"Materia"})," en la base de datos a la materia especificada."]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>d});var t=r(6540);const n={},o=t.createContext(n);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);