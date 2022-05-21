document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = canvas.width = 500;
    const CANVAS_HEIGHT = canvas.height = 800;

    class Game {
        constructor (ctx, width, height) {
            this.ctx = ctx;
            this.width = width;
            this.height = height;

            this.enemies = [];

            this.enemyInterval = 1000;
            this.enemyTimer = 0;
        }
        update (deltaTime) {
            this.enemies = this.enemies.filter(obj => !obj.markedForDeletion);
            if (this.enemyTimer > this.enemyInterval) {
                this.#addNewEnemy();
                this.enemyTimer = 0;
            } else {
                this.enemyTimer += deltaTime;
            }

            this.enemies.forEach(obj => obj.update());
        }
        draw () {
            this.enemies.forEach(obj => obj.draw(this.ctx));
        }
        #addNewEnemy () {
            this.enemies.push(new Enemy(this));
        }
    }

    class Enemy {
        constructor (game) {
            this.game = game;
            this.x = this.game.width;
            this.y = Math.random() * this.game.height;
            this.width = 100;
            this.height = 100;
            this.markedForDeletion = false;
        }
        update () {
            this.x--;

            if (this.x < 0 - this.width) this.markedForDeletion = true;
        }
        draw (ctx) {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    const game = new Game(ctx, CANVAS_WIDTH, CANVAS_HEIGHT);
    let lastTime = 1;

    function animate(timeStamp) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        game.update(deltaTime);
        game.draw();

        requestAnimationFrame(animate);
    }
    animate(0);
});
