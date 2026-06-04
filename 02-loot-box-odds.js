// const randomNumber = 35

// function getResult(randomNumber) {
//   if (randomNumber >= 1 && randomNumber <= 100) {
//     if (randomNumber <= 5) {
//       return "Legendary";
//     } else if (randomNumber >= 6 && randomNumber <= 20) {
//       return "Epic";
//     } else if (randomNumber >= 21 && randomNumber <= 50) {
//       return "Rare";
//     } else {
//       return "Common";
//     }
//   }

// }
// console.log(getResult(randomNumber))



function getLootBoxOdds(randomNumber) {
  if (isNaN(randomNumber) || randomNumber > 100 || randomNumber < 1) {
    return "Invalid Number. Enter a number between 1 and 100"
  }

  if (randomNumber > 50 & randomNumber <= 100) {
    return "Common"
  } else if (randomNumber >= 21 && randomNumber <= 50) {
    return "Rare"
  } else if (randomNumber >= 6 && randomNumber <= 20) {
    return "Epic";
  } else if (randomNumber >= 1 && randomNumber <= 5) {
    return "Legendary";
  } 
}

console.log(getLootBoxOdds(randomNumber));

