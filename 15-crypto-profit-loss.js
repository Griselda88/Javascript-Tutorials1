function calculateCrypto(amountOfCoins, costPriceOfCoin, sellingPriceOfCoin) {


    const purchaseValue = costPriceOfCoin * amountOfCoins;

    const percentageGain = sellingPriceOfCoin - purchaseValue;
    const percentageLoss = purchaseValue - sellingPriceOfCoin;

    const LossMoreThan50 = percentageLoss > 50 ? "Diamond Hands Required" : "Try Again";
    return LossMoreThan50

    // if (percentageLoss > 50){
    //     return "Diamond Hands Required";
    // }

    // else if ( sellingPrice > costPrice){
    //     return percentageGain;
    // }

}
console.log(calculateCrypto(3, 70, 100));