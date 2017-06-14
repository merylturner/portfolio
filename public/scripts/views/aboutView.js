'use strict';

var app = app || {};

(function (module) {
    const aboutView = {};

    let userRender = Handlebars.compile($('#user-template').text());

    aboutView.userIndex = function () {
        $('#about-me section').append(userRender(app.user.data));

    }
    module.aboutView = aboutView;
}(app))