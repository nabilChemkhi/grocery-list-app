// Problem — Shopping Cart
// Topics: map, filter, objects, spread, array operations

// You have a shopping cart array.

// Tasks:
// Use map() to create a new array containing the price of each item multiplied by its quantity.
// Use filter() to find items that cost more than 100.
// Use map() and the spread operator to create a new cart where every item also has a total property.
// Calculate the total cost of the entire cart.

// Your Solution:

const cart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 },
  { name: "Monitor", price: 200, quantity: 2 },
];

// ------------------------------------
// 1. Use map() to calculate each item's total
// ------------------------------------









// expected output: [800, 50, 50, 400]

// ------------------------------------
// 2. Use filter() to find expensive items
// ------------------------------------







// expected output: [800, 50, 50, 400]

// ------------------------------------
// 3. Use map() + spread to create new objects
// ------------------------------------









// expected output: full array with extra field

// ------------------------------------
// 4. Calculate the total cart price
// ------------------------------------









// expected output: Cart total: ***