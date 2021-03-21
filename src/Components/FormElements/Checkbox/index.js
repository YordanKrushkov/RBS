import Checkbox from './checkbox'
import {useEffect} from 'react'

const CheckboxContainer = ({detailHendler,initialState,setArr,arr,className}) => {
    return ( 
        <section className={className}>
        <Checkbox>{{name:"Furnished",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Balcony", value:{initialState},func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Easy transport",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Garden",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Swiming Pool",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Parking",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Garage",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Pets Wellcome",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
        <Checkbox>{{name:"Smocking allow",value:{initialState}, func:(e)=>{detailHendler(e,setArr,arr)}}}</Checkbox>
         </section>
     );
}
 
export default CheckboxContainer;