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
    }

    buildImage(theCanvas, context) {

    }

    draw(theCanvas, context) {

        // if (camera.x <= 0) {
        //     camera.x = 0;
        //     colBuffer = 0;
        // } else if (camera.x > (world.width - camera.width) - scrollRate) {
        //     camera.x = world.width - camera.width;
        //     colBuffer = 0;
        // } else {
        //     colBuffer = 1;
        // }

        // if (camera.y <= 0) {
        //     camera.y = 0;
        //     rowBuffer = 0;
        // } else if (camera.y > (world.height - camera.height) - scrollRate) {
        //     camera.y = world.height - camera.height;
        //     rowBuffer = 0;
        // } else {
        //     rowBuffer = 1;
        // }


    }

    update(theCanvas, context) {

    }

}
