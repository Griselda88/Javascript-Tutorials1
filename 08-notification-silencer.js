function notificationSilencer(is_urgent, caller, do_not_disturb_mode){
    
    if (do_not_disturb_mode === true && is_urgent === true){
        return "Phone is ringing"
    }

    else if(is_urgent === true || caller === "Mom"){
        return "Phone is ringing"
    }

    else {
        return "Number cannot be reached at the moment"
    }

}

console.log(notificationSilencer(false, false))