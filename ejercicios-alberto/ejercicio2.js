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
let products = getCategoryProducts(pcProducts);
let names = getProductName(products);

console.log(names);

console.log("\nRecuperar los elementos que sean cool");
// 2. Recuperar los elementos que sean cool
let dataProducts = getProductData(products);
//console.log(dataProducts)
let coolProducts = isCoolProduct(dataProducts);
console.log(coolProducts);

console.log("\nRecuperar los productos con un valor inferior a 1000");
// 3. Recuperar los productos con un valor inferior a 1000
let cheaperProducts = isCheaper(products);
console.log(cheaperProducts);

console.log("\nRecuperar los articulos que sirvan para encriptar - isCrypto");
// 4. Recuperar los articulos que sirvan para encriptar - isCrypto
let cryptoProducts = isCryptoProduct(dataProducts);
console.log(cryptoProducts);

function getCategoryProducts(products) {
  let categoryProducts = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].products.length; j++) {
      categoryProducts.push(products[i].products[j]);
    }
  }
  return categoryProducts;
}

function getProductName(categoryProducts) {
  let names = [];
  for (let i = 0; i < categoryProducts.length; i++) {
    names.push(categoryProducts[i].name);
  }
  return names;
}

function getProductData(categoryProducts) {
  let dataProducts = [];
  for (let i = 0; i < categoryProducts.length; i++) {
    dataProducts.push(categoryProducts[i].data[0]);
  }
  return dataProducts;
}

function isCoolProduct(dataProducts) {
  let coolProducts = [];
  for (let i = 0; i < dataProducts.length; i++) {
    if (dataProducts[i].isCool === true) {
      coolProducts.push(dataProducts[i].name);
    }
  }
  return coolProducts;
}

function isCheaper(categoryProducts) {
  let names = [];
  for (let i = 0; i < categoryProducts.length; i++) {
    if (categoryProducts[i].price < 1000) {
      names.push(categoryProducts[i].name);
    }
  }
  return names;
}

function isCryptoProduct(dataProducts) {
  let cryptoProducts = [];
  for (let i = 0; i < dataProducts.length; i++) {
    if (dataProducts[i].isCrypto === true) {
      cryptoProducts.push(dataProducts[i].name);
    }
  }
  return cryptoProducts;
}
// let albertoSay = "Alberto dice:"
// let message = 'Esto es mejor para mí'
// console.log(`${​albertoSay}​ "${​message}​"`);
