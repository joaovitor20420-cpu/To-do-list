const inputTask = document.querySelector("#input-task");
const btnAddTask = document.querySelector("#btn-add");
const taskContainer = document.querySelector("#task-container"); 

btnAddTask.addEventListener("click", () => {
    const taskText = inputTask.value.trim();
    if(taskText !== "") {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.textContent = taskText;
        taskContainer.appendChild(taskElement);
        inputTask.value = "";
    } else {
        alert("Por favor, insira uma tarefa.");
    }
});