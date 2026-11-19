//Function 1: calculating function for the servings
function calculateServing(amount, originalServing, servings){
    return (amount/originalServing)*servings;
}

//function 2: function for the recipe recommendations
function recipeRecommendation(hasbread, hascheese, hasflour, hastomatoe){
    var message ="";
    if(hasbread) {
        if(hascheese)
            {message = "You can make a Grilled Cheese";}
        else
            {message = "Need cheese for a Grilled Cheese";}
    }else if (hasflour) {
        if(hascheese && hastomatoe)
            {message = "You can make a pizza";}
        else
            {message = "missing an ingredient";}
    }else
        {message = "No recipe available for you";}
    return message;
}

//function 3: function to show the recipes
function showRecipes(){
    var recipes=["Grilled cheese", "Margherita pizza"];
    var recipeList= document.getElementById("recipes");
    if(recipeList) {
        for(var i = 0; i < recipes.length; i++) {
            var item = document.createElement("li");
            item.textContent=recipes[i];
            item.className= "recipe";
            recipeList.appendChild(item);
        }
    }
}

//Uses the first function to calculate the recipes
if(document.getElementById("recipeName")) {

    var recipeName = "Margherita Pizza";
    var originalServings = 2;
    var servings = 4;

// new amount
    var newflour = calculateServing(2,originalServings, servings);
    var newWater = calculateServing(0.75,originalServings, servings);
    var newCheese = calculateServing(8,originalServings, servings);

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
}

// displays the available recipes you can make
if(document.getElementById("recipes")) {
    showRecipes();
}

//Decision tree
var button = document.getElementById("findRecipe");

if (button) {
    button.addEventListener("click", function () {
        var hasbread = document.getElementById("bread").checked;
        var hascheese = document.getElementById("cheese").checked;
        var hasflour = document.getElementById("flour").checked;
        var hastomatoe = document.getElementById("tomatoes").checked;

        var message = recipeRecommendation(hasbread, hascheese, hasflour, hastomatoe);
        document.getElementById("recs").textContent = message;
    })
}

//Node
var cards = document.querySelectorAll(".recipe");
if (cards.length > 0) {
    for(var j = 0; j < cards.length; j++) {
        cards[j].style.color = "red";
        cards[j].style.fontWeight = "bold";
    }
}

//while loop
var cookingTips = ["Wash Hands", "Prepare ingredients"];
var c = 0;
var tipList = document.getElementById("tips");
if(tipList) {
    while(c < cookingTips.length) {
        var tip = document.createElement("li");
        tip.textContent = cookingTips[c];
        tipList.appendChild(tip);
        c++;
    }
}
