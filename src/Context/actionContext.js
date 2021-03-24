import { Component, createContext } from 'react'
export const ActionContext = createContext();


class ActionContextProvider extends Component {
    state = {
        liked: [],
        edit: false,
        delete:false,
        deleteImg:false,
    }
    like = (id) => {
        this.setState({ liked: [...this.state.liked, id] });
    }
    dislike = (id) => {
        let arr = [...this.state.liked]
        let index = arr.indexOf(id);
        if (index !== -1) {
            arr.splice(index, 1);
            this.setState({ liked: arr })
        }
    }

    editProp =(value)=>{
        this.setState({ edit:value })
    }
    deleteProp=(value)=>{
        this.setState({ delete:value })
    }
    deleteImage=(value)=>{
        this.setState({ deleteImg:value })
    }

    render() {
        return (
            <ActionContext.Provider value={ { ...this.state, 
                    like: this.like, 
                    dislike: this.dislike, 
                    editProp:this.editProp,
                    deleteProp:this.deleteProp, 
                    deleteImage:this.deleteImage} }>
                {this.props.children }
            </ActionContext.Provider>
        )
    }


}

export default ActionContextProvider