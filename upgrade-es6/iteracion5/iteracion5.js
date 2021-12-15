// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const olders = ages.filter(age => age > 18);
console.log(olders);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter(age => age % 2 === 0);
console.log(pares)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends");
console.log(lolStreamers);


// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

const lolStreamers2 = streamers.filter(streamer => streamer.gameMorePlayed === "League of Legends" && streamer.age < 30);
console.log(lolStreamers2);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.


const lolStreamers3 = streamers.filter((streamer) => {
    if (streamer.gameMorePlayed.includes("Legends")) {
      streamer.age > 35
        ? (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase())
        : streamer.gameMorePlayed;
      return streamer;
    }
  });
  console.log(lolStreamers3);


// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

const ul$$ = document.createElement("ul");
  
const runSearch = () => {
  const search = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(selectedInput$$.value.toLowerCase())
  );
  let ulContent = "";
  for (const result of search) {
      ulContent += `<li>${result.name}</li>`;
  }
  ul$$.innerHTML = ulContent;
};

const selectedInput$$ = document.body.querySelector(
  '[data-function="toFilterStreamers"]'
);

selectedInput$$.addEventListener("input", runSearch);

document.body.appendChild(ul$$);

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

const button2$$ = document.querySelector("button");
  const ul2$$ = document.createElement("ul");
  
  const runSearch2 = () => {
    const search = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(selectedInput2$$.value.toLowerCase())
    );
    let ulContent = "";
    for (const result of search) {
        ulContent += `<li>${result.name}</li>`;
    }
    ul2$$.innerHTML = ulContent;
  };
  
  const selectedInput2$$ = document.body.querySelector('input');
  
  button2$$.addEventListener("click", runSearch2);
  
  document.body.appendChild(ul2$$);