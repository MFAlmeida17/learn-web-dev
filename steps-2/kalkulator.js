function tambah(a, b) { return a + b; }
function kurang(a, b) { return a - b; }
const kali = (a, b) => a * b;
function bagi(a, b) {
  if (b === 0) return "Tidak bisa dibagi 0!";
  return a / b;
}

function hitung(operasi) {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const hasilEl = document.getElementById("hasil");

  if (isNaN(a) || isNaN(b)) {
    hasilEl.innerText = "Masukkan angka terlebih dahulu!";
    return;
  }

  let output;
  switch (operasi) {
    case "tambah": output = tambah(a, b); break;
    case "kurang": output = kurang(a, b); break;
    case "kali": output = kali(a, b); break;
    case "bagi": output = bagi(a, b); break;
    default: output = "Operasi tidak dikenal!";
  }

  hasilEl.innerText = "Hasil: " + output;
}

function clearDisplay() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").innerText = "";
}
