
// offsets
let offsetX = 0, offsetY = 1000;

// objects
let particle;
let walls = [];

function setup() {
    createCanvas(1024, 768);
    particle = new Particle();

    // set window walls;
    walls = [
        new Wall(0, 0, width, 0), // top
        new Wall(width, 0, width, height), // right
        new Wall(width, height, 0, height), // bottom
        new Wall(0, height, 0, 0) // left
    ];

    for (let i = 0; i < 4; i++) {
        const x1 = random(width), y1 = random(height), x2 = random(width), y2 = random(height);
        const wall = new Wall(x1, y1, x2, y2);
        walls.push(wall);
    }
}

function draw() {
    background(0);

    walls.forEach(wall => wall.show());
    particle.update(noise(offsetX) * width, noise(offsetY) * height);
    particle.show();
    particle.intersect(walls);
    offsetX += 0.01;
    offsetY += 0.01;
}