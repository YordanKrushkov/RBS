import { open, close, openX } from '../../Utils/eventHandlers'
import {Image, Transformation} from 'cloudinary-react'
import './index.scss'


const Aside = ({ properties, mine }) => {
    console.log('properties', properties);
    const rent = properties.sellOrRent === 'RENT';
    let img;
    if(properties.ownerId){
         img=properties.ownerId.profilephoto;
    }
    console.log(img);
    return (<aside id="detailAsside">
        <header>
            <section>
            <div>
                <Image publicId={img?img:null} cloudName="zltgrd">
                <Transformation width="40" height="40" />
                </Image>
            </div>
            <div>
            <h5>{ properties.ownerId ? (`${properties.ownerId.name} ${properties.ownerId.surname}`) : null }</h5>
            <h6>{ properties.ownerId ? properties.ownerId.email: null }</h6>
            </div>
            </section>
            <h2> £ { properties.price } { rent && 'p.m' }</h2>
            <h3>{ `${properties.bedrooms} ${properties.type}` }</h3>
            <h5>{ `${properties.street} ${properties.city}` }</h5>
        </header>
        <div>
            { !mine
                ? <button onClick={ () => open('messageContainer', 'flex') }>Contact</button>
                : (<div className="buttonsWrapper">
                    <button onClick={ () => { open('editDetailsContainer', 'block'); open('newImageWrapper', 'block'); openX(); close('detailsContainer') } } id="editPropButton">Edit</button>
                    <button onClick={ () => open('confirm', 'flex') } id="deleteButton">Delete</button>
                </div>) }
        </div>
    </aside>);
}

export default Aside;