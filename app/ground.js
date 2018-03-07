import Ember from 'ember';
// import Kitty from './kitty';

export default class {

    constructor(theCanvas, canvas) {
        this.play = false;

        this.kittyx = 0
        this.ground_dist = 0;
        this.groundx = this.kittyx;

    }

    buildImage(theCanvas, context, imageSource) {
        var image = new Image()
        image.src = imageSource
        return image
    }

    draw(theCanvas, context, kittyx, isMoving) {
        if (isMoving == true){
            this.ground_dist = 0.1
        } else {
            this.ground_dist = 0
        }
        // context.drawImage(this.buildImage(theCanvas, context, 'assets/images/ground_1.png'), 0, 0);
        // context.drawImage(this.buildImage(theCanvas, context, 'assets/images/ground_2.png'), 0, 0);
        // //animate this ground
        // context.drawImage(this.buildImage(theCanvas, context, 'assets/images/ground_3.png'), this.groundx, 0, theCanvas.width, theCanvas.height, 0, 0, theCanvas.width, 1090);

    }

    playState(theCanvas, context) {
       this.play = true;
    }

    update(theCanvas, context) {
        if ((this.groundx + this.ground_dist) < theCanvas.width && this.play == true)
            this.groundx += this.ground_dist;
        else
            this.groundx = 0
    }
}


