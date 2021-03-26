import './index.scss';
import img from '../../Assets/images/404.png';

const ErrorPage = () => {
    return ( 
        <div className="errorPage">
           <img src={img} alt=""/>
        </div>
     );
};
 
export default ErrorPage;