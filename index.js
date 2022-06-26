window.addEventListener('load', () => {
    const form = document.querySelector('#task-form-NEW');
    const input = document.querySelector('#input-NEW-task');
    const listElement = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;


        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContentElement = document.createElement("div");
        taskContentElement.classList.add("content");

        taskElement.appendChild(taskContentElement);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");
        taskInputElement.type = "text";
        taskInputElement.value = task;
        taskInputElement.setAttribute("readonly", "readonly");


        taskContentElement.appendChild(taskInputElement);


        const taskActionsElement = document.createElement("div");
        taskActionsElement.classList.add("actions");

        const taskEditElement = document.createElement("button");
        taskEditElement.classList.add("edit");
        taskEditElement.innerText = "Edit";

        const taskDeleteElement = document.createElement("button");
        taskDeleteElement.classList.add("delete");
        taskDeleteElement.innerHTML = "Delete";

        taskActionsElement.appendChild(taskEditElement);
        taskActionsElement.appendChild(taskDeleteElement);
        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);

        input.value = "";

        taskEditElement.addEventListener('click', (e) => {

            if (taskEditElement.innerText.toLowerCase() == "edit") {
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                taskEditElement.innerText = "Save";

            } else {
                taskInputElement.setAttribute("readonly", "readonly");
                taskEditElement.innerText = "Edit";
            }

        });

        taskDeleteElement.addEventListener('click', (e) => {
            listElement.removeChild(taskElement);
        });


    });
});