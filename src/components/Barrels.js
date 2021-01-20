import WhiskeyListing from './WhiskeyListing';
import whiskeyData from '../data/whiskeyData';
import Card from 'react-bootstrap/Card';
import { 
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';
import '../styles/Barrels.css';

function Barrels() {
    
    let match = useRouteMatch();

    const inventory = whiskeyData.map(wData => {
        return (
            <BarrelCard 
                key={wData.tokenId} 
                match={match}
                whiskey={wData} />
        );
    });

    return (
        <div id='barrel-bg'>
            <div className='container'>

                <Switch>
                    <Route path={`${match.path}/:barrelId`}>
                        <BarrelDetails whiskeyData={whiskeyData} />
                    </Route>
                    <Route path={match.path}>
                    <div className='flex flex-center flex-wrap'>
                        {inventory}
                    </div>
                    </Route>
                </Switch>
            </div>
        </div>
    )
    
    // return (
    //     <>
    //         <h2>Barrels</h2>
    //     </>
    // )
}

function BarrelDetails(props) {
    let {barrelId} = useParams();
    
    return (
        <>
            <WhiskeyListing whiskeyData={props.whiskeyData[parseInt(barrelId)]} />
        </>
    )
}

function BarrelCard(props) {
    const wData = props.whiskey;
    function handleBarrelClick(barrelId){
        console.log(barrelId);
    }

    return (
        <Link
            className='barrel-card' 
            to={`${props.match.url}/${wData.tokenId}`}>
            <Card 
                onClick={() => handleBarrelClick(wData.tokenId)}
                style={{transform: `rotate(${Math.random() * 20 - 10}deg)`}}>
                <Card.Body className='flex flex-center'>
                    <Card.Title>{wData.name}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>{wData.distillery}</Card.Subtitle>

                </Card.Body>
            </Card>
        </Link>
    )

}


export default Barrels;