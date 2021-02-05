import Spinner from 'react-bootstrap/Spinner';
import '../styles/UnderLabelTextField.css';

function UnderLabelTextField(props) {
    
    return (
        <div className='under-label-wrapper'>
            <div 
                className={'label-value'}
            >
                {props.isLoading ? 
                (<Spinner animation="grow" size="sm"></Spinner>) : 
                <p className={props.positive ? 'positive' : ''}>{props.value}</p>
            }
            </div>
            <div className='line'></div>
            <p className='under-label'>{props.name}</p>
        </div>
    )
}


export default UnderLabelTextField;