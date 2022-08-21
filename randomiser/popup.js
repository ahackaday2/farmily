//When home btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var homeButton = document.getElementById("home"); 

    homeButton.addEventListener("click", function() {
        window.location.href = "../homepopup/popup.html";
    });
}); 