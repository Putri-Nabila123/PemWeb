// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    // Create new list item for the task
    const li = document.createElement('li');

    // Create textarea for task content
    const textarea = document.createElement('textarea');
    textarea.value = taskInput.value;
    textarea.disabled = true;

    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');
    editBtn.onclick = () => editTask(textarea, editBtn);

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTask(li);

    // Add all elements to list item
    li.appendChild(textarea);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}

// Function to edit a task
function editTask(textarea, editBtn) {
    if (editBtn.textContent === 'Edit') {
        textarea.disabled = false;
        textarea.focus();
        editBtn.textContent = 'Save';
    } else {
        textarea.disabled = true;
        editBtn.textContent = 'Edit';
    }
}

// Function to delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}
