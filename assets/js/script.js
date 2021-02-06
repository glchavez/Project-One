console.log("Connection successful");


// When predefined list of alcohols are presented to user...
    // User selects an alcohol
        // User search selection is stored in local storage
    // That alcohol selection is run in the API to pull min of 5 recipes for both drinks and food to the home page
        // Photo of the alcohol is displayed on the screen
        // List of recipes are displayed

// If user selects a new predefined alcohol and searches...
    // Users new selection replaces the local storage
    // Alcohol photo and list of recipes are repopulated for the newly selected type of alcohol

// If page is reloaded/closed and returned to, it displays the recipes of the last alcohol selected



// Global variables to set...
    // var: name of alcohol that is selected
    // var: multiple of these to link with list of predefined alcohols in html

// functions to use...
    // .on("click") for alcohol selection
        // .setItem() for alcohol selection into local storage

    // function() to display photo of selected alcohol on screen from images folder 

    // .fetch() for drink recipes
        // Parameters will be...
            // user selected alcohol
        // Will display selected info on screen...
            // 
            // local var: creation of html elements for poplated info from API

    
    // .fetch() for food recipes
        // Parameters will be...
            // User selected alcohol
        // Will display selected info on screen...
            // 
        // local var: creation of html elements for poplated info from API


    // function() to retreive local storage of alcohol name if page is reloaded/closed and opened again
        // .getItem()

    // function() to clear the previous name of alcohol name entered in the global var: name of alcohol that is selected