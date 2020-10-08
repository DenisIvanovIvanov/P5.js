function Cell(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.previousCell; // used for backtracking to find path
    this.wall = false;
    this.neighbors = [];

    if (random(1) < 0.3 )
        this.wall = true;

    // a star
    this.f = 0;
    this.h = 0;
    this.g = 0;
    this.visited = false;
    this.closed = false;
    this.cost = 1;

    this.show = function(color) {
        if (this.wall) {
            ellipse(x * w + w / 2, y * h + h / 2, w / 2, h / 2);
        } else {
            if (color)
                fill(color);

            rect(x * w, y * h, w, h);
        }
    }

    this.getNeighbors = function(board) {
        var ret = [];
        var x = this.x;
        var y = this.y;

        // West
        if (board[x - 1] && board[x - 1][y]) {
            ret.push(board[x - 1][y]);
        }

        // East
        if (board[x + 1] && board[x + 1][y]) {
            ret.push(board[x + 1][y]);
        }

        // South
        if (board[x] && board[x][y - 1]) {
            ret.push(board[x][y - 1]);
        }

        // North
        if (board[x] && board[x][y + 1]) {
            ret.push(board[x][y + 1]);
        }

        // Southwest
        if (board[x - 1] && board[x - 1][y - 1]) {
            ret.push(board[x - 1][y - 1]);
        }

        // Southeast
        if (board[x + 1] && board[x + 1][y - 1]) {
            ret.push(board[x + 1][y - 1]);
        }

        // Northwest
        if (board[x - 1] && board[x - 1][y + 1]) {
            ret.push(board[x - 1][y + 1]);
        }

        // Northeast
        if (board[x + 1] && board[x + 1][y + 1]) {
            ret.push(board[x + 1][y + 1]);
        }

        return ret;
    }
}