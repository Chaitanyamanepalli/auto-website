document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    // --- Persistence Functions ---

    function getTasksFromStorage() {
        const tasks = localStorage.getItem('todoTasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    function saveTasksToStorage(tasks) {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }

    // --- Rendering Functions ---

    function createTaskElement(task) {
        const listItem = document.createElement('li');
        listItem.className = task.completed ? 'completed' : '';
        listItem.dataset.id = Date.now() + Math.random(); // Unique ID for keying

        const