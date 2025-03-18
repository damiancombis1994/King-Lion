

												Main-Funciones:
* anuncioBancoProvincia 
Sweet Alert

* descuentosMove
Eventos "onmousemove" + innerText

* propagandaProvincia 
funcion para no mostrar mas de una vez un anuncio(anuncioBancoProvincia)
Solicita banderaAnuncioProvincia (boolean) a travez de "sessionStorage.getItem" caso true cambia el valor de banderaAnuncioProvincia a true y no muestra la funcion anuncioBancoProvincia. 
Caso contrario muestra el anuncio despues de 3 segundos "setInterval" cambia el valor de la variable banderaAnuncioProvincia a false y la guarda a travez de " sessionStorage.setItem"


												Main

Utilizo fetch para solicitar datos a un archivo local y utilizo dichos datos para completar el area de comentarios a travez del DOM												

										Categorias-Funciones

* cargarTodosProductos

Recibe array por parametro y realiza la carga a travez del DOM solicitando a cada objeto del array el valor solicitado. Tambien agrega evento "click" al boton agregar
que a travez de la funcion agregarcarrito modifica el contador numerico de productos comprados en el carrito y carga el producto al array carrito. Tambien a travez de un sweet alert le avisa al cliente que el producto fue agregado al carrito

*resultadoFilter
contiene la funcion "deleteTable" que borra todos los productos del DOM. El resto de la funcion es igual a la funcion "cargarTodosProductos" utilizado para cargar unicamente los productos que quiere ver el cliente.

*createFilters 
eventos "click" para filtrar productos

* filterGenero * filterGenero * filterGenero
devuelven array con el filtro solicitado 























