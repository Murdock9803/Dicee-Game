var num1 = Math.floor(Math.random()*6) + 1;
var num2 = Math.floor(Math.random()*6) + 1;


switch (num1){
    case 1:
        document.querySelector("#image1").innerHTML = '<img class="image" src="images/dice1.png" alt="dice for player 1">';
        break;

    case 2:
        document.querySelector("#image1").innerHTML = '<img class="image" src="images/dice2.png" alt="dice for player 1">';
        break;
    
    case 3:
        document.querySelector("#image1").innerHTML = '<img class="image" src="images/dice3.png" alt="dice for player 1">';
        break;

    case 4:
        document.querySelector("#image1").innerHTML = '<img class="image" src="images/dice4.png" alt="dice for player 1">';
        break;

    case 5:
        document.querySelector("#image1").innerHTML = '<img class="image" src="images/dice5.png" alt="dice for player 1">';
        break;
    
    default:
        document.querySelector("#image1").innerHTML = '<img class="image" src="images/dice6.png" alt="dice for player 1">';
        break;
}


switch (num2){
    case 1:
        document.querySelector("#image2").innerHTML = '<img class="image" src="images/dice1.png" alt="dice for player 1">';
        break;

    case 2:
        document.querySelector("#image2").innerHTML = '<img class="image" src="images/dice2.png" alt="dice for player 1">';
        break;
    
    case 3:
        document.querySelector("#image2").innerHTML = '<img class="image" src="images/dice3.png" alt="dice for player 1">';
        break;

    case 4:
        document.querySelector("#image2").innerHTML = '<img class="image" src="images/dice4.png" alt="dice for player 1">';
        break;

    case 5:
        document.querySelector("#image2").innerHTML = '<img class="image" src="images/dice5.png" alt="dice for player 1">';
        break;
    
    default:
        document.querySelector("#image2").innerHTML = '<img class="image" src="images/dice6.png" alt="dice for player 1">';
        break;
}


if (num1 > num2){
    document.querySelector(".mainText").textContent = "Player 1 wins !";
}

else if (num1 < num2){
    document.querySelector(".mainText").textContent = "Player 2 wins !";
}

else {
    document.querySelector(".mainText").textContent = "It's a draw !";
}