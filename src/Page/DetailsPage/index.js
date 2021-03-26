import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import { deleteProperty, getSingleProp } from '../../Services/propertiesServices';
import { AuthContext } from '../../Context';
import { ActionContext } from '../../Context/actionContext';
import Message from '../../Components/Message';
import Aside from '../../Components/DetailsAsside';
import GoogleMap from '../../Components/GoogleMap';
import Confirm from '../../Components/ConfirmAction';
import EditProperty from '../../Components/EditProperty';
import DetailImages from '../../Components/DetailsImages';
import AddMoreImages from '../../Components/AddMoreImages';
import DetailsContainer from '../../Components/DetailsComponent';
import getLocation from '../../Utils/getLocation';
import { switchMenu, confirm } from '../../Utils/eventHandlers';
import './index.scss';

const SingleCard = () => {
    const [loading, setLoading] = useState(true);
    const [properties, setProperties] = useState('');
    const [menu, setMenu] = useState('Property Details');
    const [update, setUpdate] = useState(false);
    const [deleteProp, setDelete] = useState(false);
    const [message, setMessage] = useState(false);
    const [location, setLocation] = useState('');
    const [profile, setProfile] = useState('');
    const [mine, isMine] = useState(false);
    const { edit, editProp } = useContext(ActionContext);
    const { userEmail, name, surname, userID } = useContext(AuthContext);
    let images = properties.images;
    const history = useHistory();
    const id = history.location.pathname;
    let ownerEmail, firstName, LastName = '';
    if (properties) {
        ownerEmail = properties.ownerId.email;
        firstName = properties.ownerId.name;
        LastName = properties.ownerId.surname;
    };
    useEffect(() => {
        editProp(false)
    }, [])

    useEffect(() => {
        if (properties && properties.ownerId._id === userID) {
            isMine(true)
        }
    }, [properties]);
    
    useEffect(() => {
        getSingleProp(id)
            .then(res => {
                setProperties(res);
                setLoading(false);

            })
            .catch(err => console.error(err))
    }, [edit, update]);

    useEffect(() => {
        getLocation(properties.street, properties.city)
            .then(res => setLocation(res))
            .catch(err => console.error(err))
    }, [properties, edit]);

    const changePicture = (e) => {
        setProfile(e.target.src)
    };
    const clickHandler = (e) => {
        let res = confirm(e);
        if (res) {
            deleteProperty(id)
                .then(() => {
                    setDelete(false);
                    history.push('/')
                }).catch(err => console.log(err))
        } else {
            setDelete(false)
        }
    };

    return (
        <div id="detailsPage">
            <div id="propertyInfo">
                <Image publicId={ profile || properties.img } id="detailsProfilePicture" cloudName="zltgrd">
                    <Transformation width="150" height="150" />
                </Image>
                <div>
                    <header>
                        <ul>
                            <li id='details' className={ menu === "Property Details" ? "selectedDetailsMenu" : "" } onClick={ (e) => switchMenu(e, setMenu) } >Property Details</li>
                            <li id='map' className={ menu === "Map" ? "selectedDetailsMenu" : "" } onClick={ (e) => switchMenu(e, setMenu) } >Map</li>
                        </ul>
                    </header>
                    { edit ? <EditProperty setLoading={ setLoading } properties={ properties } />
                        : menu === "Property Details" ? <DetailsContainer loading={ loading } properties={ properties } />
                            : <div id="mapContainer"><GoogleMap >{ { location: location } }</GoogleMap></div> }
                </div>

            </div>
            <main>
                <Aside properties={ properties } setMessage={ setMessage } setDelete={ setDelete } mine={ mine } />
                <DetailImages mine={ mine } loading={ loading } setLoading={ setLoading } setUpdate={ setUpdate } images={ images } id={ properties._id } changePicture={ changePicture } />
                { mine && edit && <AddMoreImages setUpdate={ setUpdate } properties={ properties } /> }
            </main>
            {deleteProp && <Confirm func={ clickHandler } /> }
            {message && <Message ownerName={ `${firstName} ${LastName}` } setMessage={ setMessage } ownerEmail={ ownerEmail } email={ userEmail } name={ `${name} ${surname}` } /> }
        </div>
    )
}
export default SingleCard