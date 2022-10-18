/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-form-input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

formEl.addEventListener('submit', (event) => {
  // preventDefault empêche l'action par défaut
  // qui est d'aller vers la destination du form
  // (attribut action) ou recharger la page
  // si pas d'action
  event.preventDefault();

  const value = inputEl.value;

  const itemEl = createTodoItem({
    id: Math.random(),
    title: value,
    completed: false
  });

  listEl.append(itemEl);

  inputEl.value = '';
});

/*
Exercice 3
Dans le formulaire ajouter une balise
<input type="checkbox" class="todos-form-toggle">
au début du formulaire

Au clic de celle-ci, cocher ou décocher toutes les
checkbox de la liste
*/

