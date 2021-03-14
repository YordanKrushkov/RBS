import { useState, useEffect,useContext } from 'react';
import { useHistory,Link } from 'react-router-dom'
import getProperties from '../../Services/getData';
import DetailsContainer from '../../Components/detailsComponent';
import {switchDetailsMenu} from '../../Utils/eventHandlers'
import {Image,Transformation} from 'cloudinary-react'
import GoogleMap from '../../Components/GoogleMap'
import getLocation from '../../Utils/getLocation';
import {AuthContext} from '../../Context'
import './index.scss';
const SingleCard = () => {
    const [properties, setProperties] = useState([]);
    const [info, setInfo] = useState(true);
    const [location, setLocation]=useState('')
    const {isAuthenticated}=useContext(AuthContext)
    const isAuth =isAuthenticated
    let images=properties.images
    const history = useHistory()
   

    useEffect(() => {
        const id = history.location.pathname
        getProperties.getSingleProp(id)
        .then(res=>setProperties(res))
        .catch(err=>console.error(err))
        
    }, [])
    useEffect(()=>{
        getLocation(properties.street, properties.city)
        .then(res=>setLocation(res))
        .catch(err=>console.error(err))
    },[properties])

    const changePicture=(e)=>{
        let profile=document.getElementById('detailsProfilePicture');
        profile.src=e.target.src
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
                   <Link to={isAuth ?'':'/register'}><button>Contact</button></Link> 
                </div>

            </aside>
            <section>
            {images && images.map(x=>
                <Image publicId={x} key={x} cloudName="zltgrd" onClick={changePicture}>
                <Transformation width="150" height="150"/>
                </Image>
        )}
        
            </section>
            </main>
        </div>
    )
}
export default SingleCard