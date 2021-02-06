const CONTRACT_ADDRESS = {
    'local': {
        'barrelHouse' : '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        'whiskeyPlatform' : '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
    },
    'kovan': {
        'barrelHouse' : '0x0e9B88832Db9F658c5e2D6eDC6a687fbaF08BaC2',
        'whiskeyPlatform' : '0x40B10B75A9c2A25e7b36c89532A7561E1853970B',
        'aWETHContract' : '0x87b1f4cf9bd63f7bbd3ee1ad04e8f52540349347',
    }
}


const contractEnv = CONTRACT_ADDRESS['kovan'];

export default contractEnv;