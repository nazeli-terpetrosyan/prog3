class Xotaker extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 2;

    }
    choose(tiv) {
        this.stanalNorKordinatner();
        return super.choose(tiv);
    }
    bazmanal() {
        if (this.energy >= 5) {
            var norVandak = random(this.choose(0));
            if (norVandak) {
                xotaker.push(new Xotaker(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.energy = 0;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    matrix[xotaker[i].y][xotaker[i].x] = 0;
                    xotaker.splice(i, 1);
                    break;
                }
            }
        }
    }

    move() {
        var norVandak = random(this.choose(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.mahanal();
        }
        this.energy--;
    }

    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.choose(1));
        if (xot) {
            matrix[xot[1]][xot[0]] = 2;
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
}