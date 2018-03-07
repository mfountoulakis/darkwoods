import Ember from 'ember';
import Kitty from '../kitty';
import Sky from '../sky';
import Cloud from '../cloud';
import Ground from '../ground';
import Bg from '../bg';
import Camera from '../camera';

import Mount from '../mount';
// import Bg from '../bg';
// import Camera from '../camera';

export default Ember.Service.extend({
  playing: false,

  startUp(theCanvas, context) {
    this.AddGameControls();

    this.theCanvas = theCanvas;
    this.context = context;
    //INSTANTIATE ALL OBJECTS
    this.theCanvas.width = 1067;
    this.theCanvas.height = 600;

    this.load(theCanvas, context);

    this.menuGameLoop(theCanvas, context);
    // this.gameLoop(theCanvas, context);
  },

  menuGameLoop(theCanvas, context) {
    this.render(theCanvas, context);
    this.update(theCanvas, context);
    this.play();

    //check if menu should be rendered
    window.requestAnimationFrame(this.menuGameLoop.bind(this), this.getDelta());
  },

  getDelta() {
    const elapsed = Date.now();
    const delta = (elapsed - this.before) / 1000;
    this.before = elapsed;

    console.log(elapsed);
  },

  AddGameControls() {
    window.addEventListener('keydown', this.controlAction.bind(this));
    window.addEventListener('keyup', this.controlAction.bind(this));
  },

  load(theCanvas, context) {
    this.bg = new Bg(this.theCanvas, this.context);
    this.camera = new Camera(theCanvas, context);

    this.sky = new Sky(this.theCanvas, this.context);
    this.mount = new Mount(this.theCanvas, this.context);
    this.ground = new Ground(this.theCanvas, this.context);
    this.clouds = new Cloud(this.theCanvas, this.context);
    this.kitty = new Kitty(this.theCanvas, this.context);
  },

  render(theCanvas, context) {
    this.context.clearRect(0, 0, theCanvas.width, theCanvas.height);
    this.bg.draw(this.theCanvas, this.context);
    // this.camera.draw(this.theCanvas, this.context);
    this.sky.draw(this.theCanvas, this.context);
    this.mount.draw(this.theCanvas, this.context);
    this.ground.draw(this.theCanvas, this.context);
    this.clouds.draw(this.theCanvas, this.context);
    this.kitty.draw(this.theCanvas, this.context);
  },

  play() {},

  update(theCanvas, context) {
    this.clouds.update(this.theCanvas, this.context);
    this.ground.update(this.theCanvas, this.context);
    this.kitty.update(this.theCanvas, this.context);
    this.bg.update(this.theCanvas, this.context);
  },

  //GAME CONTROLS
  controlAction(e) {
    const type = e.type;
    //make sure no scrolling happens before key is pressed.
    this.bg.camera.dx = 0;
    this.bg.camera.dy = 0;

    switch (type) {
      case 'keydown':
        if (e.keyCode === 38) {
          this.kitty.jump();
        }
        if (e.keyCode === 39) {
          this.bg.camera.dx = this.bg.camera.scrollRate;
        }
        break;
      case 'keyup':
        if (e.keyCode === 39) {
          // this.kitty.stop(this.theCanvas, this.context);
        }
        break;
      default:
    }
  },
});
