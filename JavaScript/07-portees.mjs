// variable global globalVar
globalThis.globalVar = 'global';

// variable de module (limitée au fichier)
// nécessite d'activer les modules (défaut dans Cube 2)
// si module activée -> mode strict par défaut
const moduleVar = 'module';

// externe est dans la portée de module (n'existe que dans le fichier)
function externe() {
  const closureVar = 'closure';

  // interne est dans la portée de externe (n'existe que dans externe)
  function interne() {
    const localVar = 'local';

    if (true) {
      const blockVar = 'block'; // si let ou const
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(moduleVar);
      console.log(globalVar);
    }
  }

  interne();
}

externe();

// pile d'appel
// ^
// |
// |lg - lg - lg - lg - lg
// |interne
// |externe
// +-----------------------------------------------> temps
