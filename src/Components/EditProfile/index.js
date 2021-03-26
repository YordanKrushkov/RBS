import { useState, useEffect, useContext } from 'react';
import { getUser } from '../../Services/Users';
import { openImgInput } from '../../Utils/eventHandlers';
import { uploadSingleImage } from '../../Utils/imgUploader';
import submitData from '../../Services/submitData';
import { Image, Transformation } from 'cloudinary-react';
import { ActionContext } from '../../Context/actionContext';
import img from '../../Assets/images/profile.png';
import './index.scss';

const Edit = ({ isUpdate, setLoading }) => {
    const [user, setUser] = useState('');
    const [IMG, setImg] = useState('');
    const { notify } = useContext(ActionContext);

    useEffect(() => {
        getUser()
            .then(res => setUser(res))
            .catch(err => console.log(err))
    }, [IMG]);

    const onChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        submitData(IMG.img, user, "/api/updateuser")
            .then((res) => {
                setImg('');
                notify(true, 'Submitted successfully');
                setLoading(false);
                isUpdate(false);
            })
            .catch(err => {
                notify(true, 'Please, try again!');
                setLoading(false);
            })
    };

    return (<div id="editFormWrapper">
        <form className="editForm" onSubmit={ submitHandler }>
            <header>
                <div onClick={ () => openImgInput('uploadProfilePicture') }>
                    { IMG.img ?
                        <img src={ IMG.img } alt="ProfilePicture" />
                        : user.profilephoto
                            ? <Image publicId={ user.profilephoto } id="detailsProfilePicture" cloudName="zltgrd">
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