import Player from "./engine/player.js";
import Camera from "./engine/camera.js";
import Level from "./engine/level.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const player = new Player();
const camera = new Camera();
const level = new Level();

document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        player.jump();
    }
});

function loop() {

    requestAnimationFrame(loop);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // update
    player.update();
    camera.update(player);
    level.update(player);

    // camera transform
    ctx.save();
    ctx.translate(-camera.x, 0);

    // draw ground
    ctx.fillStyle = "#444";
    ctx.fillRect(camera.x, 340, canvas.width * 2, 300);

    // draw level
    level.draw(ctx);

    // draw player
    player.draw(ctx);

    ctx.restore();
}

loop();