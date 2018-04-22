var LivingCreature = require("./livingcreature");

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 10;
    }
    choose(tiv) {
        this.stanalNorKordinatner();
        return super.choose(tiv);
    }
    bazmanal() {
        if (this.energy >= 5) {
            var norVandak = random(this.choose(0));
            if (norVandak) {
                gishatich.push(new Gishatich(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 3;
                this.energy = 0;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in gishatich) {
                if (gishatich[i].x == this.x && gishatich[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    gishatich.splice(i, 1);
                    break;
                }
            }
        }
    }

    move() {
        var norVandak = random(this.choose(1));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 3;
            matrix[this.y][this.x] = 1;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
        this.mahanal();
    }

    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.choose(2));
        if (xot) {
            matrix[xot[1]][xot[0]] = 3;
            matrix[this.y][this.x] = 1;
            this.x = xot[0];
            this.y = xot[1];
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
                    break;
                }
            }
            this.energy++;
            this.bazmanal();
        }
        else {
            this.move();
        }
    }

};