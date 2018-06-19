var myAlliance, myCaptain, myShip, opponentAlliance, opponentShip, opponentCaptain, mySheild, opponentShield, opponentsLeft;

var federation = {
    shieldHP: 140,
    fullName: "United Federation of Planets",
    shortName: "federation",
    fighter: ["Picard", "Sisko", "Janeway"],
    ship: ["Enterprise-D", "Defiant", "Voyager"]
}
var klingon = {
    shieldHP: 160,
    fullName: "Klingon Empire",
    shortName: "klingon",
    fighter: ["General Martok", "TKuvma", "Chancellor Gowron"],
    ship: ["IKS Rotarran", "The Sarcophagus", "IKS Bortas"]
}
var romulan = {
    shieldHP: 120,
    fullName: "Romulan Star Empire",
    shortName: "romulan",
    fighter: ["Nero", "Sela", "Commander Toreth"],
    ship: ["Narada", "Enterprise-C", "IRW Khazara"]
}
var dominion = {
    shieldHP: 100,
    fullName: "Dominion",
    shortName: "dominion",
    fighter: ["Female Changeling", "Jem Hadar", "Gul Dukat"],
    ship: ["The Great Link", "Jem Hadar Fighter", "Dukats Bird-of-Prey"]
}

var initialScreen = function () {
    opponentsLeft = [federation, klingon, romulan, dominion];
    myAlliance = "";
    opponentAlliance = "";
    mySheild = "";
    opponentShield = "";
    myShip = "";
    opponentShip = "";
    $(".main-screen").append("<div class='choiceBox'>");
    $(".choiceBox").html("<h2 id='insideHeader'>Pick Your Alliance</h2>");
    opponentsLeft.forEach(element => {
        $(".choiceBox").append("<div class='Im-" + element.shortName + "'><img src='assets/images/Logos/" + element.shortName + "_logo.png' src='" + element.fullName + "'><p>" + element.fullName + "</p></div>");
    });


    update();
}

var update = function () {
    //update 
    if (myAlliance === "") {
        $("#player-info").html("");
        $("#yourHP").html("");
    }
    else {
        //if you pick a side stuff goes here
    }
    if (opponentAlliance === "") {
        $("#opponent-info").html("");
        $("#theirHP").html("");
    }
    else {
        //if you picked opponent it goes here
    }
    $("#opponentsLeft").html("");
    opponentsLeft.forEach(element => {
        $("#opponentsLeft").append("<img src='assets/images/Logos/" + element.shortName + "_logo.png' src = '" + element.fullName + "' id='button" + element.shortName + "'>");
    });
}

var pickCapAndShip = function (which) {
    var randomPick = Math.floor(Math.random() * 3);
    if (which === "mine") {
        myCaptain = myAlliance.fighter[randomPick];
        myShip = myAlliance.ship[randomPick];
    }
    else if (which === "yours") {

    }

}

var showCapAndShip = function() {
    $(".choiceBox").html("<h2>Your Captain & Ship</h2><div class='characterPick'><img src='assets/images/Captains/"+myCaptain+".jpg' alt='"+myCaptain+"'><p>"+myCaptain+"</p></div><div class='characterPick'><img src='assets/images/Ships/"+myShip+".jpg' alt='"+myShip+"'><p>"+myShip+"</p></div><button class='proceedButton' id='pickOpponent'>Pick Opponent</button>");


}

$(document).ready(function () {

    initialScreen();

    $(document).on("click", ".Im-romulan", function () {
        myAlliance = romulan;
        pickCapAndShip("mine");
        showCapAndShip();
    });
    $(document).on("click", ".Im-klingon", function () {
        myAlliance = klingon;
        pickCapAndShip("mine");
        showCapAndShip();
    });
    $(document).on("click", ".Im-federation", function () {
        myAlliance = federation;
        pickCapAndShip("mine");
        showCapAndShip();
    });
    $(document).on("click", ".Im-dominion", function () {
        myAlliance = dominion;
        pickCapAndShip("mine");
        showCapAndShip();
    });
    $(document).on("click", "#pickOpponent", function () {
        console.log("hi");
    });











});