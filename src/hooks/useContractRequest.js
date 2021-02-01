import {useState, useEffect} from 'react';
import { useContracts } from './useContracts';
import { useWeb3React } from '@web3-react/core';

const useRequest = (contract, reqName, params) => {

    const [res, setResult] = useState(undefined);

    useEffect(() => {
        async function makeRequest(){
            const res = await contract[reqName](...params);
            setResult((res));
            console.log(res);
        }

        if(contract === undefined){
            setResult(undefined);
        }else{
            makeRequest();
        }

    }, [contract, reqName, params]);

    return res;
}


const useBarrelQuery = (id) => {
    
    const [whiskeyPlatform, barrelHouse] = useContracts();
    const { account } = useWeb3React();

    // need to create array that does not change
    const [idParam, setIdParam] = useState([id]);
    const [ownedParams, setOwnedParams] = useState([account, id])

    const totalBottles = useRequest(whiskeyPlatform, 'totalBottles', idParam)
    const bottlePrice = useRequest(whiskeyPlatform, 'currentBottlePrice', idParam);
    const ownedBottles = useRequest(barrelHouse, 'balanceOf', ownedParams);
    const agingData = useRequest(whiskeyPlatform, 'barrelMaturationData', idParam);

    return [totalBottles, bottlePrice, ownedBottles, agingData];


}

export {useBarrelQuery, useRequest};