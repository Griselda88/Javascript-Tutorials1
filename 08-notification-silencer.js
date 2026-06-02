function notificationSilencer(is_urgent, caller, do_not_disturb_mode) {

    if (typeof is_urgent !== "boolean" || typeof do_not_disturb_mode !== "boolean") {
        return "Please enter a valid value for this parameter";
    }

    if (caller !== "Mom") {
        return "Please enter who is calling"
    }

    const phoneShouldOn = do_not_disturb_mode && is_urgent ? "Phone is ringing" : is_urgent || caller == "Mom" ? "Phone is ringing" :
        "Number cannot be reached at the moment";
    return phoneShouldOn;

    // if (do_not_disturb_mode === true && is_urgent === true){
    //     return "Phone is ringing"
    // }

    // else if(is_urgent === true || caller === "Mom"){
    //     return "Phone is ringing"
    // }

    // else {
    //     return "Number cannot be reached at the moment"
    // }

}

console.log(notificationSilencer(false, "Mom", false))