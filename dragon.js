class Dragon {
    constructor(game) {
        this.game = game;

        this.animator = new Animator(
            ASSET_MANAGER.getAsset("./sprites/FlyDragon.png"),
            0,        // start x
            161,      // start y (row 2)
            191,      // frame width
            161,      // frame height
            3,        // number of frames in row
            0.2       // animation speed
        );

        this.x = 0;
        this.y = 200;
        this.speed = 150;
    }

    update() {
        this.x += this.speed * this.game.clockTick;

        if (this.x > this.game.ctx.canvas.width) {
            this.x = -191;
        }
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}