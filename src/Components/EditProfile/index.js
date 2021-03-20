import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getUser } from '../../Services/Users'
import { openImgInput, close,open } from '../../Utils/eventHandlers'
import { uploadSingleImage, setimage } from '../../Utils/imgUploader';
import { Image, Transformation } from 'cloudinary-react'
import './index.scss'
import img from '../../Assets/images/profile.png'
const Edit = (loged) => {
    const [user, setUser] = useState({})
    const [IMG, setImg] = useState('')

    useEffect(() => {
        getUser()
        .then(res => { setUser(res) })
        .catch(err => console.log(err))
    }, [])
    const history = useHistory()
    const onChangeHandler = (e) => {

        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        setimage(IMG.img, user, "/api/updateuser")
            .then(() =>{ close('editFormWrapper'); open('hidde','flex')})
            .catch(err => console.log(err))
    };


    return (<div id="editFormWrapper">
        <form className="editForm" onSubmit={ submitHandler }>
        <header>
            <div onClick={ () => openImgInput('uploadProfilePicture') }>
                { user.profilephoto ?
                    <Image publicId={ user.profilephoto } id="detailsProfilePicture" cloudName="zltgrd">
                        <Transformation width="150" height="150" />
                    </Image>
                    : <img src={ IMG.img || img } alt="ProfilePicture" /> }
            </div>
            <input type="file" id="uploadProfilePicture" style={ { display: 'none' } } onChange={ (e) => { uploadSingleImage(e, setImg) } } />
            </header>
            <main>
            <h1>Update your profile</h1>

            <section>
                <label htmlFor='firstName'>First Name</label>
                <input placeholder={ user.name } type='text' id='name' onChange={ onChangeHandler } />
            </section>
            <section>
                <label htmlFor='lastName'>Second Name</label>
                <input placeholder={ user.surname } type='text' id='surname' onChange={ onChangeHandler } />
            </section>
            <section>
                <label htmlFor='phone'>Phone</label>
                <input placeholder={ user.phone || "099999999" } type='text' id='phone' onChange={ onChangeHandler } />
            </section>
            <section>
                <label htmlFor='location'>Location</label>
                <input placeholder={ user.location || "London, UK" } type='text' id='address' onChange={ onChangeHandler } />
            </section>
            <button> Submit</button>
            </main>
        </form>
        </div>
    )
}
export default Edit