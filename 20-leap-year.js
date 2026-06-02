function leapYear(year){
    if (isNaN(year) || year < 0 || !Number.isInteger(year)) {
        return "Invalid year. Please enter the year";
    }

    const leapYear = year % 4 == 0;

    const stillLeapYear = (year % 100 != 0) && (year % 400 == 0) ? "It is still a leap year" :
                           year % 4 == 0 ? "It is a leap year" : "It is not a leap year";
    return stillLeapYear;

    // if (year % 4 == 0){
    //     return "It is a leap year"
    // } 
    // if ( year % 400 == 0 && year % 100 != 0){
    //     return "It is still a leap year"
    // }
    //   else {
    //     return "It is not a leap year"
    //   }
}
console.log (leapYear(2025))