var Xotaker = require("./xotaker");
var Gishatich = require("./gishatich");
var LivingCreature = require("./livingcreature");

module.exports = class Joker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.norkerp = 0;
    }
    choose(tiv) {
        this.stanalNorKordinatner();
        return super.choose(tiv);
    }

    norkerpar() {
        if (this.norkerp == 1) {
            var kerpar = Math.floor(Math.random() * 2);
            var kordinatner = this.random(this.choose(0));
            if (kordinatner) {
                var x = kordinatner[0];
                var y = kordinatner[1];
                if (kerpar == 0) {
                    matrix[y][x] = 2;
                    xotaker.push(new Xotaker(x, y));
                }
                else {
                    matrix[y][x] = 3;
                    gishatich.push(new Gishatich(x, y));
                }
            }
            this.norkerp = 0;
        }
        else {
            this.move();
        }
    }
    move() {
        matrix[this.y][this.x] = 0;
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
        while (matrix[a][b] != 0) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
        }
        this.x = b;
        this.y = a;
        matrix[a][b] = 8;
        this.norkerp++;
    }
};