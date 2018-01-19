import Ember from 'ember';

export default class {
    constructor() {
        var imageSource = 'assets/images/clouds_1.png';
        this.imageSource = imageSource

        this.cloud_dist = 0.5;  
        this.cloudx = 2;  
    }

    buildImage(theCanvas, context) {
        var image = new Image()
        image.src = this.imageSource

        return image
    }

    draw(theCanvas, context) {
        context.drawImage(this.buildImage(theCanvas, context), this.cloudx, 0, theCanvas.width, theCanvas.height, 0, 0, theCanvas.width, 900);
    }

    update(theCanvas, context) {
        if ((this.cloudx + this.cloud_dist) > this.cloud_dist)
            this.cloudx -= this.cloud_dist;
        else
            this.cloudx = theCanvas.width
    }

}
