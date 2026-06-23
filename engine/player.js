export default class Player {

    constructor() {

        // Position
        this.x = 100;
        this.y = 300;

        // Size
        this.width = 40;
        this.height = 40;

        // Movement
        this.speed = 5;
        this.velY = 0;

        // Physics
        this.gravity = 0.6;
        this.jumpForce = -12;

        // State
        this.onGround = true;
        this.dead = false;

        // Rotation
        this.rotation = 0;
        this.rotationSpeed = 6;
    }

    jump() {

        if (this.onGround) {

            this.velY = this.jumpForce;
            this.onGround = false;

        }

    }

    update() {

        // Auto-run
        this.x += this.speed;

        // Gravity
        this.velY += this.gravity;
        this.y += this.velY;

        // Rotate while airborne
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

    respawn() {

        this.x = 100;
        this.y = 300;

        this.velY = 0;

        this.rotation = 0;

        this.dead = false;
        this.onGround = true;
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