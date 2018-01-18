import Ember from 'ember';
import Kitty from '../kitty';
import Sky from '../sky';
import Cloud from '../cloud';
import Ground from '../ground';
import Mount from '../mount';
import FrameRateCounter from '../frameRateCounter';

export default Ember.Service.extend({
    playing: false,

    startUp(theCanvas, context) {

        this.theCanvas = theCanvas
        this.context = context

        //INSTANTIATE ALL OBJECTS
        this.load(theCanvas, context);
        //START THE MENU SCREEN GAMELOOP
        this.menuGameLoop(theCanvas, context);
    }
});
