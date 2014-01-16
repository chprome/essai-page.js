var showTpl = require('../tmpl.js')['equipes.view'];

module.exports = {
    show: function(equipes) {
        document.querySelector('p').innerHTML = showTpl(equipes);
        
    }
};