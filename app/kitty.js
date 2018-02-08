import Ember from 'ember';

export default class {

    constructor(theCanvas, context) {
        this.isMoving = false;
        this.pathFinished = false;
        this.theCanvas = theCanvas;
        this.context = context;
        this.play = false;
        this.isJumping = false;

        this.jumpLimit = 840
        this.Yposition = 900

        var imageSource = new Image()
        this.imageSource = 'assets/images/cat.png';
        this.frameIndex = 0;
        this.sequence = [80, 80, 80, 80, 80, 80, 81, 81, 81, 81, 81, 81, 81, 82, 82, 83, 83];
        this.fps = 60;
        this.now = ""
        this.then = Date.now();
        this.interval = 1000 / this.fps;
        this.delta = ""
        this.x = 1;
        this.y = 900


        this.p0 = { x: 0, y: 850 };
        this.p1 = { x: 300, y: 910 };
        this.p2 = { x: 900, y: 920 };
        this.p3 = { x: 900, y: 910 };

        //start at t = 0 on canvas
        this.kitty = { x: 20, y: 842, speed: .001, t: 0 };

        this.points = new Array();
    }

    buildImage() {
        var image = new Image()
        image.src = this.imageSource

        this.Xposition = this.theCanvas.width / 2
        return image
    }

    playState(theCanvas, context) {
        this.play = true
        this.frameIndex = 0;
        this.sequence = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
    }

    draw(theCanvas, context, groundx) {

        // this.Xposition = groundx

        // context.beginPath();
        // //x and y coordinates(0,870)
        // context.moveTo(0, 870);
        // // the x co - ordinate of the control point(P1)
        // // the y co - ordinate of the control point(P1)
        // // the x co - ordinate of the end point(P2)
        // // the y co - ordinate of the end point(P2)
        // context.bezierCurveTo(0, 900, 300, 970, 900, 960);

        // // this.p0 = { x: 0, y: 842 };
        // // this.p1 = { x: 300, y: 970 };
        // // this.p2 = { x: 900, y: 855 };
        // // this.p3 = { x: 900, y: 920 };

        // context.lineWidth = 3;

        // context.strokeStyle = 'white';
        // context.stroke();


        // context.beginPath();
        // //x and y coordinates(0,870)
        // context.moveTo(900, 960);
        // //first to coordinates are control points
        // //(900, 960) x and y coordinates of last point

        // // the x co - ordinate of the control point(P1)
        // // the y co - ordinate of the control point(P1)
        // // the x co - ordinate of the end point(P2)
        // // the y co - ordinate of the end point(P2)
        // context.quadraticCurveTo(1900, 700, 2000, 960);

        // context.lineWidth = 3;

        // context.strokeStyle = 'red';
        // context.stroke();


        if (this.play == false) {
            // this.context.drawImage(this.buildImage(this.theCanvas, this.context), this.sourceX, this.sourceY, 32, 32, this.Xposition, this.Yposition, 100, 100);

        } else {
            // this.context.drawImage(this.buildImage(this.theCanvas, this.context), this.sourceX, this.sourceY, 32, 32, this.kitty.x, this.kitty.y, 100, 100);
        }

    }

    move() {
        this.isMoving = true
        console.log("MovinG? ", this.isMoving)

    }

    stop() {
        this.isMoving = false
    }

    jump() {
        //jump height
        this.isJumping = true
        this.kitty.y -= 300
    }

    getKittyX() {
        if (this.isMoving == true){
            return this.kitty.x

        }
    }

    Moving() {
        if (this.isMoving == true){
            return true
        }
    }

    newPath() {
        this.p0 = { x: 1200, y: 960 };
        this.p1 = { x: 1900, y: 700 };
        this.p2 = { x: 1000, y: 1000 };
        this.p3 = { x: 40000, y: 1000 };

        this.kitty = { x: 900, y: 842, speed: .01, t: 0 };

        this.points = new Array();
        //
        this.newPath = function () { };
    }

    update() {
        if (this.isMoving == true) {
            var t = this.kitty.t

            //Curve coeficcient functions
            var cx = 3 * (this.p1.x - this.p0.x)
            var bx = 3 * (this.p2.x - this.p1.x) - cx;
            var ax = this.p3.x - this.p0.x - cx - bx;

            var cy = 3 * (this.p1.y - this.p0.y);
            var by = 3 * (this.p2.y - this.p1.y) - cy;
            var ay = this.p3.y - this.p0.y - cy - by;

            // Then we use the t value to calculate the x and y values (xt, yt) using the Bezier curve equations:
            var xt = ax * (t * t * t) + bx * (t * t) + cx * t + this.p0.x;
            var yt = ay * (t * t * t) + by * (t * t) + cy * t + this.p0.y;

            this.kitty.t += this.kitty.speed;

            if (this.kitty.t > 1) {
                this.kitty.t = 1;
            }

            if (this.kitty.x == 884) {
                this.pathFinished = true
            }

            //32 is the width of the kitty image
            this.kitty.x = xt - 32 / 2;
            this.kitty.y = yt - 32 / 2;

            // console.log("KittlyT ", this.kitty.t)
            // console.log("kittyYpositionY ", this.kitty.y)

            // console.log("kittyxposition ", this.kitty.x)

        }

        if (this.pathFinished == true) {
            // alert("all done")
            // context.quadraticCurveTo(1900, 700, 2000, 960);
            this.newPath()

        }


        if (this.kitty.y < this.jumpLimit && this.isJumping) {
            var gravity = 5;
            this.kitty.y += gravity
            this.isJumping == false
        }
        //Stick this Someplace Else
        this.sourceX = Math.floor(this.sequence[this.frameIndex] % 16) * 32;
        this.sourceY = Math.floor(this.sequence[this.frameIndex] / 16) * 32;
        // //Stick this someplace else
        this.frameIndex++;
        if (this.frameIndex == this.sequence.length) {
            this.frameIndex = 0;
        }
    }
}

