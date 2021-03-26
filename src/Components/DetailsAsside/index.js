import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActionContext } from '../../Context/actionContext';
import { AuthContext } from '../../Context/';
import { Image, Transformation } from 'cloudinary-react';
import './index.scss';

const Aside = ({ properties, mine, setDelete, setMessage }) => {

    const { editProp, edit } = useContext(ActionContext);
    const { isAuthenticated } = useContext(AuthContext);
    const rent = properties.sellOrRent === 'RENT';
    let img;
    
    if (properties.ownerId) {
        img = properties.ownerId.profilephoto;
    };

    return (<aside id="detailAsside">
        <header>
            <section>
                <div>
                    <Image publicId={ img ? img : null } cloudName="zltgrd">
                        <Transformation width="40" height="40" />
                    </Image>
                </div>
                <div>
                    <h5>{ properties.ownerId ? (`${properties.ownerId.name} ${properties.ownerId.surname}`) : null }</h5>
                    <h6>{ properties.ownerId ? properties.ownerId.email : null }</h6>
                </div>
            </section>
            <h2> £ { properties.price } { rent && 'p.m' }</h2>
            <h3>{ `${properties.bedrooms} ${properties.type}` }</h3>
            <h5>{ `${properties.street} ${properties.city}` }</h5>
        </header>
        <div>
            { isAuthenticated ? !mine
                ? <button onClick={ () => setMessage(true) }>Contact</button>
                : (<div className="buttonsWrapper">
                    <button onClick={ () => { editProp(!edit) } } id="editPropButton">{ !edit ? "Edit" : "Close" }</button>
                    <button onClick={ () => setDelete(true) } id="deleteButton">Delete</button>
                </div>)
                : <Link to='/login'><button type="button">Contact</button></Link>
            }
        </div>
    </aside>);
}

export default Aside;