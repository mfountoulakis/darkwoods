import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        $("li").first().addClass('highlight')

    },

    didRender() {
        const router = this.get('router')
        $(document).keydown(function (e) {
            var index = $("#s li.highlight").index()
            var selected = $("#s li.highlight")

            switch (e.which) {
                case 13:
                    router.transitionTo($("#s li.highlight > a").text())
                    break;
                case 38: // up
                    if (index == 2) {
                        console.log('index is 2')
                        $("#s li").first().addClass('highlight')
                        $("#s li").last().removeClass('highlight')
                    } else {
                        $("#s li.highlight").next("li").addClass('highlight');
                        selected.removeClass('highlight')
                    }
                    break;
                case 40: // down
                    if (index == 2) {
                        console.log('index is 2')
                        $("#s li").first().addClass('highlight')
                        $("#s li").last().removeClass('highlight')

                    } else {
                        $("#s li.highlight").next("li").addClass('highlight');
                        selected.removeClass('highlight')
                    }
                    break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });
    }
});
