import Ember from 'ember';
import Kitty from '../kitty';
import Sky from '../sky';
import Cloud from '../cloud';
import Ground from '../ground';
import Mount from '../mount';
import Bg from '../bg';
import Camera from '../camera';

export default Ember.Service.extend({
    playing: false,

    startUp(theCanvas, context) {
        this.AddGameControls()

        this.theCanvas = theCanvas;
        this.context = context;
        //INSTANTIATE ALL OBJECTS
        this.theCanvas.width = 800
        this.theCanvas.height = 1000

        this.load(theCanvas, context);

        console.log(this.bg.mapRows)
        console.log(this.bg.mapCols)

        this.menuGameLoop(theCanvas, context);
        // this.gameLoop(theCanvas, context);


    },

    menuGameLoop(theCanvas, context) {
        this.render(theCanvas, context);
        this.update(theCanvas, context);
        this.play();

        //check if menu should be rendered
        window.requestAnimationFrame(this.menuGameLoop.bind(this));
    },


    AddGameControls() {
        window.addEventListener('keydown', this.controlAction.bind(this));
        window.addEventListener('keyup', this.controlAction.bind(this));

    },

    load(theCanvas, context) {
        // this.bg.camera = new Camera(this.theCanvas, this.context);
        this.bg = new Bg(this.theCanvas, this.context);
        this.sky = new Sky(this.theCanvas, this.context);
        this.mount = new Mount(this.theCanvas, this.context);
        this.ground = new Ground(this.theCanvas, this.context);
        this.clouds = new Cloud(this.theCanvas, this.context);
        this.kitty = new Kitty(this.theCanvas, this.context);

    },

    render(theCanvas, context) {
        this.context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        this.bg.draw(this.theCanvas, this.context);
        this.sky.draw(this.theCanvas, this.context);
        this.mount.draw(this.theCanvas, this.context);
        this.ground.draw(this.theCanvas, this.context, this.kitty.getKittyX(), this.kitty.Moving());
        this.clouds.draw(this.theCanvas, this.context);
        this.kitty.draw(this.theCanvas, this.context);
    },

    play() {


        // console.log("CAMERA.rows ", this.bg.camera.rows)

        // var FRAME_RATE = 10;
        // var intervalTime = 1000 / FRAME_RATE;



        // console.log("this.bg.camera.X ", this.bg.camera.x)
        // console.log("this.bg.WIDTH ", this.bg.width)
        // console.log("this.bg.WIDTH ", this.bg.camera.width)

        // // var xDistance = (this.bg.width - this.bg.camera.width) - this.bg.camera.scrollRate;

        // // console.log("XDISTANCE ", xDistance)
        // console.log("this.bg.camera.x=", this.bg.camera.x);

        // console.log("ThIS.BG.WIDTH ", this.bg.width)
        // console.log("ThIS.BG.Camera.WIDTH ", this.bg.camera.width)
        // console.log("ThIS.BG.Camera.SCROLLRATE ", this.bg.camera.scrollRate)

        // // console.log("(this.bg.width - this.bg.camera.width)-this.scrollRate =", xDistance);

        // // var yDistance = (this.bg.height - this.bg.camera.height) - this.bg.camera.scrollRate;

        // console.log("this.bg.camera.y=", this.bg.camera.y);
        // // console.log("(this.bg.height - this.bg.camera.height)-this.scrollRate =", yDistance);

        // console.log("colBuffer=", this.bg.camera.colBuffer);
        // console.log("rowBuffer", this.bg.camera.rowBuffer);


        // this.playing == true
        // // add ingame controls
        // this.kitty.playState()
        // this.ground.playState()

    },

    update(theCanvas, context) {
        this.clouds.update(this.theCanvas, this.context);
        this.ground.update(this.theCanvas, this.context);
        this.kitty.update(this.theCanvas, this.context);
        this.bg.update(this.theCanvas, this.context);
    },


    //GAME CONTROLS
    controlAction(e) {
        const type = e.type

        this.bg.camera.dx = 0;
        this.bg.camera.dy = 0;

        switch (type) {
            case "keydown":
                if (e.keyCode === 38) {
                    this.kitty.jump();
                }
                if (e.keyCode === 39) {
                    this.bg.camera.dx = this.bg.camera.scrollRate

                    console.log("KEYPRESS")
                    // this.kitty.move(this.theCanvas, this.context);
                }
                break;
            case "keyup":
                if (e.keyCode === 39) {
                    // this.kitty.stop(this.theCanvas, this.context);
                }
                break;
            default:

        }

    }
});



