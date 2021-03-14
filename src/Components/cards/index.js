import './index.scss'
import React from 'react';
import {useHistory  } from 'react-router-dom'
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import {Image, Transformation } from 'cloudinary-react'
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
        
        <header>
            <div className="propImage">
                {/* <img src={propertie.img} alt=""/> */}
                <Image publicId={propertie.img} cloudName="zltgrd">
                    <Transformation width="150" height="150"/>
                </Image>
            </div>
            <div className="cardImgInfo">
                <h2>{propertie.price}</h2>
                <div className="iconWrapper">
                <div><IoIosBed className="icon"/> {char} </div>
                <div><GiBathtub className="icon"/> {bath} </div>
                </div>
                <h6>{propertie.street}</h6>
                <h6>{propertie.city}</h6>
            </div>
        </header>
        <footer>
            <button>Details</button>
        </footer>
        
    
        </div>

    )
}
export default CardElement