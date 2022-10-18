// En JS il y a beaucoup d'objets prédéfinis (built-in object)

// par le langage
console.log("typeof Math", typeof Math); // object
console.log("typeof JSON", typeof JSON); // object
console.log("typeof Atomics", typeof Atomics); // object
console.log("typeof Intl", typeof Intl); // object
console.log("typeof globalThis", typeof globalThis); // object

// par Node.js
console.log("typeof process", typeof process); // object
console.log("typeof module", typeof module); // object
console.log("typeof exports", typeof exports); // object

// par le navigateur (Web APIs)
console.log("typeof document", typeof document);
console.log("typeof window", typeof window);
console.log("typeof location", typeof location);
console.log("typeof navigator", typeof navigator);

// Un objet regroupe des propriétés
// Math.PI
// document.body

// et des méthodes
// Math.random()
// document.querySelector()

// plus généralement un objet regroupe des clés et des valeurs (un dictionnaire)

// ces objets (dictionnaires) sont dynamiques, on peut

// ajouter des clés/valeurs (extension)
console.log("typeof Math.sum", typeof Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log("typeof Math.sum", typeof Math.sum); // function
console.log("Math.sum(1, 2)", Math.sum(1, 2)); // 3

// modifier des clés/valeurs
const originalRandom = Math.random;
Math.random = () => 0.5;
console.log("Math.random()", Math.random()); // 0.5

// supprimer des clés/valeurs
delete Math.random;
console.log("typeof Math.random", typeof Math.random); // undefined
Math.random = originalRandom;

// Mauvaise pratique de modifier des objets qu'on a pas créé

// Pour accéder aux valeurs on utilise une clé avec l'opérateur .
console.log(Math.PI);

// On peut aussi utiliser les [] si la clé est dans une chaine de caractères
console["log"](Math["PI"]);

// Avec les crochets on est encore plus dynamique
const method = "error";
const key = "LN2";
console[method](Math[key]);

// On peut boucler sur les objets avec for .. in
// for (const key in process) {
//   if (Object.hasOwnProperty.call(process, key)) {
//     const value = process[key];
//     console.log(key, value);
//   }
// }

// Convertir un object en un tableau de clés
// console.log(Object.keys(process));

// Convertir un object en un tableau de valeurs
// console.log(Object.values(process));

// Convertir un object en un tableau de tableau [clé, valeur]
// console.log(Object.entries(process));

// Convertir le tableau de tableau [clé, valeur] en objet
const coords = Object.fromEntries([
  ["x", 1],
  ["y", 2],
]);
console.log("coords", coords); // {x: 1, y: 2}

// Sérializer un objet en chaine de caractères (conversion mémoire -> string)
const json = JSON.stringify(coords);
console.log("json", json); // {"x": 1, "y": 2}
console.log("typeof json", typeof json); // string

// Désérializer une en chaine de caractères (conversion string -> mémoire)
const objFromJson = JSON.parse(json);
console.log(objFromJson.x); // 1

// Pour créer des objets il y a façons de faire

// Object literal
// soit si l'objet n'est créé qu'une fois
// soit si plusieurs objets identiques ne pas y mettre de méthodes
const coordsA = { x: 1, y: 2 };

// constructor
// soit si plusieurs objets identiques avec des méthodes
const regexp = new RegExp('[a-z]+');
console.log('typeof RegExp', typeof RegExp); // function


const john = {
  name: 'John',
  hello() {
    return `Hello ${this.name}`;
  }
};

const mary = {
  name: 'Mary',
  hello() {
    return `Hello ${this.name}`;
  }
};

console.log('john === mary', john === mary); // false compare les références (est-ce le même objet ?)
console.log('john.hello === mary.hello', john.hello === mary.hello); // false compare les références (est-ce le même objet ?)


// si besoin de méthodes pour éviter de dupliquer
// on utilise des constructeurs

// function User(name) {
//   // User n'est une classe, on pourra créer des clés selon des conditions
//   // if (name.length < 6) {
//   //   this.name = name; // extension
//   // }
//   this.name = name;
// }

// User.prototype.hello = function() {
//   return `Hello ${this.name}`;
// };

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  constructor(name, roles) {
    super(name);
    this.roles = roles
  }
  hello() {
    return super.hello() + ' my roles are ' + this.roles;
  }
}

const romain = new User('Romain');
console.log('typeof romain', typeof romain);
console.log('romain.name', romain.name);
// delete romain.name; // User n'est une classe, on pourrait supprimer les clés
console.log(romain.hello());

const eric = new User('Eric');
console.log('eric.name', eric.name);
console.log(eric.hello());


// ES2022 (class properties)
class Utilisateur {
  #name = 'Romain';
  hello() {
    return `Hello ${this.#name}`;
  }
}
