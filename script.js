  // Show Todo App and hide the front page
  function showTodoApp() {
    document.querySelector('.front-page').style.display = 'none';
    document.querySelector('.todo-container').style.display = 'flex';
  }

  // Access input field
  var input = document.querySelector('#todo-input');

  // Listening to click event from "Add" button.
  document.querySelector('#submit').addEventListener('click', addTodo);

  

  // Add functionality
  function addTodo() {
    var inputData = input.value.trim();
    if (inputData === ""){
        alert("WRITE SOMETHING ON THE FIELDS!😊")
    }else{
        input.value = "";
        var todo_el = document.createElement('div');
        todo_el.classList.add('todo-item');
    
        var todo_content_el = document.createElement('div');
        todo_el.appendChild(todo_content_el);
    
        var todo_input_el = document.createElement('input');
        todo_input_el.classList.add('text');
        todo_input_el.type = 'text';
        todo_input_el.value = inputData;
        todo_input_el.setAttribute('readonly', 'readonly');
        todo_content_el.appendChild(todo_input_el);
    
        var todo_actions_el = document.createElement('div');
        todo_actions_el.classList.add('action-items');
    
        var todo_done_el = document.createElement('i');
        todo_done_el.classList.add('fas', 'fa-check');
    
        var todo_edit_el = document.createElement('i');
        todo_edit_el.classList.add('fas', 'fa-pen', 'edit');
    
        var todo_delete_el = document.createElement('i');
        todo_delete_el.classList.add('fas', 'fa-trash');
    
        todo_actions_el.appendChild(todo_done_el);
        todo_actions_el.appendChild(todo_edit_el);
        todo_actions_el.appendChild(todo_delete_el);
    
        todo_el.appendChild(todo_actions_el);
    
        document.querySelector('.todo-lists').appendChild(todo_el);
    
        todo_done_el.addEventListener('click', function () {
          todo_input_el.classList.add('done');
          todo_el.removeChild(todo_actions_el);
        });
    
        todo_edit_el.addEventListener('click', function () {
          if (todo_edit_el.classList.contains('edit')) {
            todo_edit_el.classList.remove('edit');
            todo_edit_el.classList.remove('fa-pen');
            todo_edit_el.classList.add('fa-save');
            todo_input_el.removeAttribute('readonly');
            todo_input_el.focus();
          } else {
            todo_edit_el.classList.add('edit');
            todo_edit_el.classList.add('fa-pen');
            todo_edit_el.classList.remove('fa-save');
            todo_input_el.setAttribute('readonly', 'readonly');
          }
        });
    
        todo_delete_el.addEventListener('click', function () {
          document.querySelector('.todo-lists').removeChild(todo_el);
        });

    }; 
  }

  // Delete All functionality
  document.querySelector('#delete-all').addEventListener('click', function () {
    var todoLists = document.querySelector('.todo-lists');
    if (todoLists.children.length === 0) { // Check if there are no child elements
        alert("SORRY, NOTHING TO DELETE!😒");
    } else {
        todoLists.innerHTML = ''; // Remove all child elements
    }
});