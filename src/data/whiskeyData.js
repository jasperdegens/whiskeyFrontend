// Test data for frontend website
// Essentially a basic schema for data

/* 
const whiskeySchema = {
    name: string,
    tokenId: uint,
    distillery: string,
    whiskeyType: string,
    distilleryAddress: address,
    caskProof: number,
    bottleProof: number,
    mashBill: string,
    barrelWood: string,
    barrelChar: string,
    distillersNotes: string,
    inceptionDate: date,
    matureDate: date,
    startPrice: number,
    endPrice: number,
    feesPerBottle: number
}

*/

const testFlavorProfile = {
    body: 1,
    floral: 3,
    fruity: 2,
    malty: 4,
    nutty: 2.4,
    winey: 0.1,
    spicey: 4.4,
    honey: 2,
    tobacco: 1.5,
    medicinal: 1.1,
    smokey: 0,
    sweetness: 2
}

const rye38 = {
    name: 'Rye Barrel #38',
    tokenId: 0,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Rye',
    distilleryAddress: '0x9192',
    caskProof: 120,
    bottleProof: 90,
    bottleYield: 250,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Spicey nose, traces of cloves and nutmeg, with a long tail of caramel and ground pepper.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 1, 1),
    startPrice: 35,
    endPrice: 55,
    feesPerBottle: 5
};


const rye39 = {
    name: 'Rye Barrel #39',
    tokenId: 1,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Rye',
    mashBill: '100% Rye',
    distilleryAddress: '0x9192',
    caskProof: 120,
    bottleProof: 90,
    bottleYield: 250,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Spicey nose, traces of cloves and nutmeg, with a long tail of caramel and ground pepper.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 1, 1),
    startPrice: 35,
    endPrice: 55,
    feesPerBottle: 5
};


const rye40 = {
    name: 'Rye Barrel #40',
    tokenId: 2,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Rye',
    distilleryAddress: '0x9192',
    caskProof: 120,
    bottleProof: 90,
    bottleYield: 250,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Spicey nose, traces of cloves and nutmeg, with a long tail of caramel and ground pepper.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 1, 1),
    startPrice: 35,
    endPrice: 55,
    feesPerBottle: 5
};


const rye41 = {
    name: 'Rye Barrel #41',
    tokenId: 3,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Rye',
    distilleryAddress: '0x9192',
    caskProof: 120,
    bottleProof: 90,
    bottleYield: 250,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Spicey nose, traces of cloves and nutmeg, with a long tail of caramel and ground pepper.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 1, 1),
    startPrice: 35,
    endPrice: 55,
    feesPerBottle: 5
};


const whiskeyData = {
    'rye': [rye38, rye39, rye40, rye41 ],
    'bourbon': [rye38, rye39, rye40, rye41 ],
    'blend': [rye38, rye39, rye40, rye41 ],
    'special': [rye38, rye39, rye40, rye41 ] 
};

export default whiskeyData;