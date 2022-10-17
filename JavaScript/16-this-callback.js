class Contact {
  constructor() {
    this.name = 'Romain';
  }
  hello() {
    // this -> pseudo-variable
    // créé au moment de l'appel de la fonction
    setTimeout(() => {
      // l'appel timer._onTimeout()
      // avec une fonction fléchée this n'est pas
      // créée, donc le this auquel on accède
      // est celui de la portée de hello()
      console.log('Hello ' + this.name);
    }, 1000);
  }
}

const romain = new Contact();
romain.hello(); // this === romain
