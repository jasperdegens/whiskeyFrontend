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

    const whiskeyTypes = Object.keys(whiskeyData);


    const inventory = whiskeyTypes.map(wKey => {
        const wData = whiskeyData[wKey];

        return (
            <div className='whiskey-type-wrapper' key={wKey} id={wKey}>
            <div className='header-label margin-label'>
              <h3 className='header-title'>{wKey.toUpperCase()}</h3>
            </div>
            {wData.map(w => {
                return (
                    <BarrelCard 
                    key={w.tokenId} 
                    match={match}
                    whiskey={w} />
                )})
            }
           
            </div>
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
                        <WhiskeyTypeNav whiskeyTypes={whiskeyTypes} />
                        {inventory}
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

function WhiskeyTypeNav(props) {
    return (
        <div id='whiskey-type-nav'>
            <ul>
            {props.whiskeyTypes.map((t, index) => {
                return (
                    <li key={t}><a href={`#${t}`}>{t}</a>
                    { index < props.whiskeyTypes.length - 1 ?
                        (<span> &#8226; </span>)  : (<> </>) }
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

function BarrelDetails(props) {
    console.log(props.whiskeyData);
    let {barrelId} = useParams();
    const wDataFlattened = Object.keys(props.whiskeyData).reduce((acc, key) => {
        acc.push(props.whiskeyData[key]);
        return acc;
    }, []).flat();
    const whiskey = wDataFlattened.find(w => w.tokenId === parseInt(barrelId));

    return (
        <>
            <div className='back-wrapper'>
                <p><Link to='/barrels'>&larr; Barrels</Link> {'> ' + whiskey.name}</p>
            </div>
            <WhiskeyListing whiskeyData={whiskey} />
        </>
    )
}

function BarrelCard(props) {
    const wData = props.whiskey;

    return (
        <div className='barrel-card'>
            <Link
                to={`${props.match.url}/${wData.tokenId}`}>
                <div className='barrel-listing flex'>
                    <div className='barrel-img-wrapper'>
                        <img alt={wData.name} src={wData.img} />
                    </div>
                    <div className='barrel-details'>
                        <div className='barrel-title'>
                            <h4>{wData.name}</h4>
                            <h5>{wData.distillery}</h5>
                        </div>
                        <div className='barrel-description'>
                            <p>{wData.distillersNotes}</p>
                        </div>
                        <div className='price'>
                            <Button>Details</Button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )

}


export default Barrels;