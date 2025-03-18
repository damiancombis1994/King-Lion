function anuncioBancoProvincia(){
  Swal.fire({
  title: '¡Descuento imperdible!',
  text: 'Todos los miercoles y jueves del mes con tu tarjeta Provincia tenes un 30% de descuento en TODOS los productos.',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR034Usy-cdyt1Y7SwDzDQ-9WBalDB2QAODCg&usqp=CAU',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
}

function descuentosMove(){

       const PROMOBICI= document.getElementById("promoBici");
       const promoHockey= document.getElementById("promoHockey");
       const promoYoga= document.getElementById("promoYoga");
       const promoBotines= document.getElementById("promoBotines");
       
       PROMOBICI.onmousemove = () =>{
              PROMOBICI.innerText = "50 % OFF";
       }
       PROMOBICI.onmouseout = () =>{
              PROMOBICI.innerText = "Desde $799";
       }
        promoHockey.onmousemove = () =>{
              promoHockey.innerText = "75 % OFF";
       }
       promoHockey.onmouseout = () =>{
              promoHockey.innerText = "Desde $999";
       }
     
       promoYoga.onmousemove = () =>{
              promoYoga.innerText = "45 % OFF";
       }
       promoYoga.onmouseout = () =>{
              promoYoga.innerText = "Desde $499";
       }
     
       promoBotines.onmousemove = () =>{
              promoBotines.innerText = "35 % OFF";
       }
       promoBotines.onmouseout = () =>{
              promoBotines.innerText ="Desde $20999";
       }
       }

function propagandaProvincia(){
  let isValido = sessionStorage.getItem("banderaAnuncioProvincia") == "true";
  let banderaBancoProvincia = false;
  if (isValido) {
    banderaBancoProvincia =!banderaBancoProvincia;
  }
  if (!banderaBancoProvincia){
    setInterval(() => {
      if(!banderaBancoProvincia){
        anuncioBancoProvincia();
        banderaBancoProvincia = true;
        sessionStorage.setItem("banderaAnuncioProvincia", JSON.stringify(banderaBancoProvincia));
      }
    }, 3000);
  } 
}
  
  descuentosMove();
  propagandaProvincia();


  





 












  