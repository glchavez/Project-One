// Global variables to set...
// var: name of alcohol that is selected
// var: multiple of these to link with list of predefined alcohols in html

// functions to use...
// .on("click") for alcohol selection
// .setItem() for alcohol selection into local storage
$("#alcohol-search").on("click", function getAlcoholData (event) {

    // clearCurrent();
    event.preventDefault();

    var alcoholName = $("#alcohol-name").val();

    // localStorage.setItem("alcohol", alcoholName);
    // createSearchHistory(alcoholName);

    searchDrinks(alcoholName);
});


// .fetch() for drink recipes
// Parameters will be...
// user selected alcohol
// Will display selected info on screen...
// 
// local var: creation of html elements for poplated info from API
function searchDrinks(alcohol) {

    fetch('http://www.recipepuppy.com/api/?i=' + alcohol, {
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            searchFood(alcohol);
        })
};


// .fetch() for food recipes
// Parameters will be...
// User selected alcohol
// Will display selected info on screen...
// 
// local var: creation of html elements for poplated info from API
function searchFood(alcohol) {

    fetch('https://api.spoonacular.com/recipes/complexSearch?includeIngredients=' + alcohol + '&fillIngredients=true&addRecipeInformation=true&number=10&apiKey=ead0fc7909d64d048c3a9e73cccc830f')

        .then(function (response) {
            return response.json();
        })
        .then(function (foodData) {
            console.log(foodData);
        })
};


// function() to display photo of selected alcohol on screen from images folder 
// function displayImage() {

// };


// function() to retreive local storage of alcohol name if page is reloaded/closed and opened again
    // .getItem()

    // function retreiveAlcoholType() {

    //     localStorage.getItem("");
    // };


// function() to clear the previous name of alcohol name entered in the global var: name of alcohol that is selected