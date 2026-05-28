function viralPostDetector( likes, shares, verified){

    let viralityScore = (likes * 1) + (shares * 5);

    if (viralityScore > 10000 &&  verified === true){
        return "Trending";
    } 
    else if( viralityScore > 10000 && verified === false){
        return "Rising";
    }
    else {
        return "Not Viral";
    }
}

console.log(viralPostDetector( 1000, 250 , false));