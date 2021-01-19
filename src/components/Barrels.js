import WhiskeyDetailPage from './WhiskeyListing';
import whiskeyData from '../data/whiskeyData';


function Barrels() {
    return (
        <>
            <h2>Barrels</h2>
            <WhiskeyDetailPage whiskeyData={whiskeyData[0]} />
        </>
    )
}


export default Barrels;