class Particle {
    rays = [];

    constructor() {
        this.position = createVector(width / 2, height / 2);
        
        for (let angle = 0; angle < 360; angle += 5) {
            const ray = new Ray(this.position, radians(angle));
            this.rays.push(ray);
        }
    }

    update(x, y) {
        this.position.set(x, y);
    }

    show() {
        fill(255);
        ellipse(this.position.x, this.position.y, 16);
        this.rays.forEach(ray => ray.show());
    }

    intersect(walls) {
        this.rays.forEach(ray => {
            let record = Infinity, closest = null;
            walls.forEach(wall => {
                const point = ray.isThereIntersect(wall);
                if (point) {
                    const distance = dist(this.position.x, this.position.y, point.x, point.y);
                    if (distance < record) {
                        record = distance;
                        closest = point;
                    }
                }
            })
            if (closest) {
                line(this.position.x, this.position.y, closest.x, closest.y);
            }
        })
    }
}