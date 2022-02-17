let playerName = window.prompt("What is your robot's name?")
let playerHealth = 100;
let playerAttack = 25;
let playerMoney = 10;


let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 10;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

let fight = function(enemyName) {
    // repeat as long as the enemy-robot is alive
    while(enemyHealth > 0 && enemyHealth > 0) {
        // The fights are optional
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm the player wants to skip
            let confirmSkip = window.confirm("Are you sure?");

            // if yes, then leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight.");
                playerMoney = playerMoney - 10;
                console.log("playerMoney",playerMoney)
                break;
    }
    
} 


    // If the player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` letiable
        enemyHealth = enemyHealth - playerAttack;
    
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

    }
};
}
    
    

// Start game function

let startGame = function(){
    // reset stats
    playerHealth = 100;
    playerAttack = 25;
    playerMoney = 10;
for(let i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // round number
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));

        // pick new enemy
        let pickedEnemyName = enemyNames[i];

        // reset health
        enemyHealth = 50;

        // put the new enemy in the area
        fight(pickedEnemyName);
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
    if (playerHealth > 0) {
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

startGame();