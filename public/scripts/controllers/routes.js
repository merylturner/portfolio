'use strict';

var app = app || {};

page('/', app.homeController.init);
page('/about', app.aboutController.init);
page('/contact', app.contactController.init);
page('/projects', app.projectController.init);
page('/projects/:name', init, projectName);

page();


function init(ctx, next) {
    $('main > section').hide();
    $('#projects').show();
    app.Project.fetchAll();
    app.projectView.initIndexPage();

    next(ctx);
}

function projectName(ctx) {
    console.log(ctx);
    const name = ctx.project = ctx.params.project;
    $('#projects').hide();
    $('#${id}').show();
}
