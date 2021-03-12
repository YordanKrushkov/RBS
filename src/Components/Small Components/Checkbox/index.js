import './index.scss';


const Checkbox = (props) => {
    let {name, func}=props.children
    return ( 
        <div className="checkbox"> 
        <h2>{name}</h2>
        <input type="checkbox" name={name} id={name} onChange={ func } />
        </div>
     );
}
 
export default Checkbox;