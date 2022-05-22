import Player from "./player.js";
import InputHandler from "./input.js";
import { drawStatusText } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () { // load DOMContentLoaded
    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = canvas.width = window.innerWidth;
    const CANVAS_HEIGHT = canvas.height = window.innerHeight;

    const player = new Player(CANVAS_WIDTH, CANVAS_HEIGHT);
    const input = new InputHandler();

    let lastTime = 1;

    function animate(timeStamp) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        player.update(input.lastKey);
        player.draw(ctx, deltaTime);

        drawStatusText(ctx, input, player);
        requestAnimationFrame(animate);
    }
    animate(0);
});
