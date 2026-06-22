import Spike from "./spike.js";

export default class Level {

    constructor() {

        this.spikes = [
            new Spike(500, 300),
            new Spike(800, 300),
            new Spike(1100, 300)
        ];

    }

    update(player) {

        // check collision
        for (let spike of this.spikes) {

            if (
                player.x < spike.x + spike.width &&
                player.x + player.width > spike.x &&
                player.y < spike.y + spike.height &&
                player.y + player.height > spike.y
            ) {
                player.dead = true;
            }

        }

        // respawn
        if (player.dead) {

            player.x = 100;
            player.y = 300;
            player.velY = 0;
            player.rotation = 0;

            player.dead = false;
        }

    }

    draw(ctx) {

        for (let spike of this.spikes) {
            spike.draw(ctx);
        }

    }

}