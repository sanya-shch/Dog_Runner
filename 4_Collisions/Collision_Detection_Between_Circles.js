const circle1 = { x: 5, y: 5, radius: 50};
const circle2 = { x: 50, y: 10, radius: 20};

let dx = circle2.x - circle1.x;
let dy = circle2.y - circle1.y;

let distance = Math.sqrt(dx * dx + dy * dy);
let sumOfRadius = circle2.radius + circle1.radius;

if (distance < sumOfRadius) {
    // collision detected
} else if (distance === sumOfRadius) {
    // circles are touching
} else {
    // no collision
}
