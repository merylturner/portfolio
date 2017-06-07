'use strict';


function Project(projectDataObj) {
    this.name = projectDataObj.name;
    this.date = projectDataObj.date;
    this.description = projectDataObj.description;
    this.filepath = 'imgs/' + projectDataObj.filepath;
    this.webaddress = projectDataObj.webaddress;
    this.githublink = projectDataObj.githublink;
    this.category = projectDataObj.category;
}

Project.all = [];

Project.prototype.toHtml = function () {
    var templateFiller = Handlebars.compile($('#template').html());
    var filledTemplate = templateFiller(this);

    return filledTemplate;
};

Project.loadAll = function (projectData) {
    projectData.forEach(function (projectData) {
        Project.all.push(new Project(projectData));
    });
    Project.all.forEach(function (project) {
        $('#projects').append(project.toHtml());
    });

}

Project.fetchAll = function (projectData) {
    $.ajax({
        type: 'GET',
        url: './data/projects.json',
        success: runWhenDone,
        error: runWhenFails
    });
}

function runWhenDone(projectData) {
    Project.loadAll(projectData);
    projectView.initIndexPage();
}

function runWhenFails(err, data, message) {
    console.error('error:', err)
    console.log(data);
    console.log(message);
}

$('.template').hide();