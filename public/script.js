function main(){
var time = 0:
var socket = io.connect('http://localhost:3000');
var matrix = [];
var grassArr = [];
var xotaker = [];
var gishatich = [];
var hole = [];
var mard = [];

function getMatrix(m){
    matrix = m;
}

function getGrass(g){
    grassArr = g;
}

function getXotaker(g){
    xotaker = g;
}

function getGishatich(g){
    gishatich = g;
}

function getHole(g){
    hole = g;
}

function getMard(g){
    mard = g;
}
socket.on("matrix", getMatrix);
socket.on("grass", getGrass);
socket.on("xotaker", getXotaker);
socket.on("gishatich", getGishatich);
socket.on("hole", getHole);
socket.on("mard", getMard);

var side = 10;
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {
    time++;
    if(time%60 == 0){
        socket.emit('statistics');
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
                fill("orange");
                rect(x * side, y * side, side, side);
            }

        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotaker) {
        xotaker[i].utel();
    }
    for (var i in gishatich) {
        gishatich[i].utel();
    }
    for (var i in hole) {
        if (hole[i].change == 15) {
            hole[i].move();
        }
        hole[i].eat();
    }
    for (var i in mard) {
        mard[i].utel();
    }
}
}

function preload() {
    main;
 }
 