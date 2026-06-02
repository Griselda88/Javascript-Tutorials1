function timestampFormatter(totalSeconds) {

    if (isNaN(totalSeconds) || totalSeconds < 0 || !Number.isInteger(totalSeconds)) {
        return "Invalid Number. Please enter the number of seconds";
    }
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return `${minutes} : ${seconds}`
}

console.log(timestampFormatter(350));