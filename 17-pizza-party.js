function wholePizza(guests){

    let totalSlices = guests * 3

    let pizzaNeeded = Math.ceil(totalSlices/ 8); 

    return pizzaNeeded
}

console.log( wholePizza(10));