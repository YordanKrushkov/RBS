import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context';
import { Image, Transformation } from 'cloudinary-react';
import img from '../../Assets/images/profile.png';
import './index.scss';

const ProfileHeader = ({ user }) => {

    const { logout } = useContext(AuthContext);
    const history = useHistory();
    const logOut = (e) => {
        logout();
        history.push('/');
    };

    return (
        <header className="profileHeader">
            <div id="profilePicture">
                { user.profilephoto ? <Image publicId={ user.profilephoto } id="detailsProfilePicture" cloudName="zltgrd">
                    <Transformation width="150" height="150" />
                </Image>
                    : <img src={ img } alt="" /> }
            </div>
            <div id="profileInfo">
                <h1>My Profile</h1>
                <div>
                    <div>
                        <h6>Name:</h6>
                        <h6>{ user ? `${user.name} ${user.surname}` : null }</h6>
                    </div>
                    <div>
                        <h6>Email:</h6>
                        <h6>{ user.email }</h6>
                    </div>

                    { user.phone ?
                        <div>
                            <h6>Phone:</h6>
                            <h6>{ user.phone }</h6>
                        </div> : null }

                    { user.address ?
                        <div>
                            <h6>Live in:</h6>
                            <h6>{ user.address }</h6>
                        </div> : null }
                </div>
            </div>
            <div id="profileMenuWrapper">
                <ul>
                    <li><Link to="#">Messeges</Link></li>
                    <li onClick={ logOut }>SignOut</li>
                </ul>
            </div>
        </header>
    );
};

export default ProfileHeader;