var player = {
    name: "White Lightning",
    wins: 0,
    health: 40,
    healsRemaining: 2,
    gameDialog: "",
    getDamage: function () {
        return Math.floor((Math.random() * 3) + 1);
    },
    heal: function () {
        this.healsRemaining--;
        return Math.floor((Math.random() * 10) + 1);
    }
};

var grant = {
    name: "Big Red",
    grant: 10,
    getDamage: function () {
        return Math.floor((Math.random() * 3) + 1);
    }
};



function startCombat(choice) {
    var game = true;


    if (choice === "attack") {
        player.health -= player.getDamage();
        grant.grant -= grant.getDamage();
        player.gameDialog = "Your " + player.name + " jabbed " + grant.name + " and now they only have  " + grant.grant + " left " + grant.name + " pecked " + player.name + " and you have " + player.health + " health remaining.";

    } else if (choice === "quit") {
        player.gameDialog = "You were doing so well, though.";
        endGame();

    } else if (choice === "heal") {
        if (player.healsRemaining > 0) {
            player.health += player.heal();
            player.health -= player.getDamage();
            player.gameDialog = grant.name + " pecked " + player.name + ". You have " + player.health + " health remaining.  Good thing you healed your little friend!";
        } else if (player.healsRemaining <= 0) {
            player.gameDialog = "You've already used all your heals";
            choice = "attack";
        }

    }
    if (grant.grant <= 0) {
        grant.grant = 10;
        player.wins += 1;
        player.gameDialog = "Round " + player.wins + " won!";
    }

    if (player.health <= 0) {
        game = false;
        player.gameDialog = grant.name + " owned you...better luck next time";

    }

    if (player.wins >= 5) {
        player.gameDialog = "Congratulations, " + player.name + "! " + grant.name + " is no more!";

    }

    if (game === false) {
        endGame();
    }
    updatePlayerInfo();
    updateGrantInfo();
    updateScore();
    
}

function updatePlayerInfo() {
    var playerName = document.getElementById("playerName");
    var healsRemaining = document.getElementById("healsRemaining");
    var playerHealth = document.getElementById("playerHealth");
    playerName.innerText = player.name;
    healsRemaining.innerText = "Unused heals: " + player.healsRemaining;
    playerHealth.innerText = player.name + " health: " + player.health; 

}

function updateGrantInfo() {
    var grantName = document.getElementById("grantName");
    var grantHealth = document.getElementById("grantHealth");
    grantName.innerText = grant.name;
    grantHealth.innerText = grant.name + " health: " + grant.grant;

}

function updateScore() {
    var roundsWon = document.getElementById("roundsWon");
    var gameDialog = document.getElementById("gameDialog");
    roundsWon.innerText = "Rounds won: " + player.wins;
    gameDialog.innerText = player.gameDialog;

}

function startGame() {
    player.name = prompt("What are we going to call your fighter? (This is your chicken)");
    grant.name = prompt("Who is your fighter's nemesis? (Keep in mind, this is also a chicken)");
    updateScore();
    updatePlayerInfo();
    updateGrantInfo();
    var actionButtons = document.querySelectorAll(".actionButtons")[0];
    actionButtons.style.display = "flex";
    
}

function endGame() {
    var actionButtons = document.querySelectorAll(".actionButtons")[0];
    actionButtons.style.display = "none";
}









// List of objectives

/*

    1. The start button will execute the startGame function, which creates the character and Grand object
    //DONE  2. The attack, heal, and qui buttons will execute the startCombat function with an argument describing what action they have chosen, which will no longer contained in the while loop.
    3. The startCombat function will execute two functions:
        a. One function will update the character and Grant's information within the DOM
        b. One function will update the text relating to what has happened during the round

 */
