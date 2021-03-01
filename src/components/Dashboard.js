import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Chart from 'chart.js';
import { whiskeyDataFlattened } from '../data/whiskeyData';
import { useContracts } from '../hooks/useContracts';
import { useWeb3React } from '@web3-react/core';
import { Link } from 'react-router-dom';
import UnderLabelTextField from './UnderLabelTextField';
import '../styles/Dashboard.css'
import { ethers } from 'ethers';
//const testReleaseDate = (new Date(2023, 0, 0)).getTime() / 1000;

// const sampleData = [
//     {id: 0, name: 'Rye #39', bottles: 5, releaseDate: testReleaseDate },
//     {id: 2, name: 'Rye #44', bottles: 1, releaseDate: testReleaseDate },
//     {id: 1, name: 'Rye #40', bottles: 2, releaseDate: testReleaseDate },
//     {id: 3, name: 'Rye #56', bottles: 3, releaseDate: testReleaseDate }
// ];


function Dashboard() {

    const [whiskeyInventory, setWhiskeyInventory] = useState(undefined);
    const [whiskeyPlatform, barrelHouse, aWETHContract] = useContracts();
    const { account } = useWeb3React(); 
    const [totalSpent, setTotalSpent] = useState(0);
    const [totalCurrentValue, setTotalCurrentValue] = useState(0);
    const [totalBottles, setTotalBottles] = useState(0);
    const [totalMaturedValue, setTotalMaturedValue] = useState(0);
    const [aWETHBalance, setAWETHBalance] = useState(0);

    useEffect(() => {
        let currentValue = 0;
        let maturedValue = 0;
        let allBottles = 0;

        async function checkWhiskey(tokenId) {
            const bottles = await barrelHouse.balanceOf(account, tokenId);
            const bottlesOwned = bottles.toNumber();
            if(bottlesOwned > 0) {
                const [, endDate] = await whiskeyPlatform.barrelMaturationData(tokenId);
                const bottlePrice = await whiskeyPlatform.currentBottlePrice(tokenId);
                const dbData = whiskeyDataFlattened.find(w => w.tokenId === tokenId);
                const newData = {
                    id: tokenId,
                    name: dbData.name,
                    bottles: bottlesOwned,
                    releaseDate: endDate.toNumber()
                };
                currentValue += bottlePrice[0] * bottlesOwned;
                maturedValue += bottlePrice[2] * bottlesOwned;
                allBottles += bottlesOwned;
                // setWhiskeyInventory(w => {
                    //     console.log(w);
                    //     return w.push(newData);
                    // });
                return newData;
            }
            return null;
        }
        
        async function getNumBarrels() {
            
            const numBarrels = await barrelHouse.getTotalBarrels();
            const allOwned = [];
            for(let i = 0; i < numBarrels; i++) {
                const newData = await checkWhiskey(i);  
                if(newData !== null) {
                    allOwned.push(newData);
                }
            }
            setTotalCurrentValue(currentValue / 100.0);
            setTotalMaturedValue(maturedValue / 100.0);
            setWhiskeyInventory(allOwned);
            setTotalBottles(allBottles);

            const spendTotal = await whiskeyPlatform.getInvetmentTotal(account);
            setTotalSpent(spendTotal / 100.0);
        }

        async function getAWETHBalance() {
            const balance = await aWETHContract.balanceOf(whiskeyPlatform.address);
            console.log(balance);
            setAWETHBalance(balance.div(ethers.constants.WeiPerEther.div(10**8)).toNumber() / 100000000.0);
        }
        

        // clear old inventory
        setWhiskeyInventory(undefined);
        if(!barrelHouse || !whiskeyPlatform || !account)
        {

        }else{
            getNumBarrels();
        }

        if(!!aWETHContract && !!whiskeyPlatform) {
            getAWETHBalance();
        }

    }, [barrelHouse, whiskeyPlatform, aWETHContract, account])

    const whiskeyActions = !whiskeyInventory || whiskeyInventory.length === 0 ? (<></>) : whiskeyInventory.map(d => (
        <WhiskeyAction
            key={d.id}
            wData={d}
        />
    ));


    return (
        <div id='barrel-bg'>
            <div className='container'>
                <div className='dashboard-section'>
                    <div className='header-label margin-label'>
                        <h3 className='header-title'>Whiskey Portfolio</h3>
                    </div> 
                    <PortfolioChart 
                        inventory={whiskeyInventory}
                    />
                    <InvestmentSummary 
                        totalPaid={totalSpent}
                        aWETHBalance={aWETHBalance}
                        totalBottles={totalBottles}
                        currentBottleValue={totalCurrentValue}
                        finalBottleValue={totalMaturedValue}
                    />
                </div>
                <div className='dashboard-section'>
                    <div className='header-label margin-label'>
                        <h3 className='header-title'>Whiskey Actions</h3>
                    </div> 
                    <div className='whiskey-action-wrapper'>
                        {whiskeyActions}
                    </div>
                </div>
                
                <div className='header-label margin-label'>
                    <h3 className='header-title'>Latest Distillers Notes</h3>
                </div> 

            </div>
        </div>
    )
}

