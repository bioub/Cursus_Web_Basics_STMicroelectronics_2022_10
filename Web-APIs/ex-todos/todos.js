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

  const itemEl = document.createElement('div');
  itemEl.className = "todos-item";
  itemEl.dataset.todoId = todo.id;

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;

  itemEl.append(spanEl);

  return itemEl;
}
