module.exports = class BigHole {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x, this.y-1],
            [this.x, this.y-2],
            [this.x, this.y-3],
            [this.x, this.y+5],
            [this.x, this.y+6],
            [this.x, this.y+7],
            [this.x+1, this.y-1],
            [this.x+1, this.y-2],
            [this.x+1, this.y-3],
            [this.x+1, this.y+5],
            [this.x+1, this.y+6],
            [this.x+1, this.y+7],
            [this.x+2, this.y-1],
            [this.x+2, this.y-2],
            [this.x+2, this.y-3],
            [this.x+2, this.y+5],
            [this.x+2, this.y+6],
            [this.x+2, this.y+7],
            [this.x+3, this.y-1],
            [this.x+3, this.y-2],
            [this.x+3, this.y-3],
            [this.x+3, this.y+5],
            [this.x+3, this.y+6],
            [this.x+3, this.y+7],
            [this.x-1, this.y-3],
            [this.x-2, this.y-3],
            [this.x-3, this.y-3],
            [this.x-3, this.y-2],
            [this.x-3, this.y-1],
            [this.x-3, this.y],
            [this.x-3, this.y+1],
            [this.x-3, this.y+2],
            [this.x-3, this.y+3],
            [this.x-3, this.y+4],
            [this.x-3, this.y+5],
            [this.x-3, this.y+6],
            [this.x-3, this.y+7],
            [this.x-2, this.y-2],
            [this.x-2, this.y-1],
            [this.x-2, this.y],
            [this.x-2, this.y+1],
            [this.x-2, this.y+2],
            [this.x-2, this.y+3],
            [this.x-2, this.y+4],
            [this.x-2, this.y+5],
            [this.x-2, this.y+6],
            [this.x-2, this.y+7],
            [this.x-1, this.y-2],
            [this.x-1, this.y-1],
            [this.x-1, this.y],
            [this.x-1, this.y+1],
            [this.x-1, this.y+2],
            [this.x-1, this.y+3],
            [this.x-1, this.y+4],
            [this.x-1, this.y+5],
            [this.x-1, this.y+6],
            [this.x-1, this.y+7],
            [this.x+4, this.y-3],
            [this.x+4, this.y-2],
            [this.x+4, this.y-1],
            [this.x+4, this.y+5],
            [this.x+4, this.y+6],
            [this.x+4, this.y+7],
            [this.x+5, this.y-3],
            [this.x+5, this.y-2],
            [this.x+5, this.y-1],
            [this.x+5, this.y],
            [this.x+5, this.y+1],
            [this.x+5, this.y+2],
            [this.x+5, this.y+3],
            [this.x+5, this.y+4],
            [this.x+5, this.y+5],
            [this.x+5, this.y+6],
            [this.x+5, this.y+7],
            [this.x+6, this.y-3],
            [this.x+6, this.y-2],
            [this.x+6, this.y-1],
            [this.x+6, this.y],
            [this.x+6, this.y+1],
            [this.x+6, this.y+2],
            [this.x+6, this.y+3],
            [this.x+6, this.y+4],
            [this.x+6, this.y+5],
            [this.x+6, this.y+6],
            [this.x+6, this.y+7],
            [this.x+7, this.y-3],
            [this.x+7, this.y-2],
            [this.x+7, this.y-1],
            [this.x+7, this.y],
            [this.x+7, this.y+1],
            [this.x+7, this.y+2],
            [this.x+7, this.y+3],
            [this.x+7, this.y+4],
            [this.x+7, this.y+5],
            [this.x+7, this.y+6],
            [this.x+7, this.y+6],
        ];
    }
    choose() {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 5 || matrix[y][x] == 2.5 || matrix[y][x] == 3.5 || matrix[y][x] == 5.5) {
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

        bighole.splice(0,1);
    }
};