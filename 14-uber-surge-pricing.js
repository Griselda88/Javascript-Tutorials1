function surgePricing(distance, surgeHours){

    let baseFare = 5;
    
    if (surgeHours === true){
        let surgeFare = baseFare * 1.8; 
        return surgeFare
    }
    if (distance > 10 ){
        let longDistance = baseFare + 2
        return `${longDistance}`
    }
    else{
        return "Base fare is $5 "
    }
}

console.log(surgePricing(2, false))