"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[8628],{6374:(e,i,c)=>{c.r(i),c.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=c(4848),r=c(8453);const o={},a="Clase RubricaCF",d={id:"modulo-proyeccion/ModeloRubrica",title:"Clase RubricaCF",description:"Descripci\xf3n General",source:"@site/docs/modulo-proyeccion/ModeloRubrica.md",sourceDirName:"modulo-proyeccion",slug:"/modulo-proyeccion/ModeloRubrica",permalink:"/documentacion-PIS/docs/modulo-proyeccion/ModeloRubrica",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modulo-proyeccion/ModeloRubrica.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clase PeriodoAcademico",permalink:"/documentacion-PIS/docs/modulo-proyeccion/ModeloPeriodo"},next:{title:"Clase Unidad",permalink:"/documentacion-PIS/docs/modulo-proyeccion/ModeloUnidad"}},s={},l=[{value:"Descripci\xf3n General",id:"descripci\xf3n-general",level:3},{value:"M\xe9todos y Propiedades",id:"m\xe9todos-y-propiedades",level:2},{value:"<code>__init__()</code>",id:"__init__",level:3},{value:"<code>serializable</code> (Propiedad)",id:"serializable-propiedad",level:3},{value:"<code>deserialize(data)</code> (M\xe9todo)",id:"deserializedata-m\xe9todo",level:3}];function t(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.h1,{id:"clase-rubricacf",children:["Clase ",(0,n.jsx)(i.code,{children:"RubricaCF"})]}),"\n",(0,n.jsx)(i.h3,{id:"descripci\xf3n-general",children:"Descripci\xf3n General"}),"\n",(0,n.jsxs)(i.p,{children:["La clase ",(0,n.jsx)(i.code,{children:"RubricaCF"})," representa una r\xfabrica de calificaci\xf3n en el sistema. Esta clase contiene atributos para almacenar el identificador y la descripci\xf3n de la r\xfabrica, y proporciona m\xe9todos para la serializaci\xf3n y deserializaci\xf3n de sus datos."]}),"\n",(0,n.jsx)(i.h2,{id:"m\xe9todos-y-propiedades",children:"M\xe9todos y Propiedades"}),"\n",(0,n.jsx)(i.h3,{id:"__init__",children:(0,n.jsx)(i.code,{children:"__init__()"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'def __init__(self):\r\n    self.__id = 0\r\n    self.__descripcion = ""\n'})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Descripci\xf3n:"})," Constructor de la clase ",(0,n.jsx)(i.code,{children:"RubricaCF"}),". Inicializa los atributos ",(0,n.jsx)(i.code,{children:"__id"})," y ",(0,n.jsx)(i.code,{children:"__descripcion"})," con valores predeterminados."]}),"\n",(0,n.jsxs)(i.h3,{id:"serializable-propiedad",children:[(0,n.jsx)(i.code,{children:"serializable"})," (Propiedad)"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"self"}),": Es una referencia a la instancia actual de la clase RubricaCF."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'@property\r\ndef serializable(self):\r\n    return {\r\n        "idrcal": self._id,\r\n        "descripcion": self._descripcion\r\n    }\n'})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Descripci\xf3n:"})," Propiedad que devuelve un diccionario con los atributos de la entidad ",(0,n.jsx)(i.code,{children:"RubricaCF"})," listos para ser serializados."]}),"\n",(0,n.jsxs)(i.h3,{id:"deserializedata-m\xe9todo",children:[(0,n.jsx)(i.code,{children:"deserialize(data)"})," (M\xe9todo)"]}),"\n",(0,n.jsxs)(i.p,{children:["El m\xe9todo ",(0,n.jsx)(i.code,{children:"deserialize"})," toma un diccionario ",(0,n.jsx)(i.code,{children:"data"})," y crea una instancia de ",(0,n.jsx)(i.code,{children:"RubricaCF"})," con los valores proporcionados en el diccionario. Asigna los valores a los atributos correspondientes y devuelve la instancia de RubricaCF."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"data:"})," Es un diccionario que contiene los datos necesarios para deserializar un objeto RubricaCF. Las claves esperadas son idrcal y descripcion."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'def deserialize(self, data):\r\n    rubricaCalificacion = RubricaCF()\r\n    rubricaCalificacion._id = data["idrcal"]\r\n    rubricaCalificacion._descripcion = data["descripcion"]\r\n    return rubricaCalificacion\n'})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Descripci\xf3n:"})," M\xe9todo que deserializa un diccionario de datos en una instancia de ",(0,n.jsx)(i.code,{children:"RubricaCF"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,i,c)=>{c.d(i,{R:()=>a,x:()=>d});var n=c(6540);const r={},o=n.createContext(r);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);