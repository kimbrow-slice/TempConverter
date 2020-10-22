function fahrenheitConverter(valNum) {

    document.getElementById("outputKelvin").innerHTML = ((valNum - 32) / 1.8) + 273.15;
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;

}


function celciusConverter(valNum) {
    document.getElementById("outputFahr").innerHTML = (valNum * 1.8) + 32;
    document.getElementById("outputKel").innerHTML = valNum + 273.15;

}



function kelvinConverter(valNum) {

    document.getElementById("outputFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
    document.getElementById("outputCel").innerHTML = valNum - 273.15;
}