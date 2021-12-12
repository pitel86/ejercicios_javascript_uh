// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let showMeButton = document.querySelector(".showme");
console.log(showMeButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let myh1 = document.querySelector("#pillado");
console.log(myh1);

// 1.3 Usa querySelector para mostrar por consola todos los p
let myPs = document.querySelectorAll("p");
console.log(myPs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let myPokemons = document.querySelectorAll(".pokemon");
console.log(myPokemons);


// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
let testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
console.log(testMe[2]);

