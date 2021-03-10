import './index.scss'
import React from 'react';
import {useHistory  } from 'react-router-dom'
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
const CardElement = (props) => {
    const history=useHistory()
    let propertie=props.data;
    let char = '';
    let bath=''
    if (propertie.bedrooms && propertie.bedrooms!=='Studio') {
        char = propertie.bedrooms.charAt(0)
    }else{
        char='1'
    }
    if (propertie.bathroom) {
        bath = propertie.bathroom.charAt(0)
    }
    const id=propertie._id;
   const handleClick=(e)=>{
       e.preventDefault()
        history.push(id)
   }
  
    
 
    return (
        <div className="parent" onClick={handleClick}>
            <div className="cardWrapper">
                <main className="smallCardWrapper">
                    <header >
                        <div className="smallCard-imgWrapper">
                            <img src={ propertie? propertie.img:''} alt="propPicture" />

                        </div>
                    </header>
                    <aside className="aside">
                        <h1 className="price">{ `£ ${propertie.price} ${propertie.sellOrRent==='RENT' ?'p.m' : '' }`}</h1>
                        <div className="infoIconWrapper">
                        <div className="headerPic" >
                            <IoIosBed  className="imgAsside"/>
                            <div className="char"> { char } </div>
                        </div>
                        <div className="headerPic" >
                            <GiBathtub  className="imgAsside"/>
                            <div className="char"> { bath } </div>
                        </div>
                        </div>
                        <h5 className="bedrooms">{ propertie.bedrooms + ' ' + (propertie.type).toLowerCase() }</h5>
                        <h6 className="address">{ propertie.street + ' ' + propertie.city }</h6>

                    </aside>
                </main>
                <footer className="footer">
                    <h5 className="email">{propertie.ownerId ?(`${propertie.ownerId.name} ${propertie.ownerId.surname} : ${propertie.ownerId.email}`):null}</h5>
                    <div>         
                    <button>Details</button>
                    {/* <button className="button">Contact</button> */}
                    </div>
                </footer>
            </div>
        </div>

    )
}
export default CardElement