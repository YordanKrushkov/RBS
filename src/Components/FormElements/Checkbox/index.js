import Checkbox from './checkbox'
import {useEffect} from 'react'

const CheckboxContainer = ({detailHendler,initialState,className}) => {
    return ( 
        <section className={className}>
        <Checkbox>{{name:"Furnished",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Balcony", value:{initialState},func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Easy transport",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Garden",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Swiming Pool",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Parking",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Garage",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Pets Wellcome",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Smocking allow",value:{initialState}, func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
         </section>
     );
}
 
export default CheckboxContainer;