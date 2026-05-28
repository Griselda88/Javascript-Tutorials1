function calculatePowerLevel(strength, agility, intelligence){
   let computedAgility = agility  
    if (intelligence > 80){
        computedAgility = computedAgility * 2
    }

    let totalPowerLevel = strength + computedAgility + intelligence

    if (strength < 20){
        totalPowerLevel = totalPowerLevel / 2
    }

    return totalPowerLevel
}

console.log(calculatePowerLevel(10, 50, 80))