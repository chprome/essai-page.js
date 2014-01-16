var page = require('page');
var equipes = require('./controllers/Equipes');

function index() {
    document.querySelector('p').textContent = 'viewing index';
}

function notFound() {
    document.querySelector('p').textContent = 'not found, sorry';
}

page('/', index);
page('/equipes', equipes.show);
page('/*', notFound);
page();