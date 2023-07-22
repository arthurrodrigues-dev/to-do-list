const input = document.querySelector('#input-task');
const addTaskButton = document.querySelector('#add-task');
const ul = document.querySelector('.list-container');
const container = document.querySelector('.container');

const addTask = () => {
    const textTask = input.value.trim();
    
    if (textTask.length === 0) {
        return;
    }

    const li = document.createElement('li');
    li.innerText = textTask;
    ul.appendChild(li);

    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    })

    input.value = "";
}

addTaskButton.addEventListener('click', addTask);    
input.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        addTask();
    }
})

console.log(container.computedStyleMap)