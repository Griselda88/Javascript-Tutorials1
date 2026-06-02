function shippingTier(order_total, premiumMember) {
    if (isNaN(order_total) || order_total < 0 || !Number.isInteger(order_total)) {
        return "Invalid Number. Please enter the total of your order";
    }

    if (typeof premiumMember !== "boolean") {
        return "Please enter a valid value for this parameter";
    }

    const shippingFee = premiumMember ? "Shipping fee is always free" : order_total > 100 ?
        "Shipping is free" : order_total > 50 ? "Shipping is $5" : "Default cost of shipping is $10";
    return shippingFee;



    // if (premiumMember === true){
    //     return "Shipping fee is always free"
    // }

    // if(order_total > 100){
    //     return "Shipping is free"
    // }

    // else if (order_total > 50){
    //     return "Shipping is $5"
    // }


    // else{
    //     "Default cost of shipping is $10"
    // }
}
console.log(shippingTier(10, false))