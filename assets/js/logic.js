var myAlliance, myCaptain, myShip, opponentAlliance, opponentShip, opponentCaptain, mySheild, opponentShield, opponentsLeft, fireLevel;

var federation = {
    shieldHP: 150,
    fullName: "United Federation of Planets",
    shortName: "federation",
    fighter: ["Picard", "Sisko", "Janeway"],
    ship: ["Enterprise-D", "Defiant", "Voyager"]
}
var klingon = {
    shieldHP: 150,
    fullName: "Klingon Empire",
    shortName: "klingon",
    fighter: ["Martok", "TKuvma", "Gowron"],
    ship: ["IKS Rotarran", "The Sarcophagus", "IKS Bortas"]
}
var romulan = {
    shieldHP: 120,
    fullName: "Romulan Star Empire",
    shortName: "romulan",
    fighter: ["Nero", "Sela", "Toreth"],
    ship: ["Narada", "Enterprise-C", "IRW Khazara"]
}
var dominion = {
    shieldHP: 100,
    fullName: "Dominion",
    shortName: "dominion",
    fighter: ["Changeling", "Jem Hadar", "Gul Dukat"],
    ship: ["The Great Link", "Jem Hadar Fighter", "Bird-of-Prey"]
}

var initialScreen = function () {
    opponentsLeft = [federation, klingon, romulan, dominion];
    myAlliance = "";
    opponentAlliance = "";
    mySheild = "";
    opponentShield = "";
    myShip = "";
    opponentShip = "";
    fireLevel = 8;
    $(".main-screen").append("<div class='choiceBox'>");
    $(".choiceBox").html("<h2 id='insideHeader'>Pick Your Alliance</h2>");
    opponentsLeft.forEach(element => {
        $(".choiceBox").append("<div class='Im-" + element.shortName + "'><img src='assets/images/Logos/" + element.shortName + "_logo.png' src='" + element.fullName + "'><p>" + element.fullName + "</p></div>");
    });


    update();
}

var update = function () {
    //update 
    if (myAlliance !== "") {
        $("#player-info").html("<div class='characterPick'><img src='assets/images/Captains/" + myCaptain + ".jpg' alt='" + myCaptain + "'><p>" + myCaptain + "</p></div><div><img src='assets/images/Ships/" + myShip + ".jpg' alt='" + myShip + "'><p>" + myShip + "</p></div><div><img src='assets/images/Logos/" + myAlliance.shortName + "_logo.png' alt='" + myAlliance.shortName + "'><p>" + myAlliance.fullName + "</p></div>");
        $("#yourHP").html(mySheild);
    }
    else {
        $("#player-info").html("");
    }
    if (opponentAlliance !== "") {
        $("#opponent-info").html("<div><img src='assets/images/Captains/" + opponentCaptain + ".jpg' alt='" + opponentCaptain + "'><p>" + opponentCaptain + "</p></div><div><img src='assets/images/Ships/" + opponentShip + ".jpg' alt='" + opponentShip + "'><p>" + opponentShip + "</p></div><div><img src='assets/images/Logos/" + opponentAlliance.shortName + "_logo.png' alt='" + opponentAlliance.shortName + "'><p>" + opponentAlliance.fullName + "</p></div>");
        $("#theirHP").html(opponentShield);
    }
    else {
        $("#opponent-info").html("");
        $("#theirHP").html("");
    }
    $("#opponentsLeft").html("");
    opponentsLeft.forEach(element => {
        if (element !== "") {
            $("#opponentsLeft").append("<img src='assets/images/Logos/" + element.shortName + "_logo.png' src = '" + element.fullName + "' id='button" + element.shortName + "'>");
        }
    });
}

var pickCapAndShip = function (which) {
    var randomPick = Math.floor(Math.random() * 3);
    if (which === "mine") {
        myCaptain = myAlliance.fighter[randomPick];
        myShip = myAlliance.ship[randomPick];
        mySheild = myAlliance.shieldHP;
    }
    else if (which === "yours") {
        opponentCaptain = opponentAlliance.fighter[randomPick];
        opponentShip = opponentAlliance.ship[randomPick];
        opponentShield = opponentAlliance.shieldHP;
    }

}

var showCapAndShip = function (whose) {
    if (whose === "mine") {
        $(".choiceBox").html("<h2>Your Captain & Ship</h2><div class='characterPick'><img src='assets/images/Captains/" + myCaptain + ".jpg' alt='" + myCaptain + "'><p>" + myCaptain + "</p></div><div class='characterPick'><img src='assets/images/Ships/" + myShip + ".jpg' alt='" + myShip + "'><p>" + myShip + "</p></div><button class='proceedButton' id='pickOpponent'>Pick Opponent</button>");
    }
    else if (whose === "yours") {
        $(".choiceBox").html("<h2>Their Captain & Ship</h2><div class='characterPick'><img src='assets/images/Captains/" + opponentCaptain + ".jpg' alt='" + opponentCaptain + "'><p>" + opponentCaptain + "</p></div><div class='characterPick'><img src='assets/images/Ships/" + opponentShip + ".jpg' alt='" + opponentShip + "'><p>" + opponentShip + "</p></div><button class='proceedButton' id='fight'>Fight</button>");
    }

    update();
}

