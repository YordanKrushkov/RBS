//PROPERTIES
const deleteAPI="http://localhost:4000/properties/delete"
const updatePropertyURL ='http://localhost:4000/properties/update';
const deletImg='http://localhost:4000/properties/updateImages';
const baseUrl='http://localhost:4000/properties/';
//EMAIL
const sendEmail="http://localhost:4000/api/email"
//USER
const loginURL='http://localhost:4000/api/login';
const registerURL='http://localhost:4000/api/register';
const getuser='http://localhost:4000/api/getuser'
const likePriperties='http://localhost:4000/api/likeprop';
const verify='http://localhost:4000/api/verify';

export {
    likePriperties,
    getuser,
    sendEmail,
    deleteAPI,
    updatePropertyURL,
    deletImg,
    baseUrl,
    verify,
    loginURL,
    registerURL
}