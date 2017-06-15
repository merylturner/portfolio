'use strict';

var app = app || {};

(function (module) {
    var projectView = {};

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
        projectView.setTeasers();
        projectView.scrollTo();
    };

    projectView.scrollTo = function () {
        $('.icon-circle-down').on('click', function () {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('#scroll-to-me').offset().top - 50
            }, 600);
        })


    }
    module.projectView = projectView;

}(app));