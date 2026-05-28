function calculateAverage(level1, level2, level3){
    let runners = level1 + level2 + level3
    let finalAverage = runners / 3
    if (finalAverage < 60){
        return `${finalAverage} Gold`
    } 
    else if( finalAverage < 90){
        return `${finalAverage} Silver`
    }

    else {
        return `${finalAverage} Bronze`
    }



}
 console.log(calculateAverage(20, 30, 25))
        

