'use strict';

var app = app || {};

(function (module) {
    const user = {};


    user.requestUser = function (callback) {
        if (!user.data) {
            $.get('github/user')
                .then(data => user.data = data, err => console.error(err))
                .then(callback);
        }};

        module.user = user;

}(app));