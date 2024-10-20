// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks or an empty array
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add each task to the DOM without saving again
    }

    // Create the addTask Function
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
        const listItem = document.createElement('li'); // Create a new li element
        listItem.textContent = taskText; // Set li textContent to taskText

        // Task Removal Button
        const removeButton = document.createElement('button'); // Create remove button
        removeButton.textContent = 'Remove'; // Set button text to "Remove"
        removeButton.className = 'remove-btn'; // Add class 'remove-btn' to the button
        
        // Assign an event listener to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove li from taskList
            removeTaskFromStorage(taskText); // Remove the task from Local Storage
        };

        // Append remove button to listItem, and listItem to taskList
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText); // Add the new task to the array
            localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array bac
