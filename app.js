var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000);


var Grass = require("./grass");
var Xotaker = require("./xotaker");
var Gishatich = require("./gishatich");
var Hole = require("./hole");
var Mard = require("./mard");
var grassArr = [];
var xotaker = [];
var gishatich = [];
var hole = [];
var mard = [];

var matrix = [];
var n = 30;
var m = 30;
var xotaker_qanak = 40;
var gishatich_qanak = 20;
var hole_qanak = 5;
var mard_qanak = 5;
var cxt_autumn = 15;
var cxt_summer = 8;
var s_grass_t = 40;
var k = n - 1;
var j = m - 1;
for (var i = 0; i < m; i++) {
    var arr = [];
    for (var a = 0; a < n; a++) {
        arr.push(Math.round(Math.random()));
    }
    matrix.push(arr);
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y));
        }
    }
}
for (var i = 0; i < xotaker_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 2;
    xotaker.push(new Xotaker(a, b));
}
for (var i = 0; i < gishatich_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 3;
    gishatich.push(new Gishatich(a, b));
}
for (var i = 0; i < mard_qanak; i++) {
    var a = Math.floor(Math.random() * n);
    var b = Math.floor(Math.random() * m);
    while (matrix[a][b] != 0 && matrix[a][b] != 1) {
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
    }
    matrix[a][b] = 5;
    mard.push(new Mard(a, b));
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
    hole.push(new Hole(a, b));
}

var fs = require('fs');
var cxt_autumn = 50;
var cxt_summer = 25;

var statistics = {
    "grass_qanak": grassArr.length,
    "xotaker_qanak": xotaker.length,
    "gishatich_qanak": gishatich.length,
    "mard_qanak": mard.length,
    "hole_qanak": hole.length   
};

io.on('connection', function (socket) {
    setInterval(function(){io.sockets.emit("matrix", matrix);}, 250);

    socket.on('statistics', function(){
        var file = statistics.json;
        var text = JSON.stringify(statistics) + "/n";
        fs.appendFileSync(file, text);
    });
    socket.on('autumn', function(){
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
    });
    socket.on('winter', function(){
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
    });
    socket.on('spring', function(){
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
    });
    socket.on('summer', function(){
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
    });
    socket.on('normal', function(){
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 1;
                }
            }
        }
    });
});

