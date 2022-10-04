import './App.css';
import Button from './Components/Buttons/Button';
import Screens from './Components/Screens/Screens';
import {useState} from 'react'
import * as math from 'mathjs'

function App() {
  const [input,inputSet] = useState("");
  const [result,resultSet] = useState("");
  // print pressed value on the screen
  const viewText = (val) =>{
    inputSet((input) => [...input,val,""])
  };

  // clear input values
  const Clear = () =>{
    inputSet("");
    resultSet("");
  }

  //perform computations on values
  const Compute = () =>{
    const inputx = input.join("");
    resultSet(math.evaluate(inputx));
  }

  return (
    <div className="App">
       <div className='calc_wrapper'>
        <Screens input = {input} result = {result}/>
          <div className='row'>
          <Button symbol="7" handelClick={viewText}/>
          <Button symbol="8" handelClick={viewText}/>
          <Button symbol="9" handelClick={viewText}/>
          <Button symbol="/" handelClick={viewText} color="#DE9D3F"/>
          </div>
          <div className='row'>
          <Button symbol="4" handelClick={viewText} />
          <Button symbol="5" handelClick={viewText}/>
          <Button symbol="6" handelClick={viewText}/>
          <Button symbol="-" handelClick={viewText} color="#DE9D3F"/>
          </div>
          <div className='row'>
          <Button symbol="1" handelClick={viewText}/>
          <Button symbol="2" handelClick={viewText}/>
          <Button symbol="3" handelClick={viewText}/>
          <Button symbol="+" handelClick={viewText} color="#DE9D3F"/>
          </div>
          <div className='row'>
          <Button symbol="0" handelClick={viewText}/>
          <Button symbol="." handelClick={viewText}/>
          <Button symbol="=" handelClick={Compute}/>
          <Button symbol="*" handelClick={viewText} color="#DE9D3F"/>
          </div>
          <Button symbol="clear" handelClick={Clear} color="#DE9D3F"/>
       </div>
    </div>
  );
}

export default App;
