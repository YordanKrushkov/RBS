import React from 'react';
import {Link} from 'react-router-dom';
class CustomErrorBoundry extends React.Component {
    constructor(props){
        super(props)

        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo){
        console.log("Something went wrong: ", error);
    }
    render(){
        if(this.state.hasError){
            return (
                <div>
                <h1>Something went wrong</h1>
                <Link to='/'>Return</Link>
                </div>
            );
        }
        return this.props.children
       
    }
}

export default CustomErrorBoundry