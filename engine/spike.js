export default class Spike {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = 40;
        this.height = 40;
    }

    draw(ctx) {

        ctx.fillStyle = "red";

        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.height);
        ctx.lineTo(this.x + this.width / 2, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);
        ctx.closePath();
        ctx.fill();

    }

}
