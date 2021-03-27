import { likePriperties, deleteAPI, updatePropertyURL, baseUrl } from './API';
import getCookie from './cookies';

//GET Data
const getData = async () => {
    const promise = await fetch(`${baseUrl}all`, {
        method: 'GET',
        headers: {
            'Authorization': getCookie('x-auth-token')
        }
    });
    const res = await promise.json();
    return res;
};

//Fillter Property
const getSome = async (filter) => {
    const promise = await fetch(`${baseUrl}${filter.offer}?city=${filter.city}&type=${filter.type}&bedrooms=${filter.bedrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&sortBy=${filter.sortBy}`,
        {
            method: 'GET',
            headers: {
                'Authorization': getCookie('x-auth-token')
            }
        });
    const res = await promise.json();
    return res;
};

//Search Property
const searchProperty = async (filter) => {

    const promise = await fetch(`${baseUrl}/properties?offer=${filter.offer}&city=${filter.city}&type=${filter.type}&bedrooms=${filter.bedrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}`,
        {
            method: 'GET',
            headers: {
                'Authorization': getCookie('x-auth-token')
            }
        });
    const properties = await promise.json();
    return properties;
};

//Get single property
const getSingleProp = async (prop) => {
    let id = prop.split('property/')[1]
    const promise = await fetch(`${baseUrl}${id}`, {
        method: 'GET',
        headers: {
            'Authorization': getCookie('x-auth-token')
        }
    });
    const properties = await promise.json();
    return properties;
};

//Like Property
const likeProperty = (key, id) => {
    fetch(likePriperties, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
            [key]: id
        },
    })
        .then(() => { })
        .catch(err => console.log(err));
};

//Delete Property
const deleteProperty = async (id) => {
    const promise = await fetch(deleteAPI, {
        method: 'POST',
        body: JSON.stringify({ id: id }),
        headers: {
            'Authorization': getCookie('x-auth-token'),
            'Content-Type': 'application/json',
        }
    });
    const res = promise.json()
    return res;
};

//Update Property
const updateProperty = async (prop) => {
    const property = await fetch(updatePropertyURL, {
        method: "POST",
        body: JSON.stringify(prop),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token'),
        }
    })
    const result = await property.json();
    return result;
};

export {
    likeProperty,
    deleteProperty,
    updateProperty,
    getData,
    getSome,
    searchProperty,
    getSingleProp
}