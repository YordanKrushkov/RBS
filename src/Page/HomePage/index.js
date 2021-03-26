import { useState, useEffect, Fragment } from 'react';
import { getData } from '../../Services/propertiesServices';
import CardElement from '../../Components/Cards';
import Search from '../../Components/SearchForm';
import Loader from '../../Components/Loader';
import pic from '../../Assets/images/key.jpg';
import './index.scss';

const Body = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData().then(x => {
            setProperties(x);
            setLoading(false)
        })
            .catch(err => console.log("error", err))
    }, []);

    return (
        <Fragment>
            <div className="homeContainer" style={ { backgroundImage: `url(${pic})` } }>
                <div className="homeTitle">
                </div>
                <Search />
            </div>
            {loading && <Loader id='homeLoader' /> }
            <div className="cardContainer">
                { properties ? properties.map(x => <CardElement loading={ loading } data={ x } key={ x._id } />) : null }
            </div>
        </Fragment>
    )
}
export default Body