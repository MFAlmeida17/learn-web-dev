const produk = {
  nama: "Laptop ASUS VivoBook",
  harga: 7500000,
  stok: 5,

  formatRupiah: function(angka) {
    return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  },

  info: function() {
    console.log(`📦 Nama Produk: ${this.nama}`);
    console.log(`💰 Harga: ${this.formatRupiah(this.harga)}`);
    console.log(`📦 Stok Tersedia: ${this.stok}\n`);
  },

  beli: function(jumlah) {
    if (jumlah <= this.stok) {
      const total = this.harga * jumlah;
      this.stok -= jumlah;
      console.log(`✅ Berhasil membeli ${jumlah} ${this.nama}.`);
      console.log(`💵 Total harga: ${this.formatRupiah(total)}`);
      console.log(`📦 Sisa stok: ${this.stok}\n`);
    } else {
      console.log(`❌ Gagal membeli! Stok hanya tersisa ${this.stok}.\n`);
    }
  },

  tambahStok: function(jumlah) {
    this.stok += jumlah;
    console.log(`📈 Stok bertambah sebanyak ${jumlah}. Total stok sekarang: ${this.stok}\n`);
  }
};

// 🧪 Uji coba program
produk.info();        // info awal
produk.beli(2);       // beli 2 unit
produk.info();        // cek stok
produk.beli(5);       // coba beli melebihi stok
produk.tambahStok(4); // tambah stok
produk.beli(3);       // beli lagi
produk.info();        // info akhir
