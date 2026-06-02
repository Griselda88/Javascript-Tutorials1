function intakeTracker(quantityDrank){
    if (isNaN(quantityDrank) || quantityDrank < 0 || !Number.isInteger(quantityDrank)) {
        return "Invalid Number. Please enter the quantity of water drank";
    }

    const standardIntakeOfWater = 2000;
    const remainingContent = 2000 - quantityDrank;
    const surplusAmount = quantityDrank - standardIntakeOfWater;

    const remainingContentOfWater = quantityDrank < standardIntakeOfWater ? remainingContent : surplusAmount
    return remainingContentOfWater

    // if (quantityDrank < standardIntakeOfWater){
    //     return remainingContentOfWater;
    // }
    // else{
    //     return surplusAmount;
    // }


}
console.log(intakeTracker(50))