import './index.scss';
import {useState, useEffect} from 'react';
import Email from '../../Services/sendEmail'
import { IoIosCloseCircle } from "react-icons/io";
const Message = ({ownerName,ownerEmail, email, name}) => {

const [state, setState]=useState({
    to:'',
    reply_to:'',
    from_name:'',
    to_name:'',
    message:'',
});
useEffect(()=>{

 setState({
    reply_to:email,
    from_name:name,
    to:ownerEmail,
    to_name: ownerName
 })

},[ownerEmail])
const changeHandler=(e)=>{
    setState({
        reply_to:email,
        from_name:name,
        to:ownerEmail,
        to_name: ownerName,
        [e.target.id]:e.target.value
    })
}



    const closeMessage=(e)=>{
        let el=document.getElementById('messageContainer');
        el.style.display='none'
    }
    const sendEmail=(e)=>{
        e.preventDefault()
        Email(state).then(()=>closeMessage()).catch(err=>console.log("email",err))

    }
    return ( 
        <form id="messageContainer" onSubmit={sendEmail}>
            <header>
                <h1>To: <span name="to_name" id="to_name">{ownerName&&ownerName}</span></h1> 
                <h1>from: <span name="from_name" id="from_name">{name&&name}</span></h1>
                <IoIosCloseCircle id="closeMessage" onClick={closeMessage}/>
            </header>
            <main>
                <textarea id="message" name="message" onChange={changeHandler} placeholder="Type your message here">
                  
                </textarea>
            </main>
            <footer>
                <button>SEND</button>
            </footer>
        </form>
     );
}
 
export default Message;
