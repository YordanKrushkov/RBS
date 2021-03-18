import {useState,useContext,useEffect} from 'react';
import {useHistory  } from 'react-router-dom'
import {Image, Transformation } from 'cloudinary-react'
import { AuthContext } from '../../Context';
import { ActionContext } from '../../Context/actionContext';

import likePropertie from '../../Services/likeProperties'

import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import { FaRegHeart, FaHeart} from "react-icons/fa";
import './index.scss'

 
const CardElement = (props) => {
    const [style, setStyle]=useState(true);
    const [lik, setLiked]=useState(false);
    const {userProperties,likedProperties, isAuthenticated}=useContext(AuthContext);
    const {like,dislike,liked}=useContext(ActionContext);
    const history=useHistory()
    ;
    console.log(isAuthenticated);
    let propertie=props.data;
    const id=propertie._id;
    useEffect(() => {
       if(userProperties&& userProperties.includes(id) || !isAuthenticated){
           setStyle(false)
       } 
         if(liked&&liked.includes(id)){
         setLiked(true)
        }
        if(likedProperties&&likedProperties.includes(id)){
            setLiked(true)
        }
    }, [lik])
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

       if(lik){
           key="dislike"
           setLiked(false)
           dislike(id)
       }
       else{
           key='like'
           setLiked(true)
           like(id)
       }
       likePropertie(key,id)
   }

    return (
        <div className="parent">
        
        <header>
            <div className="propImage">
                {style ? !lik ?<FaRegHeart id="like" onClick={likeHandler}/>:<FaHeart id="liked" onClick={likeHandler}/>:null}
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