function WhiskeyAction(props) {
    const wData = props.wData;
    const tokenId = wData.id;
    const releaseDate = wData.releaseDate;
    const bottles = wData.bottles;

    const dbWhiskeyData = whiskeyDataFlattened.find(w => w.tokenId === tokenId);

    const startPrice = 35;
    const sellbackAmount = 2;

    const maxSellback = Math.min(sellbackAmount, bottles);

    const isReleased = Date.now() - releaseDate * 1000 > 0;


    return (
        <div className='barrel-card'>
            <div className='barrel-listing flex'>
                <div 
                    className='barrel-img-wrapper'
                    style={{background: `url(${dbWhiskeyData.img})`}}    
                >
                </div>
                <div className='barrel-details'>
                    <div className='barrel-title'>
                        <Link to={`/barrels/${wData.id}`}>
                            <h4>{dbWhiskeyData.name}</h4>
                        </Link>
                        <h5>{dbWhiskeyData.distillery}</h5>
                    </div>
                    <div className='whiskey-action flex'>
                        <Form.Control 
                            variant={'outline-success' }
                            value={bottles}
                            disabled
                            >
                        </Form.Control>
                        <h6>Bottle{bottles === 1 ? '' : 's'} Owned</h6>
                    </div>
                    <div className='whiskey-action flex'>
                        <Button 
                            variant={isReleased ? 'success' : 'outline-secondary' }

                            disabled={!isReleased}
                        >
                            Redeem
                        </Button>
                        {/* <p>Redemption available in:&nbsp;</p> */}
                        <ReleaseCountdown
                            releaseDate={releaseDate}
                            loading={false}
                            text={'until redemption.'}
                        />
                    </div>
                    <div className='whiskey-action flex'>
                        <Button
                            variant='info'
                        >
                            Sellback
                        </Button>
                        <p>{maxSellback} bottles eligable to sellback.</p>
                    </div>
                    <div className='whiskey-action flex'>
                        <Button
                            variant='primary'
                        >
                            Refund
                        </Button>
                        <p>Receive initial price of ${startPrice.toFixed(2)} per bottle.</p>
                    </div>
                </div>
            </div>
        </div>
    )


}

function ReleaseCountdown(props) {

    function countDownTime(endDate) {
          // Find the distance between now and the count down date
        var distance = endDate - new Date().getTime();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return [days, hours, minutes, seconds];
    }

    const releaseDate = props.releaseDate;
    const isLoading = props.loading;
    //const countdownTime = !!releaseDate ? countDownTime(releaseDate * 1000, currTime) : '';
        
    const [timeRemaining, setTimeRemaining] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            if(!!releaseDate)
                setTimeRemaining(countDownTime(releaseDate * 1000));
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className='release-countdown flex'>
            { timeRemaining[0] === undefined || isLoading ? 
                <Spinner animation='grow' size='sm' /> : 
                <p>{`${timeRemaining[0]}d ${timeRemaining[1]}h ${timeRemaining[2]}m ${timeRemaining[3]}s ${props.text}`}</p>}
        </div>
    )


}

function PortfolioChart(props) {

    const whiskeyInventory = props.inventory;
    
    useEffect(() => {
        if(!whiskeyInventory) {
            return;
        }
        
        function generateRandomHexColor() {
            let color = '#';
            for (let i = 0; i < 6; i++){
                const random = Math.random();
                const bit = (random * 16) | 0;
                color += (bit).toString(16);
             };
             return color;
        }

        const finalData = whiskeyInventory.length > 0 ? whiskeyInventory : [{bottles: 1, name: 'Thirsty Yet?'}];
        const data = finalData.map(i => i.bottles);
        const labels = finalData.map(i => i.name);
        const backgroundColors = finalData.map(i => generateRandomHexColor());
        const donutCtx = document.getElementById('whiskey-inventory')
        const chart = new Chart(donutCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColors,
                }],
                labels: labels
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function(toolTipItem) {
                            const idx = toolTipItem.index;
                            return whiskeyInventory.length > 0 ? `${labels[idx]}: ${data[idx]} Bottles` : 'Buy Some Whiskey!';
                        }
                    }
                }
            }
        });
        return () => { chart.destroy();}
    }, [whiskeyInventory])


    return (
        <div className='donut-chart-wrapper'>
            {!whiskeyInventory ? (
                <div className='full flex flex-center'>
                    '<Spinner animation="border" size='lg'/>
                </div>
            ) : ''}
            <canvas id='whiskey-inventory'></canvas>
        </div>
    )

}

function InvestmentSummary(props) {
    

    return (
        <div className='label-group'>
            {/* <UnderLabelTextField 
                name='Total Staked in Barrels'
                value={'$' + props.totalPaid.toFixed(2)}
            /> */}
            <UnderLabelTextField 
                name='Current Staked Value'
                value={'$' + (props.currentBottleValue).toFixed(2)}
            />
            <UnderLabelTextField 
                name='Avg Price Paid Per Bottle'
                value={'$' + (props.totalPaid / Math.max(1, props.totalBottles)).toFixed(2)}
            />
             <UnderLabelTextField 
                name='Total Fees Staked in Aave'
                value={`${props.aWETHBalance} ETH`}
            />
            <UnderLabelTextField 
                name='Gains to Date'
                value={'+$' + Math.max(0, (props.currentBottleValue - props.totalPaid)).toFixed(2)}
                positive='true'
            />
            <UnderLabelTextField 
                name='Projected Full Maturation Gains'
                value={'+$' + (props.finalBottleValue - props.totalPaid).toFixed(2)}
                positive='true'
            />
            <UnderLabelTextField 
                name='Estimated APY'
                value='15.22%'
                positive='true'
            />
        </div>
    )

}


export default Dashboard;