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


snippets.init({
    trigger : $('#search-trigger'),
    element : $('#search-form'),
    closer : $('#search-form .closer')
});

snippets.init({
    trigger : $('#extra-info-trigger'),
    element : $('#extra-info'),
    closer : $('#extra-info .closer')
});
/*
myFeature.init({
    foo: "bar"
});

myFeature.readSettings(); // { foo: "bar" }*/