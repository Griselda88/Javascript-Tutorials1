function subscriptionRenewal( balance, subscriptionCost){
    balance = balance - subscriptionCost;
    if( balance >= subscriptionCost){
        return `${balance}`
    } 
    else if ( balance < 5){
        return "Negative Overdraft"
    }
    else {
        return "Cancel Subscription"
    }
    

}
console.log(subscriptionRenewal(2, 20))