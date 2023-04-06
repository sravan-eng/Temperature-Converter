function convert() {
    var temperature = document.getElementById("temperature").value;
    var scale = document.getElementById("scale").value;
    var result = document.getElementById("result");
  
    if (isNaN(temperature)) {
      alert("Please enter a valid temperature!");
      return;
    }
  
    if (scale == "celsius") {
      var fahrenheit = (temperature * 1.8) + 32;
      var kelvin = parseFloat(temperature) + 273.15;
      result.value = fahrenheit.toFixed(2) + " °F / " + kelvin.toFixed(2) + " K";
    } else if (scale == "fahrenheit") {
      var celsius = (temperature - 32) / 1.8;
      var kelvin = (temperature - 32) * 5/9 + 273.15;
      result.value = celsius.toFixed(2) + " °C / " + kelvin.toFixed(2) + " K";
    } else if (scale == "kelvin") {
      var celsius = temperature - 273.15;
      var fahrenheit = (temperature - 273.15) * 1.8 + 32;
      result.value = celsius.toFixed(2) + " °C / " + fahrenheit.toFixed(2) + " °F";
    }
  }
  