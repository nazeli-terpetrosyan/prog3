var Xotaker = require("./xotaker");
var Gishatich = require("./gishatich");

module.exports = class Joker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    norkerpar() {
        var kerpar = Math.floor(Math.random() * 2);
        var kordiatner = random(this.directions);
        var x = kordinatner[0];
        var y = kordinatner[1];
        if (kerpar == 0) {
            xotaker.push(new Xotaker(x, y));
        }
        else {
            gishatich.push(new Gishatich(x, y));
        }
        this.move();
    }
    move() {
        matrix[this.y][this.x] = 0;
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
        while (matrix[a][b] != 0) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
        }
        matrix[a][b] = 8;
    }
};