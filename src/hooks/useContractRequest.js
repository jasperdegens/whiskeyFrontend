import {useState, useEffect} from 'react';
import { useContracts } from './useContracts';
import { useWeb3React } from '@web3-react/core';

const useRequest = (contract, reqName, params) => {

    const [res, setResult] = useState(undefined);

    useEffect(() => {
        async function makeRequest(){
            try{
                const res = await contract[reqName](...params);
                setResult((res));
                console.log(res);
            }catch (err){
                console.log(err);
            }
        }

        if(contract === undefined){
            setResult(undefined);
        }else{
            try{
                makeRequest();
            }
            catch{
                console.log("Error fetching data....");
            }
        }

    }, [contract, reqName, params]);

    return res;
}


const useBarrelQuery = (id) => {
    
    const [whiskeyPlatform, barrelHouse] = useContracts();
    const { account } = useWeb3React();

    // need to create array that does not change
    const [idParam] = useState([id]);
    const [ownedParams] = useState([account, id])

    const totalBottles = useRequest(whiskeyPlatform, 'totalBottles', idParam)
    const bottlePrice = useRequest(whiskeyPlatform, 'currentBottlePrice', idParam);
    const ownedBottles = useRequest(barrelHouse, 'balanceOf', ownedParams);
    const agingData = useRequest(whiskeyPlatform, 'barrelMaturationData', idParam);
    const availableBottles = useRequest(whiskeyPlatform, 'availableBottles', idParam);

    return [totalBottles, bottlePrice, ownedBottles, availableBottles, agingData];


}

export {useBarrelQuery, useRequest};