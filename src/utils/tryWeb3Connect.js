import { InjectedConnector } from '@web3-react/injected-connector';


async function tryConnect(web3React) {
    const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337, 31337] });
    console.log(injected);
    await injected.getAccount();
    //console.log(signer);
    // const provider = await connectInjected();
    // if(provider !== null)
    web3React.activate(injected);
}
  

export { tryConnect };