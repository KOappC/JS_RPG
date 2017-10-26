var health = 40;
var grant = 10;
var lives = 0;

while (health >= 0 && lives <= 3) {
    health -= Math.floor((Math.random() * 2) + 1);
    grant -= Math.floor((Math.random() * 2) + 1);

    console.log("You have " + health + " health, and Grant has " + grant + " health left.  You currently have been undefeated " + lives + " times!");
    if (grant <= 0) {
        grant = 10;
        lives += 1;
    } else if (lives === 3) {
        console.log("You defeated Grant!");
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