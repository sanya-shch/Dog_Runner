const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 700;

const explosions = [];
let gameFrame = 0;
let canvasPosition = canvas.getBoundingClientRect();

class Explosion {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = 'boom.png';
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;
        this.x = x - this.width / 2;
        this.y = y - this.height / 2;
        this.frame = 0;
        this.speed = 10;
    }
    update() {
        if (gameFrame % this.speed === 0) {
            // this.frame > 4 ? this.frame = 0 : this.frame++;

            this.frame++
        }
    }
    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

// window.addEventListener('click', function (e) {
//     // ctx.fillStyle = "white";
//     // ctx.fillRect(e.x - canvasPosition.left - 25, e.y - canvasPosition.top - 25, 50, 50);
//
//     let positionX = e.x - canvasPosition.left;
//     let positionY = e.y - canvasPosition.top;
//
//     explosions.push(new Explosion(positionX, positionY));
//     console.log(explosions)
// });

window.addEventListener('click', function (e) {
    createAnimation(e);
});

window.addEventListener('mousemove', function (e) {
    createAnimation(e);
});

function createAnimation(e) {
    let positionX = e.x - canvasPosition.left;
    let positionY = e.y - canvasPosition.top;

    explosions.push(new Explosion(positionX, positionY));
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let i = 0; i < explosions.length; i++) {
        explosions[i].update();
        explosions[i].draw();

        if (explosions[i].frame > 5) {
            explosions.splice(i, 1);
            i--;
        }
    }

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
