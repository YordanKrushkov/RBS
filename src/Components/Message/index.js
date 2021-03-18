import './index.scss';
import {useState, useEffect} from 'react';

const Message = ({ownerName,ownerEmail, email, name}) => {

const [state, setState]=useState({
    to:'',
    reply_to:'',
    from_name:'',
    to_name:'',
    message:'',
});
console.log(name);
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


    const sendEmail=(e)=>{

        fetch('http://localhost:4000/api/email', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>
            console.log(res))
        .catch(err=>console.log(err))

    }


    return ( 
        <form id="messageContainer" onSubmit={sendEmail}>
            <header>
                <h1>To: <span name="to_name" id="to_name">{ownerName&&ownerName}</span></h1> 
                <h1>from: <span name="from_name" id="from_name">{name&&name}</span></h1>
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
