
const numberOfSubs = 999

function calculateEarning(subscribers) {
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
console.log(calculateEarning(numberOfSubs))
    


function getProGamerEarnings(numberOfSubs) {
  if (isNaN(numberOfSubs) || numberOfSubs < 0 || !Number.isInteger(numberOfSubs)) {
    return "Invalid Number. Please enter the number of subscribers you have";
  }

  const costPerSub = 250
  const platformPercentageCut = numberOfSubs >= 1000 ? 0.2 : 0.3

  const grossPay = (numberOfSubs * costPerSub) 

  return ((grossPay - (grossPay * platformPercentageCut)) / 100).toFixed(2)

}

console.log(getProGamerEarnings(numberOfSubs))