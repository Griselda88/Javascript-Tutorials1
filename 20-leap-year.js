function leapYear(year){
    let leapYear = year % 4 == 0;

    if (year % 4 == 0){
        return "It is a leap year"
    } 
    if ( year % 400 == 0 && year % 100 != 0){
        return "It is still a leap year"
    }
      else {
        return "It is not a leap year"
      }
}
console.log (leapYear(2025))