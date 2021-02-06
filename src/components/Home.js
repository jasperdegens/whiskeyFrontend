

import './../styles/Home.css';



function Home() {


    return (
    <div className='container'>
        <div className='header-label margin-label'>
            <h3 className='header-title'>What is Whiskey MarketMaker?</h3>
        </div> 
        <div className='label-group'>
            <p className='description'>At Whiskey MarketMaker, we connect whiskey enthusiasts and individuals investors with craft distilleries producing small batch, single-barrel releases. Our mission is to amplify craft distilleries while at the same time providing a unique opportunity for investors to earn historically safe returns and to play a role in the production of whiskey, from grain to glass, barrel to bottle.</p>
        </div>
        
        <div className='header-label margin-label'>
            <h3 className='header-title'>How it Works</h3>
        </div> 
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-tab tab-right flex'>
                <div 
                    className='how-it-works-img'
                    style={{background: `url('/images/barrels.jpg')`}}  
                >
                </div>
                <div className='how-it-works-detail'>
                    <p className='number'>1. </p><p>A craft distillery does their magic and mashes, ferments, distills, and barrels an amazing whiskey.</p>
                </div>
                <div className='flex-spacer'></div>
            </div>
        </div>
        <div class='down-arrow down-arrow-left'><p>&#8682;</p></div>
        <div className='flex how-it-works-wrapper flex-end'>
            <div className='how-it-works-tab tab-left flex'>
                <div className='how-it-works-detail'>
                    <p className='number'>2. </p><p>The distillery determines the initial per bottle price, lifetime maintenance fees, and estimated matured value. It then lists this information on WhiskeyGuild and offers up to 70% of the barrel to investors.</p>
                </div>
                <div 
                    className='how-it-works-img'
                    style={{background: `url('/images/production.jpg')`}}  
                >
                </div>
            </div>
        </div>
        <div class='down-arrow down-arrow-right'><p>&#8682;</p></div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-tab tab-right flex'>
                <div 
                    className='how-it-works-img'
                    style={{background: `url('/images/limousiin.jpg')`}}  
                >
                </div>
                <div className='how-it-works-detail'>
                    <p className='number'>3. </p><p>Investors purchase shares of the barrel on a per-bottle basis using Ethereum (ETH) or another compatible cryptocurrency. In addition to the cost of the bottles, investors pay a percentage of the lifetime maintenance fee equal to the percentage of the barrel they own.</p>
                </div>
            </div>
        </div>
        <div class='down-arrow down-arrow-left'><p>&#8682;</p></div>
        <div className='flex how-it-works-wrapper flex-end'>
            <div className='how-it-works-tab tab-left flex'>
                <div className='how-it-works-detail'>
                    <p className='number'>4. </p><p>Investors can track the present value of their bottles on our website and receive annual updates on the barrel from the distillery. Investments appreciate following the function:</p>
                </div>
                <div 
                    className='how-it-works-img'
                    style={{background: `url('/images/barrelTruck.jpg')`}}  
                >
                </div>
            </div>
        </div>
        <div class='down-arrow down-arrow-right'><p>&#8682;</p></div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-tab tab-right flex'>
                <div
                    className='how-it-works-img'
                    style={{background: `url('/images/rye55.jpg')`}}  
                >
                </div>
                <div className='how-it-works-detail'>
                    <p className='number'>5. </p><p>Investors have up to four options to liquidate their investment: They can sell the bottles back to the distillery for the initial price, redeem each token for a bottle of the matured whiskey, sell the tokens on a secondary market such as opensea.io, or participate in an optional sellback program that the distillery can elect to offer.</p>
                </div>
            </div>
        </div>
    </div>
    )


}




export default Home;
