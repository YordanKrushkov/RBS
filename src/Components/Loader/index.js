import './index.scss';

const Loader = ({id}) => {
    return ( 
        <div className={`${'ring'} ${id}`}></div>
     );
}
 
export default Loader;