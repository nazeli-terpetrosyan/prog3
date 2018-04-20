module.exports = class Hole extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.change = 0;
    }
    stanalNorKordinatner() {
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
                break;
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
};