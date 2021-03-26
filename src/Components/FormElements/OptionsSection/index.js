import TypeSelect from '../Properties/Type';
import BedroomCount from '../Properties/Bedrooms';
import BathroomCount from '../Properties/Bathrooms';

const OptionsSection = ({ onChangeHandler, error }) => {
    return (
        <section>
            <div className="submitInputWrapper secondRow">
                <h2>Property Type *</h2>
                <TypeSelect>{ { className: error.input !== 'type' ? "optionMenu" : "optionMenu errors", func: onChangeHandler } }</TypeSelect>
            </div>
            <div className="submitInputWrapper secondRow">
                <h2>Bedrooms *</h2>
                <BedroomCount>{ { className: error.input !== 'bedrooms' ? "optionMenu" : "optionMenu errors", func: onChangeHandler } }</BedroomCount>
            </div>
            <div className="submitInputWrapper secondRow">
                <h2>Bathrooms *</h2>
                <BathroomCount>{ { className: error.input !== 'bathroom' ? "optionMenu" : "optionMenu errors", func: onChangeHandler } }</BathroomCount>
            </div>
            <div className="submitInputWrapper secondRow">
                <h2>Price *</h2>
                <input className={ error.input !== 'price' ? "optionMenu" : "optionMenu errors" } type="text" id="price" onChange={ onChangeHandler } />
            </div>
        </section>
    );
}

export default OptionsSection;