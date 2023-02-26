//deals with data (store, retrieve)

var MODEL = (function() {
    //underscores are used to identify it easier, private for the class or file
    var _homeContent = ` <div class="hero"><img src="hero-image.png"></div>`;

    var _aboutContent = `<h1>About Us</h1>`;

    var _productsContent = `<h1>Our Products</h1>`;

    var _contactContent = `<h1>Contact Us</h1>`;



    var _updateView = function(pageName){
        console.log("Model" + pageName);
        var pageContent = "_" + pageName;

        $("#app").html(eval(pageContent));
    };





    //how to make it public?

    return {
        updateView: _updateView
    }

})();

//the last two () are there to call the function (self executing function)