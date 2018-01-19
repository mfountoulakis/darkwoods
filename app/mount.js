import Ember from 'ember';

export default class {

    constructor() {
        var imageSource = 'assets/images/rocks.png';
        this.imageSource = imageSource
    }

    buildImage(theCanvas, context) {
        var image = new Image()
        image.src = this.imageSource
        return image
    }

    draw(theCanvas, context) {
        context.drawImage(this.buildImage(theCanvas, context), 0, 0);

    }

}
