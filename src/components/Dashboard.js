import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Chart from 'chart.js';
import UnderLabelTextField from './UnderLabelTextField';
import '../styles/Dashboard.css'

const sampleData = [
    {id: 0, name: 'Rye #39', bottles: 5},
    {id: 1, name: 'Rye #40', bottles: 2},
    {id: 2, name: 'Rye #44', bottles: 1},
    {id: 3, name: 'Rye #56', bottles: 3}
];


function Dashboard() {




    return (
        <div id='barrel-bg'>
            <div className='container'>
                <h2>Dashboard</h2>
                <ReleaseCountdownGroup countdownData={sampleData} />


            </div>
        </div>
    )
}

function ReleaseCountdownGroup(props) {

    const countdowns = props.countdownData.map((d, i) => {
        return (
            <ReleaseCountdown
                key={d.id}
                name={d.name}
                releaseDate={Math.floor((new Date(2025 + i, 1 + i, 1 + i, i, i * 2).getTime() / 1000))}
            />
        )
    });

    return (
        <div className='release-countdown-wrapper'>
            <div className='header-label margin-label'>
                <h3 className='header-title'>Release Countdown</h3>
            </div> 
            {countdowns}
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
            <div className='header-label margin-label'>
                <h3 className='header-title'>Latest Distillers Notes</h3>
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

    const whiskeyName = props.name;
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
            <p>{whiskeyName}</p>
            { timeRemaining[0] === undefined || isLoading ? 
                <Spinner animation='grow' size='sm' /> : 
                <p>{`${timeRemaining[0]}d ${timeRemaining[1]}h ${timeRemaining[2]}m ${timeRemaining[3]}s`}</p>}
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