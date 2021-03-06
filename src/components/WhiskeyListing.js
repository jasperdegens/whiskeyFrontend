import '../styles/WhiskeyDetails.css';
import Chart from 'chart.js';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import UnderLabelTextField from './UnderLabelTextField';
import OrderModal from './OrderModal';
import Form from 'react-bootstrap/Form';
import { useBarrelQuery } from '../hooks/useContractRequest';

// WhiskeyDetails props = whiskey schema 
function WhiskeyListing(props) {
    
    const whiskeyData = props.whiskeyData;
    const [totalBottles, bottlePrice, ownedBottles, availableBottles, agingData] = useBarrelQuery(whiskeyData.tokenId);
    const [bottlesToPurchase, setBottlesToPurchase] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    
    function formatDate(date){
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    function createLinearData(xRange, yRange, incriment){
        let currX = xRange[0].getTime();
        const xSpread = xRange[1].getTime() - xRange[0].getTime();
        const ySpread = yRange[1] - yRange[0];
        const finalData = [[], []];
        while(currX <= xRange[1].getTime()){
            finalData[0].push(new Date(currX));
            const normalizedVal = (currX - xRange[0].getTime()) / xSpread;
            const yVal = +((yRange[0] + ySpread * normalizedVal).toFixed(2));
            finalData[1].push(yVal);
            currX += incriment;
        }
        return finalData;
    }

    function changePurchaseAmount(newAmount) {
        const maxBottles = !!availableBottles ? availableBottles : 0;
        const newVal = Math.floor(Math.max(0, Math.min(newAmount, maxBottles)));
        setBottlesToPurchase(newVal);
    }


    // const priceData = [
    //     { year: whiskeyData.inceptionDate.getFullYear(), price: whiskeyData.startPrice },
    //     { year: whiskeyData.matureDate.getFullYear(), price: whiskeyData.endPrice }
    // ];
    
    // add in charts after mount
    useEffect(() => {
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
    }, []);

    useEffect(() => {
        if(!bottlePrice || !agingData)
            return;
        const [currPrice, startPrice, endPrice, fees] = bottlePrice.map(p=> (p / 100.0));

        const startDate = new Date(Number(agingData[0].toString()) * 1000);
        const endDate = new Date(Number(agingData[1].toString()) * 1000);
        console.log(startDate, endDate);

        const priceData = createLinearData(
            [startDate, endDate],
            [startPrice, endPrice],
            31536000000 / 2
        );
    
        const feeData = createLinearData(
            [startDate, endDate],
            [fees, 0],
            31536000000 / 2
        );
        const now = new Date();
        const currData = [{x: now, y: +(currPrice.toFixed(2))}];
        console.log(feeData);
        console.log(currData);
        // add price chart
        const priceCtx = document.getElementById('price-chart').getContext('2d');
        const chart = new Chart(priceCtx, {
            type: 'line',
            data: {
                labels: priceData[0],
                datasets: [{
                    label: 'Price',
                    data: priceData[1],
                    fill: 'origin',
                    backgroundColor: '#d18d288f'
                }, {
                    type: 'scatter',
                    label: 'Current Price',
                    data: currData,
                    fill: 'none',
                    pointRadius: 20,
                    pointHoverRadius: 20,
                    pointBackgroundColor: '#074859cc'
                    
                }]
            },
            options: {
                legend: {
                    display: false
                },
                responsive: true,
				scales: {
					xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'year'
                        },
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Year'
                        },
                        ticks: {
                            min: startDate, 
                            max: endDate,
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
                            suggestedMin: startPrice,
                            suggestedMax: endPrice,
                            stepSize: 5,
                            callback: function (v, u, vs) { return '$' + v}
                        }
                        
					}]
				}
            }
        });

        return () => { chart.destroy(); }
    }, [bottlePrice, whiskeyData, agingData]);


    return (
        <>
        <OrderModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            tokenId={whiskeyData.tokenId}
            numBottles={bottlesToPurchase}
            name={whiskeyData.name}
            bottlePrice={!bottlePrice ? 0 : bottlePrice[0] + bottlePrice[3]}
            totalPriceUsd={!bottlePrice ? 0 : ((bottlesToPurchase * (bottlePrice[0] + bottlePrice[3])) / 100).toFixed(2)}
        />
        <div className='whiskey-details-wrapper'>
            
            <div className='sticker-label header-label margin-label'>
                <h3 className='header-title'>WHISKEY</h3>
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
                    isLoading={!totalBottles}
                    value={totalBottles  + ' Bottles'}
                />
            </div>
            <div className='header-label margin-label'>
                <h3 className='header-title'>BARREL</h3>
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
                <h3 className='header-title'>NOTES</h3>
            </div>
            <div className='notes'>
                <p>{whiskeyData.distillersNotes}</p>
                <div className='chart-wrapper flex-chart'>
                    <canvas className='radar' id='flavor-chart' />
                </div>
            </div>
            <div className='header-label margin-label'>
                <h3 className='header-title'>PRICING</h3>
            </div>            
            <div className='label-group margin-top'>
                <div className='chart-wrapper chart-wrapper-full'>
                    <h4>Price Projection</h4>
                    <canvas id='price-chart' />
                </div>
            </div>
            <div className='label-group'>
                <UnderLabelTextField 
                    name='Current Price Per Bottle'
                    isLoading={!bottlePrice}
                    value={!!bottlePrice ?  `$${(bottlePrice[0] / 100).toFixed(2)}` : ""}
                />
                <UnderLabelTextField 
                    name='Base Price Per Bottle'
                    isLoading={!bottlePrice}
                    value={!!bottlePrice ?  `$${(bottlePrice[1] / 100).toFixed(2)}` : ""}
                />
                <UnderLabelTextField 
                    name='Matured Price Per Bottle'
                    isLoading={!bottlePrice}
                    value={!!bottlePrice ?  `$${(bottlePrice[2] / 100).toFixed(2)}` : ""}
                />
                <UnderLabelTextField 
                    name='Lifetime Fees Per Bottle'
                    isLoading={!bottlePrice}
                    value={!!bottlePrice ?  `$${(bottlePrice[3] / 100).toFixed(2)}` : ""}
                />
            </div>
            <div className='header-label margin-label'>
                <h3 className='header-title'>Purchase</h3>
            </div>
            <div className='label-group'>
                <UnderLabelTextField 
                    name='Owned Bottles'
                    isLoading={!ownedBottles}
                    value={ownedBottles  + ' Bottles'}
                />
                <UnderLabelTextField 
                    name='Available Bottles'
                    isLoading={!availableBottles}
                    value={availableBottles  + ' Bottles'}
                />
            </div>
            <div className='label-group flex-start'>
                <div className='flex'>
                    <div className='under-label-wrapper margin-none'>
                        <Form.Control 
                            type='number' 
                            value={bottlesToPurchase}
                            onChange={(e) => changePurchaseAmount(e.target.value)}
                        />
                        <div className='line'></div>
                        <p className='under-label'>Purchase Quantity</p>
                    </div>
                    <div className='under-label-wrapper'>
                        <Button 
                            variant='outline-danger'
                            className='purchase-change'
                            onClick={() => changePurchaseAmount(bottlesToPurchase - 1)}
                        >-</Button>
                        <Button 
                            variant='outline-success'
                            className='purchase-change'
                            onClick={() => changePurchaseAmount(bottlesToPurchase + 1)}
                        >+</Button>
                    </div>
                </div>
                <UnderLabelTextField 
                    name='Total Price (bottle + fees)'
                    value={!bottlePrice ? 0 :
                        `($${(bottlePrice[0] / 100).toFixed(2)} + $${(bottlePrice[3] / 100).toFixed(2)}) * ${bottlesToPurchase} = $${((bottlesToPurchase * (bottlePrice[0] + bottlePrice[3])) / 100).toFixed(2)}`}
                />
                <div className='under-label-wrapper'>
                    <Button 
                        size='lg' 
                        variant='info'
                        onClick={() => setModalShow(true)}
                    >
                        Purchase
                    </Button>
                </div>
            </div>

        </div>
        </>
    );
}


function UnderLabelInput(props) {
    return (
        <div className='under-label-wrapper'>
            <Form.Control type='number' />
            <div className='line'></div>
            <p className='under-label'>{props.name}</p>
        </div>
    )
}


export default WhiskeyListing;