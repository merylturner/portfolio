'use strict';

var projectView = {};
//handle main nav - create tabs for each nav element

projectView.handleMainNav = function () {

    $('.main-nav .tab').on('click', function () {
        event.preventDefault();
        var $whereToGo = $(this).data('content');
        console.log($whereToGo);

        $('.tab-content').hide();
        $('#main-hr').hide();
        $('#'+ $whereToGo).fadeIn(750);

        if ($whereToGo === 'home') {
            $('.tab-content').show();
            $('#main-hr').show();
        }
    })
};



//run all functions when DOC is ready
$(document).ready(function () {
    projectView.handleMainNav();

})