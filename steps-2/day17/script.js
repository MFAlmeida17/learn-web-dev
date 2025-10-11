const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value.trim();

    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.style.background = "none";
    delBtn.style.border = "none";
    delBtn.style.cursor = "pointer";

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";

    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });
});
