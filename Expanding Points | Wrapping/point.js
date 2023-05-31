class Point {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = p5.Vector.random2D();
    }

    render() {
        strokeWeight(1);
        stroke(255);
        point(this.pos.x, this.pos.y);
    }

    update() {
        this.pos.add(this.vel);
        this.wrapPos();
    }

    wrapPos() {
        if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.x > width) {
            this.pos.x = 0;
        }

        if (this.pos.y < 0) {
            this.pos.y = height;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        }
    }
}