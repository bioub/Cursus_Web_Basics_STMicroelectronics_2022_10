// REST operator
// conversion syntaxique
// liste de valeurs (ici 3, 4) en un tableau (ici [3, 4])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

const numbers = [4, 5, 6];

function multiply(a, b, c) {
  return a * b * c;
}

// SPREAD operator
// conversion syntaxique
// un tableau (ici [4, 5, 6]) en une liste de valeur (ici 4, 5, 6)
// console.log(multiply(numbers[0], numbers[1], numbers[2]));
console.log(multiply(...numbers));

// Le REST operator => à gauche du =
// Le SPREAD operator => à droite du =

// Immuabilité / Immutability
const namesArray = ['Romain'];
namesArray.push('John'); // muable (modifie l'objet existant)
console.log(namesArray); // ['Romain', 'John']

const newNamesArray1 = namesArray.concat(['Mary']); // immuable (ne modifie pas le tableau mais retourne un nouveau tableau)
console.log(namesArray); // ['Romain', 'John']
console.log(newNamesArray1); // ['Romain', 'John', 'Mary']

// Avec le SPREAD Operator cette ligne peut s'écrire
// const newNamesArray2 = namesArray.concat(['Mary']);
const newNamesArray2 = [...namesArray, 'Mary'];

// Depuis 2018 on peut utiliser REST et SPREAD sur des objets
const coords = { x: 1, y: 2 };
const coords3d = { ...coords, z: 3 }; // SPREAD sur des objets
