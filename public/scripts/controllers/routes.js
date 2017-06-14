'use strict';

var app = app || {};

page('/', app.homeController.init);
page('/about', app.aboutController.init);
page('/projects', app.projectController.init);
page('/contact', app.contactController.init);

page();