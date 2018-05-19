var LivingCreature = require("./livingcreature");

module.exports = class Mard extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 0;
    }
    choose(tiv) {
        this.stanalNorKordinatner();
        return super.choose(tiv);
    }
    bazmanal() {
        if(this.gender == 1){
        if (this.energy >= 10 && this.choose(5)) {
            var norVandak = this.random(this.choose(0));
            if (norVandak) {
                mard.push(new Mard(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 5;
                this.energy = 0;
            }
        }
    }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in mard) {
                if (mard[i].x == this.x && mard[i].y == this.y) {
                    matrix[mard[i].y][mard[i].x] = 0;
                    mard.splice(i, 1);
                    break;
                }
            }
        }
    }

    move() {
        var norVandak = this.random(this.choose(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.mahanal();
        }
        this.energy--;
    }

    utel() {
        this.stanalNorKordinatner();
        var xot = this.random(this.choose(1));
        var xotak = this.random(this.choose(2));
        var gish = this.random(this.choose(3));
        if (xotak) {
            matrix[xotak[1]][xotak[0]] = 5;
            matrix[this.y][this.x] = 0;
            this.x = xotak[0];
            this.y = xotak[1];
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
                    break;
                }
            }
            this.bazmanal();
            this.energy++;
        }
        else if (gish) {
            matrix[gish[1]][gish[0]] = 5;
            matrix[this.y][this.x] = 0;
            this.x = gish[0];
            this.y = gish[1];
            for (var i in gishatich) {
                if (gishatich[i].x == this.x && gishatich[i].y == this.y) {
                    gishatich.splice(i, 1);
                    break;
                }
            }
            this.bazmanal();
            this.energy++;
        }
        else if (xot) {
            matrix[xot[1]][xot[0]] = 5;
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.bazmanal();
            this.energy++;
        }
        else {
            this.move();
        }
    }
};
