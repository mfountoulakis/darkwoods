import Ember from 'ember';
import Kitty from '../kitty';
import Sky from '../sky';
import Cloud from '../cloud';
import Ground from '../ground';
import Mount from '../mount';

export default Ember.Service.extend({
    playing: false,

    startUp(theCanvas, context) {
        this.theCanvas = theCanvas;
        this.context = context;
        //INSTANTIATE ALL OBJECTS
        this.load(theCanvas, context);
        //START THE MENU SCREEN GAMELOOP
        this.menuGameLoop(theCanvas, context);
    },

    menuGameLoop(theCanvas, context) {
        this.render(theCanvas, context);
        this.update(theCanvas, context);
        //check if menu should be rendered
        window.requestAnimationFrame(this.menuGameLoop.bind(this));
    },

    AddGameControls() {
        window.addEventListener('keydown', this.controlAction.bind(this));
    },

    load(theCanvas, context) {
        this.sky = new Sky(this.theCanvas, this.context);
        this.mount = new Mount(this.theCanvas, this.context);
        this.ground = new Ground(this.theCanvas, this.context);
        this.clouds = new Cloud(this.theCanvas, this.context);
        this.kitty = new Kitty(this.theCanvas, this.context);

    },

    render(theCanvas, context) {
        this.context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        this.sky.draw(this.theCanvas, this.context);
        this.mount.draw(this.theCanvas, this.context);
        this.ground.draw(this.theCanvas, this.context);
        this.clouds.draw(this.theCanvas, this.context);
        this.kitty.draw(this.theCanvas, this.context, this.ground.getGroundx(this.theCanvas, this.context));
    },

    play() {
        this.playing == true
        //add ingame controls
        this.AddGameControls()
        this.kitty.playState()
        this.ground.playState()

    },

    update(theCanvas, context) {

        this.clouds.update(this.theCanvas, this.context);
        this.ground.update(this.theCanvas, this.context);
        this.kitty.update(this.theCanvas, this.context);

    },

    //GAME CONTROLS
    controlAction(e) {
        if (e.keyCode === 38) {
            this.kitty.jump();
        }
    }

});



