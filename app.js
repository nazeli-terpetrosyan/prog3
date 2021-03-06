var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000);

global.matrix = [];
global.n = 30;
global.m = 30;
var xotaker_qanak = 50;
var gishatich_qanak = 30;
var hole_qanak = 5;
var mard_qanak = 30;
var joker_qanak = 5;
var cxt_autumn = 15;
var cxt_summer = 8;
var s_grass_t = 20;
var rain_snow = 10;
global.k = n - 1;
global.j = m - 1;

var Grass = require("./grass");
var Xotaker = require("./xotaker");
var Gishatich = require("./gishatich");
var Hole = require("./hole");
var Mard = require("./mard");
var Joker = require("./joker");
var BigHole = require("./bighole");
global.grassArr = [];
global.xotaker = [];
global.gishatich = [];
global.hole = [];
global.mard = [];
global.joker = [];
global.bighole = [];

var grass_p;
var xotaker_p;
var gishatich_p;
var mard_p;

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
    xotaker.push(new Xotaker(b, a));
}
for (var i = 0; i < gishatich_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 3;
    gishatich.push(new Gishatich(b, a));
}
for (var i = 0; i < mard_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0 && matrix[a][b] != 1) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 5;
    mard.push(new Mard(b, a));
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
    hole.push(new Hole(b, a));
}
for (var i = 0; i < joker_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0 && matrix[a][b] != 1) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 8;
    joker.push(new Joker(b, a));
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y));
        }
    }
}
function gender() {
    for (var i in xotaker) {
        if (xotaker[i].gender == 1) {
            matrix[xotaker[i].y][xotaker[i].x] = 2.5;
        }
    }

    for (var i in gishatich) {
        if (gishatich[i].gender == 1) {
            matrix[gishatich[i].y][gishatich[i].x] = 3.5;
        }
    }

    for (var i in mard) {
        if (mard[i].gender == 1) {
            matrix[mard[i].y][mard[i].x] = 5.5;
        }
    }
}

setInterval(gender, 500);

io.on('connection', function (socket) {
    function stats() {
        var all = xotaker.length + grassArr.length + gishatich.length + mard.length;
        grass_p = grassArr.length * 99/all;
        xotaker_p = xotaker.length *99/all;
        gishatich_p = gishatich.length *99/all;
        mard_p = mard.length *99/all;
        io.sockets.emit('statistics', {'Grass': grass_p, 'Xotaker':xotaker_p,'Gishatich':gishatich_p, 'Mard':mard_p});
    }
    setInterval(stats, 500);

    io.sockets.emit('matrix', matrix);

    socket.on('autumn', function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
        var t = Math.round(grassArr.length * cxt_autumn / 100);
        for (var i = 0; i <= t; i++) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 1) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 6;
        }
    });
    socket.on('winter', function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
        var t = Math.round(grassArr.length * s_grass_t / 100);
        for (var i = 0; i <= t; i++) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 1) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 6;
        }
    });
    socket.on('spring', function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
    });
    socket.on('summer', function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
        var t = Math.round(grassArr.length * cxt_summer / 100);
        for (var i = 0; i <= t; i++) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 1) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 6;
        }
    });
    var g = 0;
    socket.on('snow', function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    g++;
                }
            }
        }
        var t = Math.round(g * rain_snow / 100);
        g = 0;
        for (var i = 0; i <= t; i++) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 1) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 6;
        }
    });
    var gray = 0;
    socket.on('rain', function () {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 0) {
                    gray++;
                }
            }
        }
        var t = Math.round(gray * rain_snow / 100);
        gray = 0;
        for (var i = 0; i <= t; i++) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
            while (matrix[a][b] != 0) {
                var a = Math.floor(Math.random() * n);
                var b = Math.floor(Math.random() * m);
            }
            matrix[a][b] = 1;
            grassArr.push(new Grass(b, a));
        }
    });
    socket.on('newBigHole', function () {
        if (bighole.length < 1) {
            var a = Math.floor(Math.random() * 25);
            var b = Math.floor(Math.random() * 25);
            while (matrix[a][b] != 0) {
                var a = Math.floor(Math.random() * 25);
                var b = Math.floor(Math.random() * 25);
            }
            bighole.push(new BigHole(b, a));
        }
    });
    socket.on('BigHoleDie', function () {
        if (bighole.length == 1) {
            bighole[0].mahanal();
        }
    });
});
function main() {

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
    for (var i in joker) {
        joker[i].norkerpar();
    }
    if (bighole.length == 1) {
        for (var i in bighole) {
            bighole[i].eat();
        }
    }
    io.sockets.emit('matrix', matrix);
}

setInterval(main, 500);
