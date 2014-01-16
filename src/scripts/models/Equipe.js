function Equipe(name, captain) {
    this.name = name;
    this.captain = captain;
}

Equipe.all = function() {
    return [
        new Equipe('France','Zidane'),
        new Equipe('Espagne', 'Ignesta'),
        new Equipe('Brésil', 'Pelé')
    ];
};

module.exports = Equipe;