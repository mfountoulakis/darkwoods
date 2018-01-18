import Ember from 'ember';

export default Ember.Route.extend({

    gameRunner: Ember.inject.service('game-runner'),

    actions: {
        didTransition() {
            //transition to some route
        }
    }
});
