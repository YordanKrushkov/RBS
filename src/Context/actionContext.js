import {Component,createContext} from 'react'
export const ActionContext=createContext();


class ActionContextProvider extends Component{
    state={
       liked:[]
    }
    like =(id)=>{
        // let items=[];
        // items.push(id);

        this.setState({liked:[...this.state.liked, id]});
    }
    dislike=(id)=>{
    let arr=[...this.state.liked] 
    let index=arr.indexOf(id);
    if(index!==-1){
        arr.splice(index,1);
        this.setState({liked:arr})
    }
    }


    render(){
        return(
        <ActionContext.Provider value={ { ...this.state, like: this.like, dislike: this.dislike } }>
        {this.props.children }
         </ActionContext.Provider>
        )
    }


}

export default ActionContextProvider