'use strict';

// var app = {};
var projectView = {};

(function (module) {
    projectView.handleMainNav = function () {
        $('.main-nav .tab').on('click', function () {
            var whereToGo = $(this).data('content');
            event.preventDefault();

            $('.tab-content').hide();
            $('#main-hr').hide();
            $('#' + whereToGo).fadeIn(750);

            if (whereToGo === 'home') {
                $('.tab-content').show();
                $('#main-hr').show();
            }
        })
    };

    projectView.setTeasers = function () {
        $('.project-body *:nth-of-type(n+2)').hide();

        $('.read-on').on('click', function () {
            event.preventDefault();
            $(this).toggleClass('hidden');
            $(this).parent().find($('.show-less')).toggleClass('hidden');
            $(this).parent().find($('.project-body *:nth-of-type(n+2)')).fadeIn(750);
        });

        $('.show-less').on('click', function () {
            event.preventDefault();
            $(this).toggleClass('hidden');
            $(this).parent().find($('.read-on')).toggleClass('hidden');
            $(this).parent().find($('.project-body *:nth-of-type(n+2)')).hide();

        });

    };

    projectView.initIndexPage = function () {
        projectView.handleMainNav();
        projectView.setTeasers();
    };

    module.projectView = projectView;

}(projectView));