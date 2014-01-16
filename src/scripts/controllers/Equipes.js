var view = require('../views/Equipes');

module.exports = {
    show : function() {
        var data = [
            {name: 'France', captain: 'Zidane'},
            {name: 'Espagne', captain: 'Ignesta'},
            {name: 'Brésil', captain: 'Pelé'}
        ];
        view.show({equipes: data});
    }
};