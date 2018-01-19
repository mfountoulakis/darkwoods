import Ember from 'ember';
import gameRunner from '../services/game-runner';

export default Ember.Route.extend({

    gameRunner: Ember.inject.service('game-runner'),

    actions: {
        // didTransition() {
        //     this.get('gameRunner').startUp()
        // }
    }
});
