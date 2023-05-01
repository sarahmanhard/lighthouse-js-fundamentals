const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("\n");
console.log("As a while loop: \n");
let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}
console.log("\n");
console.log("As a for loop: \n");
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("\n");
console.log("As a for loop, but backwards: \n");
for (i = ingredients.length -1; i>= 0; i--) {
  console.log(ingredients[i]);
}
console.log("\n");