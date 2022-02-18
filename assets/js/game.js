let playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 25,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("you don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
    }
}

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

let fight = function(enemy) {
    // repeat as long as the enemy-robot is alive
    while(enemy.health > 0 && enemy.health > 0) {
        // The fights are optional
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm the player wants to skip
            let confirmSkip = window.confirm("Are you sure?");

            // if yes, then leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight.");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money",playerInfo.money)
                break;
    }
    
} 


    // If the player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` letiable
        let damage1 = randomNumber(playerInfo.attack -3, playerInfo.attack);

        enemy.health = Math.max(0,enemy.health - damage1);
    
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        let damage2 = randomNumber(enemy.attack -3, enemy.attack);

        playerInfo.health = Math.max(0,playerInfo.health - damage2);

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
    
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

    }
};
}
    
    

// Start game function

let startGame = function(){
    // reset stats
    playerInfo.reset();
for(let i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        // round number
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));

        // pick new enemy
        let pickedEnemyObj = enemyInfo[i];

        // reset health
        pickedEnemyObj.health = randomNumber(40,60);

        // put the new enemy in the area
        fight(pickedEnemyObj);

        // if it's not the last fight
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            // shop prompt
            let storeConfirm = window.confirm("the fight is over, vist the store before the next round?");

            if (storeConfirm) {
                shop();
            }
        }
    }
    else {
        window.alert("You have lost robot in battle! Game Over!");
        break;
    }
}
endGame();
};

// end game function
let endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! Your score is");
    }
    else {
        window.alert("You've lost robot in battle. ;(")
    }
    let playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

let shop = function() {
    // player action prompt
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop. Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            //increase health and decrease money
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            //increase attack and decrease money
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            //end function
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //recall the function
            shop();
            break;
    }
};

let randomNumber = function(min,max) {
    let value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

let enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: (10, 14)
    }
]

startGame();