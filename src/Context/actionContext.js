import { Component, createContext } from 'react'
export const ActionContext = createContext();

class ActionContextProvider extends Component {
    state = {
        liked: [],
        edit: false,
        action: false,
        message: ''
    };

    like = (id) => {
        this.setState({ liked: [...this.state.liked, id] });
    };

    dislike = (id) => {
        let arr = [...this.state.liked]
        let index = arr.indexOf(id);
        if (index !== -1) {
            arr.splice(index, 1);
            this.setState({ liked: arr })
        }
    };

    editProp = (value) => {
        this.setState({ edit: value })
    };

    notify = (action, message) => {
        this.setState({
            action: action,
            message: message
        })
    };

    render() {
        return (
            <ActionContext.Provider value={ {
                ...this.state,
                like: this.like,
                dislike: this.dislike,
                editProp: this.editProp,
                notify: this.notify
            } }>
                {this.props.children }
            </ActionContext.Provider>
        )
    }
}

export default ActionContextProvider