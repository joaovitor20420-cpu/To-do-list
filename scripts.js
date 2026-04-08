const inputTask = document.querySelector("#input-task");
const btnAddTask = document.querySelector("#btn-add");
const taskContainer = document.querySelector("#task-container"); 
const buttonRemove = document.querySelector("#button-remove");
const tasksJson = localStorage.getItem("myTasks");


let myTasks = JSON.parse(localStorage.getItem("myTasks")) || [];
myTasks.forEach(element => {
    const taskElement = document.createElement('p');
    taskElement.classList.add('task');
    taskElement.textContent = element;
    taskContainer.appendChild(taskElement);
    
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
            const index = myTasks.indexOf(element);
            if(index !== -1) {
                myTasks.splice(index, 1);
            }
            const tasksJson = JSON.stringify(myTasks);
            localStorage.setItem("myTasks", tasksJson);
        });
        
        
    });

    taskContainer.addEventListener("click", () => {
        btnExcluir.style.display = "none";
        btnConcluir.style.display = "flex";
    });
});


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
                const index = myTasks.indexOf(taskText);
                if(index !== -1) {
                    myTasks.splice(index, 1);
                }
                const tasksJson = JSON.stringify(myTasks);
                localStorage.setItem("myTasks", tasksJson);
            });
            
            
        });

        taskContainer.addEventListener("click", () => {
            btnExcluir.style.display = "none";
            btnConcluir.style.display = "flex";
        });

        myTasks.push(taskText);
        const tasksJson = JSON.stringify(myTasks);
        localStorage.setItem("myTasks", tasksJson);

    } else {
        alert("Por favor, insira uma tarefa.");
    }
});



