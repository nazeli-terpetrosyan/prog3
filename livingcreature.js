module.exports = class LivingCreature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gender = Math.round(Math.random() * 2);
    }
    random(array){
        var a = Math.round(Math.random() * array.length);
        return array[a];
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
}