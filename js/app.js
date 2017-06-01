'use strict';

//TODO empty array?
var allProjects = [];

//TODO constructor function of projects
function Project(projectDataObj) {
	this.name = projectDataObj.name;
	this.date = projectDataObj.date;
	this.description = projectDataObj.description;
	this.filepath = 'imgs/' + projectDataObj.filepath;
}
//TODO prototype function that will add data to the DOM with .toHtml()
Project.prototype.toHtml = function () {
    //TODO clone example markup for each project, using jQuery
	var $newProject = $('article.template').clone();
	$newProject.removeClass('template');

    //create variable grabbing the selector within the main section
	$newProject.find('img').attr('src',this.filepath);
	$newProject.find('h2').html(this.name);
	$newProject.find('h4').html(this.date);
	$newProject.find('p').html(this.description);
	return $newProject;

};

//push each new project to the allProjects array

projectData.forEach(function (projectDataObj) {
	allProjects.push(new Project(projectDataObj));
    console.log(allProjects);
});
//projectData.forEach - append items to the DOM via toHtml
allProjects.forEach(function (project) {
	$('#projects').append(project.toHtml());

});


//TODO create Meryl object with properties