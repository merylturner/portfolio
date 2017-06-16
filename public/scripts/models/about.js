'use strict';

var app = app || {};

(function (module) {
    const user = {};


    user.requestUser = function (callback) {
        if (!user.data) {
            $.get('github/user')
                .then(data => user.data = data, err => console.error(err))
                .then(callback);
        }
        //     $.ajax({
        //         url: 'https://api.github.com/user',
        //         type: 'GET',
        //         headers: { 'Authorization': `token ${githubToken}` }  //eslint-disable-line
        //     })


        module.user = user;
    }

}(app));