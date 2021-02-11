// Global variables to set...
// var: multiple of these to link with html elements that will hold the API data and display on website

// functions to use...
// .on("click") for alcohol selection
// .setItem() for alcohol selection into local storage
$("#alcohol-search").on("click", function getAlcoholData(event) {

    // clearCurrent();
    event.preventDefault();

    var alcoholName = $("#alcohol-name").val();

    localStorage.setItem("alcohol", alcoholName);
    createSearchHistory(alcoholName);

    searchRecipePup(alcoholName);
    searchSpoon(alcoholName);
});


// .fetch() for drink recipes
// Parameters will be...
// user selected alcohol
function searchRecipePup(alcohol) {

    fetch("https://recipe-puppy.p.rapidapi.com/?i=" + alcohol + "&q=meal", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "75390b3d46msh2c16eb458cf4e24p18568ejsn950ca0042bd5",
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
        }
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

    fetch('https://api.spoonacular.com/recipes/complexSearch?type=drink&addRecipeInformation=true&includeIngredients=' + alcohol + '&apiKey=517baad9a7fa4dd49bccfef5a31fab4b')

        .then(function (response) {
            return response.json();
        })
        .then(function (drinkData) {
            console.log(drinkData);


            console.log(drinkData.results[0].title);

// for loop to display drink recipe results

            for (var i = 0; i < drinkData.results.length; i++) {
                var drinkResults = $("<li>").text(drinkData.results[i].title)
                $("#drink-results").append(drinkResults)

                console.log(drinkResults);


            }
        })


};


// function() to display photo of selected alcohol on screen
// function displayImage() {

// };


// function() for search history displayal on screen
if (localStorage.getItem("alcohol")) {
    createSearchHistory(localStorage.getItem("alcohol"));
};

function createSearchHistory(city) {

    var historyBtn = $("<li>", { "class": "button" }).text(city);
    $("#history-search-btn").prepend(historyBtn);
};

// runs API's and displays results on screen when history button is clicked
$("#history-search-btn").click(function (event) {

    // clearCurrent();
    localStorage.setItem("alcohol", event.target.textContent);

    searchRecipePup(event.target.textContent);
    searchSpoon(event.target.textContent);
});


// function() to clear previous displayed API info so that the new search API info can take its place on the website
    // function clearCurrent() {

    // };