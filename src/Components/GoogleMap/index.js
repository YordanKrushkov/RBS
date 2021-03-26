import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const GoogleMap = (props) => {

  const location = props.children.location;
  const mapStyles = {
    width: '95%',
    height: '95%',
    padding: '10px',
    boxSizing: " border-box",
    margin: "auto"
  };

  return (
    <Map
      google={ props.google }
      zoom={ 18 }
      style={ mapStyles }
      initialCenter={ location }
    >
      <Marker position={ location } />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMap);