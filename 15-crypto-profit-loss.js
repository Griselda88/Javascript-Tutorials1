function calculateCrypto(amount, costPrice, sellingPrice){
    buyValue = costPrice * amount

    let percentageGain = sellingPrice - buyValue;
    let percentageLoss = buyValue - sellingPrice;

    if (percentageLoss > 50){
        return "Diamond Hands Required";
    }

    else if ( sellingPrice > costPrice){
        return percentageGain;
    }


}
console.log(calculateCrypto(3, 70, 100));