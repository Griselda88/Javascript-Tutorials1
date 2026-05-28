function couponStacker(cart_total){
    let coupon_discount = (cart_total * 15) /100;

    let coupon2_discount = 10;

    if (coupon_discount > coupon2_discount){
        return " first coupon saves customer more money"
    }
    else if (coupon_discount < coupon2_discount){
        return " second coupon saves customer more money"
    }
    
    else{
        "Both cupons save customer same amount"
    }

}
console.log(couponStacker(1000))