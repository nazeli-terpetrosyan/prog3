matrix = [];
socket = io();
var time = 0;
var side = 10;

var grassArr = [];
var xotaker = [];
var gishatich = [];
var hole = [];
var mard = [];

socket.on("matrix", function (m) {
    matrix = m;
    background('#acacac');
    time++; 
    
    if (time % 10 == 0) {
        socket.emit('statistics');
    }

    if (time == 20) {
        socket.emit('autumn');
    }
    if (time == 40) {
        socket.emit('winter');
    }
    if (time == 60) {
        socket.emit('spring');
    }
    if (time == 80) {
        socket.emit('summer');
    }
    if (time == 100) {
        background('#acacac');
        socket.emit('normal');
    }
    
    if (time >= 20 && time <= 40) {
        fill(0, 0, 0);
        text("Now is Autumn", 10, 325);
    }
    if (time >= 40 && time <= 60) {
        fill(0, 0, 0);
        text("Now is Winter", 10, 325);
    }
    if (time >= 60 && time <= 80) {
        fill(0, 0, 0);
        text("Now is Spring", 10, 325);
    }
    if (time >= 80 && time <= 100) {
        fill(0, 0, 0);
        text("Now is Summer", 10, 325);
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
            else if (matrix[y][x] == 4 || matrix[y][x] == 7) {
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
             else if (matrix[y][x] == 8) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
});

function setup() {
    frameRate(1);
    createCanvas(300, 340);
    background('#acacac');
}

function Rain() {
    if (time >= 40 && time <= 60) {
        socket.emit('snow');
    }
    else {
        socket.emit('rain');
    }
}

function CreateBigHole() {
    socket.emit('newBigHole');
}

function DeleteBigHole() {
    socket.emit('BigHoleDie');
}