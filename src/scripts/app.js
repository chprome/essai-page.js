var page = require('page');
var equipes = require('./controllers/Equipes');
var menu = require('./utils/Menu');

function index() {
    document.querySelector('p').textContent = 'viewing index';
}

function notFound() {
    document.querySelector('p').textContent = 'not found, sorry';
}

page('*', menu.render);
page('/', index);
page('/equipes', equipes.show);
page('/*', notFound);
page();