'use strict';

var app = app || {};

(function (module) {
    function Project(projectDataObj) {
        this.name = projectDataObj.name;
        this.date = projectDataObj.date;
        this.description = projectDataObj.description;
        this.filepath = 'imgs/' + projectDataObj.filepath;
        this.webaddress = projectDataObj.webaddress;
        this.githublink = projectDataObj.githublink;
        this.category = projectDataObj.category;
        this.id = projectDataObj.id;
    }

    Project.all = [];

    Project.prototype.toHtml = function () {
        var templateFiller = Handlebars.compile($('#template').html());
        var filledTemplate = templateFiller(this);

        return filledTemplate;

    };


    Project.loadAll = function (projectData) {
        Project.all = projectData.map(obj => new Project(obj));

        Project.all.forEach(function (project) {
            $('#projects').append(project.toHtml());
        });
    }

    Project.fetchAll = function (projectData, callback) {
        if (!Project.all.length) {
            $.ajax({
                type: 'GET',
                url: './data/projects.json',
                success: runWhenDone,
                error: runWhenFails
            })
                .then(callback);
        }
    }

    function runWhenDone(projectData) {
        Project.loadAll(projectData);
        app.projectView.initIndexPage();
    }

    function runWhenFails(err) {
        console.error('error:', err)
    }

    module.Project = Project;

}(app));