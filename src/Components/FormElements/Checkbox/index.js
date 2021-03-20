import Checkbox from './checkbox'


const CheckboxContainer = ({detailHendler,initialState}) => {
    return ( 
        <section className="checkboxContainer">
        <Checkbox>{{name:"Furnished", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Balcony", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Easy transport", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Garden", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Swiming Pool", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Parking", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Garage", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Pets Wellcome", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
        <Checkbox>{{name:"Smocking allow", func:(e)=>{detailHendler(e,initialState)}}}</Checkbox>
         </section>
     );
}
 
export default CheckboxContainer;