//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringArray) {
    let highString = "";
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > highString.length) {
            highString = stringArray[i];
        }
    }   
    console.log(highString);
    return highString; 
}

findLongestWord(avengers);