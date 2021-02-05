import {createContext} from 'react';
import {useContracts} from '../hooks/useContracts';

let ContractContext = [];

function ContractProvider({children}) {

    const contracts = useContracts();

    ContractContext = createContext(contracts);

    return (
        <ContractContext.Provider value={contracts}>{children}</ContractContext.Provider>
    )
}


export {ContractProvider, ContractContext};