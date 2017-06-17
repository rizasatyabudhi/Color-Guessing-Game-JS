var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";

    }
});


resetButton.addEventListener("click", function () {
    //generate all new color
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickRandomColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent= " ";
    //change resetButton text
    resetButton.textContent = "New Colors";
    //change span color to original color
    h1.style.background = "steelblue";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //Add initial color
    squares[i].style.background = colors[i];
    //Add click listener to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            colorChange(clickedColor);
            h1.style.background = clickedColor;
            //change resetButton text into "play again?"
            resetButton.textContent = "Play again?";

        } else {
            messageDisplay.textContent = "Wrong!";
            this.style.background = "#232323";
        }
    });
}

function colorChange(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
    //change their colors
}

function pickRandomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num of times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //output that array
    return arr;
}


function randomColor() {
    //pick red
    var r = Math.floor(Math.random() * 256);
    //pick green
    var g = Math.floor(Math.random() * 256);
    //pick blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
