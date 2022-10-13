function externe(closureVar) {
  // la closure est disponible que l'appel soit fait
  // tout de suite ou plus
  // à partir du moment ou on déclare les fonctions de
  // manière imbriqué on accède à la valeur
  function interne() {
    console.log(closureVar);
  }

  return interne;
}

const hello = externe('Hello');
const bonjour = externe('Bonjour');
hello();
bonjour();
bonjour();
hello();

// pile d'appel
// ^
// |
// |
// |          lg
// |externe - interne
// +-----------------------------------------------> temps
