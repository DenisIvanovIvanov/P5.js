class Ray {
    constructor(position, angle) {
        this.position = position;
        this.angle = p5.Vector.fromAngle(angle);
    }

    show() {
        stroke(255);
        push();
        translate(this.position.x, this.position.y);
        line(0, 0, this.angle.x * 10, this.angle.y * 10);
        pop();
    }

    isThereIntersect(wall) {
        // formula at https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection

        const x1 = wall.startPos.x, y1 = wall.startPos.y;
        const x2 = wall.endPos.x, y2 = wall.endPos.y;
        const x3 = this.position.x, y3 = this.position.y;
        const x4 = this.position.x + this.angle.x, y4 = this.position.y + this.angle.y;

        const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (denominator === 0) {
            return;
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

        if (t > 0 && t < 1 && u > 0) {
            return point = {
                x: x1 + t * (x2 - x1),
                y: y1 + t * (y2 - y1)
            }
        }

        return;
    }
}