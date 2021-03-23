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


const verifyRegister = (user, setErr) => {
    const { name, surname, email, password, repassword } = user
    if (!email){
        setErr({
            err:'Please, insert your email!',
            input:'email'
        })
        return
    }
    if (!name) {
        setErr({
            err:'Please, insert your name!',
            input:'name'
        })
        return
    }
    if (!surname) {
        setErr({
            err:'Please, insert your surname!',
            input:'surname'
        })
        return
    }

    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
        setErr({
            err:'Please, insert a valid email!',
            input:'email'
        })
        return;
    }

    if (password !== repassword) {
        setErr({
            err:'The password does\'t match!',
            input:'password',
        })
        return;
    } else if (password.length < 6) {  
        setErr({
            err:'The password must be at least 6 characters!',
            input:'password'
        })
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

const hideError=(state,setState,value)=>{
    if(state){
        setTimeout(()=>{
            setState(value)
        },2000)
    }
}

export {
    verifyData,
    verifyRegister,
    verifySubmit,
    hideError
}