
const addressTruncate = (address) => {
    return `${address.substring(0, 3)}...${address.substring(address.length - 3)}`;
}

const dateToUnix = (date) => {
    return Math.floor(date.getTime() / 1000);
}


export { addressTruncate, dateToUnix };