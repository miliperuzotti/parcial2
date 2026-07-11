/*aray de objetos para las obras*/
let obras = [
    {
        nombre: "MicroImage Triptych",
        fecha: 2004,
        imagen: "img/galeria/microimage.jpg"
    },
    {
        nombre: "Technical Image #7",
        fecha: 2025,
        imagen: "img/galeria/metal.jpg"
    },
    {
        nombre: "Primitives (This Could be an Extraordinary Find)",
        fecha: 2013,
        imagen: "img/galeria/primitives.png"
    },
    {
        nombre: "The Studies for a Garden of Earthly Delights",
        fecha: 2018,
        imagen: "img/galeria/garden.png"
    },
    {
        nombre: "Technical Image #6",
        fecha: 2025,
        imagen: "img/galeria/metal2.jpg"
    }
];

/*capturo el espacio div para agregar la galeria*/
let galeria = document.querySelector("#galeria");

/*creo la funcion para mostrar galeria, recorriendo el array para pasar por todas las obras
 y agregando el contenido pasando por las posiciones y las propiedades de los objetos  */
function mostrarGaleria(){
    galeria.innerHTML = "";

     galeria.innerHTML += `<h3 id="tituloGaleria">Obras del artista</h3>`;

    for(let i = 0; i < obras.length; i++){
        galeria.innerHTML += `
        <article class="obra">
        <img src="${obras[i].imagen}" alt="${obras[i].nombre}">
        <h3>${obras[i].nombre}</h3>
        <p>${obras[i].fecha}</p>
        </article>
        `;
    }
    galeria.innerHTML +=`<div class="botones">
        <button id="btnCambiar">Modo galería</button>
        <button id="btnOrden">Invertir recorrido</button>
    </div> `;

    //capturo el boton
    let boton = document.querySelector("#btnCambiar");
   
    //al hacer click en el boton se ejecuta la funcion cambiarDisenio
    boton.addEventListener("click", cambiarDisenio);

    //capturo el boton
let btnOrden = document.querySelector("#btnOrden");

//al hacer click en el boton se ejecuta la funcion cambiarOrden
btnOrden.addEventListener("click", cambiarOrden);
}

//llamo a la funcion
mostrarGaleria();

 //defino el valor booleano
let cambio = true;

/*creo la funcion para cambiar el modo de galeria*/
function cambiarDisenio(){

//capturo elementos
    let imagenes = document.querySelectorAll(".obra img");
    let tarjetas = document.querySelectorAll(".obra");
    let titulos = document.querySelectorAll(".obra h3");
    let fechas = document.querySelectorAll(".obra p");

//estructura condicional para que el boton cambie de un diseño a otro(tamaño y colores)
    if(cambio == true){

        // imágenes anchas
        for(let i = 0; i < imagenes.length; i++){
            imagenes[i].style.width = "300px";
        }

        //fondo modo oscuro
        galeria.style.backgroundColor = "#222";

        //cuadrados imagenes modo oscuro
        for(let i = 0; i < tarjetas.length; i++){
            tarjetas[i].style.backgroundColor = "#333";
        }
        for(let i = 0; i < titulos.length; i++){
            titulos[i].style.color = "white";
        }
        for(let i = 0; i < fechas.length; i++){
            fechas[i].style.color = "skyblue";
        }
        cambio = false;
    }
    else{
        //volver al original
        for(let i = 0; i < imagenes.length; i++){
            imagenes[i].style.width = "200px";
        }
        galeria.style.backgroundColor = "white";
        for(let i = 0; i < tarjetas.length; i++){
            tarjetas[i].style.backgroundColor = "#f7f7f7";
        }

        for(let i = 0; i < titulos.length; i++){
            titulos[i].style.color = "black";
        }

        for(let i = 0; i < fechas.length; i++){
            fechas[i].style.color = "#555";
        }

        cambio = true;
    }
}



//creo funcion para cambiar el orden
function cambiarOrden(){
    //metodo de array para invertir orden
    obras.reverse();
    //vuelve a mostrar la galeria pero con el orden invertido
    mostrarGaleria();
}