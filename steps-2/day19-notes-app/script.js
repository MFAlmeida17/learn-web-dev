const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesContainer = document.getElementById("notesContainer");
const toggleTheme = document.getElementById("toggleTheme");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";
        div.innerHTML = `
        ${note}
        <span onclick="deleteNote(${index})">x</span>
        `;
        notesContainer.appendChild(div);
    });
}

saveBtn.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteInput.value = "";
        renderNotes();
    }
});

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
}

let isDark = JSON.parse(localStorage.getItem("darkMode")) || false;

function applyTheme() {
    document.body.classList.toggle("dark", isDark);
    toggleTheme.textContent = isDark ? "☀️" : "🌙";
}

toggleTheme.addEventListener("click", () => {
    isDark = !isDark;
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    applyTheme();
});

applyTheme();
renderNotes();