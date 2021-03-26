import './index.scss';
import { detailHendler } from '../../../Utils/eventHandlers';

const props = ["Furnished", "Balcony", "Easy transport", "Garden", "Swiming pool", "Parking", "Garage", "Pets welcome", "Smoking allow"];

const CheckboxContainer = ({ initialState, setArr, arr, className }) => {

    return (
        <section data-testid="checbox" className={ className }>
            {props.map(x => (
                <div className="checkbox" key={ x }>
                    <h2>{ x }</h2>
                    <input type="checkbox" defaultChecked={ initialState && initialState.includes(x) } name={ x } id={ x } onChange={ (e) => { detailHendler(e, setArr, arr) } } />
                </div>)
            ) }
        </section>
    );
}

export default CheckboxContainer;