const BathroomCount = (props) => {

    let { className, func, value } = props.children;

    return (
        <select data-testid="bathroom" name="type" id="bathroom" className={ className } onChange={ func } required>
            {value
                ? <option value={ value }>{ value }</option>
                : <option value="0">Select...</option> }
            <option className="inputsEL" value="1 bathroom" required>1 bathroom</option>
            <option className="inputsEL" value="2 bathroom" required>2 bathroom</option>
            <option className="inputsEL" value="3 bathroom" required>3 bathroom</option>
            <option className="inputsEL" value="4 bathroom" required>4 bathroom</option>
        </select>
    )
}
export default BathroomCount;