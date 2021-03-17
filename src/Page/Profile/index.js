import './index.scss'
import { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {getUser} from '../../Services/Users'
import { FaCog } from "react-icons/fa";
import { AuthContext } from '../../Context'
import CardElement from '../../Components/Cards'
import {Image, Transformation} from 'cloudinary-react'
import img from '../../Assets/images/profile.png'
const Profile = () => {
    const [user, setUser] = useState('')
    useEffect(() => {
        getUser().then(res => setUser(res)).catch(err => console.error(err))
    }, [])
    const context = useContext(AuthContext)
    const history = useHistory()
    const data = user.properties;
    const liked=user.likedProperties;
    
    const logOut = (e) => {
        context.logout()
        history.push('/')
    }
    const settings = (e) => {
        let settings = document.getElementById('profileMenuWrapper');
        let path = false;
        if (e.target.tagName === "path" || e.target.tagName === 'svg') {
            path = true;
        }
        if (e.target.className === "profileMenu" && settings.style.display !== "block") {
            settings.style.display = "block"
        } else if (path && settings.style.display !== "block") {
            settings.style.display = "block"
        } else {
            settings.style.display = "none"
        }
    }

    return (
        <div id="profileWrapper" onClick={ settings }>
            <header>
                <div id="profilePicture">
                {user.profilephoto ?<Image publicId={user.profilephoto} id="detailsProfilePicture" cloudName="zltgrd">
                <Transformation width="150" height="150"/>
                 </Image>
                    :<img src={img } alt="" />}
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
                <div className="profileMenu"><FaCog /></div>
                <div id="profileMenuWrapper">
                    <ul>
                        <li><Link to="/edit">Edit Profile</Link></li>
                        <li><Link to="#">Messeges</Link></li>
                        <li onClick={ logOut }>SignOut</li>
                    </ul>
                </div>
            </header>
            <main>
                <h1 className="propsH1 top">My properties</h1>
                <div className="myProperties">
                    { data ? data.map(x =>
                        <div className="myProf"  key={x._id}>
                            <CardElement data={ x } />
                        </div>
                    ) : null }

                </div>
                    <h1 className="propsH1">Liked properties</h1>
                <div className="myProperties">
                    { liked ? liked.map(x =>
                    <div className="myProf" key={x._id}>
                            <CardElement  data={ x } />
                    </div>
                    ) : null }

                </div>

            </main>
        </div>
    );
}

export default Profile;