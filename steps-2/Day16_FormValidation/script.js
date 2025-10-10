const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const password = document.getElementById("password");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    successMsg.textContent = "";

    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

    if (nama.value.trim() === "") {
        nama.nextElementSibling.textContent = "Nama tidak boleh kosong!";
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        email.nextElementSibling.textContent = "Format email tidak valid!";
        valid = false;
    }
    
    if (password.value.length < 6) {
        password.nextElementSibling.textContent = "Password minimal 6 karakter!";
        valid = false;
    }

    if (valid) {
        successMsg.textContent = "Registrasi Berhasil!";
        form.reset();
    } else {
        successMsg.textContent = "";
    }
});