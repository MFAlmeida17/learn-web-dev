function toFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}
function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertToFahrenheit() {
    let c = parseFloat(document.getElementById("celcius").value);
    if (isNaN(c)) {
        document.getElementById("hasil").innerText = "Masukkan Angka Terlebih Dahulu!";
        return;
    }

    let f = toFahrenheit(c);
    document.getElementById("hasil").innerText = `${c}°C = ${f.toFixed(2)}°F`;
}
function convertToCelcius() {
    let f = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(f)) {
        document.getElementById("hasil").innerText = "Masukkan Angka Terlebih Dahulu!";
        return;
    }
    let c = toCelcius(f);
    document.getElementById("hasil").innerText = `${f}°F = ${c.toFixed(2)}°C`;
}
function clearOther(idToClear) {
    document.getElementById(idToClear).value = "";
    document.getElementById("hasil").innerText = "";
}
function resetFields() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("hasil").innerText = "";
}