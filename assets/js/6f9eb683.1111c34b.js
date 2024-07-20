"use strict";(self.webpackChunkdocumentacion=self.webpackChunkdocumentacion||[]).push([[7502],{185:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var a=n(4848),o=n(8453);const t={sidebar_position:1},d="Metodo de ordenaci\xf3n",s={id:"TDA/MetodoOrdenacion",title:"Metodo de ordenaci\xf3n",description:"Clase: QuickSort",source:"@site/docs/TDA/MetodoOrdenacion.md",sourceDirName:"TDA",slug:"/TDA/MetodoOrdenacion",permalink:"/documentacion-PIS/docs/TDA/MetodoOrdenacion",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/TDA/MetodoOrdenacion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"UsuarioDaoControl",permalink:"/documentacion-PIS/docs/tutorial-extras/UsuarioDaoControl"},next:{title:"Metodo de busqueda",permalink:"/documentacion-PIS/docs/TDA/MetodoBusqueda"}},i={},l=[{value:"Clase: QuickSort",id:"clase-quicksort",level:2},{value:"M\xe9todo: <code>sort_acendent</code>",id:"m\xe9todo-sort_acendent",level:3},{value:"M\xe9todo: <code>sort_descendent</code>",id:"m\xe9todo-sort_descendent",level:3},{value:"M\xe9todo: <code>sort_models_acendent</code>",id:"m\xe9todo-sort_models_acendent",level:3},{value:"M\xe9todo: <code>sort_models_descendent</code>",id:"m\xe9todo-sort_models_descendent",level:3}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"metodo-de-ordenaci\xf3n",children:"Metodo de ordenaci\xf3n"}),"\n",(0,a.jsx)(r.h2,{id:"clase-quicksort",children:"Clase: QuickSort"}),"\n",(0,a.jsxs)(r.p,{children:["La clase ",(0,a.jsx)(r.code,{children:"QuickSort"})," implementa m\xe9todos para ordenar arrays y listas de objetos en orden ascendente y descendente utilizando el algoritmo de QuickSort."]}),"\n",(0,a.jsxs)(r.h3,{id:"m\xe9todo-sort_acendent",children:["M\xe9todo: ",(0,a.jsx)(r.code,{children:"sort_acendent"})]}),"\n",(0,a.jsx)(r.p,{children:"Este m\xe9todo ordena un array en orden ascendente. Divide el array en tres listas (menores, iguales y mayores al pivote) y aplica recursivamente el mismo m\xe9todo a las sublistas. Finalmente, concatena las sublistas para formar el array ordenado."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"def sort_acendent(self, array):\r\n    if len(array) <= 1:\r\n        return array\r\n    else:\r\n        pivote = array[0]\r\n        lower = []\r\n        equal = []\r\n        bigger = []\r\n\r\n        for i in range(0, len(array)):\r\n            if array[i] > pivote:\r\n                lower.append(array[i])\r\n            elif array[i] == pivote:\r\n                equal.append(array[i])\r\n            else:\r\n                bigger.append(array[i])\r\n\r\n        lower = self.sort_acendent(lower)\r\n        bigger = self.sort_acendent(bigger)\r\n        array = lower + equal + bigger\r\n        return array\n"})}),"\n",(0,a.jsxs)(r.h3,{id:"m\xe9todo-sort_descendent",children:["M\xe9todo: ",(0,a.jsx)(r.code,{children:"sort_descendent"})]}),"\n",(0,a.jsxs)(r.p,{children:["Este m\xe9todo ordena un array en orden descendente. Funciona de manera similar a ",(0,a.jsx)(r.code,{children:"sort_acendent"}),", pero invierte las condiciones para ordenar en orden descendente."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"def sort_descendent(self, array):\r\n    if len(array) <= 1:\r\n        return array\r\n    else:\r\n        pivote = array[0]\r\n        lower = []\r\n        equal = []\r\n        bigger = []\r\n\r\n        for i in range(0, len(array)):\r\n            if array[i] < pivote:\r\n                lower.append(array[i])\r\n            elif array[i] == pivote:\r\n                equal.append(array[i])\r\n            else:\r\n                bigger.append(array[i])\r\n\r\n        lower = self.sort_descendent(lower)\r\n        bigger = self.sort_descendent(bigger)\r\n        array = lower + equal + bigger\r\n        return array\r\n\n"})}),"\n",(0,a.jsxs)(r.h3,{id:"m\xe9todo-sort_models_acendent",children:["M\xe9todo: ",(0,a.jsx)(r.code,{children:"sort_models_acendent"})]}),"\n",(0,a.jsxs)(r.p,{children:["Este m\xe9todo ordena una lista de objetos en orden ascendente seg\xfan un atributo espec\xedfico. Utiliza ",(0,a.jsx)(r.code,{children:"getattr"})," para obtener el valor del atributo y aplica el algoritmo de QuickSort de manera similar a ",(0,a.jsx)(r.code,{children:"sort_acendent"}),"."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"def sort_models_acendent(self, array, attribute):\r\n    if len(array) <= 1:\r\n        return array\r\n    else:\r\n        pivote = getattr(array[0], attribute)\r\n        lower = []\r\n        equal = []\r\n        bigger = []\r\n\r\n        for i in range(0, len(array)):\r\n            att = getattr(array[i], attribute)\r\n            if att > pivote:\r\n                lower.append(array[i])\r\n            elif att == pivote:\r\n                equal.append(array[i])\r\n            else:\r\n                bigger.append(array[i])\r\n\r\n        lower = self.sort_models_acendent(lower, attribute)\r\n        bigger = self.sort_models_acendent(bigger, attribute)\r\n        array = lower + equal + bigger\r\n        return array\r\n\n"})}),"\n",(0,a.jsxs)(r.h3,{id:"m\xe9todo-sort_models_descendent",children:["M\xe9todo: ",(0,a.jsx)(r.code,{children:"sort_models_descendent"})]}),"\n",(0,a.jsxs)(r.p,{children:["Este m\xe9todo ordena una lista de objetos en orden descendente seg\xfan un atributo espec\xedfico. Funciona de manera similar a ",(0,a.jsx)(r.code,{children:"sort_models_acendent"}),", pero invierte las condiciones para ordenar en orden descendente."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"def sort_models_descendent(self, array, attribute):\r\n    if len(array) <= 1:\r\n        return array\r\n    else:\r\n        pivote = getattr(array[0], attribute)\r\n        lower = []\r\n        equal = []\r\n        bigger = []\r\n\r\n        for i in range(0, len(array)):\r\n            att = getattr(array[i], attribute)\r\n            if att < pivote:\r\n                lower.append(array[i])\r\n            elif att == pivote:\r\n                equal.append(array[i])\r\n            else:\r\n                bigger.append(array[i])\r\n\r\n        lower = self.sort_models_descendent(lower, attribute)\r\n        bigger = self.sort_models_descendent(bigger, attribute)\r\n        array = lower + equal + bigger\r\n        return array\n"})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>s});var a=n(6540);const o={},t=a.createContext(o);function d(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);