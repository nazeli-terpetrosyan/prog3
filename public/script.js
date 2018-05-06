matrix = [];
socket = io.connect('http://localhost:3000');
var time = 0;
var side = 10;

var grassArr = [];
var xotaker = [];
var gishatich = [];
var hole = [];
var mard = [];

function setup() {
    frameRate(5);
    createCanvas(300, 300);
    background('#acacac');
}

function main() {
    function getMatrix(m) {
        matrix = m;
    }
    socket.on("matrix", getMatrix);


}
function draw() {
    time++;

    if (time % 10 == 0) {
        socket.emit('statistics');
    }

    if (time == 20) {
        fill(0, 0, 0);
        text("Now is Autumn", 10, 325);
        socket.emit('autumn');
    }
    if (time = 40) {
        fill(0, 0, 0);
        text("Now is Winter", 10, 325);
        socket.emit('winter');
    }
    if (time == 60) {
        fill(0, 0, 0);
        text("Now is Spring", 10, 325);
        socket.emit('spring');
    }
    if (time == 80) {
        fill(0, 0, 0);
        text("Now is Summer", 10, 325);
        socket.emit('summer');
    }
    if (time == 100) {
        background('#acacac');
        socket.emit('normal');
    }
    function click() {
        if (time >= 40 && time <= 60) {
            fill(0, 0, 0);
            text("Now is snowing", 245, 325);
            socket.emit('snow');
        }
        else {
            fill(0, 0, 0);
            text("Now is raining", 245, 325);
            socket.emit('rain');
        }
        background('#acacac')
    }
    window.onclick = click;

    function keyPressed() {
        socket.emit('newBigHole');
    }

    function keyup() {
        socket.emit('BigHoleDie');
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#e67300");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                if (time >= 40 && time <= 60) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
                else {
                    fill("#cca300");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
}
window.onload = main;