function intakeTracker(amountDrank){
    let standardIntake = 2000;
    let remainingContent = 2000 - amountDrank;
    let surplusAmount = amountDrank - standardIntake;

    if (amountDrank < standardIntake){
        return remainingContent;
    }
    else{
        return surplusAmount;
    }


}
console.log(intakeTracker(50))