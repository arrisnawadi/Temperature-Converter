function celFunction() {
    let cel = document.getElementById("celcius").value;
    document.getElementById("fahrenheit").value = ((cel * 9 / 5) + 32).toFixed(1);
    document.getElementById("reamur").value = (cel * 4 / 5).toFixed(1);
    document.getElementById("kelvin").value = ((cel * 5 / 5) + 273.15).toFixed(1);
}

function fahFunction() {
    let fah = document.getElementById("fahrenheit").value;
    document.getElementById("celcius").value = (5 / 9 * (fah - 32)).toFixed(1);
    document.getElementById("reamur").value = (4 / 9 * (fah - 32)).toFixed(1);
    document.getElementById("kelvin").value = (5 / 9 * (fah + 459.67)).toFixed(1);
}

function reaFunction() {
    let rea = document.getElementById("reamur").value;
    document.getElementById("fahrenheit").value = ((rea * 9 / 4) + 32).toFixed(1);
    document.getElementById("celcius").value = (rea * 5 / 4).toFixed(1);
    document.getElementById("kelvin").value = ((rea * 5 / 4) + 273.15).toFixed(1);
}

function kelFunction() {
    let kel = document.getElementById("kelvin").value;
    document.getElementById("fahrenheit").value = ((kel * 9 / 5) - 459.67).toFixed(1);
    document.getElementById("reamur").value = (4 / 5 * (kel - 273.15)).toFixed(1);
    document.getElementById("celcius").value = (kel - 273.15).toFixed(1);
}