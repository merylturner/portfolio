'use strict';

var app = app || {};

(function(module){
    const aboutController = {};

    aboutController.init = function () {
        console.log('about controller is listening');
        $('main > section').hide();
        // $('header').hide();
        $('#about-me').show();
    }

    module.aboutController = aboutController;
}(app));

