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

    updateProperties=(res)=>{
        this.setState({
            userProperties:res.properties,
            likedProperties:res.likedProperties,
        })
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
        userVerify().then((res) => {
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
            .catch((e) =>console.log(e))
    }
    
    render() {
        return (
            <AuthContext.Provider value={ { ...this.state, login: this.login, logout: this.logout, updateProperties:this.updateProperties } }>
                {this.props.children }
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;