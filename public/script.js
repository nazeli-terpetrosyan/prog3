import { stat } from "fs";

matrix = [];
socket = io();
var statistics = 0;
var side = 10;
var seasons = 0;

var grassArr = [];
var xotaker = [];
var gishatich = [];
var hole = [];
var mard = [];

socket.on("matrix", function (m) {
    matrix = m;
    background('#acacac');
    statistics++; 
    
    if (statistics == 10) {
        socket.emit('statistics');
        statistics = 0;
    }

    if (seasons == 1) {
        socket.emit('autumn');
    }
    if (seasons == 2) {
        socket.emit('winter');
    }
    if (seasons == 3) {
        socket.emit('spring');
    }
    if (seasons == 4) {
        socket.emit('summer');
    }

    
    if (seasons == 1) {
        fill(0, 0, 0);
        text("Now is Autumn", 10, 325);
    }
    if (seasons == 2) {
        fill(0, 0, 0);
        text("Now is Winter", 10, 325);
    }
    if (seasons == 3) {
        fill(0, 0, 0);
        text("Now is Spring", 10, 325);
    }
    if (seasons == 4) {
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
                if (seasons == 2) {
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
    if (seasons = 2) {
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
    socket.emit('BigHoleDie')
}

function Autumn(){
    seasons = 1;
}
function Winter(){
    seasons = 2;
}
function Spring(){
    seasons = 3;
}
function Summer(){
    seasons = 4;
}