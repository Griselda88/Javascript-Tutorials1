// function passwordStrengthChecker(password) {

//     if (password.length > 10 && password.includes("!")) {
//         return "Strong"
//     }
//     else if (password.length < 11 || password.length >= 6) {
//         return "Medium"
//     }

//     else {
//         return "Weak"
//     }

// }
// console.log(passwordStrengthChecker("ajdkfnkfgnn"));


function passwordStrengthChecker(password) {

    if (typeof password != "string") {
        return "Please enter the correct password"
    }

    const passwordStrength = password.length > 10 && password.includes("!") ? "Strong" : password.length < 11 || password.length >= 6 ? "Medium"
        : "Weak";
    return passwordStrength;

}
console.log(passwordStrengthChecker("ajdkfnkfgnn"));