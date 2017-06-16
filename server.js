'use strict';

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser').urlencoded({ extended: true });
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.post('/projects', bodyParser, function (request, response) {
    console.log(request.body);
    response.send('Record posted!');
})

function proxyGitHub(request, response) {
    console.log('Routing GitHub request for', request.params[0]);
    (requestProxy({
        url: `https://api.github.com/${request.params[0]}`,
        headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    }))(request, response);
}

app.get('/github/*', proxyGitHub);


app.get('*', function (request, response) {
    response.sendFile('index.html', { root: './public' });
})

app.listen(PORT, function () {
    console.log('hey brah! your port is running on ', PORT);
});