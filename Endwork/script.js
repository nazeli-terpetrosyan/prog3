var matrix = [];
var n = 30;
var m = 30;
var time = 0;
var xotaker_qanak = 40;
var gishatich_qanak = 20;
var hole_qanak = 5;
var mard_qanak = 5;
var cxt_autumn = 15;
var cxt_summer = 8;
var s_grass_t = 40;
var k = n-1;
var j = m-1;
for (var i = 0; i < m; i++) {
    var arr = [];
    for (var a = 0; a < n; a++) {
        arr.push(Math.round(Math.random()));
    }
    matrix.push(arr);
}

for (var i = 0; i < xotaker_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 2;
}
for (var i = 0; i < gishatich_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 3;
}
for(var i = 0;i<mard_qanak; i++){
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0 && matrix[a][b] != 1) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 5;
}

for (var i = 0; i < hole_qanak; i++) {

    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0 && matrix[a][b] != 1) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    while (a == k) {
        var a = Math.floor(Math.random() * n);
    }
    while (b == j) {
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 4;
}

var side = 10;
var grassArr = [];
var xotaker = [];
var gishatich = [];
var hole = [];
var mard = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, 35+matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gishatich.push(new Gishatich(x, y))
            }
            else if (matrix[y][x] == 4) {
                hole.push(new Hole(x, y));
            }
            else if (matrix[y][x] == 5) {
                mard.push(new Mard(x, y));
            }
        }
    }
}

function draw() {
    time++;
    if (time == 20 ) {
        fill(0,0,0);
        text("Now is Autumn", 10, 320);
        var t = Math.round(grassArr.length * cxt_autumn/100);
        for(var i = 0; i<=t; i++){
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 1) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 6;
        }
    }
    if (time == 40) {
        fill(0,0,0);
        text("Now is Winter", 10, 320);
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
        var t = Math.round(grassArr.length * s_grass_t/100);
        for(var i = 0; i<=t; i++){
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 1) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 6;
        }
    }
    if (time >= 60 && time <= 80) {
        fill(0,0,0);
        text("Now is Spring", 10, 320);
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
    }
    if(time == 80){
        fill(0,0,0);
        text("Now is Summer", 10, 320);
        var t = Math.round(grassArr.length * cxt_summer/100);
        for(var i = 0; i<=t; i++){
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 1) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 6;
        }
    }

    if(time == 100){
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
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
                if(time >= 40 && time<=60){
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
                else{
                    fill("#cca300");
                    rect(x * side, y * side, side, side);   
                }
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
        for(var i in mard){
            mard[i].utel();
        }
}


