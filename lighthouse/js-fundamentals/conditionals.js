const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your unmbrella!");
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

const cold = false;
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleaves are fine.");
}

const temperature = 12;
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleevesd won't cut it");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");
