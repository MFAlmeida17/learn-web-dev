let angkaBenar = Math.floor(Math.random() * 10) + 1;

function cekTebakan() {
    let inputUser = document.getElementById("tebakan").value;
    let hasil = document.getElementById("hasil");

    if (inputUser == angkaBenar) {
        hasil.innerHTML = "Selamat! Tebakanmu Benar!";
    } else if (inputUser > angkaBenar) {
        hasil.innerHTML = "Terlalu besar, coba lagi!";
    } else {
        hasil.innerHTML = "Terlalu kecil, coba lagi!";
    }
}