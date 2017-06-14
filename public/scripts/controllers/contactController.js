'use strict';

var app = app || {};

(function(module){
    const contactController = {};

    contactController.init = function () {
        console.log('contact controller is listening');
        $('main > section').hide();
        $('#contact-form').show();
    }

    module.contactController = contactController;
}(app));