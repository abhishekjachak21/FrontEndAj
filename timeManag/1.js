const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTask');
const clearTasksButton = document.getElementById('clearTasks');
const progressValue = document.getElementById('progressValue');

let completedTasks = 0;
let totalTasks = 0;

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);
clearTasksButton.addEventListener('click', clearTasks);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('deleteTask');
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
        totalTasks++;
        updateProgress();
    }
}

function handleTaskActions(event) {
    const target = event.target;

    if (target.classList.contains('deleteTask')) {
        target.parentElement.remove();
        totalTasks--;
        updateProgress();
    } else if (target.tagName.toLowerCase() === 'li') {
        target.classList.toggle('completed');
        completedTasks = document.querySelectorAll('.completed').length;
        updateProgress();
    }
}

function clearTasks() {
    taskList.innerHTML = '';
    totalTasks = 0;
    completedTasks = 0;
    updateProgress();
}

function updateProgress() {
    const progressPercentage = totalTasks === 0 ? 0 : Math.floor((completedTasks / totalTasks) * 100);
    progressValue.textContent = `${progressPercentage}%`;
}
