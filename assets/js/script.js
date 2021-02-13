// Takes input from search button and runs API's with input value. Updates local storage value with new input value
$('#alcohol-search').on('click', function getAlcoholData(event) {

  // clearCurrent();
  event.preventDefault();

  var alcoholName = $('#alcohol-name').val();

  localStorage.setItem('alcohol', alcoholName);
  createSearchHistory(alcoholName);

  getAlcoholImage(alcoholName);
  searchRecipePup(alcoholName);
  searchSpoon(alcoholName);
})


// function() to run cocktaildb API and display photo of selected alcohol on screen
function getAlcoholImage(alcohol) {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "__cfduid=d6ca9d40b18797da336304f25e85fd21d1612407137");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + alcohol, requestOptions)
    .then(response => response.text())
    .then(result => {
      var data = JSON.parse(result);
      console.log(data.drinks[0].strDrinkThumb);
      var alcoholUrl = data.drinks[0].strDrinkThumb
      $("#alcohol-pic").attr("src", alcoholUrl)
    })
    .catch(error => console.log('error', error));
};


// function() to run recipe puppy API and display recipes on screen
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


      // for loop to display recipe puppy results
      for (var i = 0; i < data.results.length; i++) {
        var puppyResults = $("<a>").text(data.results[i].title);
        var list = $("<br>")
        var link = data.results[i].href;
        console.log(data.results[i].href);
        puppyResults.attr("href", link)
        puppyResults.attr("target", "_blank")
        $("#drink-results").append(puppyResults, list)

      }
    });
};


// function() to run spoonacular API and display recipes on screen
function searchSpoon(alcohol) {

  fetch('https://api.spoonacular.com/recipes/complexSearch?type=drink&addRecipeInformation=true&includeIngredients=' + alcohol + '&apiKey=517baad9a7fa4dd49bccfef5a31fab4b')

    .then(function (response) {
      return response.json();
    })
    .then(function (drinkData) {
      console.log(drinkData);

      // for loop to display drink recipe results
      for (var i = 0; i < drinkData.results.length; i++) {
        var drinkResults = $("<a>").text(drinkData.results[i].title);
        var spoonList = $("<br>");
        var spoonLink = drinkData.results[i].sourceUrl;
        drinkResults.attr("href", spoonLink)
        drinkResults.attr("target", "_blank")
        $("#drink-results").append(drinkResults, spoonList);

      }
    });
};


// display last searched alcohol name in the search history when page is reloaded
if (localStorage.getItem("alcohol")) {
  createSearchHistory(localStorage.getItem("alcohol"));
};


// function() to create search history on screen as new alcohol names are searched
function createSearchHistory(city) {

  var historyBtn = $("<li>", { "class": "button" }).text(city);
  $("#history-search-btn").prepend(historyBtn);
};


// runs API's and displays results on screen when search history button is clicked
$('#history-search-btn').click(function (event) {

  // clearCurrent();
  localStorage.setItem("alcohol", event.target.textContent);

  getAlcoholImage(event.target.textContent);
  searchRecipePup(event.target.textContent);
  searchSpoon(event.target.textContent);
});


// function() to clear previous displayed API info so that the new search API info can take its place on the website
// function clearCurrent()