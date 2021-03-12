import React from 'react'


const priceList= {


    SellingPrice(props) {
        let {id,className,func}=props.children
        return (
            <select name="price" id={ id } defaultValue="0" className={ className } onChange={func}>
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
    },
    RentingPrice(props) {
        let {id,className,func}=props.children
        return (
            <select name="price" id={ id } defaultValue="0" className={ className } onChange={func}>
                <option  value="0">Select...</option>
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

}

export default priceList