// function calculateAverage(level1, level2, level3){
//     let runners = level1 + level2 + level3
//     let finalAverage = runners / 3
//     if (finalAverage < 60){
//         return `${finalAverage} Gold`
//     } 
//     else if( finalAverage < 90){
//         return `${finalAverage} Silver`
//     }

//     else {
//         return `${finalAverage} Bronze`
//     }



// }
//  console.log(calculateAverage(20, 30, 25))


function calculateAverageAndRank(level1, level2, level3) {
    // if (isNaN(level1) || isNaN(level2) || isNaN(level3) || level1 < 1 || level2 < 1 || level3 < 1 || !Number.isInteger(level1) || 
    //     !Number.isInteger(level2) || !Number.isInteger(level3))


    const totalTimeForAllLevels = level1 + level2 + level3
    const averageTime = totalTimeForAllLevels / 3


    let rank = averageTime < 60 ? "Gold" : averageTime < 90 ? "Silver" : "Bronze";
    return `${averageTime} ${rank}`;

}

console.log(calculateAverageAndRank(Hello, ladies, gents));


