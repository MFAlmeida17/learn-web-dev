let teman = ["Andi", "Budi", "Citra", "Dina", "Eko"];
teman.push("Angga");
teman.shift();

teman.forEach(function(nama, index) {
    console.log(`${index + 1}. ${nama}`);
});
