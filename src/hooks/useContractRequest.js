import {useState, useEffect} from 'react';
import { useContracts } from './useContracts';

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

    // need to create array that does not change
    const [idParam, setIdParam] = useState([id]);
    const [priceParams, setPriceParams] = useState([id, Date.now()]);

    const [whiskeyPlatform, barrelHouse] = useContracts();

    const totalBottles = useRequest(whiskeyPlatform, 'totalBottles', idParam)
    const bottlePrice = useRequest(whiskeyPlatform, 'bottlePrice', priceParams);


    return [totalBottles, bottlePrice];


}

export {useBarrelQuery, useRequest};