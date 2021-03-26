import {render} from '@testing-library/react';
import RegisterInput from '../index';


test("Register should rendering correctly", ()=>{
    const error={
        input:"type"
    }
    const {getByTestId}=render(<RegisterInput error={error.input}/>)
    const register=getByTestId('register');
    expect (register).toBeTruthy()
})
test("Register should rendering correctly", ()=>{
    const error={
        input:""
    }
    const {getByTestId}=render(<RegisterInput error={error.input}/>)
    const register=getByTestId('register');
    expect (register).toBeTruthy()
})