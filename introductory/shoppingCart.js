const shoppingCart = [
  {
    name: "shirt",
    price: 1200,
  },
  {
    name: "pant",
    price: 2200,
  },
  {
    name: "shoe",
    price: 2500,
  },
  {
    name: "belt",
    price: 600,
  },
  {
    name: "tie",
    price: 500,
  },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
    // console.log(sum);
  }
  return parseFloat(sum).toFixed(2);
}
const cost = totalCost(shoppingCart);
console.log("Total cost of purchase:", cost, "Tk");
