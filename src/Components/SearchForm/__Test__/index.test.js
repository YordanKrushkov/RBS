import {render} from '@testing-library/react';
import Search from '../index';


test("Search form should rendering correctly", ()=>{
    const error={
        input:"type"
    }
    const {getByTestId}=render(<Search/>)
    const searchForm=getByTestId('searchForm');
    expect (searchForm).toBeTruthy()
})
// test("Register should rendering correctly", ()=>{
//     const error={
//         input:""
//     }
//     const {getByTestId}=render(<RegisterInput error={error.input}/>)
//     const register=getByTestId('register');
//     expect (register).toBeTruthy()
// })