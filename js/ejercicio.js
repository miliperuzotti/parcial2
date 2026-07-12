// arrays para guardar los datos
let nombres = [];
let trabajadoresArray = [];
let diasProduccion = [];
let horasPorDia = [];
let honorarios = [];

// variables
let cantidadInstalaciones;
let contador = 0;

// capturar de datos DOM
let cantidad = document.querySelector("#cantidad");
let nombre = document.querySelector("#nombre");
let trabajadores = document.querySelector("#trabajadores");
let produccion = document.querySelector("#produccion");
let horario = document.querySelector("#horario");
let cobro = document.querySelector("#cobro");

let btnCantidad = document.querySelector("#btnCantidad");
let btnAgregar = document.querySelector("#btnAgregar");
let btnCalcular = document.querySelector("#btnCalcular");
let btnReiniciar = document.querySelector("#btnReiniciar");

let salida = document.querySelector("#salida");

//evento 1

btnCantidad.addEventListener("click", confirmarCantidad);

function confirmarCantidad(){
cantidadInstalaciones = Number(cantidad.value);

//validar dato
if(cantidadInstalaciones <= 0){
        alert("Debe ingresar una cantidad de instalaciones mayor a 0.");
    }
    else{
    cantidad.disabled = true;
    btnCantidad.disabled = true;

    nombre.disabled = false;
    trabajadores.disabled = false;
    produccion.disabled = false;
    horario.disabled = false;
    cobro.disabled = false;

    btnAgregar.disabled = false;
}
}

//evento 2

btnAgregar.addEventListener("click", agregarInstalacion);

function agregarInstalacion(event){
    event.preventDefault();

    //variables para guardar los valores ingresados
    let nombreInstalacion = nombre.value;
    let cantidadTrabajadores = Number(trabajadores.value);
    let dias = Number(produccion.value);
    let horas = Number(horario.value);
    let valorHora = Number(cobro.value);

    //validar datos
    if(
    nombre.value == "" ||
    trabajadores.value <=0 ||
    produccion.value <=0 ||
    horario.value <=0 ||
    cobro.value <=0
    ){
    alert("Debe completar todos los campos");
    return;
}

    //enviar los valores ingresados al array
    nombres.push(nombreInstalacion);
    trabajadoresArray.push(cantidadTrabajadores);
    diasProduccion.push(dias);
    horasPorDia.push(horas);
    honorarios.push(valorHora);

    contador++;

    //limpiar campos
    nombre.value = "";
    trabajadores.value = "";
    produccion.value = "";
    horario.value = "";
    cobro.value = "";

//verificar si se completaron todas
    if(contador == cantidadInstalaciones){
    btnAgregar.disabled = true;
    btnCalcular.disabled = false;
    salida.innerHTML = `<p>
Se cargaron ${contador} instalaciones correctamente.
</p>
`;
}
}

//evento 3

btnCalcular.addEventListener("click", calcularResultados);

function calcularResultados(){

//declarar acumuladores
let costoDiarioTotal = 0;
let costoTotalEstudio = 0;

let mayorCantidadDias = 0;
let nombreMayor = "";
let costoInstalacionMayor = 0;

//para resolver calculos
//repetitiva para recorrer las instalaciones
 for(let i = 0; i < nombres.length; i++){

        // costo de un día de trabajo del estudio
        costoDiarioTotal += trabajadoresArray[i] *
                            horasPorDia[i] *
                            honorarios[i];

        // costo total del estudio
        let costoInstalacionActual =
            trabajadoresArray[i] *
            horasPorDia[i] *
            honorarios[i] *
            diasProduccion[i];

        costoTotalEstudio += costoInstalacionActual;

        // buscar la instalación con más días
        //estructura condicional
        if(diasProduccion[i] > mayorCantidadDias){

            mayorCantidadDias = diasProduccion[i];
            nombreMayor = nombres[i];
            costoInstalacionMayor = costoInstalacionActual;

        }
    }

    let porcentaje = Math.round((costoInstalacionMayor / costoTotalEstudio) * 100);

    salida.innerHTML = `
        <h3>Resultados</h3>

        <p>
        El costo total de un día de trabajo del estudio es:
        $${costoDiarioTotal}
        </p>

        <p>
        La instalación que requiere más días de producción es
        ${nombreMayor} con ${mayorCantidadDias} días.
        </p>

        <p>
        El costo total de esta instalación es:
        $${costoInstalacionMayor}
        </p>

        <p>
        Esta instalación representa el
        ${porcentaje}%
        del costo total del estudio.
        </p>
    `;

    btnCalcular.disabled = true;
    btnReiniciar.disabled = false;
}

//evento 4
btnReiniciar.addEventListener("click", reiniciar);

function reiniciar(){
    location.reload();
}