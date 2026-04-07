const inputTask = document.querySelector("#input-task");
const btnAddTask = document.querySelector("#btn-add");
const taskContainer = document.querySelector("#task-container"); 

btnAddTask.addEventListener("click", () => {
    const taskText = inputTask.value.trim();
    if(taskText !== "") {
        const taskElement = document.createElement('p');
        taskElement.classList.add('task');
        taskElement.textContent = taskText;
        taskContainer.appendChild(taskElement);
        inputTask.value = "";
        
        const btnConcluir = document.createElement('button');
        btnConcluir.textContent = "Concluir";
        btnConcluir.classList.add('btn-concluir');
        taskElement.appendChild(btnConcluir);

        btnConcluir.addEventListener("click", () => {
            btnConcluir.remove();
            const emoji = document.createElement('span');
            emoji.textContent = "✅";
            taskElement.appendChild(emoji);
    
});


    } else {
        alert("Por favor, insira uma tarefa.");
    }
});

btnConcluir.addEventListener("click", () => {
    
        remove(btnConcluir);
        const emoji = document.createElement('span');
        emoji.textContent = "✅";
        taskElement.appendChild(emoji);
    
});
