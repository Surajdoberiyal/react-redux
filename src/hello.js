import React from 'react'
import './App.css';

import {multiplyby2} from "./actions/action";
import { useSelector, useDispatch } from "react-redux";

const Hello = () => {

    const multiply = useSelector(state => state.multiply);
  
    const dispatch = useDispatch();


  return (
    <>
    <div className="container">

        <h1>multiply By 2</h1>

        <div className="quantity multiplyby2Container ">
            <input name="quantity" type="text" className="quantity__input multiplyby2Input" value={multiply} />
            <button className='multiplyby2' onClick={() => dispatch(multiplyby2(2))}  ><span>multiply by 2 Number</span></button>
        </div>

    </div>
</>
  )
}

export default Hello