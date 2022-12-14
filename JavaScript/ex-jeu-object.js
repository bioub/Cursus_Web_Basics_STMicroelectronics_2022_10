const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require("readline");

// function Jeu() {
// }
// Jeu.prototype.jouer = function() {
// }

class Jeu {
  constructor(options) {
    // const min = options.min ?? 0;
    // const max = options.max ?? 100;

    this.min = options?.min ?? 0;
    this.max = options?.max ?? 100;

    // Object.assign(this, { min: 0, max: 100 }, options)

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getRandomInt(this.min, this.max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà saisi : ' + this.essais.join(' - '));
    }

    this.rl.question("Quel est le nombre ? ", (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}


const game = new Jeu();
game.jouer();

// pile d'appel
// ^
// |
// |                     question                question
// |question             jouer                   jouer
// |jouer   ..⟳..        taskQuestion  ..⟳..     taskQuestion ..⟳..
// +---------------------ENTREE------------------ENTREE---------------> temps
//
