function smartThermostat(temp, eco_mode){
    if (temp > 75){
        return "AC is turned on"
    }
    else if (temp < 62){
        return "Heater is turned on"
    }
    else if ( temp == 80 || temp == 56 && eco_mode === true){
        return "AC and Heater is turned on"
    }

    else {
        return "None can be turned on"
    }


}
// console.log(smartThermostat(80, true));


function getApplianceConfigurations(temperature, isEcoMode) {

  if (isNaN(temperature) || temperature < 0) {
    return "Invalid Number. Please enter a calid temperature in F";
  }

  if (typeof isEcoMode !== "boolean") {
    return "Please enter a valid value for this parameter";
  }

  const shouldAcTurnOn = isEcoMode ? (temperature > 80) : (temperature > 75)
  const shouldHeaterTurnOn = isEcoMode ? (temperature < 58) : (temperature < 62)
  

  return { shouldAcTurnOn, shouldHeaterTurnOn }

}

console.log(getApplianceConfigurations(80, true))