import { useState, useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom'
import deletePropertie from '../../Services/deletePropertie'
import getProperties from '../../Services/getData';
import DetailsContainer from '../../Components/DetailsComponent';
import DetailImages from '../../Components/DetailsImages'
import Message from '../../Components/Message';
import Confirm from '../../Components/ConfirmAction'
import {switchDetailsMenu,open,close,confirm, openX} from '../../Utils/eventHandlers'
import {Image,Transformation} from 'cloudinary-react'
import GoogleMap from '../../Components/GoogleMap'
import getLocation from '../../Utils/getLocation';
import EditProperty from '../../Components/EditProperty'
import {AuthContext} from '../../Context'
import AddMoreImages from '../../Components/AddMoreImages'
import './index.scss';

const SingleCard = () => {
    const [properties, setProperties] = useState('');
    const [info, setInfo] = useState(true);
    const [update, setUpdate]=useState(false)
    const [location, setLocation]=useState('')
    const [mine,isMine]=useState(false) 
    const {isAuthenticated, userEmail, name, surname, userID }=useContext(AuthContext)
    const isAuth =isAuthenticated
    let images=properties.images
    const history = useHistory()
    const id = history.location.pathname
    let ownerEmail,firstName, LastName='';
    if(properties){
         ownerEmail=properties.ownerId.email;
         firstName=properties.ownerId.name;
         LastName=properties.ownerId.surname;
    }
    useEffect(()=>{
        if(properties&&properties.ownerId._id===userID){
            isMine(true)
        }
    },[properties])
    useEffect(() => {
        getProperties.getSingleProp(id)
        .then(res=>setProperties(res))
        .catch(err=>console.error(err))
        console.log(update);
    }, [update])
    useEffect(()=>{
        getLocation(properties.street, properties.city)
        .then(res=>setLocation(res))
        .catch(err=>console.error(err))
    },[properties])

    const changePicture=(e)=>{
        let profile=document.getElementById('detailsProfilePicture');
        profile.src=e.target.src
    }
    const clickHandler=(e)=>{
        let res=confirm(e);
        if(res){
            deletePropertie(id)
            .then(()=>{
            history.push('/')
            }).catch(err=>console.log(err))
        }
    }
    return (
        <div id="detailsPage">
            <div  id="propertyInfo">
                <Image publicId={properties.img} id="detailsProfilePicture" cloudName="zltgrd">
                <Transformation width="150" height="150"/>
                </Image>
                <div>
                    <header>
                        <ul>
                            <li id='details' className="selectedDetailsMenu" onClick={(e)=>switchDetailsMenu(e,setInfo)} >Property Details</li>
                            <li id='map' onClick={(e)=>switchDetailsMenu(e,setInfo)} >Map</li>
                        </ul>
                    </header>
                    <EditProperty setUpdate={setUpdate} properties={properties}/>
                    { info? <DetailsContainer properties={properties}/>
                    :<div id="mapContainer"><GoogleMap location={location}/></div>}
                </div>
            </div>
            <main>
            <aside>
                <header>
                    <h3>{ `${properties.bedrooms} ${properties.type}` }</h3>
                    <h5>{ `${properties.street} ${properties.city}` }</h5>
                    <h5>{ properties.ownerId ? (`${properties.ownerId.name} ${properties.ownerId.surname}`) : null }</h5>
                    <h2> £ { properties.price }</h2>
                </header>
                <div>
                {!mine 
                ?<button onClick={()=>open('messageContainer','flex')}>Contact</button>
                :(<div className="buttonsWrapper">
                    <button onClick={()=>{open('editDetailsContainer','block');open('newImageWrapper','block');openX(); close('detailsContainer')}} id="editPropButton">Edit</button>
                    <button onClick={()=>open('confirm','flex')} id="deleteButton">Delete</button>
                </div>)}
                </div>
            </aside>
            <DetailImages setUpdate={setUpdate} mine={mine} images={images} id={properties._id} changePicture={changePicture}/>
            {mine &&<AddMoreImages setUpdate={setUpdate} properties={properties}/>}
            </main>
            <Confirm func={clickHandler}/>
            <Message ownerName={`${firstName} ${LastName}`} ownerEmail={ownerEmail} email={userEmail} name={`${name} ${surname}`}/>
        </div>
    )
}
export default SingleCard