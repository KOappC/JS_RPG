startGame();

var player = {
    wins: 0,
    health: 40,
    healsRemaining: 2,
    name: prompt("What are we going to call your competitor?"),
    getDamage() {
        return Math.floor((Math.random() * 3) + 1);
    },
    heal(healsRemaining) {
        this.healsRemaining = healsRemaining;
        return Math.floor((Math.random() * 10) + 1);
    }
};

var grant = {
    grant: 10,
    name: prompt("Who is your nemesis? (keep in mind this is a chicken)"),
    getDamage() {
        return Math.floor((Math.random() * 3) + 1);
    }

};


function startGame() {
    var play = prompt("Chicken fight time!  Are you ready?").toLowerCase();
    if (play === "yes"){
        startCombat()
    } else if (play !== "yes"){
        console.log("You know where to find me, if you change your mind.");
    }
}


function startCombat(player, grant) {


    while (game = true) {

        var nextRound = prompt("Would you like to attack, heal or chicken out?").toLowerCase();

        if (nextRound === "attack") {
            player -= player.getDamage();
            grant -= grant.getDamage();

            console.log(grant.name + " pecked " + player.name + ". You have " + player.health + " health remaining.");
            console.log("You hit " + grant.name +"! They have " + grant.grant + " health remaining!");
        } else if (nextRound !== "attack") {
            console.log("You were doing so well, though.");
            return;
        }

        if (nextRound === "heal" && player.healsRemaining > 0) {
            player.health += player.heal();
            player.healsRemaining -= 1;
        } else if (nextRound === "heal" && player.healsRemaining <= 0) {
            console.log("You've already used all your heals");
            return;
        }

        if (grant.grant <= 0) {
            grant.grant = 10;
            player.wins += 1;
            console.log("Round " + wins + " won!");
        }

        if (player.health <= 0) {
            game = false;
            console.log(grant.name + " owned you...better luck next time");
            break;
        }

        if (player.wins === 5) {
            console.log("Congratulations, " + player.name + "! " + grant.name + " is no more!");
            break;
        }
    }
}



// List of objectives

/*

    Things that i think:

        need to:
            - "get to" the player and grant objects in startGame()

        want to:
            - create default player name

    part 3 requirements:

        //DONE  1. Each time the user is prompted, they have the choice either to attack, heal or quit.
                        Grant always attacks.
        //DONE  2. Do not allow heal if there are no heals remaining.
        //DONE  3. Grant still regenerates to 10 when his health hits 0.  Every time this happens, add 1 to
                        the user character's wins.
        //DONE  4. When the user character's wins reaches 5, Grant is defeated and the game is over.
        //DONE  5. When the user character's health reaches 0, the user is defeated and the game is over.
        //DONE  6. Continue to log health and wins at each iteration using the name entered by the user at
                        the beginning, just as in previous parts of the lab


 */
