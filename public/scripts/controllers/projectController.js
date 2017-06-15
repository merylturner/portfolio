'use strict';

var app = app || {};

(function (module) {
    const projectController = {};

    projectController.init = function () {
        $('main > section').hide();
        $('#projects').show();
        app.Project.fetchAll();
        app.projectView.initIndexPage();

    }

    module.projectController = projectController;
}(app));