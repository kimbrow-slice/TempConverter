function fahrenheitConverter(valNum) {

    valNum = parseFloat(valNum);
    document.getElementById("outputKelvin").innerHTML = ((valNum - 32) / 1.8) + 273.15;
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;

}


function celciusConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("celToFahr").innerHTML = (valNum * 1.8) + 32;
    document.getElementById("celToKelv").innerHTML = (valNum + 273.15);

}



function kelvinConverter(valNum) {

    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
    document.getElementById("outputCel").innerHTML = valNum - 273.15;
}