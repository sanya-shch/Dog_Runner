export function drawStatusText(ctx, input, player) {
    ctx.font = "30px";
    ctx.fillText("Last input: " + input.lastKey, 20, 50);
    ctx.fillText("Active state: " + player.currentState, 20, 90);
}
