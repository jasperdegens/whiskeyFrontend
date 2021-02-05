import {useContext} from 'react';
import {ContractContext} from '../components/ContractProvider';

export const useWhiskeyContracts = () => {
    return useContext(ContractContext);
}



