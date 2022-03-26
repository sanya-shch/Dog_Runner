const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let playerState = "idle";
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (event) {
    playerState = event.target.value;
});

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'dog_sprite.png';

const spriteWIdth = 575; // 6876/12 = 573
const spriteHeight = 523; // 5230/10 = 523
// let frameX = 0;
// let frameY = 0;

let gameFrame = 0;
const staggerFrames = 5;

const spriteAnimations = {};
const animationStates = [
    {
        name: 'idle',
        numberOfFrames: 7,
    },
    {
        name: 'jump',
        numberOfFrames: 7,
    },
    {
        name: 'fall',
        numberOfFrames: 7,
    },
    {
        name: 'run',
        numberOfFrames: 9,
    },
    {
        name: 'dizzy',
        numberOfFrames: 11,
    },
    {
        name: 'sit',
        numberOfFrames: 5,
    },
    {
        name: 'roll',
        numberOfFrames: 7,
    },
    {
        name: 'bite',
        numberOfFrames: 7,
    },
    {
        name: 'ko',
        numberOfFrames: 12,
    },
    {
        name: 'getHit',
        numberOfFrames: 4,
    }
];

animationStates.forEach(({name, numberOfFrames}, index) => {
    let frames = {
        loc: [],
    };

    for (let i = 0; i < numberOfFrames; i++) {
        let positionX = i * spriteWIdth;
        let positionY = index * spriteHeight;

        frames.loc.push({x: positionX, y: positionY})
    }

    spriteAnimations[name] = frames;
});

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWIdth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWIdth, spriteHeight, 0, 0, spriteWIdth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();
