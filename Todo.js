document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const taskList = document.getElementById('task-list');
  
    // Add Task
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const taskText = taskInput.value;
      const dueDate = dueDateInput.value;
      const priority = priorityInput.value;
  
      if (taskText) {
        addTask(taskText, dueDate, priority);
        taskInput.value = ''; // Clear input field
        dueDateInput.value = ''; // Clear date field
      }
    });
  
    // Function to add task to the list
    function addTask(taskText, dueDate, priority) {
      const taskItem = document.createElement('li');
      taskItem.className = `task-item ${priority}`;
  
      taskItem.innerHTML = `
        <span>${taskText} <small>(Due: ${dueDate})</small></span>
        <div class="actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="complete-btn">Complete</button>
        </div>
      `;
      
      taskList.appendChild(taskItem);
  
      // Add event listeners for buttons
      taskItem.querySelector('.delete-btn').addEventListener('click', () => deleteTask(taskItem));
      taskItem.querySelector('.complete-btn').addEventListener('click', () => toggleComplete(taskItem));
      taskItem.querySelector('.edit-btn').addEventListener('click', () => editTask(taskItem, taskText, dueDate, priority));
    }
  
    // Delete Task
    function deleteTask(taskItem) {
      taskList.removeChild(taskItem);
    }
  
    // Mark Task as Complete/Incomplete
    function toggleComplete(taskItem) {
      taskItem.classList.toggle('completed');
    }
  
    // Edit Task
    function editTask(taskItem, oldTaskText, oldDueDate, oldPriority) {
      const newTaskText = prompt("Edit Task:", oldTaskText);
      const newDueDate = prompt("Edit Due Date:", oldDueDate);
      const newPriority = prompt("Edit Priority (low, medium, high):", oldPriority);
  
      if (newTaskText && newDueDate && newPriority) {
        taskItem.querySelector('span').innerHTML = `${newTaskText} <small>(Due: ${newDueDate})</small>`;
        taskItem.className = `task-item ${newPriority}`;
      }
    }
  });
  