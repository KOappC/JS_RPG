var health = 40;
var grant = 10;
var lives = 0;
var play = prompt("Are you ready to rumble?");
play = play.toLowerCase();
while (play !== "yes") {
    play = prompt("How about ice cream?");
    alert("Tricked you!  Round 1")
    break;
}

var name = prompt("What's your name");
if (name === "") {
    name = "Player";
}


while (health >= 0 && lives <= 3) {
    health -= Math.floor((Math.random() * 2) + 1);
    grant -= Math.floor((Math.random() * 2) + 1);

    console.log(name + ", you have " + health + " health, and Grant has " + grant + " health left.  You currently have been undefeated for " + lives + " rounds!");
    if (grant <= 0) {
        grant = 10;
        lives += 1;
    } else if (lives === 3) {
        console.log("Congratulations, " + name + "! Grant is no more!");
        break;
    } else if (health <= 0) {
        console.log("Grant owned you...better luck next time")
        break;
    }
}

/* need to:


        - don't count grant's win as player's
        - keep health and grant positive
        - add player interactions (prompts)


 */