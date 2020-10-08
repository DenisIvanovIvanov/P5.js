class Wall {
    constructor(x1, y1, x2, y2) {
        this.startPos = { x: x1, y: y1 };
        this.endPos = { x: x2, y: y2 };
    }

    show() {
        stroke(255);
        strokeWeight(2);
        line(
            this.startPos.x,
            this.startPos.y,
            this.endPos.x,
            this.endPos.y
        )
    }
}