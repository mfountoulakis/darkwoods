import Ember from 'ember';

export default class {
    constructor(theCanvas, context) {

        this.height = theCanvas.height;
        this.width = theCanvas.width;

        this.rows = this.height / 96 //world.tileHeight;
        this.cols = this.width / 96 //world.tileWidth;
        
        this.dx = 0;
        this.dy = 0;
        this.x = 0;
        this.y = 0;

        this.rowBuffer = 1;
        this.colBuffer = 1;
        this.scrollRate = 1;
    }

    buildImage(theCanvas, context) {

    }

    draw(theCanvas, context) {

    }

    update(theCanvas, context) {

    }

}
