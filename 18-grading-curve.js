function calculateCurvedGrade(studentScore, classHighScore) {
    if (isNaN(studentScore) || studentScore < 0 || !Number.isInteger(studentScore)) {
        return "Invalid Number. Please enter the students score";
    }
    const scoreDifference = 90 - classHighScore;
    const curvedGrade = studentScore + scoreDifference;

    const newGradeForEveryStudent = classHighScore < 90 ? curvedGrade : studentScore;
    return curvedGrade;


    // if (classHighScore < 90){
    //     return newScore
    // }

}
console.log(calculateCurvedGrade(50, 70))