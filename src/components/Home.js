

import './../styles/Home.css';



function Home() {


    return (
    <div className='container'>
        <div className='header-label margin-label'>
            <h3 className='header-title'>What is the Whiskey Guild?</h3>
        </div> 
        <div className='label-group'>
            <p className='description'>Whiskey Guild is a novel way for small- to mid-sized distilleries to expand potential market, gauge demand, and build new relationships with customers. Novel way for consumers to use a decentralized financial platform to support distilleries and invest in tangible whiskey they love.</p>
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
            <div className='how-it-works-detail detail-sm'></div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-sm'></div>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/barrelHouse.jpg' alt='distillery' />
            </div>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>2. </p><p>The distillery determines the initial per bottle price, lifetime maintenance fees, and estimated matured value. It then lists this information on WhiskeyGuild and offers up to 70% of the barrel to investors.</p>
            </div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>3. </p><p>Investors purchase shares of the barrel on a per-bottle basis using Ethereum (ETH) or another compatible cryptocurrency. In addition to the cost of the bottles, investors pay a percentage of the lifetime maintenance fee equal to the percentage of the barrel they own.</p>
            </div>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/barrelTruck.jpg' alt='distillery' />
            </div>
            <div className='how-it-works-detail detail-sm'></div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-sm'></div>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/limousiin.jpg' alt='distillery' />
            </div>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>4. </p><p>Investors can track the present value of their bottles on our website and receive annual updates on the barrel from the distillery. Investments appreciate following the function:</p>
            </div>
        </div>
        <div className='flex how-it-works-wrapper'>
            <div className='how-it-works-detail detail-md'>
                <img src='/images/rye55.jpg' alt='distillery' />
            </div>
            <div className='how-it-works-detail detail-lg'>
                <p className='number'>5. </p><p>Investors have up to four options to liquidate their investment: They can sell the bottles back to the distillery for the initial price, redeem each token for a bottle of the matured whiskey, sell the tokens on a secondary market such as opensea.io, or participate in an optional sellback program that the distillery can elect to offer.</p>
            </div>
            <div className='how-it-works-detail detail-sm'></div>
        </div>


        <div className='header-label margin-label'>
            <h3 className='header-title'>Latest Barrels</h3>
        </div> 

        <div className='header-label margin-label'>
            <h3 className='header-title'>Why Whiskey Guild?</h3>
        </div>
    </div>
    )


}




export default Home;
