const CONTRACT_ADDRESS = {
    'local': {
        'barrelHouse' : '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        'whiskeyPlatform' : '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
    },
    'kovan': {
        'barrelHouse' : '0xFcd100d069C9EFe13B32BF0D2A5596968127c46B',
        'whiskeyPlatform' : '0xdfF2E8004d08C39f1c1CB32b13623e9D79E3B8cd'
    }
}


const contractEnv = CONTRACT_ADDRESS['kovan'];

export default contractEnv;