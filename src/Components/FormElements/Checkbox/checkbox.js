import './index.scss';
import { useState, useEffect } from 'react';


const Checkbox = (props) => {

    let { name, func, value } = props.children;
    const [checked, isChecked] = useState(false)
    let { initialState } = value
    useEffect(() => {
        if (initialState && initialState.includes(name)) {
            isChecked(true)
        }
    }, [initialState])
    
    return (
        <div className="checkbox">
            <h2>{ name }</h2>
            {checked 
                ? <input type="checkbox" defaultChecked={checked} name={ name } id={ name } onChange={ func } />
                : <input type="checkbox" name={ name } id={ name } onChange={ func } />
            }
        </div>
    );
}

export default Checkbox;