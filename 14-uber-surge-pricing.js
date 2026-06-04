// function surgePricing(distance, surgeHours){

//     let baseFare = 5;
    
//     if (surgeHours === true){
//         let surgeFare = baseFare * 1.8; 
//         return surgeFare
//     }
//     if (distance > 10 ){
//         let longDistance = baseFare + 2
//         return `${longDistance}`
//     }
//     else{
//         return "Base fare is $5 "
//     }
// }

// console.log(surgePricing(20, false));


function calculateUberRideFare(distanceInMiles, isDuringSurgeHours) {
  if (isNaN(distanceInMiles) || distanceInMiles < 0 ) {
    return "Invalid Number. Please enter the number of subscribers you have";
  }

  if (typeof isDuringSurgeHours !== "boolean") {
    return "Please enter a valid value for this parameter"
  }

  const baseFare = 500
  const surgeMultiplier = 1.8

  return ((baseFare + (distanceInMiles > 10 ? 2 : 0)) * (isDuringSurgeHours ? surgeMultiplier : 1) ) / 100
}

console.log(calculateUberRideFare(20, false))