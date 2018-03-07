import Ember from 'ember';
import gameRunner from '../services/game-runner';

export default Ember.Component.extend({

    gameRunner: Ember.inject.service('game-runner'),


    didInsertElement() {

        var theCanvas = document.getElementById("canvasOne");
        var context = theCanvas.getContext("2d");

        this.set('theCanvas', theCanvas);
        this.set('context', context);




        this.get('gameRunner').startUp(theCanvas, context);
    }
});
