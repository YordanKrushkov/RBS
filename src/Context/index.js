import React, { Component, createContext } from 'react';
import userVerify from '../Services/userVerify'
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        userID:'',
        isAuthenticated: null,
        userEmail: '',
        likedProperties:'',
        name:'',
        surname:''
    }

    updateProperties=(res)=>{
        this.setState({
            likedProperties:res.likedProperties,
        })
    }

    login = ({email,name,surname,likedProperties,id}) => {
        this.setState({
            userID:id,
            isAuthenticated: true,
            userEmail: email,
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
                        userID:res.user.id,
                        isAuthenticated: true,
                        userEmail: res.user.email,
                        name:res.user.name,
                        surname:res.user.surname,
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