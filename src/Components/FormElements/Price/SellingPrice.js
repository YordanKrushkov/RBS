const SellingPrice = (props) => {

    let { id, className, func } = props.children;

    return (
        <select data-testid="sellingPrice" name="price" id={ id } defaultValue="0" className={ className } onChange={ func }>
            <option value="0">Select...</option>
            <option value="10000">10 000</option>
            <option value="20000">20 000</option>
            <option value="30000">30 000</option>
            <option value="40000">40 000</option>
            <option value="50000">50 000</option>
            <option value="60000">60 000</option>
            <option value="70000">70 000</option>
            <option value="80000">80 000</option>
            <option value="90000">90 000</option>
            <option value="100000">100 000</option>
            <option value="110000">110 000</option>
            <option value="120000">120 000</option>
            <option value="130000">130 000</option>
            <option value="140000">140 000</option>
            <option value="150000">150 000</option>
            <option value="160000">160 000</option>
            <option value="200000">200 000</option>
            <option value="210000">210 000</option>
            <option value="220000">220 000</option>
            <option value="230000">230 000</option>
            <option value="240000">240 000</option>
            <option value="250000">250 000</option>
            <option value="260000">260 000</option>
            <option value="270000">270 000</option>
            <option value="280000">280 000</option>
            <option value="290000">290 000</option>
            <option value="350000">350 000</option>
            <option value="400000">400 000</option>
            <option value="450000">450 000</option>
            <option value="500000">500 000</option>
            <option value="550000">550 000</option>
            <option value="100000000">550 00+</option>
        </select>
    )
}
export default SellingPrice