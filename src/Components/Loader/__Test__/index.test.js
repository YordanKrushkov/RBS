import {render} from '@testing-library/react';
import Loader from '../index';


test("Loader should rendering correctly", ()=>{

    const {getByTestId}=render(<Loader/>)
    const loader=getByTestId('loader');
    expect (loader).toBeTruthy()
})