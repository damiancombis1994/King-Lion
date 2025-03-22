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
		const div = document.createElement('div')	
		div.classList.add(`boxShopDom`)
		div.innerHTML = `
		<div class="boxShopImg">
		<img class="shopImg" src="${Producto.img}"> 
		</div><br>
		<div class="shopNombre">
		<h4 >${Producto.nombre}</h4>
		 </div>
        <div class="shopDetalle">
        	<p >${Producto.detalle}</p>
		 </div>
        <div  class="shopPrecio">
        	<p>$${Producto.precio}</p>
		 </div>
        <div class="shopButton">
			<button class="agregarBTN" id="${Producto.id}">Agregar</button>
		 </div>
         `;

		 boxProducto.append(div); 

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
					new Producto("Zapatillas Nike","zapatillas ","running" , "masculino","Capellada sintética para mayor estilo y comodidad " , 40000,  "agregarbtn1","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5ySW9ORDCJVRbZCvqvzO2On9EMxymq32WDPjDmGtiCB2xzItPtSNM7-k5mUhQbWVhdg&usqp=CAU"),
 					new Producto("Olympikus Swift","zapatillas ","moda", "femenino"," Diseñada exclusivamente para mujeres, quienes buscan flexibilidad y agarre. ",  70000,  "agregarbtn2","https://acdn-us.mitiendanube.com/stores/004/032/952/products/zapatillas-olympikus-swift-4-mujer-a-478b8abb07e6afc48317260945808094-1024-1024.webp"),
 					new Producto("Zapatillas Nike" ,"zapatillas ","running", "masculino","Capellada sintética para mayor estilo y comodidad ",  35000,  "agregarbtn3","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhEQEhAVFREREA8VEhAVFhASFhMWFxUTGBUYHCgsGRwlGxMVJTEhJTUrLi4uFx8zODMsNygtLjcBCgoKDQ0NDg0NDysZFRkrKysrKystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQMEBgcIAgH/xABKEAACAQMABQYICQkHBQAAAAAAAQIDBBEFEiExQQYHE1FhcSIyUoGRkrHSFEJDRFNyocHRFSMkVGKjwuHwMzRjk5SishYXVYKD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDeIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGuUvLmysZqnXqS6R4bhCE6jpp7nPVT1e7f2EpofTdvdQjUoVYVIyTcdWSeUnh+jj1ccASIAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSHO7yzr/DFZ29SrRjQ2ynTqVIOtUcU8Zi1mMdy7cmb81HK131s4VZa1zRajOWxOpTlno6nfsafbHPEDOAAAMa5weVMdG2crjClVk+it4PdKrJPGf2Uk5PsWOJkjZoznk5XW166djbx6Z0qnSSuU/AUtWUdSPlrwtr3bElnaBred3VqzlUnKVSpNucpSe2Um8ucnuSb/kT1nf1dHSjWt7iUKsnFVoxS6KpxUXDbnGN727XjGS3tkqdPVTalnWc1vy19q2LY+ooQ8JNNLqw14O3s6n/AFkDNdFc8t90kekpW9agniooQnTnJZ3xm5tay6sYfZvNxaD5S2l4v0e4pVJYUnTUkqkE/KpvajmeVrGSSzKLW7VklHdu3bfaV069KrTq0fBnTxKNVNKUJLqzvWM7NqeWmUdTg1fyR51qTh0ekHqVovHTwpTcKi4OUYpuElx4cdm5bH0ff0q9ONajUhVpSWY1ISUoy69qILkAAAAAAAAAAAAAAAAAAAAAAPkmByvy9vVPSFxUi8/nquHt2JTfX1bivyR0zVtK0bm2lHpcONWlU8StCWG1s3bUn3pPO9Oc5IaQ0NKjKjpClH4RKrVlO4qQeJa0tijVhlwSSW/VWcviZJDm00ZcrpLO6qRjw6KtTqw8+spP7UBNWPO5ScV09leU58eiVOvDzSUl7ChpHnfgk/g9hdTlwdZwox798vuMcuuam7hnobyjU6lUpzp+bWi5ewgdIch9LU/kI1V5VOrTa9E3F/YB65S8s9IXycK9WNGg85tqCaUl1Tk23LtWcdhjUJwgsRR50ho+8pZ6a2uKaW9yo1FH1sYIrpc/GT7mii/qXet3e0+q84Z2ce3tLAR7m3sSSy223sSXFgZ6uSV2raneU4xr0alOFTFPLnDWim1Knjbjdszue4hqVVPZnC6t6/r+sG9OQ1jO3sLejUWrUjTjrwePBlLwnHzN48xhnOxyYhCP5QopR8KKuYrdLWeI1e/WaT69bPB5DX9vZ0op+NmWdspayXHY8bOG/aXGiNL3tll0LmUMyUnFJajx5UJZTytmd+zeR1OuVJarWJPf8XCetnsA3bya50rK46OnVbt7ieI6sk3Tc35NVbEnw1sdRnhyfdxglqvFPC8XMVJdjjl7WZVyY5wLyx1IynK6t9ilQlJzcEljEKm+L3bHmOzCS3kHQwIfk5ymtr6mqlCom8eHRliNSm+qUOHfufBsmAAAAAAAAAAAAAAAAAAAA5Q5bRXw26wkv0i43LGzpZEJbVHB68JShNbpwlKL9ZbUZBy5p4vbpPf8IuPtqyZjyKMq0XzgaRobFcuol8WslU9Mn4T9JlmjeeKawri1T650amH5qc/eNVH3IG+9Hc52jauNapKjJ/Fq02sd845ivSTdL4BdrMVaXMetdFVX3nNLPsFhqS2SW6S3p9jIro2fInRst9lbL6tOEf8AikXGjeS1jbyU6NrRhNeLPUi5R7pPajQVlynvaXiXdwux1JTXonlEtbc42kobHXjP69Kl/CkB0EpGE87mmYUrCdFyXS13CFOHFqM4ynLHUorf1yj1mua3ObpFprpKMf2o0lles2vsMU0jfVq83Vr1Z1aj2a0nnC6kt0V2LCA8qvgvbCqs60m+3D2/VT4drXd1kQe1Ls+1lRllG9hjVShGPCKSS9B4qWlJrwW4dkXheruMY6Xv9P8AIqRupb87QJ2lo5p68atTK2pxcIyz2SSWH6DNdH84OkqKUZTp1opYXSU1nC4a0HHL7Xl95rSlfSSwpRxs2YfDai5WkJ+XDO7OJEG47HncW6vZzX7VKopf7ZpY9JPWPOXo6phSq1KMn8WrSmsd8o5S9Jz9G8lt8KO3f4O/O/ifZ3ezbN+aMV+IHU2j9J0K8dejWpVY7tanOMlnq2PYy7OP3fSp1I1acpwqwetCopNSg1uaaOk+bLlV+UbKNWePhFNujcJLC6SKTU0uqUXF9jbXADLQAAAAAAAAAAADAwTSvI2xuZyqVrWnOcm5TmqlelKTfF6ktr7SxjzYaL/VX2/pd5+Jl0oSh4ya7eHpPUJIKw6fNbovH92qLqxd3P3sof8AafRufEu13XEWvtRniZ9yEa8r80lg93w6OOqtbvPrRLOfM/afrF8v9NL2UzZzZ5bA1XV5oKG6F3cL61BS9mqR1bmhmtsb+jjgp0J0/wCNm4ZSPHSBWkavNTf58CpZ1F1qrUT86cNnpLO55s9KR3UIT+pXo/xSRvWTi96T70mIxhwjHvSSKOfXyC0mvmNXzSoS9k2UavIvSUdrsLvzUpS/45Oi1TXXL15r7yol2z9ef4gcz/8AS1//AOP0h/o7r3C5och9JzWY2F3/AO1Nw+yeDpDL8qfry/E+OXHMvXn+IHPtDm00tJ/3KUV5U61tFL01MkhDmj0k/GlZU+yVxLZ6sGbveNzSfft9p8zHs8yQRqC15oazX5zSFpF8VThVrYfV8XJK23NDQX9re3U3/h28aSfnqaxsidXvKXSN7lnuCsOo82Wi4LwqFzWfXVunFfucGT8nKFC0mqdvb29CE5KM40ovM3tUXKo9ssZ49ZdKzqy3Ql51j2l1ZaEanGc3jVakorrW1EE6AAgAAAAAAAAeZxysZa7UegBG19Ea/wA4ul9Wrj2IsXyTp51unvM9fTv8DIABDLk+v1m63Nf2kNz3/F37N+9cCpHQuPnFxvztdLqx5BKgCL/I/wDj1t2PkfcPX5IX0tX936PFJIARL0Ivpav7v3Ty9Ax+lremHukwAIV8nYfS1vTD3RHk9FfLV/TS9wmgBFR0Il8tW4bfzXuFRaKX0lTr+T9HikiAI9aLX0lTj5G3s8U8vRK+lqceFLb/ALSSAENU5PKWx3Fzu1dkqa2deyO/t3lKfJeD33F3/mpfcTwAgYcmYrdc3a/+kfdLmGh5L53deeVN/wABKgCwhYTXzmu+/ofcLinQkt9Scu9Q+6JXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="),
 					new Producto("Zapatillas Reebook" ,"zapatillas ","moda", "unisex","Capellada sintética para mayor estilo y comodidad ", 45000, "agregarbtn4","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUm25X3ZiZCuAOV1elKF7Yw06-M_S6s8lniQ&usqp=CAU"),
 					new Producto("Urbanas Soft" ,"zapatillas ","moda", "niños","Zapatillas deportivas altas de lujo",  23000,  "agregarbtn5","https://http2.mlstatic.com/D_NQ_NP_778256-MLA76227289266_052024-O.webp"),
 					new Producto("Zapatillas Puma" ,"zapatillas ","yoga", "masculino","Capellada sintética para mayor estilo y comodidad ", 44000, "agregarbtn6","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmyMkfmogrbCdBn7vAIBoNU9KVBWk9zrUHw&usqp=CAU"),
 					new Producto("Botines Puma" ,"botines ","futbol", "masculino","Capellada sintética para mayor estilo y comodidad ", 23000, "agregarbtn7","data:image/jpeg;base64,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"),
 					new Producto("Remera Adidas" ,"remeras ","moda", "niños","Capellada sintética para mayor estilo y comodidad ", 44000, "agregarbtn8","data:image/jpeg;base64,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"),
 					new Producto("Pantalon Nike" ,"pantalones ","yoga", "masculino","Capellada sintética para mayor estilo y comodidad ", 44000, "agregarbtn9","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcmgGioTk2k-mQBoDGse5uJj7uPqexF0eUg&usqp=CAU"),
 				];

let carrito = [];



cargarTodosProductos(PRODUCTOS);
createFilters();