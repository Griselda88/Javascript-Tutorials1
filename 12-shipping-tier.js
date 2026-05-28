function shippingTier(order_total, premiumMember){

    if (premiumMember === true){
        return "Shipping fee is always free"
    }

    if(order_total > 100){
        return "Shipping is free"
    }

    else if (order_total > 50){
        return "Shipping is $5"
    }


    else{
        "Default cost of shipping is $10"
    }
}
console.log(shippingTier(70, false))