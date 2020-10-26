// I need to create a function to convert the input Fahrenheit valNum to output Kelvin && output Celcius 
function fahrenheitConverter(valNum) {

    valNum = parseFloat(valNum);
    // This is to insure that my valNum is given as a floating point number
    document.getElementById("outputKelvin").innerHTML = ((valNum - 32) / 1.8) + 273.15;
    // I need to use the formula for F to K and output that sum of the equation inside the HTML page
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
    // I need to use the formula for F to C and output that sum of the equation inside the HTML page
}

// I need to create a function to create the input Celcius valNum to output Fahrenheit && output Kelvin 
function celciusConverter(valNum) {

    valNum = parseFloat(valNum);
    //This makes sure that my output valNum is given  as a floating point number
    document.getElementById("celToFahr").innerHTML = (valNum * 1.8) + 32;
    //I need to use the formula for C to F and output that sum of the equation inside the HTML page
    document.getElementById("celToKelv").innerHTML = (valNum + 273.15);
    //I need to use the formula for C to K and output that sum of the equation inside the HTML page

}


// I need to create a function to convert the input Kelvin valNum to output Fahrenheit && output Celcius
function kelvinConverter(valNum) {

    valNum = parseFloat(valNum);
    //This makes sure my output valNum is given as a floating point number
    document.getElementById("outputFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
    //I need to use the formula for K to F and output that sum of the equation inside the HTML page
    document.getElementById("outputCel").innerHTML = valNum - 273.15;
    //I need to use the formula for K to C and output that sum of the equation inside the HTML page
}