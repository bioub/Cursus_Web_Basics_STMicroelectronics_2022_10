/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
function createTodoItem(todo) {
  /*
  <div class="todos-item" data-todo-id="0.353454634">
    <input type="checkbox" checked>
    <span>ABC</span>
    <button>-</button>
  </div>
  */

  /*
  Exercice 1
  Compléter cette fonction de sorte à :
  - créer la checkbox (doit être coché si todo.completed === true)
  - créer le bouton <button>-</button>
  */

  /*
  Exercice 2
  Au clic du bouton <button>-</button>
  Supprimer balise <div class="todos-item"> correspondante
  */

  const itemEl = document.createElement('div');
  itemEl.className = "todos-item";
  itemEl.dataset.todoId = todo.id;

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;

  itemEl.append(spanEl);

  return itemEl;
}
