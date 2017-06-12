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
    }

    Project.all = [];

    Project.prototype.toHtml = function () {
        var templateFiller = Handlebars.compile($('#template').html());
        var filledTemplate = templateFiller(this);

        return filledTemplate;
    };

    //change forEach's to .map, .reduce
    Project.loadAll = function (projectData) {
        // projectData.forEach(function (projectData) {
        //     Project.all.push(new Project(projectData));
        // });
        
        /* OLD forEach():
        rawData.forEach(function(ele) {
        Article.all.push(new Article(ele));
        });
        */

        console.log('before ' ,Project.all);
        Project.all = projectData.map(obj => new Project(obj));
        console.log('after', Project.all);



        // Article.all = rows.map(obj => new Article(obj));



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

    function runWhenFails(err) {
        console.error('error:', err)
        console.log(data);
        console.log(message);
    }

   module.Project = Project;
}(app));