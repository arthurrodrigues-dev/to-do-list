const input = document.querySelector('#input-task');
const addTaskButton = document.querySelector('#add-task');
const listContainer = document.querySelector('.list-container');

const addTask = () => {
    const textTask = input.value.trim();
    
    if (textTask.length === 0) {
        return;
    } 
    const li = document.createElement('li');
    li.innerText = textTask;
    listContainer.appendChild(li);
    const span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    input.value = "";
    saveData();
}

addTaskButton.addEventListener('click', addTask);    

input.addEventListener('keyup', (e) =>  e.code === "Enter" ? addTask() : null);

listContainer.addEventListener('click', (e) => {
    const selected = e.target;
    if (selected.tagName === "LI") {
        selected.classList.toggle('checked');
        saveData();
    } else if (selected.tagName === "SPAN") {
        selected.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();