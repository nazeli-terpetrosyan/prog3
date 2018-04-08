class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
    }
    stanalNorKordinatner() {
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
    choose(tiv) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == tiv) {
                    found.push(this.directions[i]);
                }
            }
        }
        if (found.length == 0)
            return false;


        return found;
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
                }
            }            
            this.energy++;
            this.bazmanal();
        }
        else {
            this.move();
        }
    }

}