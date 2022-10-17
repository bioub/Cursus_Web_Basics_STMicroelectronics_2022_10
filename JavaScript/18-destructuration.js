const nbs = [4, 5, 6];

// const quatre = nbs[0];
// const cinq = nbs[1];
// const six = nbs[2];

// Destructurer :

//    [4     , 5   , 6  ]
const [quatre, cinq, six, sept = 7] = nbs;

// REST operator
//    [4   , 5, 6         ]
const [four, ...fiveAndSix] = nbs;
console.log(four); // 4
console.log(fiveAndSix); // [5, 6]

// const fullName = 'Romain Bohdanowicz';
// const parts = fullName.split(" ");
// const firstName = parts[0];
// const lastName = parts[1];

const fullName = 'Romain Bohdanowicz';
const [firstName, lastName] = fullName.split(" ");



const options = {
  min: 10,
  max: 20,
};

// const min = options.min ?? 0;
// const max = options.max ?? 100;

//    { min: 10 , max: 20  }
// const { min: min, max: max } = options;
// avec Shorthand property on peut raccourcir à
// const { min, max } = options;
// avec des valeurs par défaut
const { min = 0, max = 100 } = options;

