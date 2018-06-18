var myAlliance, myCaptain, opponent, opponentCaptain;
var federation = {
    fighter: ["Picard", "Kirk", "Sisko", "Janeway"],
    ship: ["Enterprise", "Enterprise-D", "Defiant", "Voyager" ]
}
var klingon = {
    fighter: ["Jean-Luc Picard", "James Kirk", "Ben Sisko", "Kathryn Janeway"],
    ship: ["Enterprise-D", "Enterprise", "Defiant", "Voyager" ]
}
var romulan = {
    fighter: ["Picard", "Kirk", "Sisko", "Janeway"],
    ship: ["Enterprise", "Enterprise-D", "Defiant", "Voyager" ]
}
var dominion = {
    fighter: ["Changeling", "Jem'Hadar", "Weyoun", "Gul Dukat"],
    ship: ["", "", "", "" ]
}


$(document).ready(function() {
    $(".choiceOne").on("click", function() {
        alert("Federation");
    });
    $(".choiceTwo").on("click", function() {
        alert("Dominion");
    });
    $(".choiceThree").on("click", function() {
        alert("Klingon");
    });
    $(".choiceFour").on("click", function() {
        alert("Romulan");
    });







});