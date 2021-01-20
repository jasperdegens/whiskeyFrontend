import WhiskeyListing from './WhiskeyListing';
import whiskeyData from '../data/whiskeyData';
import Button from 'react-bootstrap/Button';
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
                        {inventory}
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
        <div className='barrel-card'>
            <Link
                to={`${props.match.url}/${wData.tokenId}`}>
                <div className='barrel-listing flex'>
                    <div className='barrel-img-wrapper'>
                        <img alt={wData.name} src='/images/rye55.jpg' />
                    </div>
                    <div className='barrel-details'>
                        <div className='barrel-title'>
                            <h4>{wData.name}</h4>
                            <h5 className='mb-2 text-muted'>{wData.distillery}</h5>
                        </div>
                        <div className='barrel-description'>
                            <p>{wData.distillersNotes}</p>
                        </div>
                        <div className='price'>
                            <Button>Information</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )

}


export default Barrels;