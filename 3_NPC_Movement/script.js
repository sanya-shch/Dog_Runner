const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 10;
const enemiesArray = [];
let gameFrame = 0;

// const enemy1Image = new Image();
// enemy1Image.src = 'enemy1.png';
// const enemy2Image = new Image();
// enemy2Image.src = 'enemy2.png';
// const enemy3Image = new Image();
// enemy3Image.src = 'enemy3.png';
// const enemy4Image = new Image();
// enemy4Image.src = 'enemy4.png';

// // movement type 1
// class Enemy {
//     constructor() {
//         this.image = new Image();
//         this.image.src = 'enemy1.png';
//         // this.speed = Math.random() * 4 - 2;
//         this.spriteWidth = 293;
//         this.spriteHeight = 155;
//         this.width = this.spriteWidth / 2.5;
//         this.height = this.spriteHeight / 2.5;
//         this.x = Math.random() * (canvas.width - this.width);
//         this.y = Math.random() * (canvas.height - this.height);
//         this.frame = 1;
//         this.flapSpeed = Math.floor(Math.random() * 3 +1);
//     }
//     update() {
//         this.x += Math.random() * 5 - 2.5;
//         this.y += Math.random() * 5 - 2.5;
//
//         if (gameFrame % this.flapSpeed === 0) {
//             this.frame > 4 ? this.frame = 0 : this.frame++;
//         }
//     }
//     draw() {
//         // ctx.fillRect(this.x, this.y, this.width, this.height);
//         // ctx.strokeRect(this.x, this.y, this.width, this.height);
//         ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
//     }
// }

// movement type 2
class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = 'enemy2.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 1;
        this.flapSpeed = Math.floor(Math.random() * 3 +1);
    }
    update() {
        this.x -= this.speed;
        // this.y += Math.random() * 5 - 2.5;

        if (this.x + this.width < 0) this.x = canvas.width;

        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
