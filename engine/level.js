import Spike from "./spike.js";

export default class Level {

    constructor() {

        this.name = "";
        this.length = 3000;

        this.objects = [];
        this.spikes = [];
    }

    async load(url) {

        const res = await fetch(url);
        const data = await res.json();

        this.name = data.name;
        this.length = data.length;

        this.objects = data.objects;

        this.spikes = [];

        for (const obj of this.objects) {

            switch(obj.type) {

                case "spike":

                    this.spikes.push(
                        new Spike(
                            obj.x,
                            obj.y
                        )
                    );

                    break;
            }
        }
    }

    draw(ctx) {

        ctx.fillStyle = "#444";

        ctx.fillRect(
            0,
            340,
            this.length,
            300
        );

        for (const spike of this.spikes) {
            spike.draw(ctx);
        }
    }
}