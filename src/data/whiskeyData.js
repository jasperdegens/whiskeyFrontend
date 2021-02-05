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
    name: 'Limousin Rye',
    tokenId: 0,
    distillery: 'Stone Barn',
    whiskeyType: 'Limousin Rye',
    distilleryAddress: '0x9192',
    img: '/images/limousiin.jpg',
    caskProof: 120,
    bottleProof: 90,
    bottleYield: 250,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'The French oak imparted a delightful roundness, color, and mouth feel to the spirit, with the aroma of honeycake. We did not chill filter the whiskey.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 1, 1),
    startPrice: 35,
    endPrice: 55,
    feesPerBottle: 5
};


const rye39 = {
    name: 'Dark Roast Rye Barrel #55',
    tokenId: 1,
    distillery: 'Stone Barn',
    whiskeyType: 'Dark Roast Rye',
    mashBill: '80% Rye, 20% Wheat',
    distilleryAddress: '0x9192',
    img: '/images/rye55.jpg',
    caskProof: 110,
    bottleProof: 92,
    bottleYield: 250,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Coffee. Chocolate. Stout. Rye! Our hoodie-weather whiskey draws inspiration from the dark-roast flavors of fall in Portland.  We make this whiskey from stone ground dark rye flour with a sack of chocolate rye malt, a heavily roasted grain that imparts loads of espresso and cacao.  Aged at least three years in new charred American oak barrels, this Rye pairs perfectly with coffee, rain, and other autumn pleasures.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2025, 1, 1),
    startPrice: 30,
    endPrice: 55,
    feesPerBottle: 5
};

const rye40 = {
    name: 'Peach Rock and Rye Barrel',
    tokenId: 2,
    distillery: 'Stone Barn',
    whiskeyType: 'Rock and Rye',
    distilleryAddress: '0x9192',
    img: '/images/StraightRye.jpg',
    caskProof: 110,
    bottleProof: 66,
    bottleYield: 210,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '70% Rye, 30% Spelt',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Rock & Rye is a whiskey-based liqueur that was more common pre-prohibition, rock candy being used to improve a lesser rye perhaps. We wash and cut 120 pounds of peaches, then shove them into the bung holes of oak barrels that contain our organic rye and then age the spirit.',
    inceptionDate: new Date(2020, 1, 1),
    matureDate: new Date(2025, 1, 1),
    startPrice: 25,
    endPrice: 40,
    feesPerBottle: 5
};

const rye41 = {
    name: 'Straight Rye Barrel #58',
    tokenId: 2,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Rye',
    distilleryAddress: '0x9192',
    img: '/images/StraightRye.jpg',
    caskProof: 115,
    bottleProof: 94,
    bottleYield: 210,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '56% Dark Rye, 44% Rye Malt',
    barrelWood: 'Missouri Oak',
    barrelChar: 'Char with Charred Heads',
    distillersNotes: 'Very rich and sweet aroma, old fashioned root beer and vanilla cream soda. Abundant rye character on the palate, herbal, peppery notes and tart red fruit with dark caramel and salted buttercream. Long finish.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2026, 1, 1),
    startPrice: 25,
    endPrice: 50,
    feesPerBottle: 5
};

const rye42 = {
    name: 'Straight Rye Barrel #58',
    tokenId: 2,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Rye',
    distilleryAddress: '0x9192',
    img: '/images/StraightRye.jpg',
    caskProof: 104,
    bottleProof: 90,
    bottleYield: 210,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '56.1% Dark Rye, 33.9% Oat',
    barrelWood: 'Missouri Oak',
    barrelChar: 'Char with Charred Heads',
    distillersNotes: 'Dry and woodsy on the nose with a bready pumpernickel character and some fruity berry notes. Sweeter on the palate, clear oatmeal cookies and bourbon barrel oakiness, with a bright finish.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2025, 6, 6),
    startPrice: 30,
    endPrice: 60,
    feesPerBottle: 5
};


