import '../styles/WhiskeyDetails.css';
import Chart from 'chart.js';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';

// WhiskeyDetails props = whiskey schema 
function WhiskeyListing(props) {
    console.log(props.whiskeyData);
    const whiskeyData = props.whiskeyData;
    
    function formatDate(date){
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function createLinearData(xRange, yRange, incriment){
        let currX = xRange[0];
        const xSpread = xRange[1] - xRange[0];
        const ySpread = yRange[1] - yRange[0];
        const finalData = [[], []];
        while(currX <= xRange[1]){
            finalData[0].push(currX);
            const normalizedVal = (currX - xRange[0]) / xSpread;
            const yVal = (yRange[0] + ySpread * normalizedVal).toFixed(2);
            finalData[1].push(yVal);
            currX += incriment;
        }
        return finalData;
    }

    // const priceData = [
    //     { year: whiskeyData.inceptionDate.getFullYear(), price: whiskeyData.startPrice },
    //     { year: whiskeyData.matureDate.getFullYear(), price: whiskeyData.endPrice }
    // ];

    const priceData = createLinearData(
        [whiskeyData.inceptionDate.getFullYear(), whiskeyData.matureDate.getFullYear()],
        [whiskeyData.startPrice, whiskeyData.endPrice],
        1
    );

    const feeData = createLinearData(
        [whiskeyData.inceptionDate.getFullYear(), whiskeyData.matureDate.getFullYear()],
        [whiskeyData.feesPerBottle, 0],
        1
    );

    console.log(priceData);

    // add in charts after mount
    useEffect(() => {
        // add price chart
        const priceCtx = document.getElementById('price-chart').getContext('2d');
        new Chart(priceCtx, {
            type: 'line',
            data: {
                labels: priceData[0],
                datasets: [{
                    label: 'Price',
                    data: priceData[1],
                    fill: 'origin',
                    backgroundColor: '#d18d288f'
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Year'
                        },
                        ticks: {
                           stepSize: 0.5 
                        }
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
                            labelString: 'Price',
                        },
                        ticks: {
                            suggestedMin: whiskeyData.startPrice,
                            suggestedMax: whiskeyData.endPrice,
                            stepSize: 5,
                            callback: function (v, u, vs) { return '$' + v}
                        }
                        
					}]
				}
            }
        });
        // add price chart
        const feeCtx = document.getElementById('fee-chart').getContext('2d');
        new Chart(feeCtx, {
            type: 'line',
            data: {
                labels: feeData[0],
                datasets: [{
                    label: 'Price',
                    data: feeData[1],
                    fill: 'origin'
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Year'
                        },
                        ticks: {
                           stepSize: 0.5 
                        }
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
                            labelString: 'Cost',
                        },
                        ticks: {
                            callback: function (v, u, vs) { return '$' + v}
                        }
                        
					}]
				}
            }
        });

        // radar flavor profile
        const radarLabels = Object.keys(whiskeyData.flavorProfile);
        const radarData = radarLabels.map(v => whiskeyData.flavorProfile[v]);
        const radarCtx = document.getElementById('flavor-chart').getContext('2d');
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: radarLabels,
                datasets: [{
                    data: radarData,
                    fill: 'origin',
                    backgroundColor: '#d18d288f'
                }]
            },
            options: {
                tooltips: {
                    enabled: false,
                },
                legend: {
                    display: false
                },
                // title: {
                //     display: true,
                //     fontColor: '#d18d28',
                //     text: 'Flavor Profile'
                // },
                scale: {
                    ticks: {
                        display: false,
                        min: 0,
                        max: 5
                    },
                    pointLabels: {
                        fontStyle: 'bold'
                    },
                },
                responsive: true,
            }
        });

    });


    return (
        <div className='whiskey-details-wrapper'>
            <div className='sticker-label header-label margin-label'>
                <p>WHISKEY</p>
                <div className='sticker'>
                    <h2>{whiskeyData.name}</h2>
                </div>
            </div>
            <div className='label-group'>
                <UnderLabelTextField 
                    name='Distillery'
                    value={whiskeyData.distillery}
                />
                <UnderLabelTextField 
                    name='Whiskey Type'
                    value={whiskeyData.whiskeyType}
                />
                <UnderLabelTextField 
                    name='Mash Bill'
                    value={whiskeyData.mashBill}
                />
                <UnderLabelTextField 
                    name='Inception Date'
                    value={formatDate(whiskeyData.inceptionDate)}
                />
                <UnderLabelTextField 
                    name='Mature Date'
                    value={formatDate(whiskeyData.matureDate)}
                />
                <UnderLabelTextField 
                    name='Target Age'
                    value={whiskeyData.matureDate.getFullYear() - whiskeyData.inceptionDate.getFullYear() + ' Years'}
                />
                 <UnderLabelTextField 
                    name='Cask Proof'
                    value={whiskeyData.caskProof + '°'}
                />
                <UnderLabelTextField 
                    name='Bottle Proof'
                    value={whiskeyData.bottleProof + '°'}
                />
                <UnderLabelTextField 
                    name='Total Bottles'
                    value={whiskeyData.bottleYield + ' Bottles'}
                />
            </div>
            <div className='header-label margin-label'>
                <h3>BARREL</h3>
            </div>
            <div className='label-group'>
                <UnderLabelTextField 
                    name='Barrel Volume'
                    value={whiskeyData.barrelVolume + ' Liters'}
                />
                <UnderLabelTextField 
                    name='Barrel Wood'
                    value={whiskeyData.barrelWood}
                />
                <UnderLabelTextField 
                    name='Barrel Char'
                    value={whiskeyData.barrelChar}
                />
            </div>
            <div className='header-label margin-label margin-bottom-none'>
                <h3>NOTES</h3>
            </div>
            <div className='notes'>
                <p>{whiskeyData.distillersNotes}</p>
                <div className='chart-wrapper flex-chart'>
                    <canvas className='radar' id='flavor-chart' />
                </div>
            </div>
            <div className='header-label margin-label'>
                <h3>PRICING</h3>
            </div>            
            <div className='label-group margin-top'>
                <div className='chart-wrapper'>
                    <h4>Price Projection</h4>
                    <canvas id='price-chart' />
                </div>
                <div className='chart-wrapper'>
                    <h4>Remaining Fees</h4>
                    <canvas id='fee-chart' />
                </div>
            </div>
            <div className='label-group'>
                <UnderLabelTextField 
                    name='Current Price Per Bottle'
                    value={`$${whiskeyData.startPrice.toFixed(2)}`}
                />
                <UnderLabelTextField 
                    name='Lifetime Fees Per Bottle'
                    value={`$${whiskeyData.feesPerBottle.toFixed(2)}`}
                />
            </div>
            <div className='header-label margin-label'>
                <h3>Purchase</h3>
            </div>
            <div className='label-group'>
                <Button>
                    Purchase
                </Button>
            </div>

        </div>
    );
}

function UnderLabelTextField(props) {
    
    return (
        <div className='under-label-wrapper'>
            <p className='label-value'>{props.value}</p>
            <div className='line'></div>
            <p className='under-label'>{props.name}</p>
        </div>
    )
}



export default WhiskeyListing;