'use strict';

var projectView = {};
//handle main nav - create tabs for each nav element

projectView.handleMainNav = function () {


    $('.main-nav .tab').on('click', function () {
        var $whereToGo = $(this).data('content');
        console.log($whereToGo);
    })
};



//run all functions when DOC is ready
$(document).ready(function () {
    projectView.handleMainNav();

})