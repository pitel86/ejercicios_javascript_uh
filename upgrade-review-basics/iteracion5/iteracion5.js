//Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
//Retorna el array resultante.

let players = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function modifyPlayers(array, index1, index2) {
  let newPlayers = [
    "Mesirve",
    "Cristiano Romualdo",
    "Fernando Muralla",
    "Ronalguiño",
  ];
  for (let i = 0; i < array.length; i++) {
    if (i == index1) {
      newPlayers[index2] = array[i];
    }
    if (i == index2) {
      newPlayers[index1] = array[i];
    }
  }
  return newPlayers;
}

console.log(modifyPlayers(players,1,3));
console.log(modifyPlayers(players,0,3));

