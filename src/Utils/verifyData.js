const verifySubmit=(propertie,img)=>{
    const {city,street,type,bedrooms,bathroom,price}=propertie;
    if(!city){
        verifyData('wrongInput','Please, select city!','city');
        return;
    }
    if(!street){
        verifyData('wrongInput','Please, fill the address!','street');
        return;
    }
    if(!type){
        verifyData('wrongInput','Please, select type!','type');
        return;
    }
    if(!bedrooms){
        verifyData('wrongInput','Please, select bedrooms!','bedrooms');
        return;
    }
    if(!bathroom){
        verifyData('wrongInput','Please, select bathroom!','bathroom');
        return;
    }
    if(!price){
        verifyData('wrongInput','Please, select price!','price');
        return;
    }
    if(img.length===0){
        verifyData('wrongInput','It must have at least one picture!','imageButton');
        return
    }
}


const verifyRegister = (user) => {
    const { name, surname, email, password, repassword } = user

    if (!email){
        verifyData('wrong', 'Please, insert your email!','email');
        return
    }
    if (!name) {
        verifyData('wrong', 'Please, insert your name!','name');
        return
    }
    if (!surname) {
        verifyData('wrong', 'Please, insert your surname!','surname');
        return
    }

    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
        verifyData('wrong', 'Please, insert valid email!',"email");
        return;
    }

    if (password !== repassword) {
        verifyData('wrong', 'The password does\'t match!','password')
        return;
    } else if (password.length < 6) {
        verifyData('wrong', 'The password must be at least 6 characters!','password')
        return;
    }
}

const verifyData = (id, text, input) => {
    const element = document.getElementById(id)
    element.innerHTML = text
    element.style.display = 'block';

    let extraEl;
    if(input==='password'){ 
        extraEl=document.getElementById('repassword')
    }
    const inputElement=document.getElementById(input);
    inputElement&&inputElement.classList.add('border');
    extraEl&&extraEl.classList.add('border');
    setTimeout(() => {
        element.style.display = 'none';
        inputElement&& inputElement.classList.remove('border');
        extraEl&&extraEl.classList.remove('border');

    }, 2000)
    return;
}

export {
    verifyData,
    verifyRegister,
    verifySubmit
}