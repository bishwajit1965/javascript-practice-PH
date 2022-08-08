const shoppingCart = [
  { name: "shirt", price: 1200, quantity: 5 },
  { name: "pant", price: 2200, quantity: 4 },
  { name: "shoe", price: 2500, quantity: 3 },
  { name: "belt", price: 600, quantity: 3 },
  { name: "tie", price: 500, quantity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productCost = product.price * product.quantity;
    sum = sum + productCost;
    // console.log(sum);
  }
  return parseFloat(sum).toFixed(2);
}
const cost = totalCost(shoppingCart);
console.log("Total cost of purchase:", cost, "Tk");
