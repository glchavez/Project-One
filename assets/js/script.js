// Global variables to set...

var alcohol = $('#alcohol-name').val()
var alcoholThumbnail = $('.thumbnail')

// var: multiple of these to link with html elements that will hold the API data and display on website

// functions to use...
// .on("click") for alcohol selection
// .setItem() for alcohol selection into local storage

// function() for search history displayal on screen
// if (localStorage.getItem("alcohol")) {
//     createSearchHistory(localStorage.getItem("alcohol"));
// };



$('#alcohol-search').on('click', function getAlcoholData (event) {
  // clearCurrent();
  event.preventDefault()

  var alcoholName = $('#alcohol-name').val()

  localStorage.setItem('alcohol', alcohol)

  getAlcoholImage(alcoholName)
  //searchRecipePup(alcoholName);
  //searchSpoon(alcoholName);
})

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
// function searchSpoon(alcohol) {

//     fetch('https://api.spoonacular.com/recipes/complexSearch?type=drink&addRecipeInformation=true&includeIngredients=' + alcohol + '&apiKey=ead0fc7909d64d048c3a9e73cccc830f')

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (foodData) {
//             console.log(foodData);
//         })
// };

// function() to display photo of selected alcohol on screen
function getAlcoholImage (alcohol) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=d6ca9d40b18797da336304f25e85fd21d1612407137");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +alcohol, requestOptions)
      .then(response => response.text())
      .then(result => {
          var data = JSON.parse(result);
        console.log(data.drinks[0].strDrinkThumb);
        var alcoholUrl = data.drinks[0].strDrinkThumb
        $("#alcohol-pic").attr("src", alcoholUrl)
      })
      .catch(error => console.log('error', error));

      
}

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



    var historyBtn = $("<li>", { "class": "button" }).text(city);
    $("#history-search-btn").prepend(historyBtn);
};

//   // fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcohol)
//   fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcohol + '')

//           .then(function (response) {
//               console.log(response);
//             return response.json();
            
//         })
//         .then(function () {
//             console.log(data);
//         })
// };


//   .then(result => result.text())
//   .then(data => console.log(data))
// }


//     var alcoholImage = getAlcoholImage (alcohol).data
//     console.log(alcoholImage[1].strDrinkThumb)
  
//   $('alcoholThumbnail').append(alcoholImage);
  

 // $("#history-search-btn").click(function() {
    // ":first" and ":first-child" will work.
  //      $(".alcoholThumbnail").append("drinks.child");
  



//

getAlcoholImage(alcohol)
//displaylImage(alcoholName);

// runs API's and displays results on screen when history button is clicked
$('#history-search-btn').click(function (event) {
  getAlcoholImage(alcohol)

  // clearCurrent();
  //localStorage.setItem("alcohol", event.target.textContent);

  // searchRecipePup(event.target.textContent);
  // searchSpoon(event.target.textContent);
})

// function() to clear previous displayed API info so that the new search API info can take its place on the website
// function clearCurrent() {
