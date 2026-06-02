function wholePizza(guests){
    if (isNaN(guests) || guests < 0 || !Number.isInteger(guests)) {
        return "Invalid Number. Please enter the total of guests for the party";
    }
    const totalSlices = guests * 3

    const wholePizzaToBuy= Math.ceil(totalSlices/ 8); 

    return wholePizzaToBuy
}
console.log(wholePizza(10));