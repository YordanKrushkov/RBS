const openImgInput = (id) => {
    document.getElementById(id).click();
};

//SWITCH MENU
const switchMenu = (e, changeOffer) => {
        changeOffer(e.target.textContent)
};

//DETAIL HANDLED
const detailHendler = (e, setArr, arr) => {
    let initialState = [];
    if (e.target.checked) {
        initialState.push(e.target.name)
        setArr((arr) => [...arr, ...initialState])
    }
    if (!e.target.checked) {
        initialState = arr
        let el = initialState.find(el => (el === e.target.name))
        let index = initialState.indexOf(el)
        initialState.splice(index, 1)
        setArr(initialState)
    }
    return initialState
};


//NEXT!!!!
const open = (updated,isUpdate) => {
    if(updated){
        isUpdate(false)
    }else{
        isUpdate(true)
    }
    // let el = document.getElementById(id);
    // if (el.style.display !== display) {
    //     el.style.display = display
    // }
}
const openX = () => {
    let element = document.querySelectorAll('.deleteImage');
    if (element) {
        Array.from(element).forEach(el => {
            if (el.style.display !== 'block') {
                el.style.display = 'block'
            }
        })
    }

}
const close = (id) => {
    let el = document.getElementById(id);
    el.style.display = 'none'
}
const closeX = (id) => {
    let element = document.querySelectorAll('.deleteImage');
    if (element) {
        Array.from(element).forEach(el => {
            el.style.display = 'none'
        })
    }
}

const confirm = (e) => {
    if (e.target.innerHTML === 'Yes') {
        return true
    } else if (e.target.innerHTML === 'No') {
        close('confirm')
        return false
    }
}
export {
    openImgInput,
    switchMenu,
    detailHendler,
    close,
    open,
    confirm,
    openX,
    closeX
}