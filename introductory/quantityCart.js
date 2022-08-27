const shoppingCart = [
  { name: "shirt", price: 1200, quantity: 5 },
  { name: "pant", price: 2200, quantity: 4 },
  { name: "shoe", price: 2500, quantity: 3 },
  { name: "belt", price: 600, quantity: 3 },
  { name: "tie", price: 500, quantity: 3 },
  { name: "bodySpray", price: 500, quantity: 2 },
  { name: "bedCover", price: 1200, quantity: 2 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productCost = product.price * product.quantity;
    sum = sum + productCost;
    if (sum >= 20000) {
      const reduction = 0.02;
      const waiver = sum * reduction;
      sum = sum - waiver;
    }
  }
  return parseFloat(sum).toFixed(2);
}
const cost = totalCost(shoppingCart);
console.log("Total cost of purchase: ", cost, "Tk");
