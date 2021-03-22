import TypeSelect from '../Properties/Type';
import BedroomCount from '../Properties/Bedrooms'
import BathroomCount from '../Properties/Bathrooms'


const OptionsSection = ({onChangeHandler}) => {
    return ( 
        <section>
        <div className="submitInputWrapper secondRow">
            <h2>Property Type *</h2>
            <TypeSelect>{ { className: "optionMenu", func: onChangeHandler } }</TypeSelect>
        </div>
        <div className="submitInputWrapper secondRow">
            <h2>Bedrooms *</h2>
            <BedroomCount>{ { className: "optionMenu", func: onChangeHandler } }</BedroomCount>
        </div>
        <div className="submitInputWrapper secondRow">
            <h2>Bathrooms *</h2>
            <BathroomCount>{ { className: "optionMenu", func: onChangeHandler } }</BathroomCount>
        </div>
        <div className="submitInputWrapper secondRow">
            <h2>Price *</h2>
            <input className="optionMenu" type="text" id="price" onChange={ onChangeHandler } />
        </div>
    </section>
     );
}
 
export default OptionsSection;