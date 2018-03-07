import Ember from 'ember';

export default class {

    constructor() {
        var imageSource = 'assets/images/sky.png';
        this.imageSource = imageSource
    }

    buildImage(theCanvas, context) {
        // var image = new Image()
        // image.src = this.imageSource
        // return image
    }

    draw(theCanvas, context) {
        // var image = this.buildImage(theCanvas, context);
        // theCanvas.width = image.width
        // theCanvas.height = image.height

        // context.drawImage(image, 0, 0);
    }

}
