const $input = document.getElementById('todo-input');
const $button = document.getElementById('add-todo');
const $list = document.getElementById('todo-list');

const createTodos = () => {
  const $todoItem = document.createElement('li');
  const $textContainer = document.createElement('span');

  // create delete button
  const $deleteBtn = document.createElement('button');
  $deleteBtn.textContent = 'Delete';

  // Add event trigger for deleting todo
  $deleteBtn.addEventListener('click', (e) => {
    const $targetElem = e.target.parentElement;
    deleteTodo($targetElem);
  });

  $todoItem.appendChild($textContainer).textContent = $input.value;
  $todoItem.appendChild($deleteBtn);
  $list.appendChild($todoItem);
};

// Delete todo
const deleteTodo = (targetTodo) => targetTodo.remove();

// When Add todo button is clicked
$button.addEventListener('click', () => {
  createTodos();
  // Reset input
  $input.value = '';
});

// When pressing Enter
$input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    createTodos();
    // Reset input
    $input.value = '';
  }
});
