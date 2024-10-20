// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Task Creation
        const listItem = document.createElement('li'); // Create a new li element
        listItem.textContent = taskText; // Set li textContent to taskText

        // Task Removal Button
        const removeButton = document.createElement('button'); // Create remove button
        removeB
