// Global variables to set...
// var: multiple of these to link with html elements that will hold the API data and display on website

// functions to use...
// .on("click") for alcohol selection
// .setItem() for alcohol selection into local storage
$("#alcohol-search").on("click", function getAlcoholData (event) {

    // clearCurrent();
    event.preventDefault();

    var alcoholName = $("#alcohol-name").val();

    // localStorage.setItem("alcohol", alcoholName);
    // createSearchHistory(alcoholName);

    searchRecipePup(alcoholName);
    searchSpoon(alcoholName);
});


// .fetch() for drink recipes
// Parameters will be...
// user selected alcohol
function searchRecipePup(alcohol) {

    fetch('http://www.recipepuppy.com/api/?i=' + alcohol + '&q=meal', {
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
        })
};


// .fetch() for food recipes
// Parameters will be...
// User selected alcohol
function searchSpoon(alcohol) {

    fetch('https://api.spoonacular.com/recipes/complexSearch?type=drink&addRecipeInformation=true&includeIngredients=' + alcohol + '&apiKey=ead0fc7909d64d048c3a9e73cccc830f')

        .then(function (response) {
            return response.json();
        })
        .then(function (foodData) {
            console.log(foodData);
        })
};


// function() to display photo of selected alcohol on screen
    // function displayImage() {

    // };


// function() for search history displayal on screen
    // function retreiveAlcoholType() {

    //     localStorage.getItem("");
    // };


// function() to clear previous displayed API info so that the new search API info can take its place on the website