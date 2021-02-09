

function About() {
    return (
        <div className='container'>
            <div className='header-label margin-label'>
                <h3 className='header-title'>Who We Are</h3>
            </div>
            <div className='barrel-card'>
                <div className='barrel-listing flex'>
                    <div 
                        className='barrel-img-wrapper'
                        style={{background: `url('/images/Tillman.jpg')`}}    
                    >
                    </div>
                    <div className='barrel-details'>
                        <div className='barrel-title'>
                            <h4>Tillman Degens</h4>
                        </div>
                        <div className='barrel-description'>
                            <p>Tillman is interested in examining changing landscapes in the world and the opportunities they provide. He has a passion for finance, with a focus on the technology sector. He is currently enrolled in the Master’s Program in Economics at the University of Oregon and works as a market representative for Stone Barn Brandy Works. In his free time, he enjoys live music, long road trips, and skiing.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='barrel-card'>
                <div className='barrel-listing flex'>
                    <div className='barrel-details'>
                        <div className='barrel-title'>
                            <h4>Jasper Degens</h4>
                        </div>
                        <div className='barrel-description'>
                            <p>Jasper finds interesting ideas and lets them lead him around the world. He has a technical and creative background, and has worked as part of a large scale interactive art collective, for a digital education, and as an enterprise financial project consultant.</p>
                        </div>
                    </div>
                    <div 
                        className='barrel-img-wrapper'
                        style={{background: `url('/images/rye50.jpg')`}}    
                    >
                    </div>
                </div>
            </div>
            <div className='label-group'>

            </div>
            <div className='header-label margin-label'>
                <h3 className='header-title'>Why Whiskey MarketMaker</h3>
            </div>
            <div className='label-group'>
                <p className='description'>Founded by Tillman and Jasper Degens, Whiskey MarketMaker was created with the craft distillery and retail investor in mind. Growing up with a small family-owned distillery in Portland, Oregon, Tillman and Jasper experienced several issues impacting both the producers and consumers of craft whiskey first-hand.</p>
                <p>
                On the production side, there is a long delay between the distillation and sale of a bottle of whiskey due to a lengthy aging process, which increases the financial burden placed on smaller businesses. With the number of whiskey distilleries expected to grow by 68% over the next 5 years it is becoming increasingly difficult for craft distilleries to stand out amongst their peers without an established brand. For consumers this has made it harder to discover unique craft whiskies and has caused prices to reflect market capitalization rather than overall quality. In addition, consumers only have access to the final bottled product, which means, the ability to invest in the process is reserved only for those who can purchase an entire barrel.
                </p>
                <p>
                At Whiskey MarketMaker we hope to improve the experience of whiskey enthusiasts and distilleries by connecting those who enjoy drinking small-batch whiskey to the craft distilleries who make it. By offering investors the ability to purchase whiskey at the bottle level during any stage of the process, small distilleries can achieve the needed liquidity to grow their business, while keeping their own label on the whiskey they distilled. For investors this is a unique opportunity to play a role in the production of whiskey, from start to finish, as well as invest in a historically safe commodity, that traditionally has been restricted to large whiskey funds.
                </p>
                <p>Ultimately, Whiskey MarketMaker is operated by those who love whiskey - from grain to glass, barrel to bottle - for those who feel the same. Our mission is to streamline the process of connecting craft distilleries with those looking for new tastes, and at the same time unlock a unique investment opportunity available at the bottle level.</p>
            </div>
        </div>  
    )
}


export default About;
