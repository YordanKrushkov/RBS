import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './index.scss'

const GoogleMap = (props) => {
    const {location}= props
    const mapStyles = {
        width: '100%',
        height: '100%',
        padding: '10px',
        boxSizing:" border-box"
      };

    return (
        <Map
          google={props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={location}
        >
         <Marker position={location} /> 
         </Map>
    );
}
 
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })(GoogleMap);