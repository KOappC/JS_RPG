startGame();

function getDamage() {
    return Math.floor((Math.random() * 5) + 1);
}

function startGame() {
    var play = prompt("Are you ready to rumble?!").toLowerCase();
    if (play === "yes"){
        var name = prompt("What are we going to call you, big shot?");
        startCombat(name);
    } else if (play !== "yes"){
        console.log("You know where to find me, if you change your mind.");
    }
}

function startCombat(name) {
    var health = 40;
    var grant = 10;
    var wins = 0;

    while (cont = true) {
        if (wins === 3) {
            console.log("Congratulations, " + name + "! Grant is no more!");
            break;
        }

        var nextRound = prompt("Would you like to attack or chicken out?").toLowerCase();

        if (nextRound === "attack") {
            health -= getDamage();
            grant -= getDamage();

            console.log("Grant pecked " + name + ". You have " + health + " health remaining.");
            console.log("You hit Grant! They have " + grant + " health remaining!");
        } else if (nextRound !== "attack") {
            console.log("You were doing so well, though.");
            return;
        }

        if (grant <= 0) {
            grant = 10;
            wins += 1;
            console.log("Round " + wins + " won!");
        }

        if (health <= 0) {
            cont = false;
            console.log("Grant owned you...better luck next time");
            break;
        }
    }
}



// List of objectives

/*

    Things that i think:


    want to:
        - create default player name

    part 3 requirements:

        1. Each time the user is prompted, they ahve the choice either to attack, heal or quit.  Grant always attacks.
        2. Do not allow heal if there are no heals remaining.
        3. Grant still regenerates to 10 when his health hits 0.  Every time this happens, add 1 to the user
            character's wins.
        4. When the user character's wins reaches 5, Grant is defeated and the game is over.
        5. When the user character's health reaches 0, the user is defeated and the game is over.
        6. Continue to log health and wins at each iteration using the name entered by the user at the beginning,
            just as in previous parts of the lab


 */
