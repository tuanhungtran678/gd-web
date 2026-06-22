export default class Camera {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    update(player) {
        // chỉ cuộn ngang
        this.x = player.x - 120;
    }

}