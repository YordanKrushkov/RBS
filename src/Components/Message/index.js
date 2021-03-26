import { useState, useEffect, useContext } from 'react';
import { ActionContext } from '../../Context/actionContext';
import Email from '../../Services/sendEmail';
import { IoIosCloseCircle } from "react-icons/io";
import './index.scss';
const Message = ({ ownerName, ownerEmail, email, name, setMessage }) => {

    const [state, setState] = useState({
        to: '',
        reply_to: '',
        from_name: '',
        to_name: '',
        message: '',
    });
    const { notify } = useContext(ActionContext)
    useEffect(() => {

        setState({
            reply_to: email,
            from_name: name,
            to: ownerEmail,
            to_name: ownerName
        })

    }, [ownerEmail]);
    const changeHandler = (e) => {
        setState({
            reply_to: email,
            from_name: name,
            to: ownerEmail,
            to_name: ownerName,
            [e.target.id]: e.target.value
        });
    };
    const sendEmail = (e) => {
        e.preventDefault();
        Email(state)
            .then(() => setMessage(false),
                notify(true, 'The message was sent')
            )
            .catch(err => notify(true, 'Please, try again!'));
    };

    return (
        <form id="messageContainer" onSubmit={ sendEmail }>
            <header>
                <h1>To: <span name="to_name" id="to_name">{ ownerName && ownerName }</span></h1>
                <IoIosCloseCircle id="closeMessage" onClick={ () => setMessage(false) } />
            </header>
            <main>
                <textarea id="message" name="message" onChange={ changeHandler } placeholder="Type your message here">
                </textarea>
            </main>
            <footer>
                <button>SEND</button>
            </footer>
        </form>
    );
}

export default Message;
