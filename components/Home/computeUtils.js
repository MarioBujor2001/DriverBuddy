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
export const formatDateToDdMmYyyy = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}