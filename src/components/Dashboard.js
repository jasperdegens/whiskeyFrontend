import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Chart from 'chart.js';
import { whiskeyDataFlattened } from '../data/whiskeyData';
import { Link } from 'react-router-dom';
import UnderLabelTextField from './UnderLabelTextField';
import '../styles/Dashboard.css'

const testReleaseDate = (new Date(2023, 0, 0)).getTime() / 1000;

const sampleData = [
    {id: 0, name: 'Rye #39', bottles: 5, releaseDate: testReleaseDate },
    {id: 2, name: 'Rye #44', bottles: 1, releaseDate: testReleaseDate },
    {id: 1, name: 'Rye #40', bottles: 2, releaseDate: testReleaseDate },
    {id: 3, name: 'Rye #56', bottles: 3, releaseDate: testReleaseDate }
];


function Dashboard() {


    const whiskeyActions = sampleData.map(d => (
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
                        inventory={sampleData}
                    />
                    <InvestmentSummary 
                        totalPaid={450}
                        totalBottles={10}
                        currentBottleValue={530}
                        finalBottleValue={570}
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
    const whiskeyName = wData.name;
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

        const data = whiskeyInventory.map(i => i.bottles);
        const labels = whiskeyInventory.map(i => i.name);
        const backgroundColors = whiskeyInventory.map(i => generateRandomHexColor());
        console.log(backgroundColors);
        const donutCtx = document.getElementById('whiskey-inventory')
        new Chart(donutCtx, {
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
                            return `${labels[idx]}: ${data[idx]} Bottles`;
                        }
                    }
                }
            }
        });

    }, [whiskeyInventory])


    return (
        <div className='donut-chart-wrapper'>
            <canvas id='whiskey-inventory'></canvas>
        </div>
    )

}

function InvestmentSummary(props) {
    

    return (
        <div className='label-group'>
            <UnderLabelTextField 
                name='Total Staked in Barrels'
                value={'$' + props.totalPaid.toFixed(2)}
            />
            <UnderLabelTextField 
                name='Avg Price Paid Per Bottle'
                value={'$' + (props.totalPaid / props.totalBottles).toFixed(2)}
            />
            <UnderLabelTextField 
                name='Current Staked Value'
                value={'$' + (props.currentBottleValue).toFixed(2)}
            />
            <UnderLabelTextField 
                name='Gains to Date'
                value={'+$' + (props.currentBottleValue - props.totalPaid).toFixed(2)}
                positive='true'
            />
            <UnderLabelTextField 
                name='Projected Full Maturation Gains'
                value={'+$' + (props.finalBottleValue - props.totalPaid).toFixed(2)}
                positive='true'
            />
            <UnderLabelTextField 
                name='Estimated APY'
                value='10%'
                positive='true'
            />
        </div>
    )

}


export default Dashboard;