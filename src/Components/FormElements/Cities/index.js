const AllCities = (props) => {

    let { className, func, value } = props.children;

    return (
        <select data-testid="city" name="city" id="city" defaultValue="0" className={ className } onChange={ func } required>
            {value ? <option value={ value }>{ value }</option> : <option value="0">Select...</option> }
            <option id="city" value="London">London</option>
            <option id="city" value="Greater Manchester">Greater Manchester</option>
            <option id="city" value="Merseyside">Merseyside</option>
            <option id="city" value="Kent">Kent</option>
            <option id="city" value="Avon">Avon</option>
            <option id="city" value="Bedfordshire">Bedfordshire</option>
            <option id="city" value="Berkshire">Berkshire</option>
            <option id="city" value="Bristol">Bristol</option>
            <option id="city" value="Buckinghamshire">Buckinghamshire</option>
            <option id="city" value="Cambridgeshire">Cambridgeshire</option>
            <option id="city" value="Cheshire">Cheshire</option>
            <option id="city" value="Cleveland">Cleveland</option>
            <option id="city" value="Cornwall">Cornwall</option>
            <option id="city" value="Cumbria">Cumbria</option>
            <option id="city" value="Derbyshire">Derbyshire</option>
            <option id="city" value="Devon">Devon</option>
            <option id="city" value="Dorset">Dorset</option>
            <option id="city" value="Durham">Durham</option>
            <option id="city" value="East Riding of Yorkshire">East Riding of Yorkshire</option>
            <option id="city" value="East Sussex">East Sussex</option>
            <option id="city" value="Essex">Essex</option>
            <option id="city" value="Gloucestershire">Gloucestershire</option>
            <option id="city" value="Hampshire">Hampshire</option>
            <option id="city" value="Herefordshire">Herefordshire</option>
            <option id="city" value="Hertfordshire">Hertfordshire</option>
            <option id="city" value="Humberside">Humberside</option>
            <option id="city" value="Isle of Wight">Isle of Wight</option>
            <option id="city" value="Isles of Scilly">Isles of Scilly</option>
            <option id="city" value="Lancashire">Lancashire</option>
            <option id="city" value="Leicestershire">Leicestershire</option>
            <option id="city" value="Lincolnshire">Lincolnshire</option>
            <option id="city" value="Middlesex">Middlesex</option>
            <option id="city" value="Norfolk">Norfolk</option>
            <option id="city" value="North Yorkshire">North Yorkshire</option>
            <option id="city" value="Northamptonshire">Northamptonshire</option>
            <option id="city" value="Northumberland">Northumberland</option>
            <option id="city" value="Nottinghamshire">Nottinghamshire</option>
            <option id="city" value="Oxfordshire">Oxfordshire</option>
            <option id="city" value="Rutland">Rutland</option>
            <option id="city" value="Shropshire">Shropshire</option>
            <option id="city" value="Somerset">Somerset</option>
            <option id="city" value="South Yorkshire">South Yorkshire</option>
            <option id="city" value="Staffordshire">Staffordshire</option>
            <option id="city" value="Suffolk">Suffolk</option>
            <option id="city" value="Surrey">Surrey</option>
            <option id="city" value="Tyne and Wear">Tyne and Wear</option>
            <option id="city" value="Warwickshire">Warwickshire</option>
            <option id="city" value="West Midlands">West Midlands</option>
            <option id="city" value="West Sussex">West Sussex</option>
            <option id="city" value="West Yorkshire">West Yorkshire</option>
            <option id="city" value="Wiltshire">Wiltshire</option>
            <option id="city" value="Worcestershire">Worcestershire</option>
            <option id="city" value="">&nbsp</option>
            <option id="city" value="--UK Offshore--">--UK Offshore--</option>
            <option id="city" value="Channel Islands">Channel Islands</option>
            <option id="city" value="Isle of Man">Isle of Man</option>
            <option id="city" value="">&nbsp</option>
            <option id="city" value="--Northern Ireland--">--Northern Ireland--</option>
            <option id="city" value="Antrim">Antrim</option>
            <option id="city" value="Armagh">Armagh</option>
            <option id="city" value="Down">Down</option>
            <option id="city" value="Fermanagh">Fermanagh</option>
            <option id="city" value="Londonderry">Londonderry</option>
            <option id="city" value="Tyrone">Tyrone</option>
            <option id="city" value="">&nbsp</option>
            <option id="city" value="--Scotland--">--Scotland--</option>
            <option id="city" value="Aberdeen City">Aberdeen City</option>
            <option id="city" value="Aberdeenshire">Aberdeenshire</option>
            <option id="city" value="Angus">Angus</option>
            <option id="city" value="Argyll and Bute">Argyll and Bute</option>
            <option id="city" value="Borders">Borders</option>
            <option id="city" value="Clackmannan">Clackmannan</option>
            <option id="city" value="Dumfries and Galloway">Dumfries and Galloway</option>
            <option id="city" value="Dundee (City of)">Dundee (City of)</option>
            <option id="city" value="East Ayrshire">East Ayrshire</option>
            <option id="city" value="East Dunbartonshire">East Dunbartonshire</option>
            <option id="city" value="East Lothian">East Lothian</option>
            <option id="city" value="East Renfrewshire">East Renfrewshire</option>
            <option id="city" value="Edinburgh (City of)">Edinburgh (City of)</option>
            <option id="city" value="Falkirk">Falkirk</option>
            <option id="city" value="Fife">Fife</option>
            <option id="city" value="Glasgow (City of)">Glasgow (City of)</option>
            <option id="city" value="Highland">Highland</option>
            <option id="city" value="Inverclyde">Inverclyde</option>
            <option id="city" value="Midlothian">Midlothian</option>
            <option id="city" value="Moray">Moray</option>
            <option id="city" value="North Ayrshire">North Ayrshire</option>
            <option id="city" value="North Lanarkshire">North Lanarkshire</option>
            <option id="city" value="Orkney">Orkney</option>
            <option id="city" value="Perthshire and Kinross">Perthshire and Kinross</option>
            <option id="city" value="Renfrewshire">Renfrewshire</option>
            <option id="city" value="Shetland">Shetland</option>
            <option id="city" value="South Ayrshire">South Ayrshire</option>
            <option id="city" value="South Lanarkshire">South Lanarkshire</option>
            <option id="city" value="Stirling">Stirling</option>
            <option id="city" value="West Dunbartonshire">West Dunbartonshire</option>
            <option id="city" value="West Lothian">West Lothian</option>
            <option id="city" value="Western Isles">Western Isles</option>
            <option id="city" value="--Wales--">--Wales--</option>
            <option id="city" value="Blaenau Gwent">Blaenau Gwent</option>
            <option id="city" value="Bridgend">Bridgend</option>
            <option id="city" value="Caerphilly">Caerphilly</option>
            <option id="city" value="Cardiff">Cardiff</option>
            <option id="city" value="Carmarthenshire">Carmarthenshire</option>
            <option id="city" value="Ceredigion">Ceredigion</option>
            <option id="city" value="Conwy">Conwy</option>
            <option id="city" value="Denbighshire">Denbighshire</option>
            <option id="city" value="Flintshire">Flintshire</option>
            <option id="city" value="Gwynedd">Gwynedd</option>
            <option id="city" value="Isle of Anglesey">Isle of Anglesey</option>
            <option id="city" value="Merthyr Tydfil">Merthyr Tydfil</option>
            <option id="city" value="Monmouthshire">Monmouthshire</option>
            <option id="city" value="Neath Port Talbot">Neath Port Talbot</option>
            <option id="city" value="Newport">Newport</option>
            <option id="city" value="Pembrokeshire">Pembrokeshire</option>
            <option id="city" value="Powys">Powys</option>
            <option id="city" value="Rhondda Cynon Taff">Rhondda Cynon Taff</option>
            <option id="city" value="Swansea">Swansea</option>
            <option id="city" value="Torfaen">Torfaen</option>
            <option id="city" value="The Vale of Glamorgan">The Vale of Glamorgan</option>
            <option id="city" value="Wrexham">Wrexham</option>
        </select>
    )
}

export default AllCities