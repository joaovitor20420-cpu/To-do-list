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
        const btnExcluir = document.createElement('button');

        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add('btn-excluir');
        taskElement.appendChild(btnExcluir);

        taskElement.addEventListener("click", (e) => {
            e.stopPropagation();
            btnExcluir.style.display = "flex";
            btnExcluir.style.backgroundColor = "#8b0606";
            btnConcluir.style.display = "none";
            

            btnExcluir.addEventListener("click", () => {
                taskElement.remove();
            });
            
            
        });

        taskContainer.addEventListener("click", () => {
            btnExcluir.style.display = "none";
            btnConcluir.style.display = "flex";
        });



    } else {
        alert("Por favor, insira uma tarefa.");
    }
});


