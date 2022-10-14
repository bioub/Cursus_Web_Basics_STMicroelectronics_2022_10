function hello3(name) {
  if (name.length === 0) {
    throw new Error('name must be at least 1 char');
  }
  return `Hello ${name}`;
}

let input = ''; // TODO récupérer la saisie utilisateur

try {
  console.log(hello3(input));
} catch (err) {
  console.log(err.message);
}

// try {
//   setTimeout(function() {
//     throw new Error('')
//   });
// } catch (err) {
//   // Ne permet pas d'intercepter l'erreur
// }