const Bourbon42 = {
    name: 'Straight Bourbon Barrel #42',
    tokenId: 3,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Bourbon',
    distilleryAddress: '0x9192',
    img: '/images/StraightBourbon.jpg',
    caskProof: 120,
    bottleProof: 94,
    bottleYield: 240,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'This single-barrel release is dry, strong and full of stone-ground full grain character with a lingering finish.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 6, 6),
    startPrice: 40,
    endPrice: 85,
    feesPerBottle: 5
};

const Bourbon43 = {
    name: 'Bourbon Barrel Barrel #43',
    tokenId: 4,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Bourbon',
    distilleryAddress: '0x9192',
    img: '/images/StraightBourbon2.jpg',
    caskProof: 120,
    bottleProof: 94,
    bottleYield: 240,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Rye',
    barrelWood: 'Missouri Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'This has everything you might like in a bourbon, depth, sweetness, a touch of spice from the rye, a lingering finish, wonderful barrel notes. This one uses all organic PNW grown grains.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2026, 6, 6),
    startPrice: 30,
    endPrice: 70,
    feesPerBottle: 5
};

const Bourbon44 = {
    name: 'Bourbon Barrel Barrel #44',
    tokenId: 5,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Bourbon',
    distilleryAddress: '0x9192',
    img: '/images/corn44.jpg',
    caskProof: 120,
    bottleProof: 94,
    bottleYield: 240,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '59% Corn, 29% Wheat, 12% Dark Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'The bourbon was bottled without chill-filtration. The resultant whiskey is bright and approachable, with abundant fruit and caramel notes and an elegant, full mouthfeel.This one uses all organic PNW grown grains.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2026, 6, 6),
    startPrice: 30,
    endPrice: 70,
    feesPerBottle: 5
};

const Bourbon74 = {
    name: 'Straight Bourbon Barrel Barrel #74',
    tokenId: 5,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Bourbon',
    distilleryAddress: '0x9192',
    img: '/images/corn44.jpg',
    caskProof: 114,
    bottleProof: 111,
    bottleYield: 240,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '60% Corn, 14% Dark Rye, 10% Soft White Wheat, 10% Millet, 6% Barley Malt',
    barrelWood: 'American Oak',
    barrelChar: 'Heavy Char',
    distillersNotes: 'Like a blackberry pie, buttery pastry crusts with warm cinnamon and blackberries. Palate is similar to nose, with touches of coconut, caramel, and green apple.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 6, 6),
    startPrice: 25,
    endPrice: 50,
    feesPerBottle: 5
};

const Bourbon88 = {
    name: 'Straight Bourbon Barrel Barrel #88',
    tokenId: 5,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Bourbon',
    distilleryAddress: '0x9192',
    img: '/images/corn44.jpg',
    caskProof: 114,
    bottleProof: 109,
    bottleYield: 240,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '54.6% Corn, 12.5% Dark Rye, 32.9% Malted Barley',
    barrelWood: 'White Oak',
    barrelChar: 'Heavy Char',
    distillersNotes: 'Very bright, dynamic nose with apricots, bananas, caramel apple pops, and malty beer. The palate is quite a contrast, spicy and earthy with nut brittle and salted walnuts, big evolution of flavors in the finish.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2024, 1, 1),
    startPrice: 30,
    endPrice: 55,
    feesPerBottle: 5
};


const Blend46 = {
    name: 'Hopping Eights Barrel #46',
    tokenId: 6,
    distillery: 'Stone Barn',
    whiskeyType: 'Blended Whiskey',
    distilleryAddress: '0x9192',
    img: '/images/HoppinEights.jpg',
    caskProof: 110,
    bottleProof: 90,
    bottleYield: 240,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '47% Dark Rye, 47% Wheat, 6% German Pilsner',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'The whiskey is grain prominent, great color- our choice for a Boilermaker',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2026, 6, 6),
    startPrice: 40,
    endPrice: 100,
    feesPerBottle: 5
};

