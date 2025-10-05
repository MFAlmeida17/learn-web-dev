let angka = [10, 25, 30, 15, 40];
let lebihDari20 = angka.filter(nilai => nilai > 20);
console.log("Angka lebih dari 20:", lebihDari20);

let total = angka.reduce((acc, val) => acc + val, 0);
console.log("Total semua angka:", total);