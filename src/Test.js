import React, { useState } from 'react';
const Test = (props) => {

const [numOne, setNumOne] = useState(0)
const [numTwo, setNumTwo] = useState(0)
const [value, setValue] = useState(0)

const sum = ( ) =>{ 
  setValue(num => parseInt(numOne) + parseInt(numTwo))
}
const sub = () =>{
  setValue(num => parseInt(numOne)-parseInt(numTwo))
}
const multi = () =>{
  setValue(num => parseInt(numOne) * parseInt(numTwo))
}
const divi = () =>{
  setValue(num => parseInt(numOne)/ parseInt(numTwo))
}

return (
  <div className='App'>
    <p>
      Enter Number One : 
      <input onChange = {(e) => {setNumOne(e.target.value)}} />
    </p>
    <p>
      Enter Number Two :
      <input onChange = {(f) => {setNumTwo(f.target.value)}} />
    </p>
    <button onClick={() => { sum ()}}  disabled={numOne && numTwo ?  false:true}>+</button>
    <button onClick={() => { sub ()}} disabled={numOne && numTwo ?  false:true}>-</button>
    <button onClick={() => { multi ()}} disabled={numOne && numTwo ?  false:true}>*</button>
    <button onClick={() => { divi ()}} disabled={numOne && numTwo ?  false:true}>/</button>
    <p>= {value}</p>
  </div>
)};

export default Test;