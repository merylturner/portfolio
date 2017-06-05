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

    // var $newProject = $('article.template').clone();
    // $newProject.removeClass('template');

    // $newProject.find('img').attr('src', this.filepath);
    // $newProject.find('h2').html(this.name);
    // $newProject.find('h4').html(this.date);
    // $newProject.find('p').html(this.description);
    return filledTemplate;
};


projectData.forEach(function (projectDataObj) {
    allProjects.push(new Project(projectDataObj));
});


allProjects.forEach(function (project) {
    $('#projects').append(project.toHtml());
    console.log('hello');
});


$('.template').hide();