export const computeCost = (data) => {
    return (data.km * data.gasCons / 100 * data.gasPrice).toFixed(2);
}
export const computeIncome = (data) => {
    return data.ridesIncome * 0.75 + data.tipsIncome;
}
export const computeNetIncome = (data) => {
    return data.ridesIncome * 0.75 + data.tipsIncome - computeCost(data);
}
export const computeHourlyIncome = (data) => {
    return (computeNetIncome(data) / data.noHours).toFixed(2);
}
export const computeRideIncome = (data) => {
    return (computeNetIncome(data) / data.noRides).toFixed(2);
}