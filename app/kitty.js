import Ember from 'ember';

export default class {

    constructor(theCanvas) {
        this.play = false;
        this.isJumping = true
        this.ycoords = [862, 871, 881, 892, 901, 913, 922, 933, 936, 941, 943, 944, 944, 945, 946, 948, 946, 949, 948, 951, 954, 956, 954, 949, 942, 931, 922, 911, 899, 888, 880, 870, 860, 852, 845, 837, 830, 827, 823, 822, 824, 824, 823, 825, 827, 829, 834, 840, 846, 858, 868, 878, 890, 900, 914, 919, 925, 933, 939, 942, 944, 944]
        this.iterator = this.ycoords.entries();

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


        // this.p0 = { x: 0, y: 1070 };
        // this.p1 = { x: 0, y: 800 };
        // this.p2 = { x: 0, y: 1000 };
        // this.p3 = { x: 1090, y: 1000 };
        // // then again

        this.player = { x: 0, y: 0, speed: .01, t: 0 };

        // this.points = new Array();
    }

    buildImage(theCanvas, context) {
        var image = new Image()
        image.src = this.imageSource

        this.Xposition = theCanvas.width / 2

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
        // //first to coordinates are control points
        // //(900, 960) x and y coordinates of last point
        // context.quadraticCurveTo(300, 970, 900, 960);

        // context.lineWidth=3;

        // context.strokeStyle = 'white';
        // context.stroke();


        if (this.play == false) {
            context.drawImage(this.buildImage(theCanvas, context), this.sourceX, this.sourceY, 32, 32, this.Xposition, this.Yposition, 100, 100);

        } else {

            //LOOK INTO SETINTERVAL!!!            
            this.Yposition = this.iterator.next().value[1]


            // context.closePath();

            // this.player.x = xt - this.buildImage(theCanvas, context).width / 2;
            // this.player.y = yt - this.buildImage(theCanvas, context).height / 2;


            // context.drawImage(this.buildImage(theCanvas, context), this.sourceX, this.sourceY, 32, 32, this.Xposition, this.Yposition, 100, 100);
            context.drawImage(this.buildImage(theCanvas, context), this.sourceX, this.sourceY, 32, 32, theCanvas.width / 2, this.Yposition, 100, 100);

        }



        //curve stuff

        // requestAnimationFrame(this.update.bind(this));
        // var now = Date.now();
        // var delta = now - this.then;
        // // console.log(now - this.then)
        // if (delta > this.interval) {
        //     this.then = now - (delta % this.interval);
        //     context.drawImage(this.buildImage(theCanvas, context), this.sourceX, this.sourceY, 32, 32, this.Xposition, this.Yposition, 100, 100);
        // }
    }

    jump() {
        //jump height
        console.log(this.isJumping)
        // if (this.isJumping == true) {
        //     this.Yposition -= 300
        // }
    }

    update() {

        // for (let value of ycoords) {
        //     // console.log(value);
        //     this.Yposition = value
        //     console.log(this.Yposition.next())
        // }

        // this.ycoords
        // this.Yposition

        // if (this.Yposition < this.jumpLimit) {

        //     var gravity = 5;
        //     this.Yposition += gravity
        //     this.isJumping == false
        // }
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

