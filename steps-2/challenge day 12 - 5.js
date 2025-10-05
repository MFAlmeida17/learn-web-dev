let daftarBelanja = ["Beras", "Gula", "Telur", "Kopi", "Susu"];

function cariBarang(nama) {
    if (daftarBelanja.includes(nama)) {
        console.log(`Barang ${nama} tersedia dalam daftar belanja.`);
    } else {
        console.log(`Barang ${nama} tidak ditemukan.`);
    }
}

cariBarang("Gula");
cariBarang("Sabun");