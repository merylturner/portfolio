'use strict';

var app = app || {};

(function (module) {
    const user = {};


    user.requestUser = function (callback) {
        if (!user.data) {
            $.ajax({
                url: 'https://api.github.com/user',
                type: 'GET',
                headers: { 'Authorization': `token ${githubToken}` }  //eslint-disable-line
            })
                .then(data => user.data = data, err => console.error(err))
                .then(callback);
        }
    }

    module.user = user;
}(app));