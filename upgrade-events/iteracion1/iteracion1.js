// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
let myButton = document.querySelector("#btnToClick");
myButton.addEventListener("click", function () {
  console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let myInputs = document.body.querySelectorAll("input");
for (let i = 0; i < myInputs.length; i++) {
  myInputs[i].addEventListener("focus", function (event) {
    console.log(this.value);
  });
}


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let myInputs2 = document.body.querySelectorAll("input");
for (let i = 0; i < myInputs2.length; i++) {
  myInputs2[i].addEventListener("input", function (event) {
    console.log(this.value);
  });
}
