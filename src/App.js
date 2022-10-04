import './App.css';

import { incNumber } from "./actions/action";
import { decNumber } from "./actions/action";
import Hello from './hello';
import { useSelector, useDispatch } from "react-redux";


function App() {

  const changeTheNumber = useSelector(state => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">


        <div className="main-container">
          <div className="container">

            <h1>Increment/Decrement counter</h1>
            <h4>using React and Redux</h4>

            <div className="quantity">
              <a className="quantity__minus" onClick={() => dispatch(decNumber(2))} title="Decrement"><span>-</span></a>
              <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
              <a className="quantity__plus" onClick={() => dispatch(incNumber(2))} title="Increment"><span>+</span></a>
            </div>
            </div>
            <div className="container">

              <Hello />
            </div>
        </div>

      </div>
    </>
  );
}

export default App;
