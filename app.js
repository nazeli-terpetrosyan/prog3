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
var xotaker_qanak = 40;
var gishatich_qanak = 20;
var hole_qanak = 5;
var mard_qanak = 20;
var joker_qanak = 5;
var xotaker_a_qanak = Math.round(Math.random() * xotaker_qanak);
var gishatich_a_qanak = Math.round(Math.random() * gishatich_qanak);
var mard_a_qanak = Math.round(Math.random() * mard_qanak);
var cxt_autumn = 15;
var cxt_summer = 8;
var s_grass_t = 20;
var rain_snow = 10;
global.k = n - 1;
global.j = m - 1;

console.log(xotaker_a_qanak);
console.log(gishatich_a_qanak);
console.log(mard_a_qanak);

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
for (var i = 0; i <= xotaker_a_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 2) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 2.5;
    for (var i in xotaker) {
        if (xotaker[i].x == b && xotaker[i].y == a) {
           xotaker[i].gender = 1; 
            break;
        }
    }
}

for (var i = 0; i <= gishatich_a_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 3) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 3.5;
    for (var i in gishatich) {
        if (gishatich[i].x == b && gishatich[i].y == a) {
           gishatich[i].gender = 1; 
            break;
        }
    }
}

for (var i = 0; i <= mard_a_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 5) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 5.5;
    for (var i in mard) {
        if (mard[i].x == b && mard[i].y == a) {
           mard[i].gender = 1; 
            break;
        }
    }
}

var fs = require('fs');

var statis = {
    "grass_qanak": grassArr.length,
    "xotaker_qanak": xotaker.length,
    "gishatich_qanak": gishatich.length,
    "mard_qanak": mard.length,
    "hole_qanak": hole.length
};

io.on('connection', function (socket) {
    io.sockets.emit('matrix', matrix);

    socket.on('statistics', function () {
        var file = 'statistics.json';
        var text = JSON.stringify(statis) + "\n";
        fs.appendFileSync(file, text);
    });
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

    socket.on('snow', function () {
        var t = Math.round(grassArr.length * rain_snow / 100);
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
    socket.on('rain', function () {
        var t = Math.round(grassArr.length * rain_snow / 100);
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
