//javascript for tp7

// function to load a file from url "fromFile" into object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}


//new recipe object

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, directionsURL, timeURL, reviewURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  //this.equipment = equipmentURL;
  this.directions = directionsURL;
  this.time = timeURL;
  this.review = reviewURL;
 
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    //loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
    loadFileInto(this.time, "#time ul");
    loadFileInto(this.review, "#review ul");
    
  }
  
}


GarlicBread = new Recipe ("Garlic Bread", 
                          "logan", 
                          "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80", 
                          "ingredients.html", 
                          //"equipment.html", 
                          "directions.html",
                          "time.html",
                          "review.html")

PeachCrisp = new Recipe ("Peach Crisp", 
                          "zaire", 
                          "https://images.unsplash.com/photo-1570978561297-793391262fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", 
                          "peachcrisp-ingredients.html", 
                          //"peachcrisp-equipment.html", 
                          "peachcrisp-directions.html",
                          "peachcrisp-time.html",
                          "peachcrisp-review.html")

LemonPankoCrustedSalmon = new Recipe ("Lemon Panko Crusted Salmon", 
                          "samuel", 
                          "https://images.unsplash.com/photo-1519625149185-7626ff3a86bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", 
                          "lemon-ingredients.html", 
                          //"lemon-equipment.html", 
                          "lemon-directions.html",
                          "lemon-time.html",
                          "lemon-review.html")

WhiteBread = new Recipe ("White Bread", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1592029780368-c1fff15bcfd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80", 
                          "white-bread-ingredients.html", 
                          //"lemon-equipment.html", 
                          "white-bread-directions.html",
                          "white-bread-time.html",
                          "white-bread-review.html")

SweetBread = new Recipe ("Sweet Bread", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1617450743602-6cc770046ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", 
                          "sweet-bread-ingredients.html", 
                          //"lemon-equipment.html", 
                          "sweet-bread-directions.html",
                          "sweet-bread-time.html",
                          "sweet-bread-review.html")

WheatBread = new Recipe ("Wheat Bread", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1537200275355-4f0c0714f777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
                          "wheat-bread-ingredients.html", 
                          //"lemon-equipment.html", 
                          "wheat-bread-directions.html",
                          "wheat-bread-time.html",
                          "wheat-bread-review.html")

CinnamonSwirlBread = new Recipe ("Cinnamon Swirl Bread", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1595666528312-116db26bc1ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", 
                          "cinnamon-swirl-bread-ingredients.html", 
                          //"lemon-equipment.html", 
                          "cinnamon-swirl-bread-directions.html",
                          "cinnamon-swirl-bread-time.html",
                          "cinnamon-swirl-bread-review.html")

ItalionBread = new Recipe ("Italion Bread", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
                          "italion-bread-ingredients.html", 
                          //"lemon-equipment.html", 
                          "italion-bread-directions.html",
                          "italion-bread-time.html",
                          "italion-bread-review.html")

MonkeyBread = new Recipe ("Monkey Bread", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80", 
                          "monkey-bread-ingredients.html", 
                          //"lemon-equipment.html", 
                          "monkey-bread-directions.html",
                          "monkey-bread-time.html",
                          "monkey-bread-review.html")

ReubenSandwich = new Recipe ("Reuben Sandwich", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80", 
                          "reuben-ingredients.html", 
                          //"lemon-equipment.html", 
                          "reuben-directions.html",
                          "reuben-time.html",
                          "reuben-review.html")

GrilledCheeseSandwich = new Recipe ("Grilled Cheese Sandwich", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80", 
                          "cheese-ingredients.html", 
                          //"lemon-equipment.html", 
                          "cheese-directions.html",
                          "cheese-time.html",
                          "cheese-review.html")

MonteCristoSandwich = new Recipe ("Monte Cristo Sandwich", 
                          "allrecipes", 
                          "https://images.pexels.com/photos/12664778/pexels-photo-12664778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
                          "cristo-ingredients.html", 
                          //"lemon-equipment.html", 
                          "cristo-directions.html",
                          "cristo-time.html",
                          "cristo-review.html")

CinnamonRollPancakes = new Recipe ("Cinnamon Roll Pancakes", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1659038857266-0a5f3ac79882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
                          "pancake-ingredients.html", 
                          //"lemon-equipment.html", 
                          "pancake-directions.html",
                          "pancake-time.html",
                          "pancake-review.html")

CinnamonRoll = new Recipe ("Cinnamon Roll", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1583527976767-5399024eeb05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
                          "roll-ingredients.html", 
                          //"lemon-equipment.html", 
                          "roll-directions.html",
                          "roll-time.html",
                          "roll-review.html")

CinnamonToast = new Recipe ("Cinnamon Toast", 
                          "allrecipes", 
                          "https://images.unsplash.com/photo-1612827788868-c8632040ab64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
                          "toast-ingredients.html", 
                          //"lemon-equipment.html", 
                          "toast-directions.html",
                          "toast-time.html",
                          "toast-review.html")




window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function(){
    GarlicBread.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function(){
    PeachCrisp.displayRecipe();
  }
    
  document.querySelector("#thirdRecipe").onclick = function(){
    LemonPankoCrustedSalmon.displayRecipe();
  }
  
  document.querySelector("#forthRecipe").onclick = function(){
    WhiteBread.displayRecipe();
  }
  
  document.querySelector("#fifthRecipe").onclick = function(){
    SweetBread.displayRecipe();
  }
  
  document.querySelector("#sixthRecipe").onclick = function(){
    WheatBread.displayRecipe();
  }
  
  document.querySelector("#seventhRecipe").onclick = function(){
    CinnamonSwirlBread.displayRecipe();
  }
    
  document.querySelector("#8Recipe").onclick = function(){
    ItalionBread.displayRecipe();
  }
  
  document.querySelector("#9Recipe").onclick = function(){
    MonkeyBread.displayRecipe();
  }
  
  document.querySelector("#10Recipe").onclick = function(){
    ReubenSandwich.displayRecipe();
  }
  
  document.querySelector("#11Recipe").onclick = function(){
    GrilledCheeseSandwich.displayRecipe();
  }
  
  document.querySelector("#12RecipeRecipe").onclick = function(){
    MonteCristoSandwich.displayRecipe();
  }
    
  document.querySelector("#13RecipeRecipe").onclick = function(){
    CinnamonRollPancakes.displayRecipe();
  }
  
  document.querySelector("#14RecipeRecipe").onclick = function(){
    CinnamonRoll.displayRecipe();
  }
  
  document.querySelector("#15RecipeRecipe").onclick = function(){
    CinnamonToast.displayRecipe();
  }
  
} //end window.onload
