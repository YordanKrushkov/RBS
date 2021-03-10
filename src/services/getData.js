// import CardElement from "../components/cards/card-elemtent";
import getCookie from './cookies'
const url = 'http://localhost:4000/properties/';

const getPropertiesService= {
    // renderProperties(properties) {
    //     return Object.keys(properties).map((propertie) => {
    //         let item = properties[propertie]
    //         let key = properties[propertie]._id
    //         return CardElement(item, key)
    //     })
    // },
    async getData() {
        const promise = await fetch(`${url}all`, {
            method:'GET',
            headers: {
            'Authorization': getCookie('x-auth-token')
        }});
         return await promise.json();
    },
    async getSome(getProperties, sellOrRent, filter) {
        const promise = await fetch(`${url}${sellOrRent}?city=${filter.city}&type=${filter.type}&bedrooms=${filter.bedrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&sortBy=${filter.sortBy}`,
        {
            method:'GET',
            headers: {
            'Authorization': getCookie('x-auth-token')
        }});
        const properties = await promise.json();
        getProperties(properties)
    },

    async SearchItem(getProperties,filter){
        const promise = await fetch(`${url}/properties?sellOrRent=${filter.sellOrRent}&city=${filter.city}&type=${filter.type}&bedrooms=${filter.bedrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}`,
        {
            method:'GET',
            headers: {
            'Authorization': getCookie('x-auth-token')
        }});  
        const properties = await promise.json();
        getProperties(properties)

    },


    async getSingleProp(getProperties, id) {
        const promise = await fetch(`${url}${id}`,  {
            method:'GET',
            headers: {
            'Authorization': getCookie('x-auth-token')
        }});
        const properties = await promise.json();
        getProperties(properties)
    }
}

export default getPropertiesService