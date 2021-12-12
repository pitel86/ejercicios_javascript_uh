// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement("div");
document.body.appendChild(newDiv);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newDiv2 = document.createElement("div");
let newP = document.createElement("p");
newDiv2.appendChild(newP);
document.body.appendChild(newDiv2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDiv3= document.createElement("div");
for (let i = 0; i < 6; i++) {
    let newP2 = document.createElement("p");
    newDiv3.appendChild(newP2);
}
document.body.appendChild(newDiv3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP3 = document.createElement("p");
newP3.textContent = 'Soy dinámico!';
document.body.appendChild(newP3);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let newH2 = document.createElement("h2");
newH2.textContent = 'Wubba Lubba dub dub';
document.body.appendChild(newH2);
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let newUl = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = apps[i];
    newUl.appendChild(newLi);
    
}
document.body.appendChild(newUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let deleteElements = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < deleteElements.length; i++) {
    deleteElements[i].remove();
    
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let myDivs = document.querySelectorAll('div');
let newP4 = document.createElement("p");
newP4.textContent = "Voy en medio!";
document.body.insertBefore(newP4,myDivs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let myDivs2 = document.querySelectorAll('.fn-insert-here');
for (let i = 0; i < myDivs2.length; i++) {
    let newP5 = document.createElement("p");
    newP5.textContent = 'Voy dentro!';
    myDivs2[i].appendChild(newP5);
    
}