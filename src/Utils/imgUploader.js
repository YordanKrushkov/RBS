import getCookie from '../services/cookies'

const uploadImage = (e, setIMG) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        appendList('imgContainer', reader.result)
        setIMG((img) => [...img, reader.result])
    }
};

const setimage = async (base64EncodedImage, properties, url) => {
    try {
        await fetch(`http://localhost:4000${url}`, {
            method: "POST",
            body: JSON.stringify({ data: base64EncodedImage, prop: properties }),
            headers: { "Content-type": "application/json", 'Authorization': getCookie('x-auth-token') }
        });

    } catch (error) {
        console.error(error);
    }
}

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
    setimage, appendList, uploadImage
}