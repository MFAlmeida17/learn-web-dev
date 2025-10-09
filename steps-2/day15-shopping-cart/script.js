const produkList = document.getElementById("produkList");
const cartList = document.getElementById("cartList");
const totalHargaEl = document.getElementById("totalHarga");

let totalHarga = 0;
let cart = [];

const produk = [
    {id: 1, nama: "Kopi Hitam", harga: 15000, stok: 5 },
    {id: 2, nama: "Cappuccino", harga: 20000, stok: 3 },
    {id: 3, nama: "Latte", harga: 18000, stok: 4 },
    {id: 4, nama: "Mocca", harga: 22000, stok: 2 },
];

function tampilkanProduk() {
    produkList.innerHTML = "";

    produk.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <h3>${item.nama}</h3>
        <p>Harga: Rp ${item.harga.toLocaleString()}</p>
        <p>Stok: ${item.stok}</p>
        <button ${item.stok === 0 ? "disabled" : ""} onclick="tambahKeKeranjang(${item.id})">
        Beli
        </button>
        `;
        produkList.appendChild(card);
    });
}

function tambahKeKeranjang(id) {
    const item = produk.find(p => p.id === id);
    if (item && item.stok > 0) {
        item.stok--;
        cart.push(item.nama);
        totalHarga += item.harga;

        updateKeranjang();
        tampilkanProduk();
    }
}

function updateKeranjang() {
    cartList.innerHTML = "";
    cart.forEach((nama) => {
        const li = document.createElement("li");
        li.textContent = nama;
        cartList.appendChild(li);
    });
    totalHargaEl.textContent = "Rp " + totalHarga.toLocaleString();
}

tampilkanProduk();