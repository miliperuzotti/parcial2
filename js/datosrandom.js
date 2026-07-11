//array con todos los datos strings
let datos = [
    "Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.",

    "Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.",

    "Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.",

    "Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.",

    "Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.",

    "Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.",

    "Publicó libros fundamentales sobre programación creativa como Processing: A Programming Handbook for Visual Designers and Artists.",

    "Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA.",

    "Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.",

    "Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series."
];

//capturo el espacio donde se va a ver el dato
let parrafo = document.querySelector("#dato");

//capturo el boton
let boton = document.querySelector("#btnDato");

//creo la función para seleccionar el dato al azar
function mostrarDato() {
    let numeroAleatorio = Math.floor(Math.random() * datos.length);

    parrafo.innerHTML = datos[numeroAleatorio];
}

//ejecuto la función
mostrarDato();

//al hacer click en el boton se ejecuta la función y se muestra un nuevo dato aleatorio
boton.addEventListener("click", mostrarDato);