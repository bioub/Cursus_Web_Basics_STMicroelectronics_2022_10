const names = ['John', 'Mary', 'Romain'];

function hello(name) {
  console.log(`Hello ${name}`);
}

// Programmation impérative (for, if...)
// Affiche les prénoms de 4 lettres du tableau
// en majuscule avec Hello devant
for (const n of names) {
  if (n.length === 4) {
    hello(n.toUpperCase());
  }
}

// Programmation fonctionnelle (appels de fonction)
// pour chaque opération une fonction sera appelée
names
  .filter((n) => n.length === 4)
  .map((n) => n.toUpperCase())
  .forEach(hello);

console.log('END');

// pile d'appel
// ^
// |
// |               up   up   lg      lg
// |=> - => - =>   => - =>   hello - hello
// |filter       - map     - forEach       - lg
// +-----------------------------------------------> temps
//                           JOHN    MARY    END
