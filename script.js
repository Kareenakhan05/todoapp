let todoList = [
    { task: 'Buy milk', date: '2024-08-15', completed: false, timestamp: new Date() },
    { task: 'Go to college', date: '2024-08-16', completed: false, timestamp: new Date() }
];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value.trim();
    let todoDate = dateElement.value;

    if (todoItem !== '' && todoDate !== '') {
        todoList.push({ task: todoItem, date: todoDate, completed: false, timestamp: new Date() });
        inputElement.value = '';
        dateElement.value = '';
        displayItems();
    } else {
        alert('Please enter a todo item and select a date.');
    }
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let dateTime = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).format(todoList[i].timestamp);

        newHtml += `
            <div>
                <span class="${todoList[i].completed ? 'completed' : ''}">${todoList[i].task}</span>
                <span class="date-time">${todoList[i].date}</span>
                <span class="date-time">${dateTime}</span>
                <button class="complete-btn" onclick="completeItem(${i});">Complete</button>
                <button class="edit-btn" onclick="editItem(${i});">Edit</button>
                <button class="delete-btn" onclick="deleteItem(${i});">Delete</button>
            </div>
        `;
    }

    containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    displayItems();
}

function completeItem(index) {
    todoList[index].completed = !todoList[index].completed;
    displayItems();
}

function editItem(index) {
    let newTask = prompt("Edit your task:", todoList[index].task);
    if (newTask !== null && newTask.trim() !== "") {
        todoList[index].task = newTask.trim();
        displayItems();
    }
}

// Initial display
displayItems();
