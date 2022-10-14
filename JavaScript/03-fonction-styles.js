// function declaration (bonne pratique)
function hello2(name) {
  return `Hello ${name.toUpperCase()}`;
}

// anonymous function expression (mauvaise pratique)
const sum = function(a, b) {
  return a + b;
};

// arrow function (bonne pratique)
const multiply = (a, b) => a * b;
const bye = (name) => {
  return `Bye ${name}`;
};
