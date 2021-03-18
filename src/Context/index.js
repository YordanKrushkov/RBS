import React, { Component, createContext } from 'react';
import userVerify from '../Services/userVerify'
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: null,
        userEmail: '',
        userProperties:'',
        likedProperties:'',
        name:'',
        surname:''
    }
    login = ({email,name,surname,properties,likedProperties}) => {
        this.setState({
            isAuthenticated: true,
            userEmail: email,
            userProperties:properties,
            likedProperties:likedProperties,
            name:name,
            surname: surname
        })
    }
    logout = () => {
        document.cookie = 'x-auth-token=';
        localStorage.removeItem('user');
        this.setState({
            isAuthenticated: false,
            userEmail: '',
        })
    }

    componentDidMount() {
        userVerify('x-auth-token')
            .then((res) => {
                if (res && res.auth) {
                    this.setState({
                        isAuthenticated: true,
                        userEmail: res.user.email,
                        name:res.user.name,
                        surname:res.user.surname,
                        userProperties:res.user.properties,
                        likedProperties:res.user.likedProperties
                    })
                } else {
                    this.logout()
                }
            })
            .catch((e) => this.logout())
    }
    render() {
        return (
            <AuthContext.Provider value={ { ...this.state, login: this.login, logout: this.logout } }>
                {this.props.children }
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;