const Blend47 = {
    name: 'Barnstormer Barrel #47',
    tokenId: 7,
    distillery: 'Stone Barn',
    whiskeyType: 'Imperial Red Single Malt Whiskey',
    distilleryAddress: '0x9192',
    img: '/images/Barnstormer.jpg',
    caskProof: 110,
    bottleProof: 92,
    bottleYield: 240,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '86% Malted Barley, 14% Malted Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'In a collaboration with Stormbreaker Brewing, we created something that has some nice malt character, but also a little spice to balance it out. This is Whiskey Market Makers favorite.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2028, 6, 6),
    startPrice: 30,
    endPrice: 90,
    feesPerBottle: 5
};

const Blend48 = {
    name: 'Blended Barrel #48',
    tokenId: 8,
    distillery: 'Stone Barn',
    whiskeyType: 'Blended Whiskey',
    distilleryAddress: '0x9192',
    img: '/images/barrels.jpg',   
    caskProof: 110,
    bottleProof: 110,
    bottleYield: 150,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '86% Malted Barley, 14% Malted Rye',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Spicey nose, traces of cloves and nutmeg, with a long tail of caramel and ground pepper.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2030, 1, 1),
    startPrice: 50,
    endPrice: 160,
    feesPerBottle: 5
};

const Special50 = {
    name: 'Straight Oat Barrel #50',
    tokenId: 9,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Oat',
    distilleryAddress: '0x9192',
    img: '/images/StraightOat.jpg',
    caskProof: 110,
    bottleProof: 90,
    bottleYield: 150,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Oat',
    barrelWood: 'American Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'Rich, smooth, graham-crackery goodness.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2025, 1, 1),
    startPrice: 30,
    endPrice: 50,
    feesPerBottle: 5
};

const Special51 = {
    name: 'Spelt Barrel #49',
    tokenId: 10,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Spelt',
    distilleryAddress: '0x9192',
    img: '/images/Spelt.jpg',
    caskProof: 110,
    bottleProof: 100,
    bottleYield: 150,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '100% Spelt',
    barrelWood: 'Missouri Oak',
    barrelChar: 'Medium Toast',
    distillersNotes: 'We’ve always appreciated the grain expression of the spelt- sweet, but decidedly more interesting than its more cultivated relative wheat.  During the mashing process it has a distinct and unusual asparagus aroma, which totally dissapears after fermentation. However, spelt maintains a slight and pleasant grassiness as a distillate.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2030, 1, 1),
    startPrice: 25,
    endPrice: 70,
    feesPerBottle: 5
};

const Special52 = {
    name: 'Straight Millet Barrel',
    tokenId: 10,
    distillery: 'Stone Barn',
    whiskeyType: 'Straight Millet',
    distilleryAddress: '0x9192',
    img: '/images/Spelt.jpg',
    caskProof: 119,
    bottleProof: 107,
    bottleYield: 150,
    barrelVolume: 180,
    flavorProfile: testFlavorProfile,
    mashBill: '65% Millet, 22.5% Wheat, 12.5% Dark Rye',
    barrelWood: 'Missouri Oak',
    barrelChar: 'Heavy Char',
    distillersNotes: 'Closer to a classic bourbon nose, sweet vanilla frosting on a caramel cupcake. Big fruitiness, with baked peaches and apricots, spicy cinnamon and pepper corns, and a dense mouthfeel with strong barral character.',
    inceptionDate: new Date(2021, 1, 1),
    matureDate: new Date(2025, 2, 2),
    startPrice: 25,
    endPrice: 70,
    feesPerBottle: 5
};

const whiskeyData = {
    'rye': [rye38, rye39, rye40, rye41, rye42  ],
    'bourbon': [Bourbon42, Bourbon43, Bourbon44, Bourbon74, Bourbon88 ],
    'blend': [Blend46, Blend47, Blend48 ],
    'special': [Special50, Special51, Special52 ] 
};

const whiskeyDataFlattened = Object.keys(whiskeyData).reduce((acc, key) => {
    acc.push(whiskeyData[key]);
    return acc;
}, []).flat();

export { whiskeyData, whiskeyDataFlattened };
