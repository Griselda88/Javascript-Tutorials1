function calculateEarning(subscribers){
    let amountPerSub = 2.50;
    let totalEarnings = subscribers * amountPerSub
    let platformCut;

    if (subscribers > 1000){
        platformCut = 0.20;
    } 
      else{
        platformCut = 0.30;
    }

    let takeHomePay = totalEarnings - (totalEarnings * platformCut)

    return takeHomePay

}
    console.log(calculateEarning(1500))