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

        this.positions = [];

        this.tileSheet = new Image();
        this.tileSheet.src = './assets/images/bg.png';


        this.load(theCanvas, context);

        this.tilePoint = {};
        this.source = {};


        //camera crap
        this.rowBuffer = 1;
        this.colBuffer = 1;
        this.scrollRate = 0.5;
        //camera crap

        console.log(this.bg.mapRows)
        console.log(this.bg.mapCols)

        this.world = this.bg
        this.camera = this.camera

        this.world.cols = this.bg.mapCols
        this.world.rows = this.bg.mapRows
        this.world.tileWidth = 96;
        this.world.tileHeight = 96;
        this.world.height = this.bg.mapRows * 96;
        this.world.width = this.bg.mapCols * 96;

        this.camera.height = this.theCanvas.height;
        this.camera.width = this.theCanvas.width;
        this.camera.rows = this.camera.height / 96;
        this.camera.cols = this.camera.width / 96;

        this.camera.dx = 0;
        this.camera.dy = 0;
        this.camera.x = 0;
        this.camera.y = 0;



        console.log("scrollRate=", this.scrollRate);
        //START THE MENU SCREEN GAMELOOP
        this.menuGameLoop(theCanvas, context);
        this.gameLoop(theCanvas, context);


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
        this.camera = new Camera(this.theCanvas, this.context);
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

        var FRAME_RATE = 10;
        var intervalTime = 1000 / FRAME_RATE;

        this.camera.x += this.camera.dx;
        this.camera.y += this.camera.dy;


        var xDistance = (this.world.width - this.camera.width) - this.scrollRate;
        console.log("this.camera.x=", this.camera.x);
        console.log("(this.world.width - this.camera.width)-this.scrollRate =", xDistance);

        var yDistance = (this.world.height - this.camera.height) - this.scrollRate;
        console.log("this.camera.y=", this.camera.y);
        console.log("(this.world.height - this.camera.height)-this.scrollRate =", yDistance);

        console.log("colBuffer=", this.colBuffer);
        console.log("rowBuffer", this.rowBuffer);

        var tilex = Math.floor(this.camera.x / this.world.tileWidth);
        var tiley = Math.floor(this.camera.y / this.world.tileHeight);

        var rowCtr;
        var colCtr;
        var tileNum;

        this.camera.x += this.camera.dx;
        this.camera.y += this.camera.dy;


        this.context.setTransform(1, 0, 0, 1, 0, 0);

        this.context.translate(-this.camera.x % this.world.tileWidth, -this.camera.y % this.world.tileHeight);

        for (rowCtr = 0; rowCtr < this.camera.rows + this.rowBuffer; rowCtr++) {
            for (colCtr = 0; colCtr < this.camera.cols + this.colBuffer; colCtr++) {

                tileNum = (this.world.tileMap[rowCtr + tiley][colCtr + tilex]);

                this.tilePoint.x = colCtr * this.world.tileWidth;
                this.tilePoint.y = rowCtr * this.world.tileHeight;

                this.source.x = Math.floor(tileNum % 20) * 96;
                this.source.y = Math.floor(tileNum / 20) * 96;

                this.context.drawImage(this.tileSheet, this.source.x, this.source.y, this.world.tileWidth,
                    this.world.tileHeight, this.tilePoint.x, this.tilePoint.y,
                    this.world.tileWidth, this.world.tileHeight);
            }
        }

        this.playing == true
        // add ingame controls
        this.kitty.playState()
        this.ground.playState()

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

        this.camera.dx = 0;
        this.camera.dy = 0;

        switch (type) {
            case "keydown":
                if (e.keyCode === 38) {
                    this.kitty.jump();
                }
                if (e.keyCode === 39) {
                    this.camera.dx = this.scrollRate

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



