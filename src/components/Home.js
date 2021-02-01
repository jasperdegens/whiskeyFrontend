

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
            <div className='how-it-works-detail detail-md'>
                <img src='/images/barrels.jpg' alt='distillery'/>
            </div>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>1. </p><p>A craft distillery does their magic and creates an amazing single barrel whiskey.</p>
            </div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/barrelHouse.jpg' alt='distillery' />
            </div>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>2. </p><p>The distillery determines the initial price, storage fees, and estimated matured value for each bottle. It then lists this information on Whiskey MarketMaker and offers up to 70% of the barrel to investors, keeping 30% to ensure invested interest in final quality.</p>
            </div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>3. </p><p>Investors purchase shares of the barrel on a per-bottle basis using Ethereum (ETH). In addition to the cost of the bottles, investors pay the fee for storage in a bonded warehouse.</p>
            </div>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/barrelTruck.jpg' alt='distillery' />
            </div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/limousiin.jpg' alt='distillery' />
            </div>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>4. </p><p>Investors can track the present value of their bottles via their Dashboard and receive annual updates and whiskey maturation notes from the distillery for invested barrels. The estimated appreciation of each whiskey can be found on its barrel details page.</p>
            </div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/rye55.jpg' alt='distillery' />
            </div>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>5. </p><p>Investors have up to four options to liquidate their investment: They can sell the bottles back to the distillery for the initial price, redeem each token for a bottle of the matured whiskey, sell the tokens on a secondary market such as opensea.io, or participate in an optional sell back program that the distillery can elect to offer.</p>
            </div>
        </div>


        <div className='header-label margin-label'>
            <h3 className='header-title'>Latest Barrels</h3>
        </div> 
    </div>
    )


}




export default Home;