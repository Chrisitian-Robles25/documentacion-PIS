# Lista Enlazada

## Clase: Linked_List

La clase `Linked_List` implementa una lista enlazada con varias operaciones para manejar los nodos y los datos almacenados en ellos.

### Constructor
El constructor inicializa una lista enlazada vacía, con la cabeza ( `__head `), el último nodo (`__last`) y la longitud (`__length`) establecidos a `None` y 0, respectivamente.
```python
def __init__(self):
    self.__head = None
    self.__last = None
    self.__length = 0
```
### Método: addFirst
Este método agrega un nuevo nodo al inicio de la lista. Si la lista está vacía, crea un nuevo nodo y lo establece como cabeza y último nodo. De lo contrario, inserta el nuevo nodo antes de la cabeza actual.

```python
def __addFirst__(self, data):
    if self.isEmpty:
        node = Node(data)
        self.__head = node
        self.__last = node
        self.__length += 1
    else: 
        headOld = self.__head
        self.__head = Node(data, headOld)
        self.__length += 1

```
### Método: addLast
Este método agrega un nuevo nodo al final de la lista. Si la lista está vacía, llama a `__addFirst__`. De lo contrario, inserta el nuevo nodo después del último nodo actual.

```python
def __addLast__(self, data):
    if self.isEmpty:
        self.__addFirst__(data)
    else: 
        node = Node(data)
        self.__last._next = node
        self.__last = node
        self.__length += 1

```
### Método: edit
Este método edita el dato de un nodo en una posición específica. Si la posición es `0`, edita la cabeza. Si la posición es la longitud de la lista, edita el último nodo. De lo contrario, edita el nodo en la posición dada.

```python
def edit(self, data, pos=0):
    if pos == 0:
        self.__head._data = data
    elif pos == self._length:
        self.__last._data = data
    else:
        self.getNode(pos)._data = data

```
### Método: getNode
Este método devuelve el nodo en una posición específica. Lanza excepciones si la lista está vacía o la posición está fuera de rango.

```python
def getNode(self, pos):
    if self.isEmpty:
        raise LinkedEmptyException("List is Empty")
    elif pos < 0 o pos >= self._length:
        raise ArrayPositionException("Position is out of range")
    elif pos == 0:
        return self.__head
    elif pos == self._length - 1:
        return self.__last
    else:
        count = 0
        node = self.__head
        while count < pos:
            node = node._next
            count += 1
        return node

```
### Método: add
Este método agrega un nuevo nodo en una posición específica. Si la posición es `0`, llama a `__addFirst__`. Si la posición es la longitud de la lista, llama a `__addLast__`. De lo contrario, inserta el nuevo nodo en la posición dada.
```python
def add(self, data, pos):
    if pos == 0:
        self.__addFirst__(data)
    elif pos == self._length:
        self.__addLast__(data)
    else:
        node_preview = self.getNode(pos-1)
        node_last = node_preview._next
        node_preview._next = Node(data, node_last)
        self.__length += 1
```
### Propiedad: clear
Esta propiedad limpia la lista, estableciendo la cabeza, el último nodo y la longitud a sus valores iniciales.

```python
@property
def clear(self):
    self.__head = None
    self.__last = None
    self.__length = 0

```

### `__exist__` (Método)
Verifica si un nodo con datos específicos ya existe en la lista enlazada.

    - Args:
        data: El dato a buscar en los nodos de la lista.
        id: (opcional) Un identificador para la búsqueda.
        cedula: (opcional) Un número de cédula para la búsqueda.
        nunidad: (opcional) Un número de unidad para la búsqueda.

    - Returns:
        tuple: Un tupla que indica si el nodo existe, junto con el ID y un dato adicional del nodo si existe,
               o (False, None, None) si no existe.
