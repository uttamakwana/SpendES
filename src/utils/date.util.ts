export function oneYearFromNow() {
    return new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
}

export function thirtyDayFromNow() {
    return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
}

export function fifteenMinutesFromNow() {
    return new Date(Date.now() + 15 * 60 * 1000);
}

export const ONE_DAY_MS = 24 * 60 * 60 * 1000; 

export function fiveMinutsAgo() {
    return new Date(Date.now() - 5 * 60 * 1000);
}

export function oneHourFromNow() {
    return new Date(Date.now() + 60 * 60 * 1000);
}
