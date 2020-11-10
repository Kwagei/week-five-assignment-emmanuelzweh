
var randomNum = Math.floor(Math.random() * 100)+1;
var chances = 10;

// instruction for the game
function displayInstruction(){
    document.getElementById("instruct_display").style = "display: block";
}

function hideInstruction(){
    document.getElementById("instruct_display").style = "display: none";
}

// This function is use to start the game

function startGame(){
    document.getElementById("div1").style = "display: none";
    document.getElementById("div2").style = "display: block";

}

function goBack(){
    document.getElementById("div1").style = "display: block";
    document.getElementById("div2").style = "display: none";
}

function enter(){
    var inputValue = document.getElementById("guessInput").value;
    var numberGuessed = Number(inputValue);

    document.getElementById("display-outcome").style = "display: block";
    if(numberGuessed == randomNum){
        document.getElementById("game-end-statement").textContent = "YOU WIN !!!!!!";
        document.getElementById("end-result").style = "display: block";
        document.getElementById("div2").style = "display: none";
            
    }
    else if(numberGuessed > randomNum){
        document.getElementById("guess-number-result").textContent = "Guessed too high";
        chances--;
        document.getElementById("chances-remain").innerHTML = "Chances" + " " + chances;
    } 
    else if(numberGuessed < randomNum){
        document.getElementById("guess-number-result").textContent = "Guessed too low";
        chances--;
        document.getElementById("chances-remain").innerHTML = "Chances" + " " + chances;
    }
    else{
        document.getElementById("guess-number-result").textContent = "Invalid input";
        chances--;
        document.getElementById("chances-remain").innerHTML = "Chances" + " " + chances;
    }
    if(chances < 0){
        document.getElementById("game-end-statement").textContent = "YOU LOSE!!!!";
        document.getElementById("end-result").style = "display: block";
        document.getElementById("div2").style = "display: none";
    }
        

}

    function playAgain(){
        document.getElementById("div2").style = "display: block";
        document.getElementById("end-result").style = "display: none";
    }

    function backHome(){
        document.getElementById("div1").style = "display: block";
        document.getElementById("end-result").style = "display: none";
        document.getElementById("div2").style = "display: none";
        
    }

// }

