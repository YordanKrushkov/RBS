
const uploadSingleImage=(e,setIMG)=>{
    console.log(e.target);
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader(); 
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = () => {
        setIMG({img:reader.result})
    }
};

const uploadImage = (e, setIMG, id) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        appendList(id, reader.result)
        setIMG((img) => [...img, reader.result])
    }
};

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
 appendList, uploadImage,uploadSingleImage
}