
const buttons = $(".btn");
const buttonColor = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickPattern = [];
let level = 0;
let flag = true;

// animation function

function AddAnimation(target) {
    $(`#${target}`).addClass('pressed')
    setTimeout(() => {
        $(`#${target}`).removeClass('pressed')
    }, 150);
}


// sound function

function playSound(Playsound) {
    let sound = new Audio(`sounds/${Playsound}.mp3`);
    sound.play();

}

// this is restart function

function restartGame() {
    level = 0;
    gamePattern = [];
    flag = true;
}

// this logic every time check is user click is proper or not

function checkSequence(lastIndex_of_click) {

    if (gamePattern[lastIndex_of_click] === userClickPattern[lastIndex_of_click]) {



        if (userClickPattern.length === gamePattern.length) {
            // this condition is execute when userclickpattern and game pattern has same length else it will skip
            // change to the next level
            console.log(userClickPattern.length, gamePattern.length)
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }

    }
    else {
        let wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 1000);
        $("h1").html(`<b style="font-size: 3rem; line-height: 6rem;">You End Up with level: ${level}</b> </br> Game Over, Press any key to continue...`);
        restartGame()
    }
}

// through the button we play the game

buttons.on('click', function (e) {
    let userChosenColor = this.id;
    userClickPattern.push(userChosenColor);
    playSound(userChosenColor);
    AddAnimation(userChosenColor);
    checkSequence(userClickPattern.length - 1)
})

// this is random sequence that we want to follow

function nextSequence() {
    userClickPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    let tap_button = $(`#${randomChosenColor}`);
    tap_button.fadeIn(150).fadeOut(150).fadeIn(150);
    playSound(randomChosenColor)
    AddAnimation(randomChosenColor)
    level = level + 1;
    $('h1').text(`level ${level}`);
}




/* This is the starting point of the game*/
$('body').keypress(function (e) {

    if (flag) {
        $('h1').text(`level ${level}`);
        nextSequence();
        flag = false;
    }
})
