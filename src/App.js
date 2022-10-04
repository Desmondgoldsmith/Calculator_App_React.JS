import './App.css';
import Button from './Components/Buttons/Button';
import Screens from './Components/Screens/Screens';
import {useState} from 'react'

function App() {
  const [input,inputSet] = useState("0");
  const [result,resultSet] = useState("0.000");
  return (
    <div className="App">
       <div className='calc_wrapper'>
        <Screens input = {input} result = {result}/>
          <div className='row'>
          <Button symbol="7" />
          <Button symbol="8"/>
          <Button symbol="9"/>
          <Button symbol="/" color="#DE9D3F"/>
          </div>
          <div className='row'>
          <Button symbol="4" />
          <Button symbol="5"/>
          <Button symbol="6"/>
          <Button symbol="-" color="#DE9D3F"/>
          </div>
          <div className='row'>
          <Button symbol="1"/>
          <Button symbol="2"/>
          <Button symbol="3"/>
          <Button symbol="+" color="#DE9D3F"/>
          </div>
          <div className='row'>
          <Button symbol="0"/>
          <Button symbol="."/>
          <Button symbol="="/>
          <Button symbol="*" color="#DE9D3F"/>
          </div>
          <Button symbol="clear" color="#DE9D3F"/>
       </div>
    </div>
  );
}

export default App;
