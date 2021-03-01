import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import contractAddresses from '../data/contractAddresses.js';
const whiskeyPlatformAbi = require('../contracts/WhiskeyPlatformV1.sol/WhiskeyPlatformV1.json');
const barrelHouseAbi = require('../contracts/BarrelHouse.sol/BarrelHouse.json');
const aWethAbi = require('../contracts/aWETHabi.json');

const useContract = (address, abi) => {
    
    const { active, library } = useWeb3React();

    const [contract, setContract] = useState(undefined);

    useEffect(() => {
        async function connectToContracts() {
            if(library !== undefined) {
                const attachedContract = new ethers.Contract(
                    address,
                    abi,
                    library
                );
                setContract(attachedContract);
            }
        }

        if(!active) {
            setContract(undefined);
        }else{
            connectToContracts();
        }
    }, [active, library, address, abi]);

    return contract;
}


// Tries to create ethers contract connections if provider exists
const useContracts = () => {

    //const { active, library } = useWeb3React();

    //const [whiskeyPlatform, setWhiskeyPlatform] = useState();
    //const [barrelHouse, setBarrelHouse] = useState();
    
    const whiskeyPlatform = useContract(
        contractAddresses.whiskeyPlatform,
        whiskeyPlatformAbi.abi
    );

    const barrelHouse = useContract(
        contractAddresses.barrelHouse,
        barrelHouseAbi.abi
    );

    const aWETHContract = useContract(
        contractAddresses.aWETHContract,
        aWethAbi
    );


    window.whiskey = whiskeyPlatform;

    return [ whiskeyPlatform, barrelHouse, aWETHContract ];


}



export { useContracts, useContract };