let belanja = ["Beras", "Telur", "Minyak Goreng", "Kopi", "Gula"];

let listBelanja = document.getElementById("listBelanja");

function renderList(){
    listBelanja.innerHTML= "";

    belanja.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item + " ";

        let btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.onclick = function() {
            hapusBarang(index);
        };

        li.appendChild(btnHapus);
        listBelanja.appendChild(li);
    });
}

function tambahBarang() {
    let input = document.getElementById("item");
    let barangBaru = input.value.trim();

    if (barangBaru !== "") {
        belanja.push(barangBaru);
        input.value = "";
        renderList();
    }
}

function hapusBarang(index) {
    belanja.splice(index, 1);
    renderList();
}

renderList();