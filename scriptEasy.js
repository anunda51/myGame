var checkpoint = 0;
var score;
var myScore;

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
    score = 0;
    updateQuestion();
}

function updateQuestion() {
    checkpoint++;
    clearAnswer();
    updateStatus();
    console.log("level " + checkpoint);
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    // var answer = document.getElementById("answer").value;
    var choice1 = document.getElementById("choice1");
    var choice2 = document.getElementById("choice2");
    var choice3 = document.getElementById("choice3");
    var choice4 = document.getElementById("choice4");
    num1.innerHTML = randomRange(0, 20);
    num2.innerHTML = randomRange(0, 20);
    var total = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
    var randomAns = randomRange(1, 4);
    if (randomAns === 1) {
        choice1.innerHTML = total
    } else {
        choice1.innerHTML = total + randomRange(1, 3);
    }
    if (randomAns === 2) {
        choice2.innerHTML = total
    } else {
        choice2.innerHTML = total + randomRange(4, 6);
    }
    if (randomAns === 3) {
        choice3.innerHTML = total
    } else {
        choice3.innerHTML = total + randomRange(7, 9);
    }
    if (randomAns === 4) {
        choice4.innerHTML = total
    } else {
        choice4.innerHTML = total + randomRange(10, 12);
    }
    console.log(total)
}

function checkAnswer() {
    var sound = new Audio();
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var answer = document.getElementById("answer").value;
    var total = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
    // checkpoint++;

    if (parseInt(answer) === total) {
        sound.src = './sound/button-3.mp3'
        sound.play();
        score++;
        localStorage.setItem("totalscore", score);
        console.log('correct')
        if (checkpoint > 4) {
            window.location.href = "gameover.html";
        } else {
            updateQuestion()
        }
    } else {
        sound.src = './sound/error.mp3'
        sound.play();
        localStorage.setItem("totalscore", score);
        console.log('incorrect')
        if (checkpoint > 4) {
            window.location.href = "gameover.html";
        } else {
            updateQuestion()
        }
    }
}

function clearAnswer() {
    var answer = document.getElementById("answer");
    answer.value = "";
}

function updateStatus() {
    document.getElementById('showLevel').innerHTML = checkpoint;
    document.getElementById('showScore').innerHTML = score;
}

document.addEventListener('dragstart', function (event) {
    if(document.getElementById("answer").value != ""){
        document.getElementById("answer").value = "";
        event.dataTransfer.setData('Text', event.target.innerHTML);
    }else{
        event.dataTransfer.setData('Text', event.target.innerHTML);
    }
});

function clearLocal(){
    localStorage.clear();
}

function clickChoice() {
    var sound = new Audio();
    sound.src = "./sound/click.mp3";
    sound.play();
    var answer = document.getElementById("answer");
    answer.readOnly = false;
}

function dropChoice() {
    var sound = new Audio();
    sound.src = "./sound/drop.mp3";
    sound.play();
}

function lock() {
    var answer = document.getElementById("answer");
    answer.readOnly = true;
}