const input = document.querySelector('#input-task');
const addTask = document.querySelector('#add-task');
const ul = document.querySelector('.list-container');
let taskList = [];


addTask.addEventListener('click', () => {
    const textTask = input.value.trim();
    
    if (textTask.length === 0) {
        return;
    }

    const li = document.createElement('li');
    li.innerText = textTask;
    ul.appendChild(li);
    taskList.push(li);
    
    taskList.forEach(task => {
        task.addEventListener('click', () => {
            task.classList.toggle('checked');
            console.log(taskList);
        })
    })
    
});    


