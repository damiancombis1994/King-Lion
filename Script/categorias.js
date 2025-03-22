function cargarTodosProductos(Array){
 let boxProducto = document.getElementById("cajaProducto")

	Array.forEach((Producto)=>{
		const article = document.createElement('article')	
		article.classList.add(`artProduct`) 
		article.innerHTML = 
		`
		<figure>
			<img src="${Producto.img}"> 
		</figure>
		<h4>${Producto.nombre}</h4> 
        <p> ${Producto.detalle}</p>
        <div>
			<p>Precio:   $${Producto.precio}</p>
			<button id="${Producto.id}">Agregar</button>
		</div>
         `
		 ;

		 boxProducto.append(article);

		 let agregarBtn1 = document.getElementById(Producto.id);
		 
		 agregarBtn1.onclick = () =>{
		  agregarCarrito(Producto.id)
		  
		  Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Agregado al carrito',
		  showConfirmButton: false,
		  timer: 1500
		 })
		}
	})	
}
function resultadoFilter(Array){
	 deleteTable();
	 let boxProducto = document.getElementById("cajaProducto")

	 Array.forEach((Producto)=>{
		const article = document.createElement('article')	
		article.classList.add(`artProduct`)
		article.innerHTML = 
		`
		<figure>
			<img src="${Producto.img}"> 
		</figure>
		<h4>${Producto.nombre}</h4> 
        <p> ${Producto.detalle}</p>
        <div>
			<p>Precio:   $${Producto.precio}</p>
			<button id="${Producto.id}">Agregar</button>
		</div>
         `
		 ;

		 boxProducto.append(article); 

		 let agregarBtn1 = document.getElementById(Producto.id);
		 
		 agregarBtn1.onclick = () =>{
		  agregarCarrito(Producto.id)
		  
		  Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Agregado al carrito',
		  showConfirmButton: false,
		  timer: 1500
		 })
		}
	})
}

function filterGenero(sexo){
 const miArrayGeneros = PRODUCTOS.filter((Producto) => Producto.genero.includes(sexo))
 return miArrayGeneros
}
function filterCategoria(categoria){
 const miArrayCategorias = PRODUCTOS.filter((Producto) => Producto.categoria.includes(categoria))
 return miArrayCategorias
}
function filterTipoProducto(tipo){
 const miArrayTipo = PRODUCTOS.filter((Producto) => Producto.tipo.includes(tipo))
 return miArrayTipo
}
function deleteTable(){
	let boxProducto = document.getElementById("cajaProducto")
		boxProducto.innerHTML = "";
}
const agregarCarrito = (prodId) => {

let item = PRODUCTOS.find((producto) => producto.id === prodId);
	carrito.push(item);
	numTotalCarrito(carrito)
}
	
function numTotalCarrito(array){
	let totalprop = 0;
	let totalcarro = document.getElementById("numCarrito")
	for (let i = 0 ; i < array.length; i++) {
		totalprop++
	}
	totalcarro.innerText = totalprop;
}

function createFilters(){

	let masculinoBtnFilter = document.getElementById("masculinoBTN");
	masculinoBtnFilter.onclick = () =>{	
		let miArrayGeneros = filterGenero("masculino")
		resultadoFilter(miArrayGeneros);  
	}

	let femeninoBtnFilter = document.getElementById("femeninoBTN");
	femeninoBtnFilter.onclick = () =>{	
		let miArrayGeneros = filterGenero("femenino")
		resultadoFilter(miArrayGeneros);  
	}

	let ninosBtnFilter = document.getElementById("niñosBTN");
	ninosBtnFilter.onclick = () =>{	
		let miArrayGeneros = filterGenero("niños")
		resultadoFilter(miArrayGeneros);  
	}

	let unisexBtnFilter = document.getElementById("unisexBTN");
	unisexBtnFilter.onclick = () =>{	
		let miArrayGeneros = filterGenero("unisex")
		resultadoFilter(miArrayGeneros);  
	}

	let modaBtnFilter = document.getElementById("modaBTN");
	modaBtnFilter.onclick = () =>{	
		let miArrayCategorias = filterCategoria("moda");
		resultadoFilter(miArrayCategorias); 
		createButtonsAndFilters(); 
	}

	let futbolBtnFilter = document.getElementById("futbolBTN");
	futbolBtnFilter.onclick = () =>{	
		let miArrayCategorias = filterCategoria("futbol");
		resultadoFilter(miArrayCategorias);  
	}

	let runningBtnFilter = document.getElementById("runningBTN");
	runningBtnFilter.onclick = () =>{	
		let miArrayCategorias = filterCategoria("running");
		resultadoFilter(miArrayCategorias);  
	}

	let yogaBtnFilter = document.getElementById("yogaBTN");
	yogaBtnFilter.onclick = () =>{	
		let miArrayCategorias = filterCategoria("yoga");
		resultadoFilter(miArrayCategorias);  
	}

	let zapatillasBtnFilter = document.getElementById("zapatillasBTN");
	zapatillasBtnFilter.onclick = () =>{	
		let miArrayTipo = filterTipoProducto("zapatillas");
		resultadoFilter(miArrayTipo);  
	}

	let remerasBtnFilter = document.getElementById("remerasBTN");
	remerasBtnFilter.onclick = () =>{	
		let miArrayTipo = filterTipoProducto("remeras");
		resultadoFilter(miArrayTipo);  
	}

	let pantalonesBtnFilter = document.getElementById("pantalonesBTN");
	pantalonesBtnFilter.onclick = () =>{	
		let miArrayTipo = filterTipoProducto("pantalones");
		resultadoFilter(miArrayTipo);  
	}

	let botinesBtnFilter = document.getElementById("botinesBTN");
	botinesBtnFilter.onclick = () =>{	
		let miArrayTipo = filterTipoProducto("botines");
		resultadoFilter(miArrayTipo);  
	}

	let deleteBtnFilter = document.getElementById("eliminarBTN");
	deleteBtnFilter.onclick = () =>{
		deleteTable();	
		cargarTodosProductos(PRODUCTOS);
	}
}


