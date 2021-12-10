let pcProducts = [
  {
    id: 1,
    name: "portatiles",
    products: [
      {
        name: "MacBook Pro",
        price: 1500,
        data: [
          {
            name: "Procesador",
            info: "M1",
          },
          {
            name: "Ram",
            info: "16Gb",
          },
        ],
      },
      {
        name: "MacBook Air",
        price: 900,
        data: [
          {
            name: "Procesador",
            info: "M1",
          },
          {
            name: "Ram",
            info: "8Gb",
          },
        ],
      },
      {
        name: "MacMini",
        price: 1000,
        data: [
          {
            name: "Procesador",
            info: "M1",
          },
          {
            name: "Ram",
            info: "8Gb",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tarjetas Graficas",
    products: [
      {
        name: "NVIDIA 3000 serie",
        price: 1800,
        data: [
          {
            name: "GTX NVIDIA 3070",
            isCrypto: true,
          },
        ],
      },
      {
        name: "NVIDIA 8000 serie",
        price: 5000,
        data: [
          {
            name: "GTX NVIDIA 5070",
            isCrypto: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Teclados",
    products: [
      {
        name: "Teclado mecanico",
        price: 100,
        data: [
          {
            name: "Teclado mecanico molon",
            isCool: true,
          },
        ],
      },
      {
        name: "Teclado macbook",
        price: 90,
        data: [
          {
            name: "Teclado estafa",
            isCool: false,
          },
        ],
      },
      {
        name: "Teclado logitech",
        price: 40,
        data: [
          {
            name: "Teclado premium",
            isCool: false,
          },
        ],
      },
    ],
  },
];

console.log("\nSacar los productos por categoria");
// 1. Sacar los productos por categoria
for (let i = 0; i < pcProducts.length; i++) {
  let categoryProducts = pcProducts[i].products;
  console.log("\nCategoría:", pcProducts[i].name);
  for (let j = 0; j < categoryProducts.length; j++) {
    console.log(categoryProducts[j].name);
  }
}

console.log("\n\nRecuperar los elementos que sean cool");
// 2. Recuperar los elementos que sean cool
for (let i = 0; i < pcProducts.length; i++) {
  let categoryProducts = pcProducts[i].products;
  console.log("\nCategoría:", pcProducts[i].name);
  for (let j = 0; j < categoryProducts.length; j++) {
    let dataProduct = categoryProducts[j].data;
    for (let k = 0; k < dataProduct.length; k++) {
      if (dataProduct[k].isCool === true) {
        console.log(dataProduct[k].name);
      }
    }
  }
}

console.log("\n\nRecuperar los productos con un valor inferior a 1000");
// 3. Recuperar los productos con un valor inferior a 1000
for (let i = 0; i < pcProducts.length; i++) {
  let categoryProducts = pcProducts[i].products;
  console.log("\nCategoría:", pcProducts[i].name);
  for (let j = 0; j < categoryProducts.length; j++) {
    if (categoryProducts[j].price < 1000) {
      console.log(categoryProducts[j].name);
    }
  }
}

console.log("\n\nRecuperar los articulos que sirvan para encriptar - isCrypto");
// 4. Recuperar los articulos que sirvan para encriptar - isCrypto
for (let i = 0; i < pcProducts.length; i++) {
  let categoryProducts = pcProducts[i].products;
  console.log("\nCategoría:", pcProducts[i].name);
  for (let j = 0; j < categoryProducts.length; j++) {
    let dataProduct = categoryProducts[j].data;
    for (let k = 0; k < dataProduct.length; k++) {
      if (dataProduct[k].isCrypto === true) {
        console.log(dataProduct[k].name);
      }
    }
  }
}

// let albertoSay = "Alberto dice:"
// let message = 'Esto es mejor para mí'
// console.log(`${​albertoSay}​ "${​message}​"`);
