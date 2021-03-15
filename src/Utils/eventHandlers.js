const openImgInput = (id) => {
    document.getElementById(id).click();
  };


  const switchMenu = (e,changeOffer) => {
      let data={};
    if (e.target.textContent === 'SALE') {
        data={changeStyle:false, sellOrRent:'SALE'}
        e.target.classList.add('new');
        e.target.previousElementSibling.classList.remove('new')
        changeOffer('SALE')
    } else {
        data={changeStyle:true, sellOrRent:'RENT'}
        e.target.classList.add('new');
        e.target.nextElementSibling.classList.remove('new')
        changeOffer('RENT')
    }
  };

  const switchDetailsMenu = (e,setInfo) => {
    const details = document.getElementById('details');
    const map = document.getElementById('map');

   if (e.target === details) {
            details.classList.add('selectedDetailsMenu')
            map.classList.remove('selectedDetailsMenu')
            setInfo(true)

        } else if(e.target === map) {
                map.classList.add('selectedDetailsMenu')
                details.classList.remove('selectedDetailsMenu')
                setInfo(false)
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
    detailHendler,
    switchDetailsMenu
}