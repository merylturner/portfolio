'use strict';

var app = app || {};

(function(module){
    const homeController = {};

    homeController.init = function () {
        console.log('home controller is listening');
        $('main > section').show();
        app.Project.fetchAll();
        app.projectView.initIndexPage();
    }

    module.homeController = homeController;
}(app));