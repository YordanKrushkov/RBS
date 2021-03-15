import {useState,useContext,useEffect} from 'react';
import {useHistory  } from 'react-router-dom'
import {Image, Transformation } from 'cloudinary-react'
import { AuthContext } from '../../Context';

import likePropertie from '../../Services/likeProperties'

import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import { FaRegHeart, FaHeart} from "react-icons/fa";
import './index.scss'

 
const CardElement = (props) => {
    const [style, setStyle]=useState(true);
    const [liked, setLiked]=useState(false);
    const context=useContext(AuthContext);
    const history=useHistory()

    const userProps=context.userProperties;
    const likedProps=context.likedProperties;
    let propertie=props.data;
    const id=propertie._id;
    useEffect(() => {
        if(userProps&&userProps.includes(id)){
            setStyle(false)
        }else if(likedProps&&likedProps.includes(id)){
            setLiked(true);
        }
    }, [])
    useEffect(() => {
   
    }, [liked])
    let char,bath = '';
    if (propertie.bedrooms && propertie.bedrooms!=='Studio') {
        char = propertie.bedrooms.charAt(0)
    }else{
        char='1'
    }
    if (propertie.bathroom) {
        bath = propertie.bathroom.charAt(0)
    }

 
    
   const handleClick=(e)=>{
       e.preventDefault()
        history.push(id)
   }
   const likeHandler=(e)=>{
       let key='';

       if(liked){

           key="dislike"
           setLiked(false)
       }
       else{

           key='like'
           setLiked(true)
       }

       likePropertie(key,id)
   }

    return (
        <div className="parent">
        
        <header>
            <div className="propImage">
                {style ? !liked ?<FaRegHeart id="like" onClick={likeHandler}/>:<FaHeart id="liked" onClick={likeHandler}/>:null}
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
            <button  onClick={handleClick}>Details</button>
        </footer>
        
    
        </div>

    )
}
export default CardElement