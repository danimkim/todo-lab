const $input = document.getElementById('todo-input');
const $button = document.getElementById('add-todo');
const $list = document.getElementById('todo-list');

const createTodos = () => {
  // create li element
  const $todoItem = document.createElement('li');
  // put text input in li element
  $todoItem.textContent = $input.value;
  // append li element to ul element
  $list.appendChild($todoItem);
};

// When Add todo button is clicked
$button.addEventListener('click', createTodos);

// When pressing Enter
$input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    createTodos();
  }
});
