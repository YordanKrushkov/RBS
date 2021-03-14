import Geocode from "react-geocode";


const getLocation=async(street,city)=>{
console.log(street, city);
let position={}

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");

const response= await Geocode.fromAddress(`${street}, ${city}`)
  let { lat, lng } = await response.results[0].geometry.location;
return {lat,lng}
}

export default getLocation