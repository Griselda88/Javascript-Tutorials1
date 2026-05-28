function passwordStrengthChecker(password){
    if (password.length > 10 && password.includes("!")){
        return "STrong"
    }
    else if (password.length >=6 && password.length < 11 ){
        return "Medium"
    }

    else{
        return "Weak"
    }

}
console.log(passwordStrengthChecker("ajdkfnkfgnnr!"));