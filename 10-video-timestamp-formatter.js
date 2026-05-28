function timestampFormatter(totalSeconds){
    let minutes = Math.floor( totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return `${minutes} : ${seconds}`
}

console.log( timestampFormatter(350));