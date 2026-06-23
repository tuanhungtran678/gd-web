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

await level.load(
    "./levels/stereo-madness.json"
);

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
    
    const progress = Math.min(
        100,
        Math.floor(player.x / level.length * 100)
    );

for (const spike of level.spikes) {

    if (
        player.x < spike.x + spike.width &&
        player.x + player.width > spike.x &&
        player.y < spike.y + spike.height &&
        player.y + player.height > spike.y
    ) {

        player.dead = true;

    }

}

if (player.dead) {

    player.respawn();

}

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
    // UI (không bị camera kéo theo)
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText(progress + "%", 20, 40);

    ctx.restore();
}
loop();