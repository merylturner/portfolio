'use strict';

var app = app || {};

(function(module){
    const contactView = {}

    project.contactView.init = function() {
        $('main > section').show();
        $('#contact-form').show();
    }
    module.contactView = contactView;
}(app));