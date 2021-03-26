const BedroomCount = (props) => {

    let { className, func, value } = props.children;

    return (
        <select data-testid="bedroom" name="type" id="bedrooms" className={ className } defaultValue="0" onChange={ func } required>
            {value
                ? <option value={ value }>{ value }</option>
                : <option value="0">Select...</option> }
            <option className="inputsEL" value="Studio" required>Studio</option>
            <option className="inputsEL" value="1 bedroom" required>1 bedroom</option>
            <option className="inputsEL" value="2 bedroom" required>2 bedroom</option>
            <option className="inputsEL" value="3 bedroom" required>3 bedroom</option>
            <option className="inputsEL" value="4 bedroom" required>4 bedroom</option>
        </select>
    )
}
export default BedroomCount;