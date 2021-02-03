import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button';
import { useContracts } from '../hooks/useContracts';
import {useWeb3React} from '@web3-react/core';
import {ethers} from 'ethers';

function OrderModal(props) {

    const ethPrice = 10;

    const [whiskeyPlatform] = useContracts();
    const {account, connector, library} = useWeb3React();

    async function submitOrder() {
        console.log(library);
        const trx = await whiskeyPlatform.connect(library.getSigner(account)).purchaseBottles(props.tokenId, props.numBottles, {value: ethers.constants.WeiPerEther.toString()});


    }


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
                <p>{props.numBottles} Bottles</p>
                <p>{props.totalPriceUsd}</p>
                <p>{ethPrice} ETH</p>
                
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