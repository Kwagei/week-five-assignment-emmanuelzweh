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

function enter(){
    var randomNum = Math.floor(Math.random(1) * 100);
    var inputValue = document.getElementById("guessInput").value;
    var chances;
    

    for (chances = 10; chances >= 0; chances--){
        document.getElementById("display-outcome").style = "display: block";
        if(inputValue == randomNum){
            document.getElementById("guess-number-result").textContent = "YOU WIN !!!!!!";
            break;
        }
        else if(inputValue > randomNum){
            document.getElementById("guess-number-result").textContent = "Guessed too high";
        }
        else if(inputValue < randomNum){
            document.getElementById("guess-number-result").textContent = "Guessed too low";
        }
        else if(inputValue == NaN){
            document.getElementById("guess-number-result").textContent = "Invalid input";
        }
        else if(inputValue == " "){
            document.getElementById("guess-number-result").textContent = "Invalid input";
        }
        else{
            document.getElementById("guess-number-result").textContent = "YOU LOSE!!!!";
        }
        

    }

}

