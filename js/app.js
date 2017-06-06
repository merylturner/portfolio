'use strict';

var allProjects = [];


function Project(projectDataObj) {
    this.name = projectDataObj.name;
    this.date = projectDataObj.date;
    this.description = projectDataObj.description;
    this.filepath = 'imgs/' + projectDataObj.filepath;
}


Project.prototype.toHtml = function () {
    var templateFiller = Handlebars.compile($('#template').html());
    var filledTemplate = templateFiller (this);

    return filledTemplate;
};


projectData.forEach(function (projectDataObj) {
    allProjects.push(new Project(projectDataObj));
});


allProjects.forEach(function (project) {
    $('#projects').append(project.toHtml());
});


$('.template').hide();