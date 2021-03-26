import { useEffect, useState, useContext } from 'react';
import { ActionContext } from '../../Context/actionContext';
import CardElement from '../../Components/Cards';
import ProfileHeader from '../../Components/ProfileHeader';
import Edit from '../../Components/EditProfile';
import Loader from '../../Components/Loader';

import { getUser } from '../../Services/Users';
import { FaCog } from "react-icons/fa";
import { open } from '../../Utils/eventHandlers';
import './index.scss';

const Profile = () => {
    const [user, setUser] = useState('');
    const { liked } = useContext(ActionContext);
    const [update, isUpdate] = useState(false);
    const [loading, setLoading] = useState(true);
    const [prop, setProps] = useState({
        liked: true,
        owned: true
    });

    useEffect(() => {
        getUser()
            .then(res => {
                setUser(res);
                setLoading(false)
            })
            .catch(err => console.error(err))
    }, [liked, update]);

    const { properties, likedProperties } = user;
    useEffect(() => {
        if (likedProperties && likedProperties.length === 0) {
            setProps({
                ...prop,
                liked: false
            })
        };
        if (properties && properties.length === 0) {
            setProps({
                ...prop,
                owned: false
            })
        }
    }, [user]);

    return (
        <div id="profileWrapper">
            {loading && <Loader id="postLoader" /> }
            {update
                ? <Edit setLoading={ setLoading } isUpdate={ isUpdate } />
                : <ProfileHeader user={ user } />
            }
            <div className="profileMenu" onClick={ (e) => { open(update, isUpdate) } }><FaCog /></div>
            <main>
                { loading && <Loader id="profilePropsLoader" /> }
                { prop.owned && <div id="ownedProperties">
                    <h1 className="propsH1 top">My properties</h1>
                    <div className="myProperties">
                        { properties
                            ? properties.map(x =>
                                <div className="myProf" key={ x._id }>
                                    <CardElement loading={ loading } data={ x } />
                                </div>)
                            : null }
                    </div>
                </div>
                }
                { prop.liked && <div id="likedProps">
                    <h1 className="propsH1 ">Liked properties</h1>
                    <div className="myProperties">
                        { likedProperties
                            ? likedProperties.map(x =>
                                <div className="myProf" key={ x._id }>
                                    <CardElement loading={ loading } data={ x } />
                                </div>)
                            : null }
                    </div>
                </div>
                }
            </main>
        </div>
    );
}

export default Profile;