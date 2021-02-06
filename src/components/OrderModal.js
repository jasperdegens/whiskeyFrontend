import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';
import { useContracts } from '../hooks/useContracts';
import {useWeb3React} from '@web3-react/core';
import {ethers} from 'ethers';
import { usePriceFeed } from '../hooks/usePriceFeed';
import { useEffect } from 'react';

function OrderModal(props) {


    const [whiskeyPlatform] = useContracts();
    const {account, library} = useWeb3React();
    const {updatePrice, currPrice} = usePriceFeed();
    
    useEffect(() => {
        updatePrice();
    }, [library, account]);

    async function submitOrder() {
        console.log(library);
        const trx = await whiskeyPlatform.connect(library.getSigner(account)).purchaseBottles(props.tokenId, props.numBottles, {value: priceInWei.toString()});

    }

    useEffect(() => {
        updatePrice();
    }, [props.show, updatePrice])

    const testPrice = currPrice === 0 ? 1688 * 10**8 : currPrice;
    const priceInWei = ethers.constants.WeiPerEther.mul(Math.floor(props.totalPriceUsd * 100)).mul(10**6).div(testPrice);

    const ethPrice = currPrice;
    const finalPriceInEth =  props.totalPriceUsd / (testPrice / (10**8));

    return (
        <Modal
            show={props.show}
            size='lg'
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    Confirm Purchase
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Order Details</h5>
                <p>{props.name}</p>
                <p>{`${props.numBottles} Bottles @ $${(props.bottlePrice/100).toFixed(2)} = $${props.totalPriceUsd}`}</p>
                <p>{`$${props.totalPriceUsd} @ ${(testPrice / (10**8)).toFixed(2)}USD/ETH = `}&#9776;{`${finalPriceInEth}`}</p>
                
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='info'
                    onClick={submitOrder}
                >
                    Submit Order
                </Button>
                <Button variant='dark' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default OrderModal;