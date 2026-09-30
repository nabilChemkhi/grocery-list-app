// Problem — Products and Categories

// Topics: loops, map, filter, spread, destructuring, objects, arrays, if/else

// You have a list of products:

const products = [
  { name: "Laptop", category: "electronics", price: 900, stock: 5 },
  { name: "Phone", category: "electronics", price: 600, stock: 0 }, //out of stock
  { name: "T-Shirt", category: "clothing", price: 30, stock: 10 },
  { name: "Jeans", category: "clothing", price: 60, stock: 3 },
  { name: "Headphones", category: "Electronics", price: 100, stock: 8 },
];
// Tasks
// Use a loop to print each product's name.
// Use if/else to print "In stock" or "Out of stock".

// Use filter() to find all electronics.
// Use filter() to find products costing less than 100.
// Use map() and destructuring to create an array containing only the product names.
// Use map() and spread to create a new array where every product has a discountedPrice property.
// Give every product a 10% discount.
// Your Solution:

// ------------------------------------
// 1 + 2. Loop + if/else
// ------------------------------------

const greaterThanZero = (n) => n > 0;

for (product of products) {
  // const stockStatus = greaterThanZero(product.stock)? "in stock" : "out of stock"
  // console.log(`${product.name} is ${stockStatus}`)

  if (greaterThanZero(product.stock)) {
    console.log(`${product.name} is in stock`);
  } else {
    console.log(`${product.name} is out of stock`);
  }
}

// ------------------------------------
// 3. Find electronics
// ------------------------------------

products
  .filter((p) => p.category.toLowerCase() === "electronics")
  .forEach((p) => console.log(p));

// ------------------------------------
// 4. Find products cheaper than 100
// ------------------------------------

products.filter((p) => p.price < 100).forEach((p) => console.log(p));

// ------------------------------------
// 5. Get only product names
// ------------------------------------

products
  .map((p) => {
    const { name } = p;
    return name;
  })
  .forEach((p) => console.log(p));

// products
//     .map(p => p.name)
//     .forEach(p => console.log(p))

// ------------------------------------
// 6 + 7. Add a discounted price
// ------------------------------------

const discountedProducts = products
  .map((p) => {
    const discountedPrice = p.price * 0.9;
    return { ...p, discountedPrice: discountedPrice };
  })
  .forEach((p) => console.log(p));