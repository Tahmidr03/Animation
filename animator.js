class Animator {
    constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spriteSheet, xStart, yStart, width, height, frameCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;

        if (this.elapsedTime >= this.totalTime) {
            this.elapsedTime = 0;
        }

        const frame = Math.floor(this.elapsedTime / this.frameDuration);

        ctx.drawImage(
            this.spriteSheet,
            this.xStart + frame * this.width,
            this.yStart,
            this.width,
            this.height,
            x,
            y,
            this.width,
            this.height
        );
    }
}