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
var updateButton = document.getElementById("servingsButton");
function updateRecipe(){

    var originalServings = 2;
    // gets the serving number from the user
    var servings = Number(document.getElementById("servings").value);

    var message = document.getElementById("servingsInfo");

    // new amount. checks if the new number is positive
    if(servings >0 && Number.isInteger(servings)){
        var newflour = calculateServing(2,originalServings, servings);
        var newWater = calculateServing(0.75,originalServings, servings);
        var newCheese = calculateServing(8,originalServings, servings);

        var ingredients = document.getElementsByClassName("ingredients");
        ingredients[0].textContent = "Flour: " + newflour + " cups";
        ingredients[1].textContent = "Water: " + newWater + " cups";
        ingredients[2].textContent = "Cheese: " + newCheese + " oz";

        message.textContent = "this makes " + servings + " serving";
        message.style.color = "green";

        document.getElementById("result").textContent = "Enjoy your pizza!";
    }else{
        message.textContent = "Please put a real number";
        message.style.color = "red";
    }
}
// if the button is on the page then its going tor run the function
if(updateButton){
    updateButton.addEventListener("click", updateRecipe);
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
