import Ember from 'ember';
import Bg from './bg';

export default class {
  constructor(theCanvas, context) {
    this.height = theCanvas.height;
    this.width = theCanvas.width;

    this.rows = this.height / 61; //bg.tileHeight;
    this.cols = this.width / 79; //bg.tileWidth;

    //dx is essentially scroll rate
    this.dx = 0;
    this.dy = 0;
    this.x = 0;
    this.y = 0;

    this.rowBuffer = 1;
    this.colBuffer = 1;
    //move camera one pixel at a time
    this.scrollRate = 1;
  }
}