$(document).ready(function () {

    $(document).on("click", ".Im-romulan", function () {
        myAlliance = romulan;
        opponentsLeft[opponentsLeft.indexOf(romulan)] = "";
        pickCapAndShip("mine");
        showCapAndShip("mine");
    });
    $(document).on("click", ".Im-klingon", function () {
        myAlliance = klingon;
        opponentsLeft[opponentsLeft.indexOf(klingon)] = "";
        pickCapAndShip("mine");
        showCapAndShip("mine");
    });
    $(document).on("click", ".Im-federation", function () {
        myAlliance = federation;
        opponentsLeft[opponentsLeft.indexOf(federation)] = "";
        pickCapAndShip("mine");
        showCapAndShip("mine");
    });
    $(document).on("click", ".Im-dominion", function () {
        myAlliance = dominion;
        opponentsLeft[opponentsLeft.indexOf(dominion)] = "";
        pickCapAndShip("mine");
        showCapAndShip("mine");
    });
    $(document).on("click", "#pickOpponent", function () {
        if($("#opponentsLeft").html()==="") {
            //win state
            $("#opponent-info").html("");
            $(".choiceBox").html("<h2>You Have Won!</h2><div><img src='assets/images/Captains/" + myCaptain + ".jpg' alt='" + myCaptain + "'><img src='assets/images/Ships/" + myShip + ".jpg' alt='" + myShip + "'></div><button class='proceedButton ' id='startOver'>Play Again</button>");
        }
        else {
            $(".choiceBox").html("<h2 id='insideHeader'>Pick Your Opponent</h2>");
            opponentsLeft.forEach(element => {
                if (element !== "") {
                    $(".choiceBox").append("<div class='Theyre-" + element.shortName + "'><img src='assets/images/Logos/" + element.shortName + "_logo.png' src='" + element.fullName + "'><p>" + element.fullName + "</p></div>");
                }
            });
        }

    });
    $(document).on("click", ".Theyre-romulan", function () {
        opponentAlliance = romulan;
        opponentsLeft[opponentsLeft.indexOf(romulan)] = "";
        pickCapAndShip("yours");
        showCapAndShip("yours");
    });
    $(document).on("click", ".Theyre-klingon", function () {
        opponentAlliance = klingon;
        opponentsLeft[opponentsLeft.indexOf(klingon)] = "";
        pickCapAndShip("yours");
        showCapAndShip("yours");
    });
    $(document).on("click", ".Theyre-federation", function () {
        opponentAlliance = federation;
        opponentsLeft[opponentsLeft.indexOf(federation)] = "";
        pickCapAndShip("yours");
        showCapAndShip("yours");
    });
    $(document).on("click", ".Theyre-dominion", function () {
        opponentAlliance = dominion;
        opponentsLeft[opponentsLeft.indexOf(dominion)] = "";
        pickCapAndShip("yours");
        showCapAndShip("yours");
    });
    $(document).on("click", "#fight", function () {
        $(".choiceBox").html("<h2>Time to Battle!</h2>");
        var leftShip = $("<img src='assets/images/Ships/" + myShip + ".jpg' alt='" + myShip + "'class='leftShip'>");
        var rightShip = $("<img src='assets/images/Ships/" + opponentShip + ".jpg' alt='" + opponentShip + "' class='rightShip'>");
        var fireButton = $("<button class='proceedButton fireButton' id='fight'>Fire</button>")
        $(".choiceBox").append("<div id=battleScreen>", leftShip, rightShip, fireButton, "<span id=notification></span></div>");
    });
    $(document).on("click", ".fireButton", function () {
        $("#notification").html("<p>You took " + fireLevel + " off their shield</p><p>They returned fire with 25 damage</p>");
        opponentShield -= fireLevel;
        if (opponentShield <= 0) {
            //they ded()
            opponentShield = 0;
            update();
            $(".choiceBox").html("<h2>You Are Victorious!</h2>");
            var leftShip = $("<img src='assets/images/Ships/" + myShip + ".jpg' alt='" + myShip + "'class='leftShip'>");
            var rightShip = $("<img src='assets/images/explosion.gif' alt='" + opponentShip + "' class='rightShip'>");
            var fireButton = $("<button class='proceedButton ' id='pickOpponent'>Find Next Opponent</button>")
            $(".choiceBox").append("<div id=battleScreen>", leftShip, rightShip, fireButton, "<span id=notification></span></div>");
            return;
        }
        mySheild -= 25;
        fireLevel += 15;
        if (mySheild <= 0) {
            //i ded()
            mySheild = 0;
            update();
            $(".choiceBox").html("<h2>You Are Defeated!</h2>");
            var leftShip = $("<img src='assets/images/explosion.gif' alt='Boom'class='leftShip'>");
            var rightShip = $("<img src='assets/images/Ships/" + opponentShip + ".jpg' alt='" + opponentShip + "' class='rightShip'>");
            var fireButton = $("<button class='proceedButton ' id='startOver'>Play Again</button>")
            $(".choiceBox").append("<div id=battleScreen>", leftShip, rightShip, fireButton, "<span id=notification></span></div>");
            return;
        }
        update();
    });

    $(document).on("click", "#startOver", function () {
        $(".main-screen").html("");
        initialScreen();
    });


    initialScreen();

});