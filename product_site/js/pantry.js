// original amount of ingredients
var recipeName = "Margherita Pizza";
var originalServings = 2;
var flour = 2;
var water = 0.75;
var cheese = 8;

// new amount 
var servings = 4;
var newflour = (flour/originalServings)*servings;
var newWater = (water/originalServings)*servings;
var newCheese = (cheese/originalServings)*servings;


var recipe = document.getElementById("recipeName");
recipe.textContent = recipeName;

var ingredients = document.getElementsByClassName("ingredients");
ingredients[0].textContent = "Flour: " + newflour + " cups";
ingredients[1].textContent = "Water: " + newWater + " cups";
ingredients[2].textContent = "Cheese: " + newCheese + " oz";

var para = document.getElementsByTagName("p");
para[2].textContent = "This makes " + servings + " servings";

var results = document.querySelector("#result");
results.innerHTML = "Enjoy you " + recipeName;