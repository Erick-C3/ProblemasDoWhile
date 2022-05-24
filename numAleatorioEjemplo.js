
/*
    Crear un programa que genere numeros aleatorios entre 1 y 7(excluido) e itere imprimiendolos 
    hasta que el numero sea igual a 3 y 2  

        visual(terminal/consola):
            + imprimir el numero generado aleatoriamente
                + cuando se genere un numero aleatorio
        logicos:    
            + el programa se detiene cuando el numero generadoe es igual a 3 y 2
            + generar un numero aleatorio 
                + entre 1 y 7 (excluido)
*/



/**
 * Genera un numero aleatorio con un min y max definidos, el max queda excluido
 * 
 * @param {Number} min para el rango de numero aleatorio
 * @param {Number} max para el rango de numero aleatorio
 * @returns un numero aleatorio
 */
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const NUMERO_CORRECTO_A = 3;
const NUMERO_CORRECTO_B = 2;

const MIN_RANG_ALEATORIO = 1;
const MAX_RANG_ALEATORIO = 7;

/* 
// asignamos a "numero" un numero aleatorio entre 1 y 7(excluido)
let numero = generarNumeroAleatorio(1,7) ;
 */
let numero = 2;// SOLO al principio  numero = 3 y hasta que se le ASIGNE un nuevo valor


do{
    numero = generarNumeroAleatorio(MIN_RANG_ALEATORIO, MAX_RANG_ALEATORIO);
    console.log(numero);
}while( numero != NUMERO_CORRECTO_A  && numero != NUMERO_CORRECTO_B   );



/* //    OR ->  ||
// genero numeros aleatorios mientras no sea 3 y 2 ? 
while(  numero != NUMERO_CORRECTO_A  && numero != NUMERO_CORRECTO_B ){
    numero = generarNumeroAleatorio(MIN_RANG_ALEATORIO, MAX_RANG_ALEATORIO) ;
    console.log(numero);
} */