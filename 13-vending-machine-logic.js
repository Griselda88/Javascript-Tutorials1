function calculateChange( snackCost, userBill){
     if (isNaN(snackCost) || isNaN(userBill) || snackCost < 0 || userBill < 0 || !Number.isInteger(snackCost) || !Number.isInteger(userBill)) {
        return "Invalid Number. Please enter the cost of the snack and your amount";
     }
    const userchange = userBill - snackCost;

    const cedis = Math.floor(userchange);

    const pesewas = (userchange % 1) * 100;

    return  `${cedis} cedis and ${pesewas} pesewas`;
}

console.log(calculateChange(35, 40))