export default class Player {

    constructor() {

        this.x = 100;
        this.y = 300;

        this.width = 40;
        this.height = 40;

        this.velY = 0;

        this.rotation = 0;
        this.rotationSpeed = 6;

        this.onGround = true;
        this.dead = false;
    }

    jump() {

        if (this.onGround) {

            this.velY = -12;
            this.onGround = false;

        }

    }

    update() {

        // Gravity
        this.velY += 0.6;
        this.y += this.velY;

        // Rotation
        if (!this.onGround) {
            this.rotation += this.rotationSpeed;
        }

        // Ground collision
        if (this.y >= 300) {

            this.y = 300;
            this.velY = 0;

            if (!this.onGround) {

                this.rotation =
                    Math.round(this.rotation / 90) * 90;

            }

            this.onGround = true;

        }

    }

    draw(ctx) {

        ctx.save();

        ctx.translate(
            this.x + this.width / 2,
            this.y + this.height / 2
        );

        ctx.rotate(
            this.rotation * Math.PI / 180
        );

        ctx.fillStyle = "#00ff66";

        ctx.fillRect(
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );

        ctx.restore();

    }

}