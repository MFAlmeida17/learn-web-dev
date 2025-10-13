const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Aktivitas tidak boleh kosong");
        return;
    }

    addTaskToDOM(taskText);
    saveTask(taskText);
    taskInput.value = "";
});

function addTaskToDOM(taskText, isDone = false) {
    const li = document.createElement("li");
    li.textContent = taskText;

    if (isDone) li.classList.add("done");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    li.addEventListener("click", () => {
        li.classList.toggle("done");
        updateLocalStorage();
    });

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // mencegah event bubbling
        li.classList.add("fade-out");
        setTimeout(() => {
            li.remove();
            updateLocalStorage();
        }, 400);
    });
}

function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.done));
}

function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.childNodes[0].textContent,
            done: li.classList.contains("done")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
