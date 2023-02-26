//our "controller" that listens to an event ie. the click event on the page at the top 


function initListeners() {
    $("nav a").click(function(e){

        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        MODEL.updateView(contentID)
    });
}


$(document).ready(function(e) {
    initListeners();
    MODEL.updateView("homeContent");
});