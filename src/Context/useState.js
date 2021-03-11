import { Component } from 'react'
import UserContext from './Context'
import userVerify from '../src/services/userVerify'
class UseState extends Component {

    state = {
        loggedIn: null,
        email: null,
        id: '',
    }
    logIn = (email) => {
        this.setState({
            ...email,
            loggedIn: true,
        })
    }

    logOut = () => {
        document.cookie = 'x-auth-token=';
        localStorage.removeItem('user')
        this.setState({
            loggedIn: false,
            id:null,
            email: null,
            name:null,
            surname:null,
        })
    }
    componentDidMount() {
        userVerify('x-auth-token')
            .then(res => {
                if (res) {
                    this.setState({
                        loggedIn: true,
                        email: localStorage.getItem('user'),
                    })
                } else {
                    this.logOut()
                }
            })
    };

    render() {
        const {
            loggedIn,
            email,
        } = this.state
        if (loggedIn === null) {
            <div>Loading...</div>
        }
        return (
            <UserContext.Provider value={ {
                loggedIn,
                email,
                logIn: this.logIn,
                logOut: this.logOut,
            } }>
                {this.props.children }
            </UserContext.Provider>

        )
    }
}

export default UseState