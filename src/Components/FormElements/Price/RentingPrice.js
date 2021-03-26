const RentingPrice = (props) => {

    let { id, className, func } = props.children;

    return (
        <select data-testid="rentingPrice" name="price" id={ id } defaultValue="0" className={ className } onChange={ func }>
            <option value="0">Select...</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
            <option value="1000">1000</option>
            <option value="1100">1100</option>
            <option value="1200">1200</option>
            <option value="1300">1300</option>
            <option value="1400">1400</option>
            <option value="1500">1500</option>
            <option value="1600">1600</option>
            <option value="2000">2000</option>
            <option value="2100">2100</option>
            <option value="2200">2200</option>
            <option value="2300">2300</option>
            <option value="2400">2400</option>
            <option value="2500">2500</option>
            <option value="2600">2600</option>
            <option value="2700">2700</option>
            <option value="2800">2800</option>
            <option value="2900">2900</option>
            <option value="3000">3000</option>
        </select>
    )
}
export default RentingPrice;
