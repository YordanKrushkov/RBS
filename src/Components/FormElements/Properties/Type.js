const TypeSelect = (props) => {

    let { className, func, value } = props.children;

    return (
        <select data-testid="type" name="type" id="type" defaultValue="0" className={ className } onChange={ func } required>
            {value
                ? <option value={ value }>{ value }</option>
                : <option value="0">Select...</option> }
            <option className="inputsEL" value="Flat" required>Flat</option>
            <option className="inputsEL" value="House" required>House</option>
            <option className="inputsEL" value="Cottage" required>Cottage</option>
            <option className="inputsEL" value="Land" required>Land</option>
        </select>
    )
}
export default TypeSelect


