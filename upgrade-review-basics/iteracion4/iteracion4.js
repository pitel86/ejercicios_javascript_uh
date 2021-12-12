//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos
//y un texto y devuelve la posición del array cuando el valor del array sea igual al valor
//del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

const arrayWords = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
    return array.indexOf(text);
}

let position = findArrayIndex(arrayWords,"Caracol")
console.log("La palabra caracol",(position!=-1)?"se encuentra en la posicion "+ position:"no se encuentra en el array");

position = findArrayIndex(arrayWords,"ajo")
console.log("La palabra caracol",(position!=-1)?"se encuentra en la posicion "+ position:"no se encuentra en el array");

position = findArrayIndex(arrayWords,"Salamandra")
console.log("La palabra caracol",(position!=-1)?"se encuentra en la posicion "+ position:"no se encuentra en el array");