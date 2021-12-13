// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
let newUl$$ = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
  let newLi$$ = document.createElement("li");
  newLi$$.textContent = countries[i];
  newUl$$.appendChild(newLi$$);
}

document.body.appendChild(newUl$$);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let eraseElement = document.body.querySelector(".fn-remove-me");
eraseElement.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let newUl2$$ = document.createElement("ul");
let myDiv$$ = document.querySelector('[data-function="printHere"]');

for (let i = 0; i < cars.length; i++) {
  let newLi$$ = document.createElement("li");
  newLi$$.textContent = cars[i];
  newUl2$$.appendChild(newLi$$);
}

myDiv$$.appendChild(newUl2$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
for (let i = 0; i < countries2.length; i++) {
    let myDiv$$ = document.createElement('div');
    myDiv$$.innerHTML = `<h4>${countries2[i].title}</h4><img src="${countries2[i].imgUrl}">`;
    document.body.appendChild(myDiv$$);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

let myDiv2$$ = document.querySelectorAll('div');
let myButton$$ = document.createElement('button');
myButton$$.textContent = "Elimino el último";

function deleteDiv() {
  let myDiv2$$ = document.querySelectorAll('div');
  myDiv2$$[myDiv2$$.length - 1].remove();
}

myButton$$.addEventListener('click', deleteDiv);
document.body.appendChild(myButton$$);
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.
const countries3 = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  for (let i = 0; i < countries3.length; i++) {
      let myDiv$$ = document.createElement('div');
      myDiv$$.innerHTML = `<h4>${countries3[i].title}</h4><img src="${countries3[i].imgUrl}">`;
      let myButton$$ = document.createElement('button');
      myButton$$.textContent = "Elimino el mío";
      myButton$$.addEventListener('click', () => {
          myDiv$$.remove();
      });
      myDiv$$.appendChild(myButton$$);
      document.body.appendChild(myDiv$$);
  }