//UPLOAD SINGLE IMG
const uploadSingleImage = (e, setIMG) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setIMG({ img: reader.result })
    }
};
//UPLOAD IMGS
const uploadImage = (e, setIMG, id) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setIMG((img) => [...img, reader.result])
    }
};

export {
 uploadImage, uploadSingleImage
}