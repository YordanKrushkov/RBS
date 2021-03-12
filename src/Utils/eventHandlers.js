const openImgInput = (id) => {
    document.getElementById(id).click();
  };


  const switchMenu = (e,changeStyle) => {
      let data={};
    if (e.target.textContent === 'SALE') {
        data={changeStyle:false, sellOrRent:'SALE'}
        e.target.classList.add('new');
        e.target.previousElementSibling.classList.remove('new')
        changeStyle('SALE')
    } else {
        data={changeStyle:true, sellOrRent:'RENT'}
        e.target.classList.add('new');
        e.target.nextElementSibling.classList.remove('new')
        changeStyle('RENT')

    }
  };

  const detailHendler = (e,initialState) => {
    if (e.target.checked) {
        initialState.push(e.target.name)
    }
    if (!e.target.checked) {
        let el = initialState.find(el => (el === e.target.name))
        let index = initialState.indexOf(el)
        initialState.splice(index, 1)
    }

};


export {
    openImgInput,
    switchMenu,
    detailHendler
}