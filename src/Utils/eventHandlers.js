const openImgInput = (id) => {
    document.getElementById(id).click();
};

//SWITCH MENU
const switchMenu = (e, changeOffer) => {
        changeOffer(e.target.textContent)
};

//DETAIL HANDLED
const detailHendler = (e, setArr, arr) => {
    console.log('arr,set',arr);
    console.log('setArr', setArr);
    let initialState = [];
    if (e.target.checked) {
        console.log("there");
        initialState.push(e.target.name)
        setArr((arr) => [...arr, ...initialState])
    }
    if (!e.target.checked) {
        initialState = arr
        let el = initialState.find(el => (el === e.target.name))
        let index = initialState.indexOf(el)
        initialState.splice(index, 1);
        console.log(initialState);
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

}

const confirm = (e) => {
    if (e.target.innerHTML === 'Yes') {
        return true
    } else if (e.target.innerHTML === 'No') {
        return false
    }
}
export {
    openImgInput,
    switchMenu,
    detailHendler,
    open,
    confirm,
}