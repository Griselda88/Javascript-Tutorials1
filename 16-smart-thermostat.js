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
console.log(smartThermostat(80, true))