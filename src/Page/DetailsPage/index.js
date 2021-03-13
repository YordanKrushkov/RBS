import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import getProperties from '../../services/getData';
import DetailsContainer from '../../Components/detailsComponent'
const SingleCard = () => {
    const [properties, takeProperties] = useState([]);
    const history = useHistory()

    useEffect(() => {
        const id = history.location.pathname
        getProperties.getSingleProp(takeProperties, id)
    }, [])

    const style = styles.li

    const handleClick = (e) => {
        const details = document.getElementById('details');
        const floorplan = document.getElementById('floorplan');
        const map = document.getElementById('map');
        if (e.target === details) {
            details.classList.add(styles.new)
            details.classList.remove(styles.li)
            document.getElementById('detailsField').style.display = 'block'

        } else {
            details.classList.add(styles.li)
            details.classList.remove(styles.new)
            document.getElementById('detailsField').style.display = 'none'
        }

        if (e.target === map) {
            map.classList.add(styles.new)
            map.classList.remove(styles.li)
            document.getElementById('mapField').style.display = 'block'
        } else {
            map.classList.add(styles.li)
            map.classList.remove(styles.new)
            document.getElementById('mapField').style.display = 'none'

        }

        if (e.target === floorplan) {
            floorplan.classList.add(styles.new)
            floorplan.classList.remove(styles.li)
            document.getElementById('floorplanField').style.display = 'block'
        } else {
            floorplan.classList.add(styles.li)
            floorplan.classList.remove(styles.new)
            document.getElementById('floorplanField').style.display = 'none'

        }

    }

    return (
        <div className={ styles.conteiner }>
            <div className={ styles.propertieInfo }>
                <img className={ styles.images } src={ properties.img } alt="img" />
                <div className={ styles.info }>
                    <header className={ styles.header }>
                        <ul className={ styles.ul } onClick={ handleClick }>
                            <li id='details' className={ styles.new } >Property Details</li>
                            <li id='floorplan' className={ style } >Floorplan</li>
                            <li id='map' className={ style } >Map</li>
                        </ul>
                    </header>
                    { DetailsContainer(properties) }
                </div>
            </div>
            <aside className={ styles.lender }>
                <header className={ styles.asideHeader }>
                    <h2 className={ styles.title }>{ `${properties.bedrooms} ${properties.type}` }</h2>
                    <h5 className={ styles.address }>{ `${properties.street} ${properties.city}` }</h5>
                    <h5 className={ styles.address }>{ properties.ownerId ? (`${properties.ownerId.name} ${properties.ownerId.surname}`) : null }</h5>
                    <h2 className={ styles.price }> £ { properties.price } p.m</h2>
                </header>
                <div className={ styles.propertieCardInfo }>
                    <button className={ styles.button }>Contact</button>
                </div>
            </aside>
        </div>
    )
}
export default SingleCard