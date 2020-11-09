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
    var randomNum = Math.floor(Math.random() * 100)+1;
    var inputValue = document.getElementById("guessInput").value;
    var numberGuessed = Number(inputValue);
    var chances;
    

    for (chances = 10; chances >= 0; chances--){
        document.getElementById("display-outcome").style = "display: block";
        if(numberGuessed == randomNum){
            document.getElementById("guess-number-result").textContent = "YOU WIN !!!!!!";
            break;
        }
        else if(numberGuessed > randomNum){
            document.getElementById("guess-number-result").textContent = "Guessed too high";
            document.getElementById("chances-remain").innerHTML = "Chances" + " " + chances;
        } 
        else if(numberGuessed < randomNum){
            document.getElementById("guess-number-result").textContent = "Guessed too low";
            document.getElementById("chances-remain").innerHTML = "Chances" + " " + chances;
        }

        else if(chances == 0){
            document.getElementById("guess-number-result").textContent = "YOU LOSE!!!!";
        }
        else{
            document.getElementById("guess-number-result").textContent = "Invalid input";
            document.getElementById("chances-remain").innerHTML = "Chances" + " " + chances;
        }
        

    }

}

