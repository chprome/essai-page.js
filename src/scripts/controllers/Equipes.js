var view = require('../views/Equipes');
var model = require('../models/Equipe');

module.exports = {
    show : function() {
        view.show(model.all());
    }
};