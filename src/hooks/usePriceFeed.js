import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';


const usePriceFeed = () => {
    
    const [aggregatorContract, setAggregatorContract] = useState(undefined);
    const [currPrice, setCurrPrice] = useState(0);

    const { library } = useWeb3React();

    useEffect(() => {
        console.log("creating contract")
        createContract();
        updatePrice();

    }, [library]);

    function createContract(){
        if(aggregatorContract === undefined){
            const aggregatorV3InterfaceABI = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
            const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331";
            const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, library);
            setAggregatorContract(priceFeed);
        }
       
    }

    async function updatePrice() {
        console.log("updating");
        if(!aggregatorContract)
            createContract();
        
        if(!aggregatorContract)
            return;

        console.log(aggregatorContract);

        try{
            const roundData = await aggregatorContract.latestRoundData()
            // Do something with roundData
            console.log("Latest Round Data", roundData)
            setCurrPrice(roundData.answer.toNumber());
        } catch {

        }
    }
    
    return { updatePrice, currPrice};

}

export { usePriceFeed };