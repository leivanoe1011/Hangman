    
    
    /*
        Need to create the word first. 
        Then need to get the Lenght of the word. 
        Next create an array with Dashes based on the lenght above.

        when a letter is guessed than take that letter and index. 
        The index will be used to replace the Dash with the letter above. 
        At the same time, keep track of the dashes removed versus the lenght of the array.
        Once they equal than the person has guessed the word.
    */


    // Variables will be created once the Page/DOM is loaded
    var loadWins = document.getElementById("user-wins");
    var remainingGuessCnt = document.getElementById("guess-remaining");
    var lettersGuessed = document.getElementById("guessed-letters");
    var emptyLines = document.getElementById("empty-word");
    var guessCnt = 14;
    var wordArray = ["paper","scissor","rock","car","work"];
    var currentLetters = [];
    var wordLines = [];
    var currentWord = "";
    var wins = 0;


    function resetGame(){
        guessCnt = 14;
        currentLetters = [];
        wordLines = []
    }


    // Creates random words
    function randomWord(){

        return wordArray[Math.floor(Math.random() * wordArray.length)];

    }


    // Random word will be loaded once the Page/DOM loads.
    currentWord = randomWord();


    // using the current word lenght we going to create the empty lines
    function createWordLines() {
        
        var lines = "";

        for(var i = 0; i < currentWord.length; i++){
            wordLines.push("-");
        }

        // These are the lines that will be displayed
        for(var i = 0; i < wordLines.length; i++){
            lines += wordLines[i] + " "
        }

        // remove the last space
        emptyLines.textContent = lines.substring(0, lines.length - 1);
        // return lines.substring(0,lines.length - 1);
        
    }

    // function will be used to replace empty line with Letter
    function removeGuessedLine(letter, index){

        var lines = "";

        wordLines[index] = letter;

        // Incorporate the new letter guessed
        for(var i = 0; i < wordLines.length; i++){
            lines += wordLines[i] + " "
        }

        // remove the last space
        emptyLines.textContent = lines.substring(0, lines.length - 1);
    }


    function validateEmptyLines(){
        var result = 0;

        for(var i = 0; i < wordLines.length; i++){

            if(wordLines[i]==="-"){
                result++;
            }
        }

        return result;
    }


    // Create the initial lines
    createWordLines();


    // Begin On Key Up function
    // When a key is pressed, the function below will begin
    document.onkeyup = function (event) {
        
        console.log("Current Word " + currentWord);

        var userEntry = event.key.toLowerCase();
        var currentGuesses = "";


        // Begin New Letter Entry
        // Only letters that not have been used before will enter here
        if(!currentLetters.includes(userEntry)){
            
            currentLetters.push(userEntry);

            // Here we clean up the display of the Guessed letters
            for(var i = 0; i < currentLetters.length; i++){
                currentGuesses += currentLetters[i] + ",";
            }

            // load all the letters guessed
            lettersGuessed.textContent = currentGuesses.substring(0, currentGuesses.length - 1);


            // Letter does not exist
            if(!currentWord.includes(userEntry)){
                guessCnt--;
                remainingGuessCnt.textContent = guessCnt;
                if(guessCnt === 0){
                    alert("You Lost! The word was " + currentWord);
                    resetGame();
                    currentWord = randomWord();
                    createWordLines();
                }
            }
            // Begin Letter Guessed
            else {
                // There are instances when the letter is present multiple times
                for(var i = 0; i < currentWord.length; i++){
                    if(userEntry === currentWord.charAt(i)){
                        removeGuessedLine(userEntry,i);  
                    }
                    
                }
                
                // If no more empty lines then you won.
                if(validateEmptyLines()===0){
                    alert("You won! The word was " + currentWord);
                    wins++;
                    loadWins.textContent = wins;
                    resetGame();
                    currentWord = randomWord();
                    createWordLines();
                }
            }
            //End Letter Guessed
        }
         // End New Letter Entry
                
    }
    // End On Key Up function

