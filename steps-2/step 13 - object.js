// ===============================
// 🎯 DAY 13 — JavaScript Object
// ===============================

// 1️⃣ Membuat object sederhana
let siswa = {
    nama: "Budi",
    umur: 17,
    jurusan: "RPL",
    nilai: 85
};

console.log("Data siswa:", siswa);

// 2️⃣ Mengakses property
console.log("Nama siswa:", siswa.nama);
console.log("Umur siswa:", siswa["umur"]);

// 3️⃣ Menambah dan mengubah property
siswa.kelas = "12A";      // menambah property baru
siswa.nilai = 90;         // mengubah nilai
console.log("Setelah update:", siswa);

// 4️⃣ Menghapus property
delete siswa.jurusan;
console.log("Setelah dihapus jurusan:", siswa);

// 5️⃣ Menambahkan method (fungsi di dalam object)
let siswa2 = {
    nama: "Citra",
    umur: 18,
    sayHello: function() {
        console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`);
    }
};

siswa2.sayHello();

// 6️⃣ Looping di dalam object
console.log("\n🔁 Looping properti siswa2:");
for (let key in siswa2) {
    console.log(`${key} : ${siswa2[key]}`);
}

// ===============================
// 💪 CHALLENGE DAY 13
// ===============================

// Challenge 1
let buku = {
    judul: "Pemrograman JavaScript Dasar",
    penulis: "Andi Saputra",
    tahun: 2023,
    isAvailable: true
};

console.log("\n📘 Data Buku:");
console.log(buku);

// Challenge 2
buku.info = function() {
    console.log(`Buku "${this.judul}" ditulis oleh ${this.penulis} pada tahun ${this.tahun}.`);
};
buku.info();

// Challenge 3
buku.isAvailable = false;
if (!buku.isAvailable) {
    console.log("❗ Buku sedang dipinjam.");
}

// Challenge 4
let daftarBuku = [
    { judul: "Belajar HTML & CSS", penulis: "Budi Santoso", tahun: 2021 },
    { judul: "Mastering JavaScript", penulis: "Citra Rahma", tahun: 2022 },
    { judul: "Pemrograman Web Modern", penulis: "Dina Pertiwi", tahun: 2023 }
];

console.log("\n📚 Daftar Judul Buku:");
for (let item of daftarBuku) {
    console.log(`- ${item.judul}`);
}

// Challenge 5
function cariBuku(judul) {
    let hasil = daftarBuku.find(b => b.judul === judul);
    if (hasil) {
        console.log(`✅ Buku "${judul}" ditemukan!`);
    } else {
        console.log(`❌ Buku "${judul}" tidak ada di daftar.`);
    }
}

// Contoh penggunaan
cariBuku("Mastering JavaScript");
cariBuku("Dasar Pemrograman Python");
