//Completa la función que tomando dos números como argumento devuelva el más alto.
function numMayor(numberOne, numberTwo) {
    if(numberOne > numberTwo){
        console.log(numberOne);
        return numberOne
    }else{
        console.log(numberTwo);
        return numberTwo
    }
}

numMayor(3,5);
