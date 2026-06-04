// function subscriptionRenewal(balance, subscriptionCost) {

//     balance = balance - subscriptionCost;

//     if (balance >= subscriptionCost) {
//         return `${balance}`
//     }
//     else if (balance < 5) {
//         return "Negative Overdraft"
//     }
//     else {
//         return "Cancel Subscription"
//     }


// }
// console.log(subscriptionRenewal(2, 20))


function subscriptionRenewal(balance, subscriptionCost) {

    if (isNaN(balance) || isNaN(subscriptionCost || balance < 0 || subscriptionCost < 0 || !Number.isInteger(balance) || !Number.isInteger(subscriptionCost))) {
        return "Invalid Number. Please enter your balance and subscription cost";
    }

    const newBalance = balance - subscriptionCost;

    let enoughMoney = balance >= subscriptionCost ? `${newBalance}` : balance < 5 ? "Negative Overdraft" : "Cancel Subscription";
    return enoughMoney;
    // if( balance >= subscriptionCost){
    //     return `${balance}`
    // } 
    // else if ( balance < 5){
    //     return "Negative Overdraft"
    // }
    // else {
    //     return "Cancel Subscription"
    // }


}
console.log(subscriptionRenewal(2, 20))