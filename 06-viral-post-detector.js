function viralPostDetector(likes, shares, verified) {

    let viralityScore = (likes * 1) + (shares * 5);

    if (viralityScore > 10000 && verified === true) {
        return "Trending";
    }
    else if (viralityScore > 10000 && verified === false) {
        return "Rising";
    }
    else {
        return "Not Viral";
    }
}

console.log(viralPostDetector(1000, 250, false));


function viralPostDetector(likes, shares, isVerified) {
    if (isNaN(likes) || isNaN(shares) || likes < 0 || shares < 0) {
        return "Invalid Number. Please enter valid number of likes and shares";
    }

    if (typeof isVerified !== "boolean") {
        return "Please enter a valid value for this parameter";
    }

    const viralityScore = (likes * 1) + (shares * 5);

    let accountTrending = viralityScore > 10000 && isVerified ? "Trending" : !isVerified && viralityScore > 10000 ? "Rising" : "Not Viral";
    return accountTrending;

}
console.log(viralPostDetector(10000, 400, false));