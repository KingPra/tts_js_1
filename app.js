// Challenge 1

//  Do you need more coffee?

// Write a script that:

// Stores the number of cups (that a person has consumed) in a variable
// If the person has had *less than* 3 cups
// Log a message to the console saying: ("Yes I'll take another cup of coffee")
// If not
// Log a message to the console saying ("I think I'm okay for now")

const coffeeForm = document.getElementById("form-coffee");
const cups = document.getElementById("cups");
const coffeeLog = document.getElementById("coffee-log");

function coffee(event) {
  event.preventDefault();
  coffeeLog.textContent =
    cups.value < 3 ? "Yes I'll take another cup of coffee" : "I'm okay for now";
  console.log(
    cups.value < 3 ? "Yes I'll take another cup of coffee" : "I'm okay for now"
  );
}

coffeeForm.addEventListener("submit", coffee);

// Challenge 2
// Create a variable for the temperature and set it to 80
// Write a statement that outputs the temperature as "The temperature is 80 degrees";
// If the temp is greater than 80, output "time to swim" (set temp to 60, 90) and test;
// Create a precipitation variable and set it to false
// Only output "time to swim" if temp is greater than 80 and its not raining
// Set the precipitation variable to 'raining' or 'snowing' and only output 'time to swim' if there is no precipitation
// Create an 'indoors' variable and set it to true
// If indoors, then output 'time to swim' regardless of the temp and precip.
const temp = document.getElementById("temp");
const tempForm = document.getElementById("form-temp");
const weatherCondition = document.getElementById("weather-condition");
const swimLog = document.getElementById("swim-log");
const pool = document.getElementById("pool");
let precipitation = false;
let indoor = true;

function swim(event) {
  event.preventDefault();
  pool.value === "indoor" ? (indoor = true) : (indoor = false);
  weatherCondition !== "sunny"
    ? (precipitation = false)
    : (precipitation = true);
  swimLog.textContent =
    indoor || (!precipitation && temp.value > 80)
      ? "Time to swim"
      : "Just stay inside";
}
tempForm.addEventListener("submit", swim);

// Challenge 3
// Using a for loop:
// Write a simple version of "99 bottles of root beer on the wall"
// note: make sure you're logging the result to the console​
// Once you get the program running, log "Hey! We need more root beer!" to the console when your counter hit's 0

function byob() {
  for (let i = 99; i >= 0; i--) {
    if (i != 0 && i > 1) {
      console.log(`${i} bottles of root beer on the wall`);
    } else if (i === 1) {
      console.log(`${i} bottle of root beer on the wall`);
    } else {
      console.log("Hey! We need more root beer");
    }
  }
}
console.log(byob());
