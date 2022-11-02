import dayjs from "dayjs";

export function getRemainingTime(timeStamp) {
    const target = dayjs(timeStamp)
    const now = dayjs()
    return {
        seconds: getRemainingSeconds(now, target),
        minutes: getRemainingMinutes(now, target),
        hours: getRemainingHours(now, target),
        days: getRemainingDays(now, target)
    }
}

function getRemainingSeconds(now, target) {
    const seconds = target.diff(now, 'seconds') % 60
    return padNumber(seconds, 2)
}

function getRemainingMinutes(now, target) {
    const minutes = target.diff(now, 'minutes') % 60
    return padNumber(minutes, 2)
}

function getRemainingHours(now, target) {
    const hours = target.diff(now, 'hours') % 24
    return padNumber(hours, 2)
}

function getRemainingDays(now, target) {
    const days = target.diff(now, 'days')
    return days
}

function padNumber(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString
    return '0'.repeat(minLength - numberString.length) + numberString
}