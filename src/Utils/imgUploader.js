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
        appendList(id, reader.result)
        setIMG((img) => [...img, reader.result])
    }
};
//APEND LIST
const appendList = (id, sorce) => {
    let container = document.getElementById(id);
    container.style.display = "flex"
    let el = document.createElement('li');
    let im = document.createElement('img');
    im.src = sorce;
    im.style.height = '100px';
    el.appendChild(im);
    container.appendChild(el);
}

export {
    appendList, uploadImage, uploadSingleImage
}