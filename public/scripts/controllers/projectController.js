'use strict';

var app = app || {};

(function(module){
    const projectController = {};

    projectController.init = function () {
        console.log('project controller is listening');
        $('main > section').hide();
        $('#projects').show();
        app.Project.fetchAll();
        app.projectView.initIndexPage();
    }

    module.projectController = projectController;
}(app));