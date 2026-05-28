function vendingMachine( snackCost, userBill){

    let change = userBill - snackCost;

    let cedis = Math.floor(change);

    let pesewas = (change % 1) * 100;

    return  `${cedis} cedis and ${pesewas} pesewas`;

}
console.log(vendingMachine(40, 35))