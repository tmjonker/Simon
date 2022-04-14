let sequenceArray = [];
let userSequenceArray = [];

function startGame() {
    $(document).keypress(function (e) { 
        $("#level-title").text("Level 1");
        $(document).unbind("keypress");
        continueGame();
    });
}

function continueGame() {

    let sequenceArrayLength = sequenceArray.length + 1;

    $("#level-title").text("Level " + sequenceArrayLength++);
    determineSquare(returnRandomNumber());
    userSequenceArray = [];
    analyzeUserClicks();
}

let clickCounter = 0;

function compareArrays() {

    debugger;
    if (userSequenceArray.length === sequenceArray.length) {
        if (userSequenceArray[userSequenceArray.length -1] === sequenceArray[sequenceArray.length -1]) {

        setTimeout(() => {
            $(".btn").unbind("click");
            continueGame();
        }, 500);
        } else {
            gameOver();
        }
    } else {
        for (let i=0; i < userSequenceArray.length; i++) {
            if (userSequenceArray[i] !== sequenceArray[i]) {
                gameOver();
            }
        }
    }
}

function analyzeUserClicks() { 

    $(".btn").click(function (e) { 

        if (e.target === document.querySelector("#green")) {
            greenSquare(userSequenceArray);
            compareArrays();
        } else if (e.target === document.querySelector("#red")) {
            redSquare(userSequenceArray);
            compareArrays();
        } else if (e.target === document.querySelector("#yellow")) {
            yellowSquare(userSequenceArray);
            compareArrays();
        } else if (e.target === document.querySelector("#blue")) {
            blueSquare(userSequenceArray);
            compareArrays();
        }

        $(e.target).addClass("pressed");
        setTimeout(() => {
            $(e.target).removeClass("pressed")
        }, 100);
    });
}

function gameOver() {
    let wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();

    $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over")
            }, 100);
    $(".btn").unbind("click");
    $("#level-title").text("Game over! Press any key to play again.");
    
    sequenceArray = [];
    userSequenceArray = [];

    startGame();
}

function returnRandomNumber() {
    return Math.floor((Math.random() * 4) + 1);
}

function determineSquare(number) {

    switch (number) {
        case 1: 
            $("#green").animate({opacity: 0.0}, 200).animate({opacity: 1}, 200);
            greenSquare(sequenceArray);
            break;
        case 2:
            $("#red").animate({opacity: 0.0}, 200).animate({opacity: 1}, 200);
            redSquare(sequenceArray);
            break;
        case 3:
            $("#yellow").animate({opacity: 0.0}, 200).animate({opacity: 1}, 200);
            yellowSquare(sequenceArray);
            break;
        case 4: 
            $("#blue").animate({opacity: 0.0}, 200).animate({opacity: 1}, 200);
            blueSquare(sequenceArray);
            break;
    }
}

function greenSquare(passedArray) {
    
    let redAudio = new Audio("sounds/green.mp3");
    redAudio.play();

    if (passedArray !== null) {
        passedArray.push(document.querySelector("#green"));
    }
}

function redSquare(passedArray) {
    
    let redAudio = new Audio("sounds/red.mp3");
    redAudio.play();

    if (passedArray !== null) {
        passedArray.push(document.querySelector("#red"));
    }
}

function yellowSquare(passedArray) {
    
    let redAudio = new Audio("sounds/yellow.mp3");
    redAudio.play();

    if (passedArray !== null) {
        passedArray.push(document.querySelector("#yellow"));
    }
}

function blueSquare(passedArray) {
    
    let redAudio = new Audio("sounds/blue.mp3");
    redAudio.play();

    if (passedArray !== null) {
        passedArray.push(document.querySelector("#blue"));
    }
}