```python
def __exist__(self, data, id=None, cedula=None, nunidad=None):
    node = self.__head
    for i in range(0, self._length):
        if hasattr(node._data, '_estudianteCedula'):
            return self.model_exist('_estudianteCedula', data, type=0)
        if hasattr(node._data, '_cedula'):
            return self.model_exist('_cedula', data, type=0)
        elif hasattr(node._data, '_ciclo') and node._data._ciclo == id and hasattr(node._data, '_nombre') and node._data._nombre == data and hasattr(node._data, '_cedulaDocente'):
            print('Ya existe materia')
            return True, node._data._id, node._data._cedulaDocente
        elif hasattr(node._data, '_correo'):
            return self.model_exist('_correo', data)
        elif hasattr(node._data, '_docenteUserCedula') and node._data._docenteUserCedula == cedula and hasattr(node._data, '_descripcionFuncionD') and node._data._descripcionFuncionD == data:
            print('Ya existe funcion docente')
            return True, node._data._id, node._data._docenteUserCedula
        elif hasattr(node._data, '_materiaId') and hasattr(node._data, '_nUnidad') and hasattr(node._data, '_nombre'):
            if node._data._nombre == data:
                print('Ya existe unidad')
                return True, node._data._id, node._data._nombre
            elif data and node._data._materiaId == id and node._data._nUnidad == nunidad:
                print('Ya existe unidad')
                return True, node._data._id, node._data._materiaId
        elif hasattr(node._data, '_descripcion') and node._data._descripcion == data:
            return True, node._data._id, node._data._descripcion
        elif hasattr(node._data, '_nombres'):
            return self.model_exist('_nombres', data)
        elif hasattr(node._data, '_nombre') and hasattr(node._data, '_fechaInicio') and hasattr(node._data, '_fechaFin') and node._data._nombre == data:
            print('Ya existe periodo academico')
            return True, node._data._id, node._data._nombre
        node = node._next
    return False, None, None
```
Descripción: Método que verifica si un nodo con datos específicos ya existe en la lista enlazada.

### `detele` (Método)

    Elimina un nodo en una posición específica de la lista enlazada.

    - Args:
        pos (int): La posición del nodo a eliminar.

    - Raises:
        LinkedEmptyException: Si la lista está vacía.
        ArrayPositionException: Si la posición está fuera del rango de la lista.
 ```python
def detele(self, pos):
    
    if self.isEmpty:
        raise LinkedEmptyException("List is Empty")
    elif pos < 0 or pos >= self._length:
        raise ArrayPositionException("Position is out of range")
    elif pos == 0:
        self.__head = self.__head._next
        self.__length -= 1
    elif pos == self._length - 1:
        self.__last = self.getNode(pos-1)
        self.__length -= 1
    else:
        node_preview = self.getNode(pos-1)
        node_last = node_preview._next._next
        node_preview._next = node_last
        self.__length -= 1
```
Descripción: Método que elimina un nodo en una posición específica de la lista enlazada.

### `sort_models` (Método)

    Ordena los modelos en la lista enlazada según un atributo específico.

    - Args:
        attribute: El atributo por el cual ordenar los modelos.
        type (int): El tipo de ordenamiento; 1 para ascendente, otro valor para descendente.

    - Returns:
        list: La lista de modelos ordenados.

    - Raises:
        LinkedEmptyException: Si la lista está vacía.
 ```python
def sort_models(self, attribute, type=1):
    
    if self.isEmpty:
        raise LinkedEmptyException("List empty")
    else:
        array = self.toArray()
        if isinstance(array[0], object):
            quick = QuickSort()
            if type == 1:
                array = quick.sort_models_acendent(array, attribute)
            else:
                array = quick.sort_models_descendent(array, attribute)
        self.toList(array)
    return array
```
Descripción: Método que ordena los modelos en la lista enlazada según un atributo específico.

### `search_model` (Método)
 
    Busca un modelo en la lista enlazada según un atributo específico y un método de búsqueda.

    - Args:
        data: El dato a buscar.
        attribute: El atributo por el cual buscar.
        type (int): El tipo de ordenamiento; 0 para no ordenar, otro valor para ordenar.
        method (int): El método de búsqueda; 1 para búsqueda secuencial, otro valor para búsqueda binaria.

    - Returns:
        list: La lista de modelos ordenados que coinciden con la búsqueda.

    - Raises:
        LinkedEmptyException: Si la lista está vacía.
 ```python    
def search_model(self, data, attribute, type=0, method=1):
   
    if self.isEmpty:
        raise LinkedEmptyException("List empty")
    else:
        if method == 1:
            search = SequentialBinarySearch()
            array = self.sort_models(attribute, type)
            array = search.search_models(array, data, attribute)
        else:
            search = BinarySearch()
            array = self.sort_models(attribute, type)
            array = search.search_models(array, data, attribute)
    self.toList(array)
    return array
```
Descripción: Método que busca un modelo en la lista enlazada según un atributo específico y un método de búsqueda.