class Producto {
  constructor(nombre, tipo, categoria, genero, detalle, precio, id, img) {
  	this.nombre = nombre;
  	this.tipo = tipo;
  	this.categoria = categoria;
  	this.genero = genero;
    this.detalle = detalle;
    this.precio = parseFloat(precio);
    this.id = id; 
    this.img = img;
  }
 }
const PRODUCTOS = [
					new Producto(
						"South 1 Faye",
						"zapatillas ",
						"moda" , 
						"masculino",
						"Capellada sintética para mayor estilo y comodidad ", 
						40000, 
						"agregarbtn1",
						"https://ddkjx5kezodfx.cloudfront.net/Weyop/MARCANTONIO%20DEPORTES/Store/Productos/Calzado/1735227489_MjM2NzAxMDAtMQ==.webp"
					),
 					new Producto("Olympikus Swift","zapatillas ","running", "femenino"," Diseñada exclusivamente para mujeres, quienes buscan flexibilidad y agarre. ",  70000,  "agregarbtn2","https://acdn-us.mitiendanube.com/stores/004/032/952/products/zapatillas-olympikus-swift-4-mujer-a-478b8abb07e6afc48317260945808094-1024-1024.webp"),
 					new Producto("Fox Union" ,"zapatillas ","moda", "unisex"," Las zapatillas de montaña, moldeada para proteger contra los golpes de rocas",  35000,  "agregarbtn3","https://www.hellbikes.cl/wp-content/uploads/2023/09/30127003_1.webp"),
 					new Producto("Asics – Resolution X" ,"zapatillas ","moda", "masculino","Zapatillas para jugadores de tenis, que necesitan estabilidad, protección y comodidad.", 45000, "agregarbtn4","https://spinsports.cl/cdn/shop/files/aa2.webp?v=1739312487&width=533"),
 					new Producto("Grand Polo" ,"zapatillas ","moda", "niños","Son ligeras, en loneta y ideales para el día a día. ",  23000,  "agregarbtn5","https://zapateriarafaelesparza.com/4994-large_default/zapatillas-gris-grand-polo.webp"),
 					new Producto("Air Jordan 1 MID" ,"zapatillas ","yoga", "masculino","Capellada sintética para mayor estilo y comodidad ", 44000, "agregarbtn6","https://i5.walmartimages.com/asr/fedd23c8-f3a8-4714-bc6a-67803b13ff36.c6bd39b2128e442c3316578ffb595d98.webp?odnHeight=612&odnWidth=612&odnBg=FFFFFF"),
 					new Producto("Botines Golty" ,"botines ","futbol", "femenino","Botines de futbol para una gran velocidad y poder al jugador ", 23000, "agregarbtn7","https://golty.com.co/wp-content/uploads/2023/09/zapatilla-lisa-golty-fx-fucsia-portada.webp"),
 					new Producto("GRIZZLY OPEN DOORS" ,"remeras ","moda", "niños","Remera Grizzly Manga corta 100% algodón. ", 44000, "agregarbtn8","https://acdn-us.mitiendanube.com/stores/143/325/products/gmb2401p01_wht_1_1800x1800-7282fabd0c3f757a0a17240783342059-1024-1024.webp"),
 					new Producto("Techinical Highviz" ,"pantalones ","running", "masculino","Para trabajar en la carretera o donde necesite ser claramente visible. ", 44000, "agregarbtn9","https://www.tugarden.com/12067-superlarge_default/husqvarna-pantalon-techinical-highviz.webp"),
 				];

let carrito = [];



cargarTodosProductos(PRODUCTOS);
createFilters();