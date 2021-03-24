import './index.scss';
import { useState, useEffect, useContext } from 'react'
import { ActionContext } from '../../Context/actionContext'
const Notify = () => {
    const [style, setStyle] = useState('');
    const { message, notify } = useContext(ActionContext)
    useEffect(() => {
        setStyle('grow')
    }, [message]);
    console.log(message);
    if (message) {
        setTimeout(() => {
            notify(false,'')
        }, 2000)
    }
    return (
        <div id="notify" className={ style }>
            <h1>{ message }</h1>
        </div>
    );
}

export default Notify;