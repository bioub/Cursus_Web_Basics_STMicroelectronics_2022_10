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
