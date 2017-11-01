var player = {
    name: prompt("What are we going to call your fighter? (This is your chicken)"),
    wins: 0,
    health: 40,
    healsRemaining: 2,
    getDamage: function() {
           return Math.floor((Math.random() * 3) + 1);
    },
    heal: function() {
        this.healsRemaining--;
        return Math.floor((Math.random() * 10) + 1);
    }
};

var grant = {
    name: prompt("Who is your fighter's nemesis? (Keep in mind, this is also a chicken)"),
    grant: 10,
    getDamage: function() {
        return Math.floor((Math.random() * 3) + 1);
    }
};



function startCombat(choice) {
    var game = true;


    var nextRound = choice;

    if (nextRound === "attack") {
        player.health -= player.getDamage();
        grant.grant -= grant.getDamage();
        console.log("You hit " + grant.name +"! They have " + grant.grant + " health remaining!");
        console.log(grant.name + " pecked " + player.name + ". You have " + player.health + " health remaining.");

    } else if (nextRound === "quit") {
        console.log("You were doing so well, though.");
        return;

    } else if (nextRound === "heal") {
        if (player.healsRemaining > 0) {
            player.health += player.heal();
            player.health -= player.getDamage();
            console.log(grant.name + " pecked " + player.name + ". You have " + player.health + " health remaining.  Good thing you healed your little friend!");
        } else if (player.healsRemaining <= 0) {
            console.log("You've already used all your heals");
            nextRound = "attack";
        }
        
    } if (grant.grant <= 0) {
        grant.grant = 10;
        player.wins += 1;
        console.log("Round " + player.wins + " won!");
    }

    if (player.health <= 0) {
        game = false;
        console.log(grant.name + " owned you...better luck next time");
        
    }

    if (player.wins >= 5) {
        console.log("Congratulations, " + player.name + "! " + grant.name + " is no more!");
        
    }
    
}



// List of objectives

/*

    1. The start button will execute the startGame function, which creates the character and Grand object
    //DONE  2. The attack, heal, and qui buttons will execute the startCombat function with an argument describing what action they have chosen, which will no longer contained in the while loop.
    3. The startCombat function will execute two functions:
        a. One function will update the character and Grant's information within the DOM
        b. One function will update the text relating to what has happened during the round

 */
