function getResult(randomNumber){
    if (randomNumber >= 1 && randomNumber <= 100){
        if (randomNumber <= 5){
       return "Legendary"
    } else if (randomNumber >= 6 && randomNumber <= 20){
        return "Epic"
    } else if (randomNumber >=21 && randomNumber <=50){
        return "Rare"
    } else {
        return "Common"
    }
        }
    
   
    return randomNumber
}
console.log(getResult(200))



