/* miniPlugin js */
var snippets = {

    init: function( settings ) {
        snippets.bindEvents(settings);
    },

    bindEvents: function(s) {
        s.trigger.on('click', function(event) {
            s.element.removeClass('closed');
            s.element.addClass('open');
        });
        s.closer.on('click', function(event) {
            s.element.removeClass('open');
            s.element.addClass('closed');
        });
    }
};

/* init each navbar 'snippet' */

snippets.init({
    trigger : $('#search-trigger'),     // button trigger open the snippet
    element : $('#search-form'),        // snippet container
    closer  : $('#search-form .closer') // close node for close snippet
});

snippets.init({
    trigger : $('#extra-info-trigger'),
    element : $('#extra-info'),
    closer  : $('#extra-info .closer')
});
