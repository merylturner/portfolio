'use strict';

var app = app || {};

(function(module){
    const aboutController = {};

    aboutController.init = function () {
        console.log('about controller is listening');
        $('main > section').hide();
        $('#about-me').show();
        $('#about-user').show();

        app.user.requestUser(app.aboutView.userIndex);
    }

    module.aboutController = aboutController;
}(app));

