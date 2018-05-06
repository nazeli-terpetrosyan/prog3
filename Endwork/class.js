class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(Math.random() * 5);
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
    choose() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 0) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        var norVandak = random(this.choose());
        if (this.multiply >= 5 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
        this.multiply++;
    }
}
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;

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
        if (time <= 20 || time >= 60 && time <= 80 || time >= 100) {
            if (this.energy >= 5) {
                var norVandak = random(this.choose(0));
                if (norVandak) {
                    xotaker.push(new Xotaker(norVandak[0], norVandak[1]));
                    matrix[norVandak[1]][norVandak[0]] = 2;
                    this.energy = 0;
                }
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    matrix[xotaker[i].y][xotaker[i].x] = 0;
                    xotaker.splice(i, 1);
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
class Hole {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.change = 0;
    }
    direction() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y],
            [this.x - 1, this.y],
            [this.x + 2, this.y + 1],
            [this.x - 1, this.y + 1]
        ];
    }
    choose() {
        this.direction();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 5) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        matrix[this.y][this.x] = 0;
        matrix[this.y + 1][this.x] = 0;
        matrix[this.y][this.x + 1] = 0;
        matrix[this.y + 1][this.x + 1] = 0;
        var a = Math.floor(Math.random() * n);
        var b = Math.floor(Math.random() * m);
        for (var i in hole) {
            if (hole[i].x == this.x && hole[i].y == this.y) {
                hole.splice(i, 1);
            }
        }
        while (matrix[a][b] == 2 && matrix[a][b] == 3) {
            var a = Math.floor(Math.random() * n);
            var b = Math.floor(Math.random() * m);
        }
        while (a == k) {
            var a = Math.floor(Math.random() * n);
        }
        while (b == j) {
            var b = Math.floor(Math.random() * m);
        }
        hole.push(new Hole(a, b));
    }
    eat() {
        matrix[this.y][this.x] = 4;
        matrix[this.y + 1][this.x] = 4;
        matrix[this.y][this.x + 1] = 4;
        matrix[this.y + 1][this.x + 1] = 4;
        var food = this.choose();
        this.change++;
        if (food) {
            for (var i in food) {
                if (matrix[food[i][1]][food[i][0]] == 2) {
                    for (var k in xotaker) {
                        if (xotaker[k].x == food[i][0] && xotaker[k].y == food[i][1]) {
                            xotaker.splice(k, 1);
                            matrix[food[i][1]][food[i][0]] = 0;
                        }
                    }
                }
                else if (matrix[food[i][1]][food[i][0]] == 3) {
                    for (var k in gishatich) {
                        if (gishatich[k].x == food[i][0] && gishatich[k].y == food[i][1]) {
                            gishatich.splice(k, 1);
                            matrix[food[i][1]][food[i][0]] = 0;
                        }
                    }
                }
                else if (matrix[food[i][1]][food[i][0]] == 5) {
                    for (var k in mard) {
                        if (mard[k].x == food[i][0] && mard[k].y == food[i][1]) {
                            mard.splice(k, 1);
                            matrix[food[i][1]][food[i][0]] = 0;
                        }
                    }
                }
            }
        }
    }
}
class Mard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
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
        if (this.energy >= 10) {
            var norVandak = random(this.choose(0));
            if (norVandak) {
                mard.push(new Mard(norVandak[0], norVandak[1]));
                matrix[norVandak[1]][norVandak[0]] = 5;
                this.energy = 0;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in mard) {
                if (mard[i].x == this.x && mard[i].y == this.y) {
                    matrix[mard[i].y][mard[i].x] = 0;
                    mard.splice(i, 1);
                }
            }
        }
    }

    move() {
        var norVandak = random(this.choose(0));
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
        var xot = random(this.choose(1));
        var xotak = random(this.choose(2));
        var gish = random(this.choose(3));
        if (xotak) {
            matrix[xotak[1]][xotak[0]] = 5;
            matrix[this.y][this.x] = 0;
            this.x = xotak[0];
            this.y = xotak[1];
            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
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
class BigHole {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x, this.y - 2],
            [this.x, this.y - 3],
            [this.x, this.y + 5],
            [this.x, this.y + 6],
            [this.x, this.y + 7],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y - 3],
            [this.x + 1, this.y + 5],
            [this.x + 1, this.y + 6],
            [this.x + 1, this.y + 7],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 3],
            [this.x + 2, this.y + 5],
            [this.x + 2, this.y + 6],
            [this.x + 2, this.y + 7],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y - 2],
            [this.x + 3, this.y - 3],
            [this.x + 3, this.y + 5],
            [this.x + 3, this.y + 6],
            [this.x + 3, this.y + 7],
            [this.x - 1, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 3, this.y + 4],
            [this.x - 3, this.y + 5],
            [this.x - 3, this.y + 6],
            [this.x - 3, this.y + 7],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 3],
            [this.x - 2, this.y + 4],
            [this.x - 2, this.y + 5],
            [this.x - 2, this.y + 6],
            [this.x - 2, this.y + 7],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y + 3],
            [this.x - 1, this.y + 4],
            [this.x - 1, this.y + 5],
            [this.x - 1, this.y + 6],
            [this.x - 1, this.y + 7],
            [this.x + 4, this.y - 3],
            [this.x + 4, this.y - 2],
            [this.x + 4, this.y - 1],
            [this.x + 4, this.y + 5],
            [this.x + 4, this.y + 6],
            [this.x + 4, this.y + 7],
            [this.x + 5, this.y - 3],
            [this.x + 5, this.y - 2],
            [this.x + 5, this.y - 1],
            [this.x + 5, this.y],
            [this.x + 5, this.y + 1],
            [this.x + 5, this.y + 2],
            [this.x + 5, this.y + 3],
            [this.x + 5, this.y + 4],
            [this.x + 5, this.y + 5],
            [this.x + 5, this.y + 6],
            [this.x + 5, this.y + 7],
            [this.x + 6, this.y - 3],
            [this.x + 6, this.y - 2],
            [this.x + 6, this.y - 1],
            [this.x + 6, this.y],
            [this.x + 6, this.y + 1],
            [this.x + 6, this.y + 2],
            [this.x + 6, this.y + 3],
            [this.x + 6, this.y + 4],
            [this.x + 6, this.y + 5],
            [this.x + 6, this.y + 6],
            [this.x + 6, this.y + 7],
            [this.x + 7, this.y - 3],
            [this.x + 7, this.y - 2],
            [this.x + 7, this.y - 1],
            [this.x + 7, this.y],
            [this.x + 7, this.y + 1],
            [this.x + 7, this.y + 2],
            [this.x + 7, this.y + 3],
            [this.x + 7, this.y + 4],
            [this.x + 7, this.y + 5],
            [this.x + 7, this.y + 6],
            [this.x + 7, this.y + 6]
        ];
    }
    choose() {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 5) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    eat() {
        matrix[this.y][this.x] = 7;
        matrix[this.y + 1][this.x] = 7;
        matrix[this.y + 2][this.x] = 7;
        matrix[this.y + 3][this.x] = 7;
        matrix[this.y + 4][this.x] = 7;
        matrix[this.y][this.x + 1] = 7;
        matrix[this.y + 1][this.x + 1] = 7;
        matrix[this.y + 2][this.x + 1] = 7;
        matrix[this.y + 3][this.x + 1] = 7;
        matrix[this.y + 4][this.x + 1] = 7;
        matrix[this.y][this.x + 2] = 7;
        matrix[this.y + 1][this.x + 2] = 7;
        matrix[this.y + 2][this.x + 2] = 7;
        matrix[this.y + 3][this.x + 2] = 7;
        matrix[this.y + 4][this.x + 2] = 7;
        matrix[this.y][this.x + 3] = 7;
        matrix[this.y + 1][this.x + 3] = 7;
        matrix[this.y + 2][this.x + 3] = 7;
        matrix[this.y + 3][this.x + 3] = 7;
        matrix[this.y + 4][this.x + 3] = 7;
        matrix[this.y][this.x + 4] = 7;
        matrix[this.y + 1][this.x + 4] = 7;
        matrix[this.y + 2][this.x + 4] = 7;
        matrix[this.y + 3][this.x + 4] = 7;
        matrix[this.y + 4][this.x + 4] = 7;
        var food = this.choose();
        this.change++;
        if (food) {
            for (var i in food) {
                if (matrix[food[i][1]][food[i][0]] == 2) {
                    for (var k in xotaker) {
                        if (xotaker[k].x == food[i][0] && xotaker[k].y == food[i][1]) {
                            xotaker.splice(k, 1);
                            matrix[food[i][1]][food[i][0]] = 0;
                            break;
                        }
                    }
                }
                else if (matrix[food[i][1]][food[i][0]] == 3) {
                    for (var k in gishatich) {
                        if (gishatich[k].x == food[i][0] && gishatich[k].y == food[i][1]) {
                            gishatich.splice(k, 1);
                            matrix[food[i][1]][food[i][0]] = 0;
                            break;
                        }
                    }
                }
                else if (matrix[food[i][1]][food[i][0]] == 5) {
                    for (var k in mard) {
                        if (mard[k].x == food[i][0] && mard[k].y == food[i][1]) {
                            mard.splice(k, 1);
                            matrix[food[i][1]][food[i][0]] = 0;
                            break;
                        }
                    }
                }
            }
        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        matrix[this.y + 1][this.x] = 0;
        matrix[this.y + 2][this.x] = 0;
        matrix[this.y + 3][this.x] = 0;
        matrix[this.y + 4][this.x] = 0;
        matrix[this.y][this.x + 1] = 0;
        matrix[this.y + 1][this.x + 1] = 0;
        matrix[this.y + 2][this.x + 1] = 0;
        matrix[this.y + 3][this.x + 1] = 0;
        matrix[this.y + 4][this.x + 1] = 0;
        matrix[this.y][this.x + 2] = 0;
        matrix[this.y + 1][this.x + 2] = 0;
        matrix[this.y + 2][this.x + 2] = 0;
        matrix[this.y + 3][this.x + 2] = 0;
        matrix[this.y + 4][this.x + 2] = 0;
        matrix[this.y][this.x + 3] = 0;
        matrix[this.y + 1][this.x + 3] = 0;
        matrix[this.y + 2][this.x + 3] = 0;
        matrix[this.y + 3][this.x + 3] = 0;
        matrix[this.y + 4][this.x + 3] = 0;
        matrix[this.y][this.x + 4] = 0;
        matrix[this.y + 1][this.x + 4] = 0;
        matrix[this.y + 2][this.x + 4] = 0;
        matrix[this.y + 3][this.x + 4] = 0;
        matrix[this.y + 4][this.x + 4] = 0;

        bighole.splice(0, 1);
    }
};
