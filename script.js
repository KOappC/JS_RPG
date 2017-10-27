var health = 40;
var grant = 10;
var lives = 0;
//var cont = true;
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
if (name === "") {
    name = "Player";
}



while (cont = true) {
    health -= Math.floor((Math.random() * 2) + 1);
    grant -= Math.floor((Math.random() * 2) + 1);
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

/*  need to:
        - stop the game from playing the start of the final round
        - allow the user to avoid playing
                - and skip the name prompt

    want to:
        - keep health and grant positive
        -

 */