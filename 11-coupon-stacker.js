function bestCouponToUse(cartTotal) {

    if (isNaN(cartTotal) || cartTotal < 0 || !Number.isInteger(cartTotal)) {
        return "Invalid Number. Please enter the total of your cart";
    }

    const firstCoupon = (cartTotal * 15) / 100;

    const secondCoupon = 10;

    const CouponThatSavesMoreMoney = firstCoupon > secondCoupon ? "First coupon saves customer more money" : "Second coupon saves customer more money";
    return CouponThatSavesMoreMoney;

    // if (firstCoupon > secondCoupon){
    //     return " first coupon saves customer more money"
    // }
    // else if (firstCoupon < secondCoupon){
    //     return " second coupon saves customer more money"
    // }

    // else{
    //     "Both coupons save customer same amount"
    // }

}
console.log(bestCouponToUse(1000))