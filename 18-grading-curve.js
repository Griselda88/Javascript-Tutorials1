function curvedGrade(studentScore, classHighScore){
    let difference = 90 - classHighScore;
    let newScore = studentScore + difference;
    if (classHighScore < 90){
        return newScore
    }
    
}
console.log(curvedGrade(50, 70))