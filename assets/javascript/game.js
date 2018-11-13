
var options=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins=0;
var losses=0;
var guessesLeft=10;
var guessedLetters=[];

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var alreadyGuessedText = document.getElementById("alreadyGuessed-text");




        
    
document.onkeyup=function(psychic){

var userGuess=String.fromCharCode(psychic.keyCode).toLowerCase();
console.log(userGuess)   

var computerGuess=options[Math.floor(Math.random()*options.length)]
console.log(computerGuess)

for (var i=0;i<options.length;i++) {
    if(userGuess=='a'||userGuess=='b'||userGuess=='c'||userGuess=='d'||userGuess=='e'||userGuess=='f'||userGuess=='g'||userGuess=='h'||userGuess=='i'||
         userGuess=='j'||userGuess=='k'||userGuess=='l'||userGuess=='m'||userGuess=='n'||userGuess=='o'||userGuess=='p'||userGuess=='q'||userGuess=='r'||
         userGuess=='s'||userGuess=='t'||userGuess=='u'|| userGuess=='v'||userGuess=='w'||userGuess=='x'||userGuess=='y'||userGuess=='z'){
            
        if(userGuess === computerGuess[i]){
             wins++;  
        } else if (userGuess[i]!== computerGuess[i]){
            losses++;
            guessesLeft--;
            guessedLetters.push(userGuess[i]);
            }
        
        if(losses>10){
            alert("GAME OVER")
            losses=0;
            wins=0;
            guessesLeft=10;
            guessedLetters=[];
            userGuess=[];
            computerGuess=[];
        }
        
    }
          
        
    directionsText.textContent= "";
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "guesses left: " + guessesLeft;
    alreadyGuessedText.textContent="Letters guessed: " + guessedLetters;
  }

}
