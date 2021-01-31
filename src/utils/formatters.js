
const addressTruncate = (address) => {
    return `${address.substring(0, 3)}...${address.substring(address.length - 3)}`;
}




export { addressTruncate };