var health = 40;
var grant = 10;
var lives = 0;



function startGame() {
    var play = prompt("Would you like to play?").toLowerCase();
    if (play === "yes"){
        var name = prompt("What's your name");
        startCombat();
    } else if (play !== "yes"){
        console.log("Have a great day");
    }
}

if (name === "") {
    name = "Player";
}

function getDamage(player, enemy) {
    health -= Math.floor((Math.random() * 5) + 1);
    grant -= Math.floor((Math.random() * 5) + 1);
}

function byeBye() {
    console.log("Bye, bye");
}

function startCombat() {
    while (cont = true) {
        var turn = prompt("Would you like to attack or chicken out?").toLowerCase();
        while (turn === "attack") {
            break;
        } if (turn !== "attack") {
            byeBye();
            break;
        }
        getDamage(health, grant);
        console.log("Grant pecked " + name + ". You have " + health + " health remaining.");
        console.log("You hit Grant! They have " + grant + " health remaining!");

        if (grant <= 0) {
            grant = 10;
            lives += 1;
            console.log("Round " + lives + " won!")
        } else if (lives === 3) {
            console.log("Congratulations, " + name + "! Grant is no more!");
            break;
        } else if (health <= 0) {
            cont = false;
            console.log("Grant owned you...better luck next time");
            break;
        }
    }
}

startGame();



// List of objectives

/*

    Things that i think:

    need to:
        - stop the game from playing the start of the final round
        - allow the user to avoid playing
                - and skip the name prompt

    want to:
        - keep health and grant positive
        -


    part 2 requirements:

        //DONE  1. startGame function. This function will
                    a. Prompt the user if they would like to play, and if they say yes...
                        i. Allow the user to enter the character’s name.
                        ii. Call the startCombat function.

        //DONE  2. startCombat function. When executed, this will run the entire loop you created in Part One.

        //DONE  3. getDamage function. This will return a number between 1 and 5 that will be used to decide how much damage the user and Grant will deal each round.

        4. Each iteration of the loop will include a prompt that will ask the user if they would like to “attack” or “quit”.

        5. If the user decides to attack, adjust the character’s health points and Grant’s health points based on the getDamage function.

        6. If the user decides to quit, figure out a way to exit out of the loop and function.


 */



// Bad jokes from the first iteration of this project

/*

var play = prompt("Are you ready to rumble?").toLowerCase();
while (play !== "yes") {
    play = prompt("How about ice cream?").toLowerCase();
    if (play !== "yes") {
        alert("Yeah, about that.  There isn't any ice cream...");
    }
    alert("Tricked you!  Round 1")
    break;
}
var name = prompt("What's your name");

*/