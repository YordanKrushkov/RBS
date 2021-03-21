const openImgInput = (id) => {
    document.getElementById(id).click();
};

const switchMenu = (e, changeOffer) => {
    if (e.target.textContent === 'SALE') {
        e.target.classList.add('new');
        e.target.previousElementSibling.classList.remove('new')
        changeOffer('SALE')
    } else {
        e.target.classList.add('new');
        e.target.nextElementSibling.classList.remove('new')
        changeOffer('RENT')
    }
};

const switchDetailsMenu = (e, setInfo) => {
    const details = document.getElementById('details');
    const map = document.getElementById('map');

    if (e.target === details) {
        details.classList.add('selectedDetailsMenu')
        map.classList.remove('selectedDetailsMenu')
        setInfo(true)

    } else if (e.target === map) {
        map.classList.add('selectedDetailsMenu')
        details.classList.remove('selectedDetailsMenu')
        setInfo(false)
    }
};

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
const open = (id, display) => {
    let el = document.getElementById(id);
    if (el.style.display !== display) {
        el.style.display = display
    }
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
    switchDetailsMenu,
    close,
    open,
    confirm,
    openX,
    closeX